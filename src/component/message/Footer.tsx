
import React, { useState } from 'react'
import { Message, FooterType } from './Types'
import { Send } from "lucide-react";

export default function Footer({setMessage,message} : FooterType) {
  const [newMess,setNewMess] = useState<Message>()

  const handleMessage = (event :any)=>{
      const timestamp = Date.now();
      const time12h = new Date(timestamp).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    setNewMess({
      message: event.target.value,
      createAt: time12h,
      id: message.length + 1,
      isDeleted: false,
    })
    

  }
  const handleSend = ()=>{
     if(newMess?.message){
     setMessage([...message,newMess]);
     setNewMess({
      message: "",
      createAt: "",
      id: message.length + 1,
      isDeleted: false,
    })
     }
  }
  
  return (
    <div className='flex flex-row mt-auto w-full bg-gray-900 p-4' >
      <input className='border border-gray-500 rounded-full w-full pl-2 h-10' type='input' onChange={handleMessage} value={newMess && newMess.message} placeholder='Type message here'/>
      <button className='ml-2 text-green-500 cursor-pointer' onClick={handleSend}>
        <Send size={20}/>
      </button>
    </div>
  )
}
