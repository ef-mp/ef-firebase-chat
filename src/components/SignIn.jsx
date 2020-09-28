import React from "react";
import firebase from 'firebase/app'


export const SignIn = () => {

  const clickHandler = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    window.auth.signInWithPopup(provider);
  }

  return (
    <button className={'sign-in'} onClick={clickHandler}>SignIn</button>
  )
}



