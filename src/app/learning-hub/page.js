'use client'
import React,{useState} from 'react';
import { Button } from "@/components/ui/button"
import  { Suspense } from 'react'
import {Star} from 'lucide-react'
import Assignment from './_components/Assignment';
import CodePage from './_components/CodePage';
import Notes from './_components/Notes';
import QuestionsAndanswers from './_components/QuestionsAndanswers';
import Quiz from './_components/Quiz';
import Video from './_components/Video';
export default function Page() {
  const [selected,setSelected]=useState(false)
  const render={
    "Notes":()=><Notes/>,
    "Code":()=><CodePage/>,
    "Q/A":()=><QuestionsAndanswers/>,
    "Quiz":()=><Quiz/>,
    "Assignment":()=><Assignment/>
  }
  const [isClicked, setIsClicked] =useState(false);
  const handleClicked = (e) => {
    setSelected(e.target.value)
    setIsClicked(!isClicked);
  };

  return (
  <div className="px-10 py-2">
      <Video/>
    <div className='flex my-5 '>
        {[1,2,3,4,5].map((star,index)=>
          <Star key={index} size={34} className= {` ${index<=3 ? "fill-yellow-300":"fill-white"}`} />
        )}
    </div>
    <div className='flex gap-4  mt-2 max-md:flex-col' >
        {['Notes','Code','Q/A','Quiz','Assignment'].map((item)=>
        <Button value={item} key={item}  className={`w-full text-lg ring-2 ${selected==item ? "ring-red-500":"ring-yellow-500"} `} onClick={(e)=>handleClicked(e)
          }>{item}</Button>)}
    </div>
      <div className='mt-4'>
        <Suspense fallback={<div>loading...</div>}>
           {selected && render[selected]()}
        </Suspense>
      </div>
  </div>)
};