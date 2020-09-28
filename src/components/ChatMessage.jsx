import React from "react";

export const ChatMessage = ({text, uid}) => {

  const messageClass = uid === window.auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={`message ${messageClass}`}>
    <p className={'chat-message'}>{text}</p>

    </div>
  )
}
