import axios from "axios";
axios.defaults.withCredentials = true;

const $host = axios.create({
  baseURL: "localhost:5000/todos",
});

const $authHost = axios.create({
  baseURL: "localhost:5000/todos",
});

$authHost.interceptors.request.use((config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

$authHost.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}api/user/refresh`,
          { withCredentials: true }
        );
        localStorage.setItem("token", response.data.accessToken);
        return $authHost.request(originalRequest);
      } catch (e) {
        console.log("Not authorized");
      }
    }
    throw error;
  }
);

export { $host, $authHost };
