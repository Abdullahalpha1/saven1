import React from 'react'
import sam from './Data'

export default function Download() {
  return (
   sam.alpha4.map((e,index)=>{
    return(
        <div key={index}  className='w-11/12 border border-black mx-auto bg-indigo-50'>
            <h1 className='text-4xl text-center mt-20'>{e.head}</h1>
            <p className='text-center mt-5'>{e.head2}</p>

            <div class="flex lg:flex-row md:flex-row justify-center">
        
        <img class="h-32 w-32" src={e.scr4} />       
        <img class=" h-32 w-32" src={e.scr5} />

            </div>
        <div  className='h-[20rem] mx-auto' style={{backgroundImage: `url(${e.scr6})`,backgroundSize:"100% 100%"}}></div>

        </div>
    )
   })
  )
}
