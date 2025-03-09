"use client"
import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import MessageList from './MessageList'
import { Message } from './Types'
export default function MessageBody() {
  const [message, setMessage] = useState<Message[]>([]);
  return (
    <div className='flex flex-col w-full overflow-hidden'>
       <Header/>
       <MessageList messages ={message}/>
       <Footer message ={message}setMessage={setMessage}/>
    </div>
  )
}
