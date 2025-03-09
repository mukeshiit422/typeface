import React from 'react'
import { Message } from './Types'
import { CheckCheck } from "lucide-react";
type MeaageFormatedType = {
  message : Message
}
export default function MessageFormated({message}: MeaageFormatedType) {
  return (
    <div className="ml-auto flex flex-col items-end max-w-[75%] m-0.5 ">
    <div className="flex flex-row bg-green-700 rounded-lg px-3 py-2 relative">
      <p className="text-sm mr-2">{message.message}</p>
      <p className="text-xs text-gray-700 mr-2 mt-auto flex-nowrap">
        {message.createAt} 
      </p>
      <p className="text-xs mt-auto">
        <CheckCheck size={14} className="text-blue-700"/>
      </p>
    </div>
  </div>
  )
}
