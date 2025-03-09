import React from 'react'
import { ArrowLeft, MoreVertical } from "lucide-react"; 
import { Dummy_User } from '../util/constant';
import { UserType } from '../user/UserType';

type HeaderType = {
  user : UserType
}

export default function Header({user}: HeaderType) {
  return (
    <div className="flex items-center bg-gray-900 px-4 py-2 border border-gray-600 shadow-sm">
      <img
        src={"/default-avatar.png"}
        alt="User Profile"
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="ml-3 flex flex-col">
        <span className="font-semibold text-white">{user.name}</span>
        <span className="text-sm text-green-500">
          Online
        </span>
      </div>

      <button className="ml-auto text-gray-400">
        <MoreVertical size={24} />
      </button>
    </div>
  );
}
