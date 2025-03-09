import React from 'react'
import Header from './Header'
import Search from './Search'
import UserData from './UserData'

export default function User() {
  return (
    <div className='w-full mr-2'>
        <Header/>
        <Search/>
        <UserData/>
    </div>
  )
}
