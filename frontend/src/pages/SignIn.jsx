import { Button,Label,TextInput } from 'flowbite-react';
import React , {useEffect} from 'react';
import { Link,useLocation } from 'react-router-dom';
import CompanyLogin from '../Components/CompanyLogin';
import { useState } from 'react';
// import Header from '../Components/Header';

export default function SignIn() {
  const location = useLocation();
  const [tab,setTab] = useState('');
  useEffect(()=>{
      const urlParams = new URLSearchParams(location.search)
      const tabFromUrl = urlParams.get('tab')
      if(tabFromUrl){
          setTab(tabFromUrl);
      }
  },[location.search])
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
              <Link to='/company'>
              <span className=' hover:text-blue-500'>Company</span>
              </Link>
              <Link to={'/signin?recruiter'}>
              <span className=' hover:text-blue-500'>Coordinator</span>
              </Link>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <form className='flex flex-col gap-5 justify-center items-center'>
            <div className="max-w-[500px] w-[500px]">
                <Label value="Your Roll No." className='mt-[2.5%] mr-[2.5%]'/>
                  <TextInput
                    type="text"
                    placeholder="21361"
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
              <Button className=' ml-[47%]  ' gradientDuoTone='pinkToOrange' outline>Login</Button>
            </div>
            <div className="flex gap-2 justify-center">
              <p >Don't have an account?</p>
              <Link to='/register/student'>
                 <span  className='text-blue-500 cursor-pointer'>Register now</span>
              </Link>
            </div>  
          </div>
        </div>

      </div>
    </div>
    </>
  );
}


