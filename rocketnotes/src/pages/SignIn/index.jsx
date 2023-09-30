import { useState } from 'react';
import { FiLock, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { Container, Form, Background } from './style';

export function SignIn() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para gerenciar seus links.</p>
        <h2>Faça seu login</h2>
        <Input placeholder="e-mail" type="email" icon={FiMail} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="senha" type="password" invertReveal icon={FiLock} onChange={(e) => setPassword(e.target.value)} />
        <Button label="Login" onClick={handleSignIn} />
        <span className="button-text">
          <Link to="/signup">
            <ButtonText title="Criar conta" isActive />
          </Link>
        </span>
      </Form>
      <Background />
    </Container>
  );
}
