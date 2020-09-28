import React, {useEffect, useRef, useState} from "react";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {ChatMessage} from "./ChatMessage";

export const ChatRoom = () => {

  const messagesRef = window.firestore.collection('messages')
  const query = messagesRef.orderBy('createdAt').limit(25)
  const [messages] = useCollectionData(query, {idField: 'id'})
  const [value, setValue] = useState('')
  const dummy = useRef()

  const scrollToBottom = () => {
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  const changeHandler = ({target}) => {
    setValue(target.value)
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    if (!value) return;
    const {uid} = window.auth.currentUser;
    await messagesRef.add({
      text: value,
      createdAt: window.firebase.firestore.FieldValue.serverTimestamp(),
      uid,
    })
    setValue('');
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div className={'chat-room'}>
      <main>
        <div className={'messages'}>
          { messages && messages.map(msg => <ChatMessage key={msg.id} uid={msg.uid} text={msg.text}/>) }
        </div>
        <span ref={dummy} />
      </main>

      <form onSubmit={submitHandler} action="">
        <input type="text" value={value} onChange={changeHandler}/>
        <button type={"submit"}>send message</button>
      </form>
    </div>
  )
}
