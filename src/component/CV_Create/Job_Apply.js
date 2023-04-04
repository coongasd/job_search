import Header_CvCreate from "./Header_CvCreate";
import Manager_CV from "./Manager_CV";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../MainPage/Header";
import "./style.css";
import { getAllJob } from "../../Redux/Action/JobAction";

function Job_Apply() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;
  const { jobs } = useSelector((state) => state.getAllJob)
  const appliedJob = [];
  useEffect(() => {
    dispatch(getAllJob());
}, [dispatch])
  console.log(jobs)

  const found = jobs?.map((job) => {
    job.offers.map((offer) => {
      if(offer.users.userInfo._id === userInfo?._id){
        appliedJob.push(job);
        
      }
    }
     
    )
  })
  
  return (
    <div>
      <Header_CvCreate />,
      <div class="Manager_CV_Container">
        <div class="Manager_CV_BoxLeft">
        <div class="Manager_CV_Items_Company">
            <div class="Company_Text">
              <h1>Công việc đã ứng tuyển</h1>
            </div>
            {
              appliedJob?.length !== 0  ? 
              (appliedJob.map((job) => 
              (<>
               <div key={job._id} class="Company_Items">
                <div class="Company_Description">
                 
                  <div class="Company_Link">
                    <a href={`/job/${job._id}`}>
                     {job.jobTitle}
                    </a>
                    <a href="#">{job.user?.userInfo?.name}</a>
                  </div>
                  <div className="Cv_Apply_State">
                      <p> {job.offers?.map((offer) => (<>{offer.applyTime}</>))}</p>
                      <div>
                          <a href="#">Nhắn tin</a>
                          <a href="#" style={{color: '#fff'}}>Xem CV</a>
                      </div>
                  </div>
                </div>
              <div class="Company_State">
                <p>{job.projectInfo?.budget}</p>
                <p>Hà Nội</p>
                <p>4 Tháng trước</p>
              </div>
            </div>
              </>))) :  (<><p className="text-red-500 text-3xl font-bold">Bạn chưa ứng tuyển công việc nào</p></>)
}
              
           
           
          </div>

          <div class="Manager_CV_Items_Company">
            <div class="Company_Text">
              <h1>Việc làm phù hợp với bạn</h1>
              <p>
                Để nhận được gợi ý việc làm chính xác hơn,{" "}
                <a href="#">hãy tùy chỉnh cài đặt gợi ý việc làm.</a>
              </p>
            </div>
            <div class="Company_Items">
              <div class="Company_Description">
                <img src="https://cdn.topcv.vn/48/company_logos/tek-experts-vietnam-62a553577f2a7.jpg"></img>
                <div class="Company_Link">
                  <a href="#">
                    IT Support Engineers - Microsoft Software Support
                    (Fresher/Experienced)
                  </a>
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
                  <a href="#">
                    Nhân Viên Kinh Doanh - Tư Vấn Chuyên Cho Thuê Căn Hộ - Nhà
                    Phố - Mặt Bằng Kinh Doanh Tại Quận Tân Phú - Hồ Chí Minh
                    (Thu Nhập Từ 20 - 50 Triệu Trở Lên)
                  </a>
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
                  <a href="#">
                    Nhân Viên Marketing Online (Google Ads) - Lương Cứng Từ 10 -
                    15Tr + Thưởng{" "}
                  </a>
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
                  <a href="#">
                    IT Support Engineers - Microsoft Software Support
                    (Fresher/Experienced)
                  </a>
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
                  <a href="#">
                    IT Support Engineers - Microsoft Software Support
                    (Fresher/Experienced)
                  </a>
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
                <input type={"checkbox"} class="check" />
                <p class="checkbox_text">Trạng thái tìm kiếm việc làm</p>
              </div>
              <div class="text_description">
                <p>
                  Bật tìm việc để nhận được nhiều cơ hội việc làm tốt nhất từ
                  Job Search.
                </p>
              </div>
            </div>

            <div class="BoxRight_CheckBox">
              <div>
                <input type={"checkbox"} class="check" />
                <p class="checkbox_text">Cho phép NTD liên hệ bạn qua</p>
              </div>
              <div class="text_description">
                <p>
                  Bật để cho phép các đơn vị tuyển dụng uy tín, Headhunter đã
                  được Job search xác thực xem CV Online của bạn.
                </p>

                <p style={{ color: "red", padding: "20px 0" }}>
                  Khởi tạo TopCV Profile để gia tăng 300% cơ hội việc làm tốt
                </p>

                <button
                  style={{
                    position: "absolute",
                    left: "-14px",
                    width: "275px",
                  }}
                  class="BoxRight_Button"
                >
                  Tạo JobSearch Profile
                </button>
              </div>
            </div>
          </div>
          <div class="Manager_CV_BoxBottom"></div>
        </div>
      </div>
    </div>
  );
}

export default Job_Apply;
