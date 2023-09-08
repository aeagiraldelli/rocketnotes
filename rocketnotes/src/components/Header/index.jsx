import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './style';

export function Header() {
  return (
    <Container>
      <Profile>
        <img
          src="https://github.com/aeagiraldelli.png"
          alt="Foto do usuário."
        />
        <div>
          <span>Olá,</span>
          <strong>Ademir Giraldelli</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
