
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Header from './Components/Header'
import SignIn from './pages/SignIn'
import { StickyScroll } from './Components/stickyScroll'
import { StickyScrollRevealDemo } from './pages/DevPage'
import CompanyLogin from './Components/CompanyLogin'
import CoordinatorLogin from './Components/CoordinatorLogin'
import CompanyLanding from './pages/CompanyDashboard'
import CompanyRegister from './Components/CompanyRegister'
import StudentRegister from './Components/StudentRegister'
import CompanyList from './pages/List'
import Profile from './pages/profile'
import { useState } from 'react'
import Statistics from './pages/Statistics' 
import PermanentDrawer from './Components/Admin_Dashboard'
import Profile1 from './pages/profile1'


function App() {

  const [jobPosts, setJobPosts] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/signin' element={<SignIn/>} ></Route>
          <Route path='/company' element={<CompanyLogin/>} ></Route>
          <Route path='/companyhome' element={<CompanyLanding jobPosts={jobPosts} setJobPosts={setJobPosts} />} ></Route>
          <Route path='/register/company' element={<CompanyRegister/>} ></Route>
          <Route path='/register/student' element={<StudentRegister/>} ></Route>
          {/* <Route path='/signin?company' element={<SignIn/>} ></Route> */}
          <Route path='/coordinator' element={<CoordinatorLogin/>} ></Route>
          <Route path='/companies' element={<CompanyList/>}></Route>
          <Route path='/single/:companyId' element={<Profile1/>}></Route>
          <Route path='/single1' element={<Profile/>}></Route>

        
          <Route path='/dev' element={<StickyScrollRevealDemo/>}></Route>
          {/* <Route path='/activejobopenings' element={<ActiveJobOpenings jobPosts={jobPosts} setJobPosts={setJobPosts} />} /> */}
          <Route path='/stat' element={<Statistics/>}></Route> 
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
