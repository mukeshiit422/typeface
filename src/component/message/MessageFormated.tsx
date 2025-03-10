import React, {useState} from 'react'
import { Message } from './Types'
import { CheckCheck, Trash2 } from "lucide-react";

type MeaageFormatedType = {
  message : Message,
  setDeletedMessageId : (deletedMessageId : number)=> void
}
export default function MessageFormated({message,setDeletedMessageId}: MeaageFormatedType) {
  const [isHovered, setIsHovered] = useState(false);
  if(!message.message){
     return <></>
  }
  return (
    <div className="ml-auto flex flex-col items-end max-w-[75%] m-0.5 " 
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    key={message.id}
    >
    <div className="flex flex-row bg-green-700 rounded-lg px-3 py-2 relative"  key={message.id}>
      {!message.isDeleted && <p className="text-sm mr-2">{message.message}</p>}
      <p className="text-xs text-gray-700 mr-2 mt-auto flex-nowrap">
        {message.createAt} 
      </p>
      <p className="text-xs mt-auto">
        <CheckCheck size={14} className="text-blue-700"/>
      </p>
    </div>
    {isHovered && (
        <div className="mt-[-36px] bg-white shadow-md p-2 rounded-md z-10"  key={message.id}>
          <button 
            className="flex items-center text-red-600 text-sm hover:text-red-800"
            onClick={() => setDeletedMessageId(message.id)}
          >
            <Trash2 size={16} className="mr-1"/> Delete
          </button>
        </div>
      )}
    </div>
  )
}
