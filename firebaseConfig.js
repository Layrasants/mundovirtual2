// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCF5twX7DvTlJLolORcxrHB-GTRNwsMms",
    authDomain: "mundovirtual-pmovel.firebaseapp.com",
    projectId: "mundovirtual-pmovel",
    storageBucket: "mundovirtual-pmovel.firebasestorage.app",
    messagingSenderId: "188288940418",
    appId: "1:188288940418:web:daf221ca4da720328c379b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { auth };