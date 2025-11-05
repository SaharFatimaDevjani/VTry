import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI, usersAPI } from '@/services/api';
import { getUserIdFromToken } from '@/utils/jwt';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  // Fetch user data by ID
  const fetchUserById = async (userId) => {
    try {
      const response = await usersAPI.getById(userId);
      return response.data || response;
    } catch (error) {
      console.error('Error fetching user:', error);
      return null;
    }
  };

  useEffect(() => {
    const initializeAuth = async () => {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        setToken(storedToken);
        // Try to get user ID from token and fetch user data
        const userId = getUserIdFromToken(storedToken);
        if (userId) {
          const userData = await fetchUserById(userId);
          if (userData) {
            setUser(userData);
          }
        }
      }
      setLoading(false);
    };
    
    initializeAuth();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await authAPI.login(email, password);
      const { token: newToken, user: userData } = response;
      
      if (newToken) {
        localStorage.setItem('token', newToken);
        setToken(newToken);
        setUser(userData || { email });
        return { success: true };
      } else {
        return { 
          success: false, 
          error: 'Login failed. No token received.' 
        };
      }
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'Login failed. Please check your credentials.' 
      };
    }
  };

  const register = async (userData) => {
    try {
      const response = await authAPI.register(userData);
      const { token: newToken, user: newUser } = response;
      
      if (newToken) {
        localStorage.setItem('token', newToken);
        setToken(newToken);
        setUser(newUser);
        return { success: true };
      } else {
        return { 
          success: false, 
          error: 'Registration failed. No token received.' 
        };
      }
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'Registration failed. Please try again.' 
      };
    }
  };

  const refreshUser = async () => {
    const currentToken = localStorage.getItem('token');
    if (currentToken) {
      const userId = getUserIdFromToken(currentToken);
      if (userId) {
        const userData = await fetchUserById(userId);
        if (userData) {
          setUser(userData);
        }
      }
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  const isAuthenticated = () => {
    return !!token;
  };

  const isAdmin = () => {
    return user?.isAdmin === true;
  };

  const value = {
    user,
    token,
    login,
    register,
    logout,
    refreshUser,
    isAuthenticated,
    isAdmin,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

