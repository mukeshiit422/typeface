"use client"
import MessageBody from "@/component/message/MessageBody"
import User from '@/component/user/User'
import React, { useEffect } from 'react'

export default function ChatPage() {
 
  // const resizableDiv = document.getElementById("resizableDiv");
  // const resizer = document.getElementById("resizer");

  // useEffect(()=>{
    
  //   if(resizer && resizableDiv){
  //   resizer.addEventListener("mousedown", function (e) {
  //     e.preventDefault();
  
  //     document.addEventListener("mousemove", resize);
  //     document.addEventListener("mouseup", () => {
  //       document.removeEventListener("mousemove", resize);
  //     });
  //   });
  
  //   function resize(e : any) {
  //     if(resizableDiv){
  //     const newWidth = e.clientX - resizableDiv.getBoundingClientRect().left;
  //     if (newWidth > 50) { // Set a minimum width
  //       resizableDiv.style.width = `${newWidth}px`;
  //     }
  //   }
  // }
  // }
  
  // },[resizableDiv,resizer])
 
  return (
    <div className='flex flex-row w-full'>
        <div  id="resizableDiv" className='flex w-1/4 h-screen overflow-auto  border-r border-red p-2'>
           <User/>
        </div>
        {/* <div id="resizer" className="w-2 h-[100px] bg-gray-400 cursor-ew-resize"></div> */}
        <div  className='flex w-3/4 h-screen overflow-auto  border-r border-red'>
         <MessageBody/>
        </div>
    </div>
  )
}
