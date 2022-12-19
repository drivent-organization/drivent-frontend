import { useContext } from 'react';

import UserContext from '../contexts/UserContext';

export default function useUserId() {
  const { userData: user } = useContext(UserContext);
  console.log('🚀 passa aqui por favor meu jesus ~ file: useUserId.js:9 ~ useUserId ~ user.user', user.user);
  return { userId: user.user.id };
}
