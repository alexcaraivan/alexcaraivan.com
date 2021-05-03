import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'work-89d39.firebaseapp.com',
  projectId: 'work-89d39',
  storageBucket: 'work-89d39.appspot.com',
  messagingSenderId: '276727049858',
  appId: '1:276727049858:web:2e848cfb8ae43281118e9b',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
