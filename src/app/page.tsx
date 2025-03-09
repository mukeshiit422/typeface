"use client"

import {  useRouter } from "next/navigation";


export default function Home() {
  const path = useRouter();
  return (
    <div className="flex justify-center items-center h-screen">
     <button className="bg-blue-500 border rounded-md p-2 cursor-pointer" onClick={()=> path.push("/chat")}>Start chating</button>
    </div>
  );
}
