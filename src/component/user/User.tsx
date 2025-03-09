import React from 'react'
import UserData from './UserData'
import { UserType } from './UserType'

type UserDataType = {
  users: UserType[],
  setUserId : (id: number) => void;
  userId: number | undefined
}
export default function User({users, setUserId ,userId}:UserDataType ) {
  return (
    <div className='w-full'>
        <UserData users ={users} setUserId= {setUserId} userId ={userId}/>
    </div>
  )
}
