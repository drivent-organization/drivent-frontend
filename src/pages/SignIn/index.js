import { useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import AuthLayout from '../../layouts/Auth';

import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import Link from '../../components/Link';
import { Row, Title, Label } from '../../components/Auth';

import EventInfoContext from '../../contexts/EventInfoContext';
import UserContext from '../../contexts/UserContext';

import useSignIn from '../../hooks/api/useSignIn';
import useFirebaseAuth from '../../hooks/useFirebaseAuth';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loadingSignIn, signIn } = useSignIn();
  const { userGithub, signInWithGithub, loadingGithub } = useFirebaseAuth();

  const { eventInfo } = useContext(EventInfoContext);
  const { setUserData } = useContext(UserContext);

  const navigate = useNavigate();

  async function submitForm(event) {
    event.preventDefault();

    try {
      const userData = await signIn(email, password);
      setUserData(userData);
      toast('Login realizado com sucesso!');
      navigate('/dashboard');
    } catch (err) {
      toast('Não foi possível fazer o login!');
    }
  }

  async function signinGithub() {
    try {
      const userData = await signIn(userGithub.email, userGithub.uid);
      setUserData(userData);
      toast('Login realizado com sucesso!');
      navigate('/dashboard');
    } catch (error) {
      toast('Não foi possível fazer o login!');
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
    if (userGithub) signinGithub();
  }, [userGithub]);

  return (
    <AuthLayout background={eventInfo.backgroundImageUrl}>
      <Row>
        <img src={eventInfo.logoImageUrl} alt="Event Logo" width="60px" />
        <Title>{eventInfo.title}</Title>
      </Row>
      <Row>
        <Label>Entrar</Label>
        <form onSubmit={submitForm}>
          <Input label="E-mail" type="text" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input
            label="Senha"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" color="primary" fullWidth disabled={loadingSignIn || loadingGithub}>
            Entrar
          </Button>
        </form>
        <Button onClick={submitGithub} color="primary" fullWidth disabled={loadingGithub || loadingSignIn}>
          Entrar com Github
        </Button>
      </Row>
      <Row>
        <Link to="/enroll">Não possui login? Inscreva-se</Link>
      </Row>
    </AuthLayout>
  );
}
