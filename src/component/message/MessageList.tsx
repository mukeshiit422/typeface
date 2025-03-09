import React from 'react'
import { Message } from './Types'
import MessageFormated from './MessageFormated'

type MessageListType = {
  messages :  Message[]
}

//style={{ backgroundImage: `url(${'/bg.jpg'})`, backgroundSize: 'cover', backgroundPosition: 'center'}} 

export default function MessageList({messages}: MessageListType) {
  return (
    <div className='flex flex-col h-[80vh] overflow-auto'>
      { messages.length > 0 ?
        messages.map((message)=>{
          return (
            <MessageFormated message={message}/>
          )
        }) :
        <p>No meaage</p>
      }
    </div>
  )
}
