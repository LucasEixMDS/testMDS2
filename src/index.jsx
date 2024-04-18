import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './style/index.scss';
import { initializeApp } from "firebase/app";
import { HelmetProvider } from 'react-helmet-async';

const firebaseConfig = {
  apiKey: "AIzaSyBXAQzp9nfh7TpVr9fiqRFSxQdw8AEyvtE",
  authDomain: "mdsformations-cc3a8.firebaseapp.com",
  projectId: "mdsformations-cc3a8",
  storageBucket: "mdsformations-cc3a8.appspot.com",
  messagingSenderId: "913736023088",
  appId: "1:913736023088:web:c226445335e972de4001f5",
  measurementId: "G-6JQRLJM75Q"
};

// Initialiser Firebase
initializeApp(firebaseConfig);

const root = document.getElementById('root');
const reactRoot = createRoot(root);
reactRoot.render(
  <HelmetProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </HelmetProvider>
);