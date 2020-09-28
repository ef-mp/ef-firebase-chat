import React from "react";

export const SignOut = () => {
  return (
    <button className={'sign-out'} onClick={() => window.auth.signOut()}>Sign Out</button>
  )
}
