"use client"
import MessageBody from "@/component/message/MessageBody"
import User from '@/component/user/User'
import React, { useMemo, useState } from 'react'
import { UserType } from "@/component/user/UserType";
import { Dummy_User } from "@/component/util/constant";

export default function ChatPage() {
  const[users, setUsers]= useState<UserType[]>([...Dummy_User]);
  const [userId, setUserId] = useState<number | undefined>(undefined);

  const user = useMemo(()=>{
    return users.find((user)=>user.id === userId) || Dummy_User[0];
  },[userId])

  return (
    <div className='flex flex-row w-full'>
        <div  id="resizableDiv" className='flex w-1/4 h-screen overflow-auto  border-r border-gray-500'>
           <User users={users} setUserId={setUserId} userId={userId}/>
        </div>
          <div  className='flex w-3/4 h-screen overflow-auto border-r order-gray-500'>
          { userId ? <MessageBody setUsers ={setUsers} user={user}/> : 
           <div className="flex flex-col text-center justify-center items-center w-full h-full bg-gray-800">
            <div className="border border-gray-300 p-3 rounded-md">
           <p className="text-gray-500 text-[30px]">Please select the user to chat</p>
           <img src={"/bg.jpg"}
           alt="Please select the user"
           className=" w-100 h-50 rounded-md"
           /> 
           </div>
             </div>
           }
    </div>
    </div>
  )
}
