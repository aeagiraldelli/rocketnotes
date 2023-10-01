import { useNavigate } from 'react-router-dom';
import { RiShutDownLine } from 'react-icons/ri';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Container, Profile, Logout } from './style';

export function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate('/');
  }

  const avatarUrl = `${api.defaults.baseURL}/files/${user.avatar}`;
  const avatarAddress = user.avatar ? `${avatarUrl}` : avatarPlaceholder;

  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarAddress} alt="Foto do usuário." />
        <div>
          <span>Olá,</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleClick}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
