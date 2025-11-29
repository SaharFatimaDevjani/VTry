const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Get token from localStorage
const getToken = () => {
  return localStorage.getItem('token');
};

// API request helper
const apiRequest = async (endpoint, options = {}) => {
  const token = getToken();
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || data.error || 'Request failed');
    }

    return data;
  } catch (error) {
    throw error;
  }
};

// Auth API
export const authAPI = {
  register: async (userData) => {
    return apiRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  login: async (email, password) => {
    return apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },
};

// Products API
export const productsAPI = {
  getAll: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`/products${queryString ? `?${queryString}` : ''}`);
  },

  getById: async (id) => {
    return apiRequest(`/products/${id}`);
  },

  create: async (productData) => {
    return apiRequest('/products', {
      method: 'POST',
      body: JSON.stringify(productData),
    });
  },

  update: async (id, productData) => {
    return apiRequest(`/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(productData),
    });
  },

  delete: async (id) => {
    return apiRequest(`/products/${id}`, {
      method: 'DELETE',
    });
  },

  getCounters: async () => {
    return apiRequest('/products/counters');
  },
};

// Categories API
export const categoriesAPI = {
  getAll: async () => {
    return apiRequest('/categories');
  },

  getById: async (id) => {
    return apiRequest(`/categories/${id}`);
  },

  create: async (categoryData) => {
    return apiRequest('/categories', {
      method: 'POST',
      body: JSON.stringify(categoryData),
    });
  },

  update: async (id, categoryData) => {
    return apiRequest(`/categories/${id}`, {
      method: 'PUT',
      body: JSON.stringify(categoryData),
    });
  },

  delete: async (id) => {
    return apiRequest(`/categories/${id}`, {
      method: 'DELETE',
    });
  },
};

// Bids API
export const bidsAPI = {
  getAll: async () => {
    return apiRequest('/bids');
  },

  getGrouped: async () => {
    return apiRequest('/bids/grouped');
  },

  getByProduct: async (productId) => {
    return apiRequest(`/bids/product/${productId}`);
  },

  getTopBidders: async () => {
    return apiRequest('/bids/top-bidders');
  },

  create: async (bidData) => {
    return apiRequest('/bids', {
      method: 'POST',
      body: JSON.stringify(bidData),
    });
  },

  addToWishlist: async (wishlistData) => {
    return apiRequest('/bids/wishlist', {
      method: 'POST',
      body: JSON.stringify(wishlistData),
    });
  },
};

// Users API
export const usersAPI = {
  getAll: async () => {
    return apiRequest('/users');
  },

  getById: async (id) => {
    return apiRequest(`/users/${id}`);
  },

  update: async (id, userData) => {
    return apiRequest(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  },

  delete: async (id) => {
    return apiRequest(`/users/${id}`, {
      method: 'DELETE',
    });
  },
};

export default {
  auth: authAPI,
  products: productsAPI,
  categories: categoriesAPI,
  bids: bidsAPI,
  users: usersAPI,
};

