import React from 'react'
import sam from './Data'

export default function Home() {
    console.log(sam.alpha,"test")
  return (
    sam.alpha.map((e,index)=>{
        return(

        
    
    <section class="text-gray-600 body-font bg-blue-200 h-screen overflow-hidden ">
  <div class="container mx-auto flex px-10 py-14 md:flex-row flex-col items-center justify-between ">
    <div class="lg:w-2/4 md:w-1/2 lg:pr-24 md:pr-24 flex flex-col md:items-start md:text-left lg:mb-32 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl  mb-4 font-medium lg:text-7xl text-gray-900">{e.head}</h1>
      <p class="mb-8 leading-relaxed lg:text-2xl w-96">{e.head2}</p>
      
        <div class="flex lg:flex-row md:flex-col">
        <button class="bg-gray-100 inline-flex rounded-lg items-center hover:bg-gray-200 focus:outline-none ">
        <img class="object-cover object-center rounded" src={e.scr2} />
        </button>
        <button class="bg-gray-100 inline-flex rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none ">
        <img class="object-cover object-center rounded" src={e.scr3} />
        </button>
      </div>
    </div>
    <div class="lg:max-w-xl lg:w-full md:w-1/2 w-5/6 mr-14">
      <img class="object-cover object-center rounded" src={e.scr1} />
    </div>
  </div>
</section>
)
})
  )

}
