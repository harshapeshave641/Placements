import { Button } from 'flowbite-react';
// import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import React, { useEffect, useState } from 'react';
import DirectorMessage from '../Components/DirectorMessage';
import HeroSection from '../Components/HeroSection';
import Overview from '../Components/Overview';
import ContactUs from '../Components/ContactUs';
// export default function LandingPage() {
//   return (
//     <>
//     <Header/>
//     <div className="">
//       <div className='relative'>
//         <img src="/img/PICT_img_1.jpg" alt="" className='hero-img' />
//        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5 ">

//         <div className="bg-opacity-25 bg-white bg-blur-md rounded-md">
//           <h1 className='text-4xl font-bold mb-3'>A one-stop portal for Placements & Internships</h1>
//         </div>

//         <div className="flex flex-row space-x-4 md:flex-col md:space-y-4">
//             <Link to='/signin'>
//             <Button gradientDuoTone='whiteToBlack' type='submit' className='outline'>Student</Button>
//             </Link>
//             <Link to='/signin'>
//             <Button gradientDuoTone='whiteToBlack' type='submit' className='outline'>Recruiter</Button>
//             </Link>
//             <Link to='/signin'>
//             <Button gradientDuoTone='whiteToBlack' type='submit' className='outline'>Coordinator</Button>
//             </Link>
//             <Link to='/signin'>
//             <Button gradientDuoTone='whiteToBlack' type='submit' className='outline'>Verifier</Button>
//             </Link>
//           </div>
//        </div>
//       </div>
//       <div className="text-center flex p-3 mx-auto flex-col md:flex-row md:items-center gap-5">
//         <div className="overview space-y-2 md:max-w-[33.3%]">
//           <h1 className='font-semibold text-3xl ml-3'>Overview</h1>
//           <p className='ml-3 mr-3'>The Training and Placement (T&P) Cell plays an integral role in journey of the students, aspiring for excellent job opportunities. The T&P Cell at PICT serves as an aerodrome for the flights of the young undergrads and post grads to be taken-off to greater horizons and heights beyond imagination. T&P Cell, headed by Dr. S. S. Narkhede is recognized for the exemplary placements offered to its of CE, E&TC Engg. and IT Students and thus stands sturdy to the expectations of its Stakeholders. Regardless of the department, every batch raises the bar for the upcoming batches and remarkably takes the baton ahead. All the students meeting the criteria prescribed by the Institute and the companies are permitted to register for the Placement Process. The registration for the placement commences at the end of the sixth semester of engineering.</p>
//         </div>
//         <div className="dept_and_prog space-y-2 md:max-w-[33.3%]">
//           <h1 className='font-semibold text-3xl ml-3'>Statistics</h1>
//           <p className='ml-3 mr-3'>Students of PICT have great potential and interests in various career options. Around 10 % of our students choose to explore Higher studies, Civil Services, Entrepreneurship, their own family business and other career options.</p>
//           <div className="container mx-auto my-8">
//             <table className='min-w-full bg-white border border-gray-200'>
//               <thead>
//                 <tr>
//                 <th>Academic Year</th>
//                 <th>2017-18</th>
//                 <th>2018-19</th>
//                 <th>2019-20</th>
//                 <th>2020-21</th>
//                 <th>2021-22</th>
//                 <th>2022-23</th>
//                 </tr>        
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>No. of Students Enrolled</td>
//                   <td>617</td>
//                   <td>631</td>
//                   <td>659</td>
//                   <td>720</td>
//                   <td>730</td>
//                   <td>740</td>
//                 </tr>
//                 <tr>
//                   <td>No. of Students Placed</td>
//                   <td>405</td>
//                   <td>523</td>
//                   <td>555</td>
//                   <td>661</td>
//                   <td>671</td>
//                   <td>706</td>
//                 </tr>
//                 <tr>
//                   <td>Placement Percentage</td>
//                   <td>66.00%</td>
//                   <td>82.88%</td>
//                   <td>84.21%</td>
//                   <td>91.80%</td>
//                   <td>91.91%</td>
//                   <td>In Progress</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <div className="reports space-y-2">
//         <h1 className='font-semibold text-3xl ml-3'>Placement Reports</h1>
//         <p className='ml-3 mr-3'>Here you will be able to see placement stats.........</p>
//         </div>
//       </div>
//       </div>
//     </>
//   );
// }


/**
 * v0 by Vercel.
//  *
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  
  return (
    <>
    <Header/>
    
    <HeroSection/>
    <Overview/>
    <DirectorMessage/>
    <ContactUs/>
  
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </>
  )
}

