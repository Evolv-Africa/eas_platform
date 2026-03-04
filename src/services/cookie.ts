export const getCookie = (name: string) => {
  if (typeof document === "undefined") return null;
  const cookies = document.cookie.split(";");

  for (const element of cookies) {
    const cookie = element.trim();
    // Check if this cookie has the name we're looking for
    if (cookie.startsWith(name + "=")) {
      // Return the decoded value of the cookie
      return decodeURIComponent(cookie.substring(name.length + 1));
    }
  }
  // Return null if the cookie was not found
  return null;
};

export const setCookie = (
  name: string,
  value: string,
  days?: number, // Optional expiration in days
  path: string = "/", // Optional path, default is "/"
) => {
  let expires = "";

  // If days is provided, calculate the expiration date
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Convert days to milliseconds
    expires = "; expires=" + date.toUTCString();
  }

  // Set the cookie with the name, value, expiration, and path
  document.cookie =
    name + "=" + encodeURIComponent(value) + expires + "; path=" + path;
};

export const clearCookie = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
};
