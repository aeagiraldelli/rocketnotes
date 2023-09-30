import { createContext, useContext, useState, useEffect } from 'react';

import { api } from '../services/api';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/session', { email, password });
      const { user, token } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ user, token });

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
      localStorage.setItem("@rocketnotes:token", token);

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível fazer login.');
      }
    }
  }

  function logout() {
    localStorage.removeItem("@rocketnotes:user");
    localStorage.removeItem("@rocketnotes:token");

    setData({});
  }

  useEffect(() => {
    const user = localStorage.getItem("@rocketnotes:user");
    const token = localStorage.getItem("@rocketnotes:token");

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, logout, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
