import axios from "axios";

// Relative on purpose: /webapi/* is same-origin and proxied to the real
// backend by the rewrite in next.config.mjs (see NEXT_PUBLIC_PROXY there).
const api = axios.create({
  baseURL: "/webapi/api/",
  timeout: 60000,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const isLoginRoute = error.config?.url?.includes("/auth/login");
    if (error.response?.status === 401 && !isLoginRoute) {
      localStorage.clear();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default api;
