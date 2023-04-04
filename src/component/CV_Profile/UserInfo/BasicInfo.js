import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Toast from '../../Toast';
import {toast} from 'react-toastify'
import { updateUserProfile } from '../../../Redux/Action/UserAction';
function BasicInfo() {
   const userLogin = useSelector((state) => state.userLogin);
   const {userInfo} = userLogin;
   const [date,setDate] = useState("");
   const [name,setName] = useState("");
   const [email,setEmail] = useState("");
   const [newPassword, setNewPassword] = useState("");
   const [repeatNewPassword, setRepeatNewPassword] = useState("");
   const [contactNumber, setContactNumber] = useState("");
   const [userAddress, setUserAddress] = useState(""); 
   const {error, loading} = useSelector((state) => state.userUpdateProfile);

    const dispatch = useDispatch();
//use toast to display noti
const ToastId = React.useRef(null);
const ToastObject = {
  pauseOnFocusLoss : false,
  draggable :false,
  pauseOnHover:false,
  autoClose: 200,


}
const submitHandler = (e) => {
  
    e.preventDefault();
    if(newPassword!==repeatNewPassword){
      if(!toast.isActive(ToastId.current)){
        ToastId.current = toast.error("2 mật khẩu không trùng nhau",ToastObject);
      }

    }
    else{
      dispatch(updateUserProfile({id:userInfo?._id,name, email,dateOfBirth: date,password:newPassword,contactNumber:contactNumber,userAddress: userAddress}))
      if(error){
        if(!toast.isActive(ToastId.current)){
            ToastId.current = toast.error(error,ToastObject);
            
          }
      }
      else{
        if(!toast.isActive(ToastId.current)){
            ToastId.current = toast.success("Chỉnh sửa thành công",ToastObject);
            
          }
      }
      
    
    }
  };

    useEffect(() => {
        if(userLogin){
            setName(userInfo?.name);
            setEmail(userInfo?.email);
            setContactNumber(userInfo?.contactNumber);
            setDate(userInfo?.dateOfBirth);
            setUserAddress(userInfo?.userAddress)
        }
    },[userLogin])

   return (
    <div className='mt-5 ml-auto'>
     
        <br/>
        <Toast/>
        <div className='float-left'>
      
            <span className='border bg-amber-600 px-5 py-4 text-white rounded-full'>1</span>
            <b className='ml-1'>THÔNG TIN CHUNG</b> 
        </div>
        <br/>
        <div className='form mt-10'>
            <form onSubmit={submitHandler} className='text-left'>
                <div className=''>
                    <div className='flex gap-8'>
                        <label className='font-bold'>Ảnh đại diện*</label>
                        <img src="../images/user.png" width="80" height="80"alt=""></img>
                    </div>
                    <input name="avatar" type="file"></input><br/>
                    <br/>
                    <div className='flex gap-8 w-1/2 justify-between'>
                    
                        <label className='font-bold mt-2'>Họ và tên*</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='p-3 border rounded' placeholder='Họ và tên'></input>
                    </div><br/> 
                    
                    <div className='flex gap-8 w-1/2 justify-between'>
                    
                        <label className='font-bold mt-2'>Email*</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='p-3 border rounded' placeholder='Email'></input>
                    </div>
                    <br/> 
                    
                    <div className='flex gap-8 w-1/2 justify-between'>
                    
                        <label className='font-bold mt-2'>Thay đổi mật khẩu</label>
                        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className='p-3 border rounded' placeholder='Nhập mật khẩu mới'></input>
                        
                    </div>
                    <br/> 
                    
                    <div className='flex gap-8 w-1/2 justify-end'>
                        <input type="password" value={repeatNewPassword} onChange={(e) => setRepeatNewPassword(e.target.value)} className='p-3 border rounded' placeholder='Nhập lại mật khẩu mới'></input>
                    </div><br/>
                    <div className='flex gap-8 w-1/2 justify-between'>
                        <label className='font-bold mt-2'>Ngày sinh</label>
                        <input value={date} onChange={(e) => setDate(e.target.value)} type="date" className='p-3 border rounded' placeholder='Số điện thoại'></input>
                    </div>
                    <br/> 
                </div>
           
                    <div className='flex gap-8 w-1/2 justify-between'>
                        <label className='font-bold mt-2'>Số điện thoại</label>
                        <input value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} type="text" className='p-3 border rounded' placeholder='Số điện thoại'></input>
                    </div>
                    <br/> 
                    <div className='flex gap-8 w-1/2 justify-between'>
                        <label className='font-bold mt-2'>Địa chỉ</label>
                        <input value={userAddress} onChange={(e) => setUserAddress(e.target.value)} type="text" className='p-3 border rounded' placeholder='Nơi ở của bạn'></input>
                    </div>
                    <br/> 
             
               <button type="submit" className='p-1 bg-amber-600'>Lưu thay đổi</button>
             
            </form>
        </div>
    </div>
  )
}

export default BasicInfo