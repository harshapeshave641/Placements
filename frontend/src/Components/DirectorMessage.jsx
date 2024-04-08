import React from 'react'

export default function DirectorMessage() {
  return (
    <>
    <section name='#director' className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="ml-[10%]">
              <img src="/img/director.jpeg" alt="Director PICT" className='border-4 hover:border-blue-500 md:h-[300px] md:w-[300px] rounded-xl'/>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter md:text-2xl/tight text-blue-500">Director's Message</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              PICT Pune continues to be ranked as the top Engineering College of Maharashtra and among the best in the country. PICT Pune attracts the brightest students...
              </p>
              <h2>P.T. Kulkarni</h2>
            </div>
          </div>
        </section>
    </>
  )
}
