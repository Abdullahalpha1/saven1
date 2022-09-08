import React from 'react'
import sam from './Data'

export default function Features() {
  return (
    sam.alpha3.map((e,index)=>{
        return(
            <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <h2 class="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">{e.head}</h2>
    <div class="md:w-3/5 md:pl-6 flex flex-col gap-10">

        <section class="text-gray-600 body-font">
    <div class="container ">
    <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 -m-4">
      <div class="p-4 lg:w-2/2">
        <div class="flex rounded-lg h-full  p-8 flex-col">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 class="text-black text-lg title-font font-medium">{e.head2}</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-lg text-black">{e.head6}</p>
          
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-2/2">
        <div class="flex rounded-lg h-full p-8 flex-col">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 class="text-black text-lg title-font font-medium">{e.head3}</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-lg text-black">{e.head6}</p>
          
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-2/2">
        <div class="flex rounded-lg h-full  p-8 flex-col">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h2 class="text-black text-lg title-font font-medium">{e.head4}</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-lg text-black">{e.head6}</p>
            
            
          </div>
        </div>
      </div>
      <div class="p-4 lg:w-2/2">
        <div class="flex rounded-lg h-full  p-8 flex-col">
          <div class="flex items-center mb-3">
            <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <h2 class="text-black text-lg title-font font-medium">{e.head5}</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed  text-black text-lg">{e.head6}</p>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  </div>
</section>
        )

    })
  )
}