import React from 'react';
import './App.css';
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import {useAuthState} from 'react-firebase-hooks/auth'
import {userCollectionData} from 'react-firebase-hooks/firestore'
import {ChatRoom} from "./components/ChatRoom";
import {SignIn, signOut} from "./components/SignIn";
import {SignOut} from "./components/SignOut";

window.firebase = firebase;

firebase.initializeApp({
  apiKey: "AIzaSyDdVnvj1i5VgUlL3hptGg1G4arMHuTym_E",
  authDomain: "ef-firebase-chat.firebaseapp.com",
  databaseURL: "https://ef-firebase-chat.firebaseio.com",
  projectId: "ef-firebase-chat",
  storageBucket: "ef-firebase-chat.appspot.com",
  messagingSenderId: "745352694641",
  appId: "1:745352694641:web:d679749f42efb1013dc4d0"
})

const auth = window.auth = firebase.auth()
const firestore = window.firestore = firebase.firestore()


function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        {user && <SignOut />}
      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
