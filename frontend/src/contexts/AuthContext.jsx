import { createContext, useContext, useEffect, useState } from 'react';
import api from '../api/client';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null); // Keep session for compatibility if needed, or just map token
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const { data } = await api.get('/auth/profile');
          setUser({ ...data, id: data.id || data._id }); // Ensure ID consistency
          setSession({ access_token: token, user: data });
        } catch (error) {
          console.error("Auth check failed:", error);
          localStorage.removeItem('token');
          setUser(null);
          setSession(null);
        }
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  const signUp = async (email, password, displayName = '', phone = '') => {
    try {
      const { data } = await api.post('/auth/signup', {
        email,
        password,
        username: displayName,
        phone
      });
      localStorage.setItem('token', data.token);
      setUser(data);
      setSession({ access_token: data.token, user: data });
      return { data, error: null };
    } catch (error) {
      return {
        data: null,
        error: error.response?.data?.message || error.message
      };
    }
  };

  const signIn = async (email, password) => {
    try {
      const { data } = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', data.token);
      setUser(data);
      setSession({ access_token: data.token, user: data });
      return { data, error: null };
    } catch (error) {
      return {
        data: null,
        error: error.response?.data?.message || error.message
      };
    }
  };

  const signOut = async () => {
    localStorage.removeItem('token');
    setUser(null);
    setSession(null);
  };

  const updateProfile = async (updates) => {
    try {
      const { data } = await api.put('/auth/profile', updates);
      setUser(data);
      return { data, error: null };
    } catch (error) {
      return { error: error.response?.data?.message || 'Update failed' };
    }
  };

  const refreshProfile = (userData) => {
    setUser(prev => ({ ...prev, ...userData }));
  };

  return (
    <AuthContext.Provider value={{ user, session, loading, signUp, signIn, signOut, updateProfile, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
