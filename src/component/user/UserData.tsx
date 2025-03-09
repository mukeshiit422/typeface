import React from 'react'
import { UserType } from './UserType'
import { CheckCheck } from "lucide-react";

type UserDataType = {
  users : UserType[],
  setUserId : (id: number)=> void;
  userId: number  | undefined
}

export default function UserData({users, setUserId,userId} : UserDataType) {
  return (
    <div className=" bg-gray-900 border-r h-screen overflow-y-auto">
    <div className="px-4 py-3 shadow-md font-semibold h-[60px] border border-gray-500">Chats</div>
     {
       users && users.map((user)=>{
        return <div
        key={user.id}
        className={`flex items-center px-4 py-3 cursor-pointer transition border border-gray-800 
          ${user.id === userId ? "bg-gray-800 text-white" : "hover:bg-gray-500"}`}
        onClick={()=>setUserId(user.id)}
      >
        <img
          src={"/default-avatar.png"}
          alt="User"
          className="w-12 h-12 rounded-full object-cover"
        />

        <div className="ml-3 flex-1">
          <div className="flex justify-between items-center">
            <span className="font-semibold">{user.name}</span>
            <span className="text-xs text-gray-500">{user.lastMessageTime}</span>
          </div>
          <div className='flex flex-row items-center'>
          <CheckCheck size={14} className='text-blue-600 mr-2'/>
          <p className="text-sm text-gray-300 truncate">{user.lastMessage}</p>
          </div>
        </div>
      </div>
       })
     }
  </div>
  )
}
