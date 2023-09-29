import { useState } from 'react';
import { FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { api } from '../../services/api';

import { Container, Form, Background } from './style';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      alert('Preencha todos os campos.');
      return;
    }

    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Cadastro realizado com sucesso.');
        navigate('/');
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert('Não foi possível realizar o cadastro. Tente novamente mais tarde.');
        }
      });
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para gerenciar seus links.</p>
        <h2>Crie sua conta</h2>
        <Input placeholder="Nome" type="text" icon={FiUser} onChange={(e) => setName(e.target.value)} />
        <Input placeholder="e-mail" type="email" icon={FiMail} onChange={(e) => setEmail(e.target.value)} />
        <Input
          placeholder="senha"
          type="password"
          invertReveal
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button label="Cadastrar" onClick={handleSignUp} />
        <span className="button-text">
          <Link to="/">
            <ButtonText title="Voltar para tela de login" isActive />
          </Link>
        </span>
      </Form>
    </Container>
  );
}
