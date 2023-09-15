import { FiLock, FiMail, FiUser } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { Container, Form, Background } from './style';

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para gerenciar seus links.</p>
        <h2>Crie sua conta</h2>
        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="e-mail" type="email" icon={FiMail} />
        <Input placeholder="senha" type="password" invertReveal icon={FiLock} />
        <Button label="Cadastrar" />
        <span className="button-text">
          <ButtonText title="Voltar para tela de login" isActive />
        </span>
      </Form>
    </Container>
  );
}
