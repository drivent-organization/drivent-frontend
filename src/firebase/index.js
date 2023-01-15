import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAlfjBE7kJFqCewzD-I33Ud0bZeozUJdq8',
  authDomain: 'drivent-back.firebaseapp.com',
  projectId: 'drivent-back',
  storageBucket: 'drivent-back.appspot.com',
  messagingSenderId: '66170886060',
  appId: '1:66170886060:web:84cd7e636b6a9bf1e18c09',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
