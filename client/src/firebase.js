// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDKI_u7Jd_40N_7C0o4tG2xGdsLI6xMwDM",
  authDomain: "sajeewa-2e69e.firebaseapp.com",
  databaseURL: "https://sajeewa-2e69e-default-rtdb.firebaseio.com",
  projectId: "sajeewa-2e69e",
  storageBucket: "sajeewa-2e69e.appspot.com",
  messagingSenderId: "235064427826",
  appId: "1:235064427826:web:1e7628f49eb2fc6327032b"
};

const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database };
