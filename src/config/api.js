import axios from "axios";

import { BASE_URL } from "./Endpoints";

let store;

export const injectStore = (_store) => {
  store = _store;
};

export const dApis = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "content-type": "application/json",
  },
  timeout: 30000,
});

dApis.interceptors.request.use(function (config) {
  if (navigator.onLine) {
    return config;
  } else {
    // window.location.href = "/404";
    // // // console.log("There is no internet connection");
    // // // alert("There is no internet connection");
    // toast("No internet connection", {
    //   toastId: "network error",
    //   //theme: "colored",
    // });
  }
});

dApis.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    if (err.response.status === 401) {
      window.location.reload();
    } else {
      throw err.response.data;
    }
  }
);

const defaults = {
  headers: () => ({
    "Content-Type": "application/json",
  }),
  error: {
    code: "INTERNAL_ERROR",
    message:
      "Something went wrong. Please check your internet connection or contact our support.",
    status: 503,
    data: {},
  },
};

export default {
  get: (...args) => dApis.get(...args),
  post: (...args) => dApis.post(...args),
  put: (...args) => dApis.put(...args),
  patch: (...args) => dApis.patch(...args),
  delete: (...args) => dApis.delete(...args),
};
