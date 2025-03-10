"use client"

import {  useRouter } from "next/navigation";
export default function Home() {
  const path = useRouter();
  return (
    <div className="flex h-screen bg-contain bg-no-repeat justify-center" style={{
      backgroundImage: "url('/bg.jpg')",
     
      }}>
      <div className="absolute inset-0 bg-black opacity-30"></div>
     <button className="bg-blue-500 border rounded-md p-2 cursor-pointer mt-auto mb-5 h-12 text-lg z-10" onClick={()=> path.push("/chat")}>Start chating</button>
    </div>
  );
}
