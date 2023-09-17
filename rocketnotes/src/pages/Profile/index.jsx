import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, Avatar } from './style';

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft className="back-icon" />
        </a>
      </header>
      <Form>
        <Avatar>
          <img
            src="https://github.com/aeagiraldelli.png"
            alt="Foto do usuário"
          />
          <label htmlFor="avatar">
            <FiCamera className="choose-icon" />
            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <div className="form-group">
          <div>
            <Input type="text" placeholder="Nome" icon={FiUser} />
            <Input type="email" placeholder="E-mail" icon={FiMail} />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Senha antiga"
              icon={FiLock}
              invertReveal
            />
            <Input
              type="password"
              placeholder="Nova senha"
              icon={FiLock}
              invertReveal
            />
          </div>
          <Button label="Alterar" />
        </div>
      </Form>
    </Container>
  );
}
