"use client"
import MessageBody from "@/component/message/MessageBody"
import User from '@/component/user/User'
import React, { useMemo, useState } from 'react'
import { UserType } from "@/component/user/UserType";
import { Dummy_User } from "@/component/util/constant";

export default function ChatPage() {
  const[users, setUser]= useState<UserType[]>(Dummy_User);
  const [userId, setUserId] = useState<number | undefined>(undefined);
  const user = useMemo(()=>{
    return users.find((user)=>user.id === userId) || Dummy_User[0];
  },[userId])
  return (
    <div className='flex flex-row w-full'>
        <div  id="resizableDiv" className='flex w-1/4 h-screen overflow-auto  border-r border-gray-500'>
           <User users={users} setUserId={setUserId} userId={userId}/>
        </div>
        { userId ? 
          <div  className='flex w-3/4 h-screen overflow-auto border-r order-gray-500'>
          <MessageBody setUser ={setUser} user={user} users={users}/>
         </div>
           :
           <div className="flex justify-center items-center text-center">
            Please select the user to chat
           </div>
         }
        
    </div>
  )
}
