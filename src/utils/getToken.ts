import { getCookie } from "@/services/cookie";

export const getCookieData = () => {
  const cookieData = getCookie("loginData");
  if (!cookieData) return null;
  return JSON.parse(cookieData);
};

export const getAccessToken = () => {
  const loginData = getCookieData();
  if (!loginData) return null;
  const { tokens } = loginData;
  return tokens?.accessToken;
};

export const getRefreshToken = () => {
  const loginData = getCookieData();
  if (!loginData) return null;
  const { tokens } = loginData;
  return tokens?.refreshToken;
};

export const isAuthenticated = () => {
  const loginData = getCookieData();
  if (!loginData) return false;
  const { tokens } = loginData;
  return !!tokens?.accessToken;
};
