import { useState } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { api } from '../../services/api';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Avatar } from './style';

export function Profile() {
  const { user, updateProfile } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: newPassword,
      oldPassword: oldPassword,
    };

    updateProfile({ user, avatarFile });
  }

  function handleAvatarChange(evt) {
    const file = evt.target.files[0];
    setAvatarFile(file);

    const imgPreview = URL.createObjectURL(file);
    setAvatar(imgPreview);
  }

  return (
    <Container>
      <header>
        <Link onClick={() => navigate(-1)}>
          <FiArrowLeft className="back-icon" />
        </Link>
      </header>
      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera className="choose-icon" />
            <input id="avatar" type="file" onChange={handleAvatarChange} />
          </label>
        </Avatar>
        <div className="form-group">
          <div>
            <Input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              icon={FiUser}
            />
            <Input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={FiMail}
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Senha antiga"
              onChange={(e) => setOldPassword(e.target.value)}
              icon={FiLock}
              invertReveal
            />
            <Input
              type="password"
              placeholder="Nova senha"
              onChange={(e) => setNewPassword(e.target.value)}
              icon={FiLock}
              invertReveal
            />
          </div>
          <Button label="Alterar" onClick={handleUpdate} />
        </div>
      </Form>
    </Container>
  );
}
