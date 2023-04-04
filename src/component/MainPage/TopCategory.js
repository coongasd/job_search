import React from 'react'
import Slider from "react-slick";

    



function TopCategory() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        arrows: false,
      };
  return (
    <div className='acontainer'>
        <div className='row-auto'>
            <div className='grid-cols-12'>
                <h2 className='text-amber-600 text-xl font-bold text-start py-5 ml-10'>Top ngành nghề nổi bật</h2>
                <div className='hidden sm:block row-auto center-category-top-professions transition slick-initialized slick-slider slick-dotted'>
                    <Slider {...settings}>
                        <div className="">
                             <div className="flex gap-20 justify-center">
                                <div className='cursor-pointer box-item flex  items-center gap-5 bg-amber-200 hover:text-white rounded p-5 hover:bg-amber-600'>
                                    <div className='icon p-5 border rounded-full bg-amber-600  '>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-white bi bi-briefcase" viewBox="0 0 16 16">
                                            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
                                        </svg>
                                    </div>
                                    <div className='text'>
                                        <h1 className='name-category font-bold'>Kinh doanh/ bán hàng</h1>
                                        <p className='count-category text-slate-700'>871 việc làm</p>
                                    </div>
                                </div>

                                <div className='bg-amber-200 cursor-pointer box-item flex  items-center gap-5 hover:text-white rounded p-5 hover:bg-amber-600'>
                                    <div className='icon p-5 border rounded-full bg-amber-600  '>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-white bi bi-briefcase" viewBox="0 0 16 16">
                                            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
                                        </svg>
                                    </div>
                                    <div className='text'>
                                        <h1 className='name-category font-bold'>Bất động sản</h1>
                                        <h1 className='count-category text-slate-700'>236 việc làm</h1>
                                    </div>
                                </div>

                                <div className='bg-amber-200 cursor-pointer box-item flex  items-center gap-5 hover:text-white rounded p-5 hover:bg-amber-600'>
                                    <div className='icon p-5 border rounded-full bg-amber-600  '>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-white bi bi-briefcase" viewBox="0 0 16 16">
                                            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
                                        </svg>
                                    </div>
                                    <div className='text'>
                                        <h1 className='name-category font-bold'>Ngân hàng/ tài chính</h1>
                                        <p className='count-category text-slate-700'>221 việc làm</p>
                                    </div>
                                </div>
                            
                         
                          
                            </div>
                        </div>
                        
                        <div>
                        <div className="flex gap-20 justify-center">
                                <div className='bg-amber-200 cursor-pointer box-item flex  items-center gap-5 hover:text-white rounded p-5 hover:bg-amber-600'>
                                    <div className='icon p-5 border rounded-full bg-amber-600  '>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-white bi bi-briefcase" viewBox="0 0 16 16">
                                            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
                                        </svg>
                                    </div>
                                    <div className='text'>
                                        <h1 className='name-category font-bold'>Nhân sự</h1>
                                        <p className='count-category text-slate-700'>311 việc làm</p>
                                    </div>
                                </div>

                                <div className='bg-amber-200 cursor-pointer box-item flex  items-center gap-5 hover:text-white rounded p-5 hover:bg-amber-600'>
                                    <div className='icon p-5 border rounded-full bg-amber-600  '>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-white bi bi-briefcase" viewBox="0 0 16 16">
                                            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
                                        </svg>
                                    </div>
                                    <div className='text'>
                                        <h1 className='name-category font-bold'>Tư vấn</h1>
                                        <p className='count-category text-slate-700'>2,336 việc làm</p>
                                    </div>
                                </div>

                                <div className='bg-amber-200 cursor-pointer box-item flex  items-center gap-5 hover:text-white rounded p-5 hover:bg-amber-600'>
                                    <div className='icon p-5 border rounded-full bg-amber-600  '>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-white bi bi-briefcase" viewBox="0 0 16 16">
                                            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
                                        </svg>
                                    </div>
                                    <div className='text'>
                                        <h1 className='name-category font-bold'>Dịch vụ khách hàng</h1>
                                        <p className='count-category text-slate-700'>2,221 việc làm</p>
                                    </div>
                                </div>
                            
                         
                          
                            </div>
                        </div>

                        <div>
                        <div className="flex gap-20 justify-center">
                                <div className='bg-amber-200 cursor-pointer box-item flex  items-center gap-5 hover:text-white rounded p-5 hover:bg-amber-600'>
                                    <div className='icon p-5 border rounded-full bg-amber-600  '>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-white bi bi-briefcase" viewBox="0 0 16 16">
                                            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
                                        </svg>
                                    </div>
                                    <div className='text'>
                                        <h1 className='name-category font-bold'>IT Phần mềm</h1>
                                        <p className='count-category text-slate-700'>8,711 việc làm</p>
                                    </div>
                                </div>

                                <div className='bg-amber-200 cursor-pointer box-item flex  items-center gap-5 hover:text-white rounded p-5 hover:bg-amber-600'>
                                    <div className='icon p-5 border rounded-full bg-amber-600  '>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-white bi bi-briefcase" viewBox="0 0 16 16">
                                            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
                                        </svg>
                                    </div>
                                    <div className='text'>
                                        <h1 className='name-category font-bold'>Kế toán, kiểm toán</h1>
                                        <p className='count-category text-slate-700'>236 việc làm</p>
                                    </div>
                                </div>

                                <div className='bg-amber-200 cursor-pointer box-item flex  items-center gap-5 hover:text-white rounded p-5 hover:bg-amber-600'>
                                    <div className='icon p-5 border rounded-full bg-amber-600  '>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-white bi bi-briefcase" viewBox="0 0 16 16">
                                            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
                                        </svg>
                                    </div>
                                    <div className='text'>
                                        <h1 className='name-category font-bold'>Ngân hàng/ tài chính</h1>
                                        <p className='count-category text-slate-700'>221 việc làm</p>
                                    </div>
                                </div>
                            
                         
                          
                            </div>
                        </div>
                    
                    </Slider>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default TopCategory