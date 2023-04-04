import React from 'react'
import { Link } from 'react-router-dom'
import Header_CvCreate from '../../CV_Create/Header_CvCreate'
import BasicInfo from './BasicInfo'
import WorkProfileForm from './WorkProfileForm'

function WorkProfile() {
  return (
    <div>   
      <Header_CvCreate/>
      <div className='body h-full m-auto w-1/2'>
        <div>
            <ul className='navbar flex gap-5 justify-center'>
                <Link to="/profile/setting">
                  <li className="cursor-pointer relative text-black font-light after:absolute after:bottom-0 after:h-0.5 after:left-0  after:bg-amber-600 hover:text-amber-600 hover:after:w-full">Thông tin cá nhân</li>
                </Link>
                <Link to="/profile/setting/workprofile"><li className="cursor-pointer text-amber-600 relative border-b-amber-600 after:absolute after:bottom-0 after:h-0.5 after:left-0  after:bg-amber-600 hover:text-amber-600 hover:after:w-full">Hồ sơ làm việc</li></Link>
                <li className="cursor-pointer relative after:absolute after:bottom-0 after:h-0.5 after:left-0  after:bg-amber-600 hover:text-amber-600 hover:after:w-full">Hồ sơ năng lực</li>
                <li className="cursor-pointer relative after:absolute after:bottom-0 after:h-0.5 after:left-0  after:bg-amber-600 hover:text-amber-600 hover:after:w-full">Xác thực thông tin</li>
            </ul>
        </div>
  
         <WorkProfileForm/>
    </div></div>
  )
}

export default WorkProfile