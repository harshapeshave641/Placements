// import { Sidebar } from 'flowbite-react';
// import React from 'react'
// import {FaHome} from 'react-icons/fa';
// import { FaLocationArrow } from "react-icons/fa";
// import { Link } from 'react-router-dom';

// export default function CompanyLanding() {
//   return (
//     <>
//     <div className="flex">
//       <div className="flex-1 md:w-60">
//       <h1>Company Name</h1>
//       <Sidebar className='w-full md:w-60'>
//         <Sidebar.Items>
//           <Sidebar.ItemGroup className='flex flex-col gap-1'>
//             <Link to='/'>
//               <Sidebar.Item icon={FaHome} label='Home' labelColor='dark' as='div'>
//                 Home
//               </Sidebar.Item>
//             </Link>
//             <Link to='/companyhome'>
//               <Sidebar.Item icon={FaLocationArrow} active label='create' labelColor='dark' as='div'>
//                 Create Job Post
//               </Sidebar.Item>
//             </Link>
//           </Sidebar.ItemGroup>
//         </Sidebar.Items>
//       </Sidebar>
//       </div>
//       <div className="flex-col">
//           <div className="">
//             <h1 className='text-3xl font-bold '>Job Postings</h1>
//           </div>
//           <div className="">
//             <h1>Hello</h1>
//           </div>
//       </div>
//     </div>
//     </>
//   )
// }

// import { Sidebar } from 'flowbite-react';
// import React from 'react'
// import { FaHome } from 'react-icons/fa';
// import { FaLocationArrow } from "react-icons/fa";
// import { Link } from 'react-router-dom';

// export default function CompanyLanding() {
//   return (
//     <div className="min-h-screen flex flex-col md:flex-row">
//       <div className="flex-1 md:w-60">
//         <h1>Company Name</h1>
//         <Sidebar className='w-full md:w-60'>
//           <Sidebar.Items>
//             <Sidebar.ItemGroup className='flex flex-col gap-1'>
//               <Link to='/'>
//                 <Sidebar.Item icon={FaHome} label='Home' labelColor='dark' as='div'>
//                   Home
//                 </Sidebar.Item>
//               </Link>
//               <Link to='/companyhome'>
//                 <Sidebar.Item icon={FaLocationArrow} active label='create' labelColor='dark' as='div'>
//                   Create Job Post
//                 </Sidebar.Item>
//               </Link>
//             </Sidebar.ItemGroup>
//           </Sidebar.Items>
//         </Sidebar>
//       </div>
//       <div className="flex-col flex-1">
//         <div className="mb-4">
//           <h1 className='text-3xl font-bold'>Job Postings</h1>
//         </div>
//         <div className="">
//           <h1>Hello</h1>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Sidebar,Label,TextInput,Button } from 'flowbite-react';
import React from 'react'
import { FaHome } from 'react-icons/fa';
import { FaLocationArrow } from "react-icons/fa";

import { Link } from 'react-router-dom';

export default function CompanyLanding() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-60 border-r border-gray-300">
        <div className="border-b border-gray-300 min-h-10">
        <h1 className='text-center'>Company Name</h1>
        </div>
        
        <Sidebar className='w-full'>
          <Sidebar.Items>
            <Sidebar.ItemGroup className='flex flex-col gap-1'>
              <Link to='/'>
                <Sidebar.Item icon={FaHome} label='Home' labelColor='dark' as='div'>
                  Home
                </Sidebar.Item>
              </Link>
              <Link to='/companyhome'>
                <Sidebar.Item icon={FaLocationArrow} active label='create' labelColor='dark' as='div'>
                  Create Job Post
                </Sidebar.Item>
              </Link>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="mb-4 border-b border-gray-300 min-h-10">
          <h1 className='text-3xl font-bold'>Job Postings</h1>
        </div>
        <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Create Job Posting</h1>
          </div>
        <div className="border shadow-sm rounded-lg">
            <form className="grid gap-4 p-4 md:grid-cols-2 md:gap-8">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Job Title</Label>
                  <TextInput id="title" placeholder="Enter the job title" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <TextInput id="company" placeholder="Enter the company name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Job Description</Label>
                  <TextInput id="description" placeholder="Enter the job description" required />
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="skills">Required Skills</Label>
                  <TextInput id="skills" placeholder="Enter the required skills" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deadline">Application Deadline</Label>
                  <TextInput id="deadline" required type="date" />
                </div>
              </div>
              <div className="space-y-4 md:col-start-2 md:row-start-1">
                <div className="space-y-2">
                  <Label htmlFor="skills">Preview</Label>
                  <div className="border rounded-md p-4 min-h-[200px]">
                    <h2 className="font-semibold text-lg" id="preview-title">
                      Enter the job title
                    </h2>
                    <p id="preview-company">Enter the company name</p>
                    <div id="preview-description">Enter the job description</div>
                    <div id="preview-skills">Enter the required skills</div>
                  </div>
                </div>
              </div>
              <Button className="md:col-start-2 md:row-start-2 " type="submit">
                Create Job Posting
              </Button>
            </form>
          </div>
      </div>
    </div>
  );
}

