import axios from "axios";

const request = axios.create({
  baseURL: "/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

const source = axios.CancelToken.source();

const token = localStorage.getItem("token") ?? "xl";

request.interceptors.request.use(
  (config) => {
    config.headers.setAuthorization(`Bearer ${token}`);
    config.cancelToken = source.token;
    config.timeout = 5000;
    console.log(config);

    return config;
  },
  (err) => Promise.reject(err)
);

request.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (err) => {
    if (axios.isCancel(err)) {
      console.log("手动取消", err);
    } else {
      console.log("系统错误❌", err);
    }
    return Promise.reject(err);
  }
);

export const cancel = () => source.cancel("手动取消😁");

export default request;
