import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
// import { useState } from 'react';

export default function 
() {
    const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    // Set a delay to apply the transition class after the component has mounted
    const timeout = setTimeout(() => {
      setImageLoaded(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);
  return (
   <>
    <section id='#hero' className={`w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48 ${imageLoaded ? 'transition-opacity' : ''}`}>
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <img
              alt="Hero"
              className={`mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:aspect-video ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              height="310"
              src="/img/PICT_img_1.jpg"
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  New Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-500 cursor-pointer hover:underline">
                  Training & Placement Management System
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  The complete platform for improving job placement rates and streamlining training processes. Let your
                  team focus on preparing students for success.
                </p>
              </div>
              <div className="md:flex-col flex-row md:space-y-3">
                {/* <h1 className='text-2xl text-blue-500 font-semibold'>SignIn as</h1> */}
                <div className="flex space-x-4">
                  <Link to='/signin'>
                    <Button className='border-blue-500 bg-white text-black hover:bg-gray-500'>Student</Button>
                  </Link>
                  <Link to='/company'>
                    <Button className='border-blue-500 bg-white text-black hover:bg-gray-500'>Recruiter</Button>
                  </Link>
                  <Link to='/coordinator'>
                    <Button className='border-blue-500 bg-white text-black hover:bg-gray-500'>Coordinator</Button>
                  </Link>       
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   </>
  )
}
