import React from 'react'
import { Message } from './Types'
import MessageFormated from './MessageFormated'

type MessageListType = {
  messages :  Message[],
  setDeletedMessageId : (deletedMessageId : number)=> void
}


export default function MessageList({messages,setDeletedMessageId}: MessageListType) {
  return (
    <div className='flex flex-col h-[80vh] overflow-auto'>
     <p className='text-center'><span className='text-center text-gray-400 bg-gray-700 rounded-md p-2'>Today</span></p> 
      { messages.length > 0 ?
        messages.map((message)=>{
          return (
            <MessageFormated message={message} setDeletedMessageId ={setDeletedMessageId}/>
          )
        }) :
        <></>
      }
    </div>
  )
}
