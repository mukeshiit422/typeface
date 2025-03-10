import React from 'react'
import UserData from './UserData'
import { UserDataType} from './UserType'

export default function User({users, setUserId ,userId}:UserDataType ) {
  return (
    <div className='w-full'>
        <UserData users ={users} setUserId= {setUserId} userId ={userId}/>
    </div>
  )
}
