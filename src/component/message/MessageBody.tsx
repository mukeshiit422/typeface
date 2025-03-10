
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import MessageList from './MessageList'
import { Message } from './Types'
import { UserType } from '../user/UserType'

type MessageBodyType = {
  setUser : (users : UserType[])=> void;
  user : UserType,
  users: UserType[]
}

export default function MessageBody({setUser, user, users } : MessageBodyType) {
  const [message, setMessage] = useState<Message[]>(user.message);
  const [deletedMessageId, setDeletedMessageId] = useState(0);
  useEffect(()=>{
    setMessage(user.message)
  },[user.id])

  useEffect(()=>{
    setMessage( pre => pre.filter((mess)=>mess.id !== deletedMessageId) || [])
  },[deletedMessageId])

  useEffect(() => {
    if (user === undefined) return;
    if(message.length === 0){
      setDeletedMessageId(0);
    }
    setUser((prevUsers : any) => prevUsers.map((usr) => usr.id === user.id
          ? {
              ...usr,
              lastMessage: message.length ? message[message.length - 1]?.message : "",
              lastMessageTime: message.length ? message[message.length - 1]?.createAt : "",
              message: message,
            }
          : usr
      )
    );
  }, [message]);

  return (
    <div className='flex flex-col w-full overflow-hidden'>
       <Header user={user}/>
       <MessageList messages ={message} setDeletedMessageId={setDeletedMessageId}/>
       <Footer message ={message}setMessage={setMessage} />
    </div>
  )
}
