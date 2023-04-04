import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getSingleJob, jobApply } from '../../Redux/Action/JobAction';
import Header_CvCreate from '../CV_Create/Header_CvCreate'
import moment from "moment";
import Toast from '../Toast';
import { toast } from 'react-toastify'
function JobDetails() {
    const dispatch = useDispatch();
    const id = useParams();

    const {job} = useSelector((state) => state.getSingleJob);
    const [moneyExpect, setMoneyExpect] = useState("");
    const [timeToComplete,setTimeToComplete] = useState("");
    const {success}  = useSelector((state) => state.jobApply);
 
    const userLogin = useSelector((state) => state.userLogin)
    const  {userInfo} = userLogin;
   
    

    //get current time
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    // const found  = job?.offers?.find((element) => {
    //     if(element.users.userInfo._id === userInfo?._id)
    //     {
    //         return true;
    //     }
    // })
    
    // if user applied this job, they cant apply again
    const found  = job?.offers?.map((e) => {
        if(e.users.userInfo._id === userInfo?._id){
            return true
        }
        else{
            return false
        }
    })
    const applied = found?.some((e) => e === true)
    
    // if this job was post by user, they cant apply
    const postOwnerId = job?.user?.userInfo?._id;

    const ownerCheck = postOwnerId === userInfo?._id ? true : false;
    
    useEffect(() => {
        dispatch(getSingleJob(id?.id))
        if(success){
            window.location.reload()
        }
    },[id,dispatch,success])

    const applyHandler =  (e) => {
       e.preventDefault();
        dispatch(
            jobApply(id?.id,
        {
            users:{userInfo},
            moneyExpect:moneyExpect,
            applyTime: dateTime,
            timeToComplete: timeToComplete

        }))
        if (!toast.isActive(ToastId.current)) {
            ToastId.current = toast.success("Nộp CV thành công", ToastObject);
      
        }
      
      }
      const ToastId = React.useRef(null);
      const ToastObject = {
          pauseOnFocusLoss: false,
          draggable: false,
          pauseOnHover: false,
          autoClose: 200,
  
  
      }

    return (
        <div className='main-content'>
            <Header_CvCreate />
            <Toast />
            <div className='container flex'>
                <div className='left-content ml-10 my-5 w-2/4 text-left'>
                    <div className='job-requirement'>
                        <h2 className='job-title text-2xl font-bold float-left mb-5'>{job?.jobTitle}</h2><br/><br/><br/><br/>
                        <span className='float-left bg-gray-300 p-2 '>
                            Dịch vụ cần thuê: <b className='text-sky-600 cursor-pointer'>{job?.jobField} </b>
                        </span><br/><br/>
                        <div className='mt-5'>
                            {job?.detailRequirement}
                        </div>
                    </div>
                    <div className='send-profile mt-5 bg-gray-200 p-3 rounded'>
                        <form onSubmit={applyHandler}>
                            <h2 className='font-bold text-2xl '>THÔNG TIN CHÀO GIÁ</h2>
                            <hr class="border"></hr>
                            <div>
                                <div class="span5">
                                    <div class="block-amount vlance_jobbundle_bidtype_amount">
                                        <label class="title-in-form">ĐỀ XUẤT CHI PHÍ<span class="text-red">*</span></label>
                                        <div class="block-amount-detail">
                                            <div className="flex gap-9 mt-3 border w-full p-3 bg-slate-300 rounded">
                                                <dt class="block-amount-label price">
                                                    Bạn muốn nhận </dt>
                                                <dd class="block-amount-price">
                                                    <div class="input-append border rounded p-2 bg-white ">
                                                        <input  onChange={(e) => setMoneyExpect(e.target.value)} style={{outline: "none"}} id="vlance_jobbundle_bidtype_customers_pay" className="" autocomplet="off" type="text" pattern="^(0|[1-9][0-9/.]*)$" disabled="" placeholder="2.700.000" required />
                                                        <span class="add-on bonus">VNĐ</span>
                                                    </div>
                                                </dd>
                                            </div>
                                    
                                        
                                        
                                        </div>
                                    </div>
                                    <div class="form-text block-duration mt-2">
                                        <label class="title-in-form">DỰ KIẾN HOÀN THÀNH TRONG<span class="text-red">*</span></label><br/>
                                        <select onChange={(e) => setTimeToComplete(e.target.value)} id="vlance_jobbundle_bidtype_duration" name="vlance_jobbundle_bidtype[duration]" required="required"  placeholder="ví dụ: 14" className="w-1/2 p-2 row-fluid span12 valid">
                                            <option value="1">1 Ngày</option>
                                            <option value="2">2 Ngày</option>
                                            <option value="3" selected="selected">3 Ngày</option>
                                            <option value="5">5 Ngày</option>
                                            <option value="7">7 Ngày</option>
                                            <option value="10">10 Ngày</option>
                                            <option value="14">2 Tuần</option>
                                            <option value="21">3 Tuần</option>
                                            <option value="28">4 Tuần</option>
                                            <option value="42">6 Tuần</option></select>
                                    </div>
                                </div>
                            </div>
                            {
                                ownerCheck && (<> <button className="m-0 bg-black mt-4" disabled>Đây là việc do bạn đăng</button></>)  || (
                                    applied &&(<>
                                        <button className="m-0 bg-black mt-4" disabled>Bạn đã gửi chào giá</button>
                                    </>) ||  <button className="m-0 bg-amber-600 mt-4">Gửi chào giá</button>
                                )
                            }
                            
                           
                        </form>
                       
                    </div>


                </div>
                <div className=' right-content project-box w-1/2 mt-1 p-3 border shadow-md'>
                    <b className="float-left text-xl">Thông tin dự án</b><br /><br />
                    <div class="description-job">

                        <div className='flex gap-20 justify-start mb-2'>
                            <dt>ID dự án</dt>
                            <dd className=''>{job?._id}</dd>
                        </div>
                        <div className='flex gap-20 justify-start mb-2'><dt>Ngày đăng</dt>
                            <dd className='ml-1'>
                                { moment(job?.createdAt).format('l')} </dd></div>
                        <div className='flex gap-20 justify-start mb-2'>
                            <dt>Thời gian tuyển</dt>
                            <dd className='ml-7'>{job?.projectInfo?.limitTime}</dd>
                        </div>
                        <div className='flex gap-20 justify-start mb-2'>   <dt>Địa điểm</dt>
                            <dd className='ml-5'>
                                TP. Hồ Chí Minh </dd></div>
                        <div className='flex w-full gap-20 justify-start mb-2'><dt>Ngân sách</dt>
                            <dd className='ml-2'>
                                {job?.projectInfo?.budget} </dd> </div>
                        <div className='flex gap-20 justify-start mb-2'><dt>Hình thức làm việc</dt>
                            <dd>
                                {job?.projectInfo?.workingForm} </dd></div>
                        <div className='flex gap-20 justify-start mb-2'> <dt>Hình thức trả lương</dt>
                            <dd>
                                {job?.projectInfo?.salaryPaymentMethod}</dd></div>


                    </div>
                    <b className="float-left text-xl">Thông tin khách hàng</b><br /><br />
                    <div className='user-description'>
                        <div className='ml-2 flex gap-8'>
                            <img src="images/user.png" alt="user" />
                            <p className='text-sky-500'>{job?.user?.userInfo?.name}</p>

                        </div>
                        <div className='flex gap-20 justify-start mb-2'>
                            <dt>Đến từ</dt>
                            <dd>
                                TP. Hồ Chí Minh </dd></div>
                    </div>
                    <div className='flex gap-20 justify-start mb-2'>
                        <dt>Tham gia vào</dt>
                        <dd>
                            { moment(job?.user?.userInfo?.created).format('l')} 
                        </dd>
                    </div>
                    <button className='mx-0 my-3 w-full bg-amber-600'>Liên hệ trực tiếp</button>
                </div>
            </div>
        </div>


    )
}

export default JobDetails