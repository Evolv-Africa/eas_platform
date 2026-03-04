import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import { getAccessToken, getRefreshToken } from "@/utils/getToken";
import { getCookie, setCookie, clearCookie } from "@/services/cookie";

const base_url = process.env.NEXT_PUBLIC_BASE_URL;
if (!base_url) {
  throw new Error("NEXT_PUBLIC_BASE_URL environment variable is not set");
}

const apiInstance = axios.create({
  baseURL: `${base_url}/api/v1`,
});

// Helper: Check network connectivity
const checkNetworkConnectivity = () => {
  if (!globalThis.navigator.onLine) {
    throw new Error("No internet connection");
  }
};

export const instanceWithoutAuth = axios.create({
  baseURL: `${base_url}/api/v1`,
});

// Request wrapper function with error handling
export const apiRequest = async (axiosConfig: AxiosRequestConfig) => {
  try {
    checkNetworkConnectivity();
    const response = await apiInstance(axiosConfig);
    return response;
  } catch (err) {
    checkNetworkConnectivity();
    throw err;
  }
};

apiInstance.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Refresh token state
let isRefreshing = false;
let failedQueue: Array<{
  resolve: (token: string) => void;
  reject: (err: unknown) => void;
}> = [];

const processQueue = (error: unknown, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token!);
    }
  });
  failedQueue = [];
};

const redirectToLogin = () => {
  clearCookie("loginData");
  console.error("Session expired. Please log in again.");
  globalThis.location.href = "/auth/login";
};

apiInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && !originalRequest._retry) {
      const refreshToken = getRefreshToken();

      if (!refreshToken) {
        redirectToLogin();
        throw Promise.reject(error);
      }

      if (isRefreshing) {
        // Queue requests that come in while a refresh is already in progress
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers = originalRequest.headers || {};
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return apiInstance(originalRequest);
          })
          .catch((err) => {
            throw Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const { data } = await instanceWithoutAuth.post<{
          data: { tokens: { accessToken: string; refreshToken: string } };
        }>("/auth/refresh-token", { refreshToken });

        const newTokens = data.data.tokens;

        // Persist new tokens into the loginData cookie
        const loginData = getCookie("loginData");
        if (loginData) {
          const parsed = JSON.parse(loginData);
          parsed.tokens = newTokens;
          setCookie("loginData", JSON.stringify(parsed));
        }

        processQueue(null, newTokens.accessToken);

        originalRequest.headers = originalRequest.headers || {};
        originalRequest.headers.Authorization = `Bearer ${newTokens.accessToken}`;
        return apiInstance(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        redirectToLogin();
        throw Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    throw error;
  },
);

export default apiInstance;
