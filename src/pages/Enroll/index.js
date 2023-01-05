import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import AuthLayout from '../../layouts/Auth';

import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import { Row, Title, Label } from '../../components/Auth';
import Link from '../../components/Link';

import EventInfoContext from '../../contexts/EventInfoContext';

import useSignUp from '../../hooks/api/useSignUp';
import useFirebaseAuth from '../../hooks/useFirebaseAuth';

export default function Enroll() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { loadingSignUp, signUp } = useSignUp();
  const { userGithub, signInWithGithub, loadingGithub } = useFirebaseAuth();

  const navigate = useNavigate();

  const { eventInfo } = useContext(EventInfoContext);

  async function submitForm(event, type) {
    if (type === 'form' && password !== confirmPassword) {
      toast('As senhas devem ser iguais!');
      return;
    }

    let body = {};
    if (type === 'form') {
      event.preventDefault();
      body = { email, password, type };
    } else {
      body = { email: userGithub.email, type };
    }

    try {
      await signUp(body);
      toast('Inscrito com sucesso! Por favor, faça login.');
      navigate('/sign-in');
    } catch (error) {
      toast('Não foi possível fazer o cadastro!');
    }
  }

  async function submitGithub(event) {
    event.preventDefault();
    signInWithGithub();
  }

  useEffect(() => {
    submitForm(null, 'github');
  }, [userGithub]);

  return (
    <AuthLayout background={eventInfo.backgroundImageUrl}>
      <Row>
        <img src={eventInfo.logoImageUrl} alt="Event Logo" width="60px" />
        <Title>{eventInfo.title}</Title>
      </Row>
      <Row>
        <Label>Inscrição</Label>
        <form onSubmit={(e) => submitForm(e, 'form')}>
          <Input label="E-mail" type="text" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input
            label="Senha"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            label="Repita sua senha"
            type="password"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button type="submit" color="primary" fullWidth disabled={loadingSignUp || loadingGithub}>
            Inscrever
          </Button>
        </form>
        <Button
          onClick={submitGithub}
          color="primary"
          fullWidth
          disabled={loadingSignUp || loadingGithub}
          enroll="true"
        >
          Inscrever com Github
        </Button>
      </Row>
      <Row>
        <Link to="/sign-in">Já está inscrito? Faça login</Link>
      </Row>
    </AuthLayout>
  );
}
