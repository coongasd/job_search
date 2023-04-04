import React, { useEffect, useState } from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { v4 } from 'uuid'
import Header_CvCreate from '../../CV_Create/Header_CvCreate';
import {
    FaEnvelope,FaPhone,FaMapMarkerAlt


  } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { getUserProfile } from '../../../Redux/Action/UserAction';

function CandidateProfile() {


    const id = useParams();
    const {userProfile} = useSelector((state) => state.getUserProfile)
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo, loading, error } = userLogin;
  
    const dispatch = useDispatch();
    console.log(userProfile)
    useEffect(() => {
        if (!userInfo) {
            window.location = '/login';
        }
        // fetch profile data
        dispatch(getUserProfile(id?.id))
      
      
    }, [userInfo])

    var button = document.querySelector('button')
    if (button !== null) {
        button.onclick = () => {
            window.print();
        }

    }


    return (
        <div>
          <Header_CvCreate/>
            <div class="print-area">
                {/* <div class="header bg-transparent">

                    <form action="post" method='post'>
                         {selectedImage && (
                            <>
                                <img src={URL.createObjectURL(selectedImage)} id="image" />
                                <button onClick={() => setSelectedImage(null)} >Remove</button>

                            </>

                        )

                        } 

                        <input onChange={(event) => setSelectedImage(event.target.files[0])} type="file" name="" class="custom-file-input" id="imageFile"
                            accept="image/gif , image/jpeg , image/png" /> 
                         <button onClick={uploadImageToServer}>Upload</button>
                    </form>
                   

                </div> */}

                <div class="content">
                    
                    <div class="left-area">
                        <div class="contact">
                    
                            
                        <ul>
                            <li>
                            <span className='text-left m-5 flex items-center'>
                                <FaEnvelope/>
                                <p className='ml-2'>{userProfile?.email}</p>
                            </span>
                            </li>
                            <li>
                            <span className='m-5 text-left flex items-center'>
                                <FaPhone/>
                                <p className='ml-2'>{userProfile?.contactNumber}</p>
                            </span>
                            </li>
                            <li>
                            <span className='m-5 text-left flex items-center'>
                                <FaMapMarkerAlt/>
                                <p className='ml-2'>{userProfile?.userAddress}</p>
                            </span>
                            </li>
                        </ul>
                            
                          
                          
                        </div>
                        <div class="skills">
                            <h1>SKILLS</h1>
                            <div class="bars">
                                {
                                    userProfile?.skills?.map((skill) => (
                                        <>
                                            <div class="bar">
                                                <p>{skill}</p>
                                                <span></span>
                                            </div>
                                        </>
                                    )
                                    )


                                }

                            </div>
                        </div>
                        <div class="follow">
                            <h1>FOLLOW ME</h1>
                            <h4>Facebook</h4>
                            <p>{userProfile?.usersDetails?.facebook}</p>
                            <h4>Instagram</h4>
                            <p>{userProfile?.usersDetails?.instagram}</p>
                        </div>
                    </div>
                    <div class="right-area">
                        <div class="header-text">
                            <h1 className='text-black'> {userProfile?.name}</h1>
                            <p id="account-title">{userProfile?.accountTitle}</p>
                        </div>
                        <div class="about">
                            <h1 />
                            <p>{userProfile?.aboutMe}</p>
                        </div>
                        <div class="work">
                            <h1><span>
                                Kinh nghiệm làm việc</span></h1>
                            <div class="work-group">
                                <h3>LEAD WEB DESIGNER</h3>
                                <h4>ETC COLLEGE AMERICA</h4>
                                <span>2014/2016</span>
                                <p>Đỗ Minh Giang là tên mà ba mẹ đặt cho lúc em mới ra đời. Nhưng mọi người trong nhà vẫn
                                    quen
                                    gọi em là Bé Còi. Cái tên đó xem ra rất hợp với thân hình nhỏ nhắn và nói đúng hơn là
                                    còi
                                    cọc của em. Ăn rất khoẻ nhưng em nghịch cũng dữ nên mẹ bảo em không thể lớn được. Tuy là
                                    con
                                    gái nhưng em nghịch như tụi con trai. Mỗi buổi chiều đi học về em thường cùng tụi thằng
                                    Sơn,
                                    thằng Phúc xách chai đi đổ dế. Hôm nào chán tụi em lại rủ nhau đi đánh đáo, đánh khăng.
                                    Trong nhà em toàn bi, ảnh, quay, không thể kiếm đâu ra một con búp bê hay một bộ đồ hàng
                                    cả.
                                    Ba thường vừa cười vừa trêu em “đáng lẽ Bé Còi nhà ta phải là con trai mới đúng”. Thành
                                    tích
                                    học tập của em rất tốt. Năm ngoái em còn được nhà trường cử đi thi học sinh giỏi môn
                                    Toán
                                    nữa đấy. Mơ ước lớn nhất của em là được trở thành phi công, lái những chiếc máy bay thật
                                    lớn, thật to bay lên bầu trời cao và trong xanh trên kia. Em tin chắc rằng mình sẽ thực
                                    hiện
                                    được ước mơ đó.</p>
                            </div>
                          
                        </div>
                        <div class="education">
                            <h1><span><i class="fas fa-book"></i>
                                Học vấn</span></h1>
                            <div class="edu-group">
                                <h4>Go to sleep <br />
                                </h4>
                                <span>1992/1995</span>
                                <p>Đỗ Minh Giang là tên mà ba mẹ đặt cho lúc em mới ra đời. Nhưng mọi người trong nhà vẫn
                                    quen
                                    gọi
                                    em là Bé Còi. Cái tên đó xem ra rất hợp với thân hình nhỏ nhắn và nói đúng hơn là còi
                                    cọc
                                    của
                                    em. Ăn rất khoẻ nhưng em nghịch cũng dữ nên mẹ bảo em không thể lớn được. Tuy là con gái
                                    nhưng
                                    em nghịch như tụi con trai. Mỗi buổi chiều đi học về em thường cùng tụi thằng Sơn, thằng
                                    Phúc
                                    xách chai đi đổ dế. Hôm nào chán tụi em lại rủ nhau đi đánh đáo, đánh khăng. Trong nhà
                                    em
                                    toàn
                                    bi, ảnh, quay, không thể kiếm đâu ra một con búp bê hay một bộ đồ hàng cả. Ba thường vừa
                                    cười
                                    vừa trêu em “đáng lẽ Bé Còi nhà ta phải là con trai mới đúng”. Thành tích học tập của em
                                    rất
                                    tốt. Năm ngoái em còn được nhà trường cử đi thi học sinh giỏi môn Toán nữa đấy. Mơ ước
                                    lớn
                                    nhất
                                    của em là được trở thành phi công, lái những chiếc máy bay thật lớn, thật to bay lên bầu
                                    trời
                                    cao và trong xanh trên kia. Em tin chắc rằng mình sẽ thực hiện được ước mơ đó.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CandidateProfile