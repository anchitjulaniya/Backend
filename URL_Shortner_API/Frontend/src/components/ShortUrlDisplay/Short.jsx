import React from "react";
import { Clipboard } from 'lucide-react';

function Short( {shorturl, longurl, copyText,setIsShortURLComponent}) {
    
  return (
    <div className="flex flex-col items-center w-full">
      <div className="shadow-xl w-1/2 flex flex-col justify-center items-center  py-7 rounded-xl">
      <h1 className="text-center text-3xl">Your Short URL</h1>
      <div className="mx-auto flex  items-center gap-2 my-10 ">
        <input
          className="bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg focus:shadow-rose-400 dark:shadow-md dark:shadow-purple-500"
          autoComplete="off"
          placeholder="Search here..."
          defaultValue={shorturl}
          name="text"
          type="text"
        />

        <span 
        onClick={() => copyText(shorturl)}
        className=" font-bold font-mono text-center bg-indigo-500 text-white text-md px-3 py-2 rounded-lg hover:cursor-pointer hover:bg-indigo-700 duration-300"><Clipboard /> </span>
      </div>
      <div>
        <span className="text-3xl font-mono font-bold text-center flex items-center gap-4"><span>Long url : {longurl} </span> <span className="hover:cursor-pointer"><Clipboard /></span></span>
      </div>

      <div>
        
      <p className="hover:cursor-pointer hover:text-blue-500 text-end w-full" onClick={()=>{setIsShortURLComponent(false)} }>Long URL Page</p>
      </div>
      </div>
    </div>
  );
}

export default Short;
