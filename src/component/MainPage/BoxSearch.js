import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {FaSearch} from "react-icons/fa";
function BoxSearch() {
    const [keyword,setKeyword] = useState();
    console.log(keyword)
  return (
    <div style={{ backgroundImage: 'url(https://www.topcv.vn/v4/image/welcome/linear_web.png)'}} id='box-search-job' className='z-1'>
        <h1 className='text-amber-600 text-2xl font-bold text-start py-16 ml-10'>Tìm kiếm việc làm phù hợp</h1>
        <div className='mt-5'>
            <div className="flex justify-center">
                <div className=''>
                    <div className='form-search float-left p-2'>
                        <form id='form-search-job'>
                            <div className='box-search'>    
                                <div className='col input p-2 border rounded-lg transition-all duration-300 hover:border-amber-600 w-full'>
                                    <span className="input-icon mr-2">
                                        <FaSearch class="fa fa-search" aria-hidden="true"></FaSearch>
                                    </span>
                                    <input onChange={(e) => setKeyword(e.target.value)} className='w-72 p-2 focus:outline-none bg-transparent' placeholder='Tên công việc, vị trí muốn ứng tuyển' type="text"/>
                                </div>
                                <div class="mt-5 col-button w-full">
                                    <Link to={`/search/${keyword}`}>
                                        <button className='btn rounded p-3 font-bold text-lime-50 bg-amber-600' type=''>Tìm việc ngay</button>
                                    </Link>
                                  
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='box-search-job-image'>
                    <img src="images/banner.png" width={440} height={350} alt="asd" className='img-responsive'></img>
                </div>
            </div>
           
          
        </div>
        
    </div>
  )
}

export default BoxSearch