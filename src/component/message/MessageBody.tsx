
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import MessageList from './MessageList'
import { Message } from './Types'
import { UserType } from '../user/UserType'
import { Dummy_User } from '../util/constant'

type MessageBodyType = {
  setUser : (users : UserType[])=> void;
  user : UserType,
  users: UserType[]
}

export default function MessageBody({setUser, user, users } : MessageBodyType) {
  const [message, setMessage] = useState<Message[]>([]);

  useEffect(()=>{
    setMessage([])
  },[user.id])

  useEffect(() => {
    if (message.length === 0 || user === undefined) return;

    const existingUser  =  Dummy_User.filter((usr) => usr.id !== user.id);
    const updateUser = {
      ...user,
      lastMessage: message[message.length - 1].message,
      lastMessageTime: message[message.length - 1].createAt,
    }

    setUser([updateUser,...existingUser,]);
  }, [message]);

  return (
    <div className='flex flex-col w-full overflow-hidden'>
       <Header user={user}/>
       <MessageList messages ={message}/>
       <Footer message ={message}setMessage={setMessage} />
    </div>
  )
}
