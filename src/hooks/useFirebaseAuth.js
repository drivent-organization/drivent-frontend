import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../firebase';

export default function useFirebaseAuth() {
  const [userGithub, setUserGithub] = useState(null);
  const [loadingGithub, setLoadingGithub] = useState(false);
  const [errorGithub, setErrorGithub] = useState('');

  const signInWithGithub = async() => {
    setLoadingGithub(true);

    try {
      const provider = new GithubAuthProvider();

      const res = await signInWithPopup(auth, provider);
      if (!res) {
        throw new Error('Não foi possível concluir a operação');
      }

      const userData = {
        email: res.user.email,
        uid: res.user.uid,
      };

      setUserGithub(userData);
      setLoadingGithub(false);
    } catch (error) {
      setErrorGithub(error);
      setLoadingGithub(false);
    }
  };

  return {
    userGithub,
    loadingGithub,
    errorGithub,
    signInWithGithub,
  };
}
