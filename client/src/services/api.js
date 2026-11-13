import axios from 'axios';

// Resolve API base URL with fallback to standard backend port
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

/**
 * Pre-configured Axios instance for ReUseHub API calls
 */
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Request interceptor for logging or future auth headers
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for consistent error extraction
api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Service to check system health (Backend and MongoDB)
 * @returns {Promise<Object>} Formatted health status response
 */
export const checkHealth = async () => {
  try {
    const response = await api.get('/health');
    return {
      success: true,
      data: response.data,
      isBackendConnected: true,
      isDatabaseConnected: Boolean(response.data?.database?.connected),
      databaseStatus: response.data?.database?.status || 'disconnected',
      serverStatus: response.data?.server || 'running',
      message: response.data?.message || 'Backend operational',
    };
  } catch (error) {
    // If server responded with non-2xx status (e.g., 503 degraded)
    if (error.response && error.response.data) {
      return {
        success: false,
        data: error.response.data,
        isBackendConnected: true, // Server responded
        isDatabaseConnected: Boolean(error.response.data?.database?.connected),
        databaseStatus: error.response.data?.database?.status || 'disconnected',
        serverStatus: error.response.data?.server || 'running',
        message: error.response.data?.message || 'Server responded with warnings',
      };
    }

    // Network error or server completely down
    return {
      success: false,
      data: null,
      isBackendConnected: false,
      isDatabaseConnected: false,
      databaseStatus: 'disconnected',
      serverStatus: 'unavailable',
      message: error.code === 'ECONNABORTED'
        ? 'Connection timed out. Backend is not reachable.'
        : 'Backend server is unavailable or offline.',
      error: error.message,
    };
  }
};

export default api;
