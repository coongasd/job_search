import React from "react";
import { useSelector } from "react-redux";
import Header from "../MainPage/Header";
import './style.css'

function Manager_CV () {

    const userLogin = useSelector((state) => state.userLogin);
    const {error, loading, userInfo} = userLogin;
  


    return (
      <div class="Manager_CV_Container">
        <div class="Manager_CV_BoxLeft">
            <div class="Manager_CV_Items">
                <img class="Banner_Image" src="images/job-banner.jpg" alt="banner Job search"></img>
            </div>

            <div class="Manager_CV_Items">
                <div class="Text_Button">
                    <h1>CV đã tạo trên job search</h1>
                    <button><a href="/profile">+ Tạo CV</a></button>
                </div>
                <div class="Text_Image">
                    <img src="https://www.topcv.vn/v4/image/cv-manager/no-cv.png"></img>
                    <p>Bạn chưa tạo cv nào</p>
                </div>
            </div>

            <div class="Manager_CV_Items">
            <div class="Text_Button">
                    <h1>CV đã tải lên job search</h1>
                    <button>^ Tải CV lên</button>
                </div>
                <div class="Text_Image">
                    <img src="https://www.topcv.vn/v4/image/cv-manager/no-cv-upload.png"></img>
                    <p>Bạn chưa tải cv nào lên</p>
                </div>
            </div>

            <div class="Manager_CV_Items">
            <div class="Text_Button">
                    <h1>job search profile</h1>
                    <button>+ Tạo CV</button>
                </div>
                <div class="Text_Image">
                    <img src="https://www.topcv.vn/v4/image/cv-manager/no-profile.png"></img>
                    <p>Bạn chưa tạo job search profile nào</p>
                </div>
            </div>

            <div class="Manager_CV_Items_Company">
               <div class="Company_Text">
                    <h1>Việc làm phù hợp với bạn</h1>
                    <p>Để nhận được gợi ý việc làm chính xác hơn, <a href="#">hãy tùy chỉnh cài đặt gợi ý việc làm.</a></p>
               </div>
               <div class="Company_Items">
                    <div class="Company_Description">
                        <img src="https://cdn.topcv.vn/48/company_logos/tek-experts-vietnam-62a553577f2a7.jpg"></img>
                        <div class="Company_Link">
                        <a href="#">IT Support Engineers - Microsoft Software Support (Fresher/Experienced)</a>
                        <a href="#">TEK EXPERTS VIETNAM</a>
                        </div>
                        <p>Còn 5 ngày để ứng tuyển</p>
                    </div>
                    <div class="Company_State">
                        <p>trên 600 USD</p>
                        <p>Hà Nội</p>
                        <p>4 Tháng trước</p>
                    </div>
               </div>
               <div class="Company_Items">
                    <div class="Company_Description">
                        <img src="https://cdn.topcv.vn/48/company_logos/F72vo3LteVph…659782352810227558cc47e64387ae292ed62b361.jpg"></img>
                        <div class="Company_Link">
                        <a href="#">Nhân Viên Kinh Doanh - Tư Vấn Chuyên Cho Thuê Căn Hộ - Nhà Phố - Mặt Bằng Kinh Doanh Tại Quận Tân Phú - Hồ Chí Minh (Thu Nhập Từ 20 - 50 Triệu Trở Lên)</a>
                        <a href="#">CÔNG TY TNHH CHANGHOUSE VIỆT NAM</a>
                        </div>
                        <p>Còn 3 ngày để ứng tuyển</p>
                    </div>
                    <div class="Company_State">
                        <p>trên 20 triệu</p>
                        <p>Hồ Chí Minh</p>
                        <p>3 Tuần trước</p>
                    </div>
               </div>
               <div class="Company_Items">
                    <div class="Company_Description">
                        <img src="	https://cdn.topcv.vn/48/company_logos/c3bdc859a308a9fa128c5bf8df6fd703-61c3f7d10f9fd.jpg"></img>
                        <div class="Company_Link">
                        <a href="#">Nhân Viên Marketing Online (Google Ads) - Lương Cứng Từ 10 - 15Tr + Thưởng </a>
                        <a href="#">CÔNG TY TNHH TRUYỀN THÔNG MEDIA POWER</a>
                        </div>
                        <p>Còn 2 ngày để ứng tuyển</p>
                    </div>
                    <div class="Company_State">
                        <p>trên 15 triệu </p>
                        <p>Hà Nội</p>
                        <p>4 năm trước</p>
                    </div>
               </div>
               <div class="Company_Items">
                    <div class="Company_Description">
                        <img src="https://cdn.topcv.vn/48/company_logos/tek-experts-vietnam-62a553577f2a7.jpg"></img>
                        <div class="Company_Link">
                        <a href="#">IT Support Engineers - Microsoft Software Support (Fresher/Experienced)</a>
                        <a href="#">TEK EXPERTS VIETNAM</a>
                        </div>
                        <p>Còn 5 ngày để ứng tuyển</p>
                    </div>
                    <div class="Company_State">
                        <p>trên 600 USD</p>
                        <p>Hà Nội</p>
                        <p>4 Tháng trước</p>
                    </div>
               </div>
               <div class="Company_Items">
                    <div class="Company_Description">
                        <img src="https://cdn.topcv.vn/48/company_logos/tek-experts-vietnam-62a553577f2a7.jpg"></img>
                        <div class="Company_Link">
                        <a href="#">IT Support Engineers - Microsoft Software Support (Fresher/Experienced)</a>
                        <a href="#">TEK EXPERTS VIETNAM</a>
                        </div>
                        <p>Còn 5 ngày để ứng tuyển</p>
                    </div>
                    <div class="Company_State">
                        <p>trên 600 USD</p>
                        <p>Hà Nội</p>
                        <p>4 Tháng trước</p>
                    </div>
               </div>
            </div>
        </div>
        <div class="Manager_CV_BoxRight">
            <div class="Manager_CV_BoxTop">
                <div class="BoxTop_Avatar">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp_q8yprYUCumkTMHohLWFK6pXeIMCggV-aYyKrr4gjA"></img>
                    <a>Cập nhật ảnh</a>
                </div>
               
                <div class="BoxTop_Text_Button">
                    <p>Chào mừng trở lại</p>
                    <h1>{userInfo?.name}</h1>
                    <p>Tài khoản chưa được xác thực</p>
                    <button class="BoxRight_Button">Nâng cấp tài khoản</button>
                </div>
                <div class="BoxRight_CheckBox">
                    <div>
                        <input type={'checkbox'} class="check" />
                        <p class="checkbox_text">Trạng thái tìm kiếm việc làm</p>
                    </div>
                    <div class="text_description">
                        <p>Bật tìm việc để nhận được nhiều cơ hội việc làm tốt nhất từ Job Search.</p>
                    </div>
                    
                </div>

                <div class="BoxRight_CheckBox">
                    <div>
                        <input type={'checkbox'} class="check" />
                        <p class="checkbox_text">Cho phép NTD liên hệ bạn qua</p>
                    </div>
                    <div class="text_description">
                        <p>Bật để cho phép các đơn vị tuyển dụng uy tín, 
                            Headhunter đã được Job search xác thực xem CV Online của bạn.
                        </p>

                        <p style={{color: "red", padding: '20px 0'}} >Khởi tạo TopCV Profile để gia tăng 300% cơ hội việc làm tốt
                        </p>

                        <button style={{position: 'absolute', left:'-14px', width: '275px'}} class="BoxRight_Button">Tạo JobSearch Profile</button>
                    </div>
                </div>
            </div>
            <div class="Manager_CV_BoxBottom">
                
            </div>
        </div>

        
      </div>
    );
}

export default Manager_CV;