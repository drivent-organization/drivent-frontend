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

  async function submitForm(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast('As senhas devem ser iguais!');
    } else {
      try {
        await signUp(email, password);
        toast('Inscrito com sucesso! Por favor, faça login.');
        navigate('/sign-in');
      } catch (error) {
        toast('Não foi possível fazer o cadastro!');
      }
    }
  }

  async function signupWithGithub() {
    try {
      await signUp(userGithub.email, userGithub.uid);
      toast('Inscrito com sucesso! Por favor, faça login.');
      navigate('/sign-in');
    } catch (error) {
      /* eslint-disable-next-line no-console */
      console.log(error);
      toast('Não foi possível fazer o cadastro!');
    }
  }

  async function submitGithub(event) {
    event.preventDefault();

    try {
      await signInWithGithub();
    } catch (error) {
      /* eslint-disable-next-line no-console */
      console.log(error);
    }
  }

  useEffect(() => {
    if (userGithub) signupWithGithub();
  }, [userGithub]);

  return (
    <AuthLayout background={eventInfo.backgroundImageUrl}>
      <Row>
        <img src={eventInfo.logoImageUrl} alt="Event Logo" width="60px" />
        <Title>{eventInfo.title}</Title>
      </Row>
      <Row>
        <Label>Inscrição</Label>
        <form onSubmit={submitForm}>
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
          disabled={loadingGithub || loadingSignUp}
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
