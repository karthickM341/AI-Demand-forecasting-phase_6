import axios from "axios";

/*
|--------------------------------------------------------------------------
| Environment Configuration
|--------------------------------------------------------------------------
*/

const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:8000/api/v1";

/*
|--------------------------------------------------------------------------
| Axios Instance
|--------------------------------------------------------------------------
*/

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,

  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

/*
|--------------------------------------------------------------------------
| Request Interceptor
|--------------------------------------------------------------------------
*/

api.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem(
        "access_token"
      );

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

/*
|--------------------------------------------------------------------------
| Response Interceptor
|--------------------------------------------------------------------------
*/

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest =
      error.config;

    /*
    |--------------------------------------------------------------------------
    | Unauthorized
    |--------------------------------------------------------------------------
    */

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken =
          localStorage.getItem(
            "refresh_token"
          );

        if (!refreshToken) {
          throw new Error(
            "Refresh token missing"
          );
        }

        const response =
          await axios.post(
            `${API_BASE_URL}/auth/refresh`,
            {
              refresh_token:
                refreshToken,
            }
          );

        const {
          access_token,
        } = response.data;

        localStorage.setItem(
          "access_token",
          access_token
        );

        originalRequest.headers.Authorization =
          `Bearer ${access_token}`;

        return api(originalRequest);

      } catch (refreshError) {

        localStorage.removeItem(
          "access_token"
        );

        localStorage.removeItem(
          "refresh_token"
        );

        localStorage.removeItem(
          "user"
        );

        window.location.href =
          "/login";

        return Promise.reject(
          refreshError
        );
      }
    }

    /*
    |--------------------------------------------------------------------------
    | Global Error Handling
    |--------------------------------------------------------------------------
    */

    const message =
      error.response?.data?.detail ||
      error.response?.data?.message ||
      error.message ||
      "Unexpected error occurred";

    console.error(
      "API Error:",
      message
    );

    return Promise.reject({
      status:
        error.response?.status,
      message,
      data:
        error.response?.data,
    });
  }
);

/*
|--------------------------------------------------------------------------
| Helper Methods
|--------------------------------------------------------------------------
*/

export const apiClient = {
  get: (
    url,
    config = {}
  ) =>
    api.get(
      url,
      config
    ),

  post: (
    url,
    data = {},
    config = {}
  ) =>
    api.post(
      url,
      data,
      config
    ),

  put: (
    url,
    data = {},
    config = {}
  ) =>
    api.put(
      url,
      data,
      config
    ),

  patch: (
    url,
    data = {},
    config = {}
  ) =>
    api.patch(
      url,
      data,
      config
    ),

  delete: (
    url,
    config = {}
  ) =>
    api.delete(
      url,
      config
    ),
};

/*
|--------------------------------------------------------------------------
| File Upload Helper
|--------------------------------------------------------------------------
*/

export const uploadFile = (
  url,
  file,
  onUploadProgress
) => {
  const formData =
    new FormData();

  formData.append(
    "file",
    file
  );

  return api.post(
    url,
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },

      onUploadProgress,
    }
  );
};

/*
|--------------------------------------------------------------------------
| File Download Helper
|--------------------------------------------------------------------------
*/

export const downloadFile = (
  url
) =>
  api.get(url, {
    responseType: "blob",
  });

export default api;