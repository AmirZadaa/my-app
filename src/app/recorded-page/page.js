'use client'
import React,{useState} from 'react';
import { Button } from "@/components/ui/button"
import {Star} from 'lucide-react'
export default function Page() {
  const [isClicked, setIsClicked] =useState(false);
  const handleClicked = () => {
    setIsClicked(!isClicked);
  };

  return (
  <div className="px-10 py-2">
    <div className='w-full aspect-video'>
       <iframe  src='https://www.youtube.com/embed/668nUCeBHyY' className='w-full h-full'></iframe>
    </div>
    <div className='flex my-5 '>
        {[1,2,3,4,5].map((star,index)=>
          <Star key={index} size={34} className= {` ${index<=3 ? "fill-yellow-300":"fill-white"}`} />
        )}
    </div>
    <div className='flex gap-4  mt-2 max-md:flex-col' >
        {['Notes','Code','Q/A','Quiz','Assignment'].map((item)=>
        <Button value={item} key={item}  className='w-full text-lg' onClick={handleClicked
          }>{item}</Button>)}
    </div>
    {isClicked && <div>
        <p className='h-72 text-black border-2 p-2 border-black mt-4 overflow-auto'>
         lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Donec quis nisl ac nunc mollis laoreet.
         Nunc id nisi sed nunc blandit ultrices.
         Donec nec nulla nisi.
         Donec ac nulla quis nisl elementum tincidunt.
         Phas euismod erat eget nulla tincidunt,
         ac aliquet nulla tincidunt.
         Maecenas eu nulla eget nisl auctor ultrices.
         Donec ac nulla quis nisl elementum tincidunt.
        </p>
      </div>}
  </div>)
};