import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/Action/UserAction';
import Header_CvCreate from '../CV_Create/Header_CvCreate';

function Login() {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
 
    const {userInfo, error, loading} = userLogin;
    const submitHandler = (e) =>
    {
        e.preventDefault();
        dispatch(login(email,password));
        
    }
    useEffect(() =>{
        
        if(userInfo){
           window.location = '/';
        } 
      
        },[userInfo]);
    

  return (
    <div style={{ backgroundImage: 'url(https://www.topcv.vn/v4/image/welcome/linear_web.png)'}} className='flex min-h-full'>
        <div className='left-content p-20 m-auto'>
            <div className=''>
                <img width="100" src="images/logo.png"/>
                <h2 className='font-bold text-start'>Chào mừng bạn dến với JobSearch,</h2>
                <p className='font-light text-sm text-slate-400'>Cùng xây dựng một hồ sơ nổi bật và nhận được
                 các cơ hội sự nghiệp lý tưởng</p>
            </div>
            <div className='form-register text-start'>
                <form onSubmit={submitHandler}>
                    
                    <label for="email">Email</label><br/>
                    <div className='col input p-2 border rounded-lg transition-all duration-300 hover:border-amber-600 w-full'>
                        <span className="input-icon mr-2">
                            <i class="fa fa-envelope text-amber-600 ml-1" aria-hidden="true"></i>
                        </span>
                        <input onChange={(e) => setEmail(e.target.value)} className='w-72 p-2 focus:outline-none bg-transparent' name="email"  placeholder='Nhập vào email của bạn' type="email"/>
                    </div>
                    <label for="password">Mật khẩu</label><br/>
                    <div className='col input p-2 border rounded-lg transition-all duration-300 hover:border-amber-600 w-full'>
                        <span className="input-icon mr-2">
                            <i class="fa fa-shield text-amber-600 ml-1" aria-hidden="true"></i>
                        </span>
                        <input onChange={(e) => setPassword(e.target.value)} className='w-72 p-2 focus:outline-none bg-transparent' name="password"  placeholder='Nhập mật khẩu của bạn' type="password"/>
                    </div>
                    {error && <h3 className="text-red-600 mt-5">{error}</h3>}
                    <button type='submit' className='w-full bg-amber-600 text-white ml-0'>Đăng nhập</button>
                    <p className='text-center font-light text-slate-400 mb-5'>Hoặc</p>
                    <div className='social-media-login flex m-auto gap-5 justify-center'>
                        <a id="login-width-google" class="border border-black h-fit p-3 rounded bg-blue-700 text-white cursor-pointer">
                            <i class="fa-brands fa-facebook"></i>
                            <span class="ml-2">Facebook</span>
                        </a>
                        <a id="login-width-google" class="border border-black h-fit p-3 rounded bg-orange-700 text-white cursor-pointer">
                            <i class="fa-brands fa-google"></i>
                            <span class="ml-2">Google</span>
                        </a>
                        <a id="login-width-google" class="border border-black h-fit p-3 rounded bg-blue-900 text-white cursor-pointer">
                            <i class="fa-brands fa-linkedin"></i>
                            <span class="ml-2">Linkedin</span>
                        </a>
                    </div>
                    <div className='flex justify-between mt-5'>
                        Bạn chưa có tài khoản? <a href="/register"><p className='text-amber-600 font-bold cursor-pointer'>Đăng ký ngay</p></a>
                    </div>
                </form>
            </div>
            
        </div>
      
    </div>
  )
}

export default Login