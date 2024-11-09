import Image from 'next/image'
import thambnail from './thambnail.jpg'
import React from 'react'
import { useState } from 'react'


export default function  Video(){
  const [videoLoaded, setVideoLoaded] = useState(false)
    return (
      <div className='w-full aspect-video relative'>
        {!videoLoaded && <Image src={thambnail} fill priority alt="thambnail" className=' object-cover'/>}
        <iframe  
          src='https://www.youtube.com/embed/668nUCeBHyY' 
          className='w-full h-full'
          title="YouTube Video"
          importance="high"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          onLoad={() => setVideoLoaded(true)}
        />
      </div>
    )
  }