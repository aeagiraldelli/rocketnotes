import { useNavigate } from 'react-router-dom';
import { RiShutDownLine } from 'react-icons/ri';

import { useAuth } from '../../hooks/auth';

import { Container, Profile, Logout } from './style';

export function Header() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate('/');
  }

  return (
    <Container>
      <Profile to="/profile">
        <img
          src="https://github.com/aeagiraldelli.png"
          alt="Foto do usuário."
        />
        <div>
          <span>Olá,</span>
          <strong>Ademir Giraldelli</strong>
        </div>
      </Profile>

      <Logout onClick={handleClick}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
