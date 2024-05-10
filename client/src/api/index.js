import axios from "axios";
import CONSTANT from "../constants";

const httpClient = axios.create({
  baseURL: CONSTANT.HTTP_SERVER_URL,
});

let accessToken = null;

// Add a request interceptor
httpClient.interceptors.request.use(
  function (config) {
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
httpClient.interceptors.response.use(
  function (response) {
    if (response?.data?.data?.tokenPair) {
      const { tokenPair } = response.data.data;
      console.log(tokenPair);

      accessToken = tokenPair.accessToken;

      localStorage.setItem(CONSTANT.REFRESH_TOKEN, tokenPair.refreshToken);
    }

    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, async function (error) {
    const {
      responce: { status },
    } = error;

    const refreshTokenFromLocalStorege = localStorage.getItem("refreshToken");

    if (refreshTokenFromLocalStorege && status === 419) {
      const {
        datd: {
          data: { tokenPair },
        },
      } = await axios.post(`${CONSTANT.HTTP_SERVER_URL}/auth/refresh`, {
        refreshToken: refreshTokenFromLocalStorege,
      });

      accessToken = tokenPair.accessToken;

      localStorage.setItem(CONSTANT.REFRESH_TOKEN, tokenPair.refreshToken);

      error.config.headers["Authorization"] = `Bearer ${accessToken}`;

      return httpClient.request(error.config);
    }

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export const login = (userData) => httpClient.post("/auth/login", userData);

export const registration = (userData) =>
  httpClient.post("/auth/registration", userData);

export const refresh = (refreshToken) =>
  httpClient.post("/auth/refresh", { refreshToken });
