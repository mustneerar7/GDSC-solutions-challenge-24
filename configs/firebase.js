// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIOlcZCjP2GMbq5qYO0lAKBiICjfACfcQ",
  authDomain: "barter-app-9c76e.firebaseapp.com",
  projectId: "barter-app-9c76e",
  storageBucket: "barter-app-9c76e.appspot.com",
  messagingSenderId: "479797826172",
  appId: "1:479797826172:web:151cbba486af756b576ff9"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { app, auth };
