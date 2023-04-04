import React, { useState } from 'react'
import { useDispatch } from 'react-redux';


function Header() {
 
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
  
    setIsOpen(!isOpen);
  }
  
  return (
   <div className="fixed bg-white w-full z-50 border">
        <nav className='flex flex-row justify-between items-center h-16'>
            <div className="Logo basis-1/6 justify-start">
              <a href="/">
                <img className='w-1/2 h-16' alt="Job Search ứng dụng tìm việc" src="images/logo.png"></img>
              </a>
            </div>
            <ul className="basis-4/6 flex items-center justify-start gap-8 font-medium">
              <li id="menu-bar" >
                <a className='cursor-pointer py-1 relative hover:text-amber-600 after:absolute 
              after:left-0 after:bottom-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all after:ease-in-out after:duration-300'  onMouseEnter={toggle}>
                  Việc làm
                </a>
                {
                  isOpen && (
                    <div onMouseLeave={toggle} className="absolute rounded bg-white shadow-lg shadow-black">
                      <ul className="">
                        <li class="py-5 pr-5 hover:bg-slate-300 cursor-pointer">
                          <a href="" class="pl-2 flex gap-5 hover:text-amber-600 text-sm text-black">
                            <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" class="text-amber-600 bi bi-binoculars" viewBox="0 0 16 16">
                              <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V2.5zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5h-1zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V4zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V3zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14z"/>
                            </svg>
                             Tìm việc làm
                          </a>
                        </li>
                        <li class="hover:bg-slate-300 cursor-pointer py-5 pr-5">
                          <a href="" class="pl-2 flex gap-5 hover:text-amber-600 text-sm ">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-amber-600 bi bi-briefcase" viewBox="0 0 16 16">
                            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
                          </svg>
                            Việc làm đã ứng tuyển
                          </a>
                        </li>
                        <li class="hover:bg-slate-300 cursor-pointer py-5 pr-5">
                          <a href="" class="pl-2 flex gap-5 hover:text-amber-600 text-sm ">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-amber-600 bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                          </svg>
                            Việc làm đã lưu
                          </a>
                        </li>
                      </ul>
                  </div>
                  )
                }
              
              </li>
              <li className=''>
                <a className='cursor-pointer py-1 hover:text-amber-600 relative after:absolute 
              after:left-0 after:bottom-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all after:ease-in-out after:duration-300' href="#">
                  Hồ sơ & CV
                </a>

              </li>
              <li className='cursor-pointer py-1 hover:text-amber-600 relative after:absolute 
              after:left-0 after:bottom-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all after:ease-in-out after:duration-300'>
                <a href="#">
                  Công ty
                </a>
                {/* {
                  isOpen && (
                    <div className=" absolute w-max top-17 pr-20 pl-2  shadow-lg shadow-black">
                      <ul className="">
                        <li class="text-start py-5">
                          <a href="" class="text-sm text-black">
                            <i class=""></i>
                            Danh sách công ty
                          </a>
                        </li>
                        <li class="text-start py-5">
                          <a href="" class="text-sm ">
                            <i class=""></i>
                            Top công ty
                          </a>
                        </li>
                    
                      </ul>
                  </div>
                  )
                } */}
              </li>
            </ul>
            <ul className="basis-1/6 flex items-center gap-8 justify-start mr-5">
              <li id="nav-notification" className="navbar-right__item icon dropdown notification">
                <a href="javascript:void(0)" className="text-amber-600 text-xl">
                 <li className='fa fa-bell noti-icon'></li>
                </a> 
              </li>
              <li className=''>
                <a className="flex" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p>User</p>
                </a>
              </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header