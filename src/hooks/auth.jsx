import { createContext, useContext, useState, useEffect } from 'react';

import { api } from '../services/api';

const LOCAL_KEY_USER = '@rocketnotes:user';
const LOCAL_KEY_TOKEN = '@rocketnotes:token';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/session', { email, password });
      const { user, token } = response.data;

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user, token });

      localStorage.setItem(LOCAL_KEY_USER, JSON.stringify(user));
      localStorage.setItem(LOCAL_KEY_TOKEN, token);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível fazer login.');
      }
    }
  }

  function logout() {
    localStorage.removeItem(LOCAL_KEY_USER);
    localStorage.removeItem(LOCAL_KEY_TOKEN);

    setData({});
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append('avatar', avatarFile);

        const response = await api.patch('/users/avatar', fileUploadForm);
        user.avatar = response.data.avatar;
      }

      const response = await api.put('/users', user);
      localStorage.setItem(LOCAL_KEY_USER, JSON.stringify(response.data.user));
      setData({ user: response.data.user, token: (prevState) => prevState.token });
      return alert('Dados do perfil atualizados com sucesso.');
    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message);
      } else {
        return alert('Não foi possível atualizar os dados do usuário. Tente mais tarde.');
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem(LOCAL_KEY_USER);
    const token = localStorage.getItem(LOCAL_KEY_TOKEN);

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, logout, updateProfile, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
