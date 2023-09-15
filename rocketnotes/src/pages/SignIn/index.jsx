import { FiLock, FiMail } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Container, Form } from './style';

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para gerenciar seus links.</p>
        <h2>Faça seu login</h2>
        <Input placeholder="e-mail" type="email" icon={FiMail} />
        <Input
          placeholder="e-mail"
          type="password"
          invertReveal
          icon={FiLock}
        />
        <Button label="Login" />
        <span className="button-text">
          <ButtonText title="Criar conta" isActive />
        </span>
      </Form>
    </Container>
  );
}
