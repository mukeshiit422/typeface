import React, { useState } from 'react'
import { Message } from './Types'

type FooterType = {
  message : Message[],
  setMessage : (mes : Message[]) => void;
}
export default function Footer({setMessage,message} : FooterType) {
  const [newMess,setNewMess] = useState<Message>()
  const handleMessage = (event :any)=>{
    console.log("message>>",message,event.target.value,event.timeStamp)
    setNewMess({
      user:{
        name: "mukesh",
        email: "mukeshiit"
      },
      message: event.target.value,
      createAt: ""
    })
    

  }
  const handleSend = ()=>{
     if(newMess){
     setMessage([...message,newMess])
     setNewMess(undefined)
     }
  }
  return (
    <div className='flex flex-row mt-auto w-full bg-gray-600 p-2' >
      <button className='mr-2'>plus</button>
      <input className='border border-gray-500 rounded-full w-full pl-2 ' type='input' onChange={handleMessage} value={newMess?.message}/>
      <button className='ml-2 text-green-500 cursor-pointer' onClick={handleSend}>Send</button>
    </div>
  )
}
