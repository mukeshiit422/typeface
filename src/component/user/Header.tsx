import React from 'react'

export default function Header() {
  return (
    <div className='flex flex-row border border-gray-500 rounded-md px-2' >
       <p>Chats</p>
       <div className='ml-auto'>
        <button className='mr-1'>New chat</button>
        <button>Filter</button>
       </div>
    </div>
  )
}
