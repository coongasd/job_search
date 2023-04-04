import logo from './logo.svg';
import './App.css';
import MainPage from './component/MainPage/MainPage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Profile from './component/CV_Profile/Profile'
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Register from './component/Register_Login/RegisterPage';
import Login from './component/Register_Login/LoginPage';
import FindJob from './component/Job/FindJob';
import SettingProfile from './component/CV_Profile/SettingProfile';

import WorkProfile from './component/CV_Profile/UserInfo/WorkProfile';

import CV_Create from './component/CV_Create';
import JobDetails from './component/Job/JobDetails';

import Contact from './component/CV_Contact/Contact'
import PostJob from './component/Job/PostJob';
import Company_Profile from './component/Company_Profile/Company_Profie';
import Job_Apply from './component/CV_Create/Job_Apply';
import JobPosted from './component/CV_Create/JobPosted';
import JobCandidates from './component/CV_Create/JobCandidates';
import CandidateProfile from './component/CV_Profile/CandidateProfile/CandidateProfile';



function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/job/candidates/:id/" element={<JobCandidates/>}/>
          <Route path="/job/posted/" element={<JobPosted/>}/>
          <Route path="/applied/" element={<Job_Apply/>}/>
          <Route path="/job/:id/" element={<JobDetails/>}/>
          <Route path="/job/post/" element={<PostJob/>}/>
          <Route path="/job/detail/" element={<JobDetails/>}/>
          <Route path="/profile/setting/workprofile" element={<WorkProfile/>}/> 
          <Route path="/profile/setting" element={<SettingProfile/>}/> 
          <Route path="/profile/:id" element={<CandidateProfile/>}/> 
          <Route path="/profile" element={<Profile/>}/> 
          <Route path="/register" element={<Register/>}/>  
          <Route path="/login" element={<Login/>}/> 
          <Route path="/job" element={<FindJob/>}/> 
          <Route path="/cv_create" element={<CV_Create/>}/>
          <Route path="/postjob" element={<PostJob/>}/>
          <Route path="/company" element={<Company_Profile/>}/>
          <Route path="/jobapply" element={<Job_Apply/>}/>
          <Route path="/search/:keyword" element={<MainPage/>}/>
          <Route path="/search/" element={<MainPage/>}/>
          <Route path="/" element={<MainPage/>}/>  
        </Routes>
      </div>
  );
}

export default App;
