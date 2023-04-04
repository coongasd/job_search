import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { login, register } from '../../Redux/Action/UserAction';
import { useHistory}  from 'react-router';
function Register({location}) {

    
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [name,setName] = useState("");
   
    const dispatch = useDispatch();
    const userRegister = useSelector((state) => state.userRegister);
   const {error} = userRegister
    const redirect = location?.search ? location.search?.split("=")[1] : "/";
    const userLogin = useSelector((state) => state.userLogin);
 
    const {userInfo, loading} = userLogin;
    console.log(error)
    const registerSubmitHandler = (e) => {
        e.preventDefault();
        if(password !== repeatPassword){
            alert("Mật khẩu xác nhận chưa chính xác")
        }
        else{
            dispatch(register(name,email,password));
         
        }
       
      
        
    }
    useEffect(() =>{
        
        if(userInfo){
           window.location = '/';
        } 
      
        },[userInfo,redirect]);
    

  return (
    <div style={{ backgroundImage: 'url(https://www.topcv.vn/v4/image/welcome/linear_web.png)'}} className='container flex'>
        <div className='left-content p-10 m-auto'>
            <div className=''>
                <img width="100" src="images/logo.png"/>
                <h2 className='font-bold text-start'>Chào mừng bạn dến với JobSearch,</h2>
                <p className='font-light text-sm text-slate-400'>Cùng xây dựng một hồ sơ nổi bật và nhận được
                 các cơ hội sự nghiệp lý tưởng</p>
            </div>
            <div className='form-register text-start'>
                <form onSubmit={registerSubmitHandler}>
                    <label for="fullname">Họ và tên</label><br/>
                    <div className='col input p-2 border rounded-lg transition-all duration-300 hover:border-amber-600 w-full'>
                        <span className="input-icon mr-2">
                            <i class="fa fa-user text-amber-600 ml-1" aria-hidden="true"></i>
                        </span>
                        <input  value={name} onChange={(e) => setName(e.target.value)} className='w-72 p-2 focus:outline-none bg-transparent' name="fullname"  placeholder='Nhập vào họ và tên của bạn' type="text"/>
                    </div>
                    <label for="email">Email</label><br/>
                    <div className='col input p-2 border rounded-lg transition-all duration-300 hover:border-amber-600 w-full'>
                        <span className="input-icon mr-2">
                            <i class="fa fa-envelope text-amber-600 ml-1" aria-hidden="true"></i>
                        </span>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className='w-72 p-2 focus:outline-none bg-transparent' name="email"  placeholder='Nhập vào email của bạn' type="email"/>
                    </div>
                    <label for="password">Mật khẩu</label><br/>
                    <div className='col input p-2 border rounded-lg transition-all duration-300 hover:border-amber-600 w-full'>
                        <span className="input-icon mr-2">
                            <i class="fa fa-shield text-amber-600 ml-1" aria-hidden="true"></i>
                        </span>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} className='w-72 p-2 focus:outline-none bg-transparent' name="password"  placeholder='Nhập mật khẩu của bạn' type="password"/>
                    </div>
                    <label for="repeatPassword">Nhập lại mật khẩu</label><br/>
                    <div className='col input p-2 border rounded-lg transition-all duration-300 hover:border-amber-600 w-full'>
                        <span className="input-icon mr-2">
                            <i class="fa fa-shield text-amber-600 ml-1" aria-hidden="true"></i>
                        </span>
                        <input  value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)}  className='w-72 p-2 focus:outline-none bg-transparent' name="repeatPassword"  placeholder='Xác nhận mật khẩu' type="password"/>
                    </div>
                    <p>Bằng việc đăng ký tài khoản, bạn đã đồng ý với Điều khoản dịch vụ và Chính sách bảo mật của chúng tôi</p>

                    {error && <h3 className="text-red-600 mt-5">{error}</h3>}
                    <button type="submit" className='w-full bg-amber-600 text-white ml-0'>Đăng ký</button>
                </form>
            </div>
            
        </div>
       
    </div>
  )
}

export default Register;