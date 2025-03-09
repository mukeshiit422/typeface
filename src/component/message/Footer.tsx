
import React, { useState } from 'react'
import { Message } from './Types'
import { Dummy_User } from '../util/constant';
import { Send } from "lucide-react";
import { UserType } from '../user/UserType';

type FooterType = {
  message : Message[],
  setMessage : (mes : Message[]) => void;
  
}
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
      createAt: time12h
    })
    

  }
  const handleSend = ()=>{
     if(newMess){
     setMessage([...message,newMess]);
     setNewMess({
      message: "",
      createAt: ""
    })
     }
  }
  console.log("newMess>>",newMess)
  return (
    <div className='flex flex-row mt-auto w-full bg-gray-900 p-4' >
      <input className='border border-gray-500 rounded-full w-full pl-2 ' type='input' onChange={handleMessage} value={newMess && newMess.message} placeholder='Type message here'/>
      <button className='ml-2 text-green-500 cursor-pointer' onClick={handleSend}>
        <Send size={20}/>
      </button>
    </div>
  )
}
