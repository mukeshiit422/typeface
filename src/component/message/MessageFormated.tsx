import React from 'react'
import { Message } from './Types'

type MeaageFormatedType = {
  message : Message
}
export default function MessageFormated({message}: MeaageFormatedType) {
  return (
    <div className='ml-auto justify-end'>
      <p className='bg-green-400 m-0.5 rounded-md px-2 py-0.5'>{message.message}</p>
      <span>{message.createAt?.toString()}</span>
    </div>
  )
}
