import React from 'react'
import sam from './Data'

export default function About() {
  return (
    sam.alpha2.map((e,index)=>{
        return(
            <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <h2 class="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">{e.head}</h2>
    <div class="md:w-3/5 md:pl-6 flex flex-col gap-10">
      <p class="leading-relaxed text-base lg:text-xl font-bold font-sans">{e.head2}</p>
      <p class="leading-relaxed text-base lg:text-xl font-bold">{e.head3}</p>
    </div>
  </div>
</section>
        )

    })
  )
}
