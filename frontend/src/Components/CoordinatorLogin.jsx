import React, { useEffect,useState } from 'react'
import { useLocation,Link } from 'react-router-dom'
import { Button,Label,TextInput } from 'flowbite-react';


export default function CoordinatorLogin() {
  return (
    <>
    <div className="max-h-screen">
      {/* <h1 className='text-4xl text-black font-semibold'>Login Page</h1> */}
      <div className="flex">
        {/* Left */}
        <div className="flex-1 space-y-10 max-w-[30%] w-full h-screen bg-[#387ADF]">
            <div className="ml-[10%] mt-[10%] space-y-1">
              <h1 className='text-white font-semibold'>PICT Placement</h1>
              <h1 className='text-3xl font-semibold'>One stop portal for</h1>
              <h1 className='text-3xl font-semibold'>students & companies for</h1>
              <h1 className='text-3xl font-semibold'>placements.</h1>
            </div>
            <div className="space-y-10">
              <div className="flex justify-center">
                <img src="/img/PICT_logo_1.png" alt="PICT_LOGO"/>
              </div>
              <div className="ml-[10%]">
                <h1 className='text-black font-bold text-2xl'>Instructions</h1>
                <p className='text-black font-semibold'>Login using your institute roll number.</p>
              </div>
            </div>
        </div>
        {/* Right */}
        <div className="flex-1 justify-center mt-[10%] space-y-5 text-center">
          <div className="space-y-2">
            <h1 className='text-2xl text-blue-500 font-semibold'>Sign-in to PICT PUNE Placement Portal</h1>
            <div className="flex justify-evenly cursor-pointer">
              <Link to='/signin'>
                <span className=' hover:text-blue-500'>Student</span>
              </Link>
              <Link to={'/company'}>
              <span className=' hover:text-blue-500'>Company</span>
              </Link>
              <Link to='/coordinator'>
              <span className=' hover:text-blue-500'>Coordinator</span>
              </Link>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <form className='flex flex-col gap-5 justify-center items-center'>
            <div className="max-w-[500px] w-[500px]">
                <Label value="Collage Id"/>
                  <TextInput
                    type="text"
                    placeholder="id-1234"
                    id="roll"
                  />
              </div>
              <div className="max-w-[500px] w-[500px]">
                <Label value="Your password"/>
                  <TextInput
                    type="password"
                    placeholder="*******"
                    id="password"
                  />
              </div>
            </form>
            <div className="flex-1 justify-center space-y-2">
              {/* <h1>OR</h1> */}
              <Button className='ml-[47%] ' gradientDuoTone='pinkToOrange' outline>Login</Button>
            </div>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}
