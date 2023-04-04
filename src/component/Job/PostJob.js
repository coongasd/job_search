import React, { useEffect, useState } from "react";
import "../Job/style.css";
import Toast from '../Toast';
import { toast } from 'react-toastify'
import Header_CvCreate from "../CV_Create/Header_CvCreate";
import { useDispatch, useSelector } from "react-redux";
import { createJob } from "../../Redux/Action/JobAction";

function PostJob() {

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo} = userLogin;

  const {success} = useSelector((state) => state.createJob);
  const dispatch = useDispatch();

  const [field,setField] = useState("");
  const [name,setName] = useState("");
  const [detailRequirement,setDetailRequirement] = useState("");
  const [skillsRequirement,setSkillsRequirement] = useState("");
  const [limitTime,setLimitTime] = useState("");
  const [workingForm, setWorkingForm] = useState("");
  const [salaryPaymentMethod, setSalaryPaymentMethod] = useState("");
  const [budget, setBudget] = useState("")
  
  const ToastId = React.useRef(null);
    const ToastObject = {
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: false,
        autoClose: 200,


    }

  console.log({field, name, detailRequirement, skillsRequirement, limitTime, workingForm, salaryPaymentMethod, budget})
  const postJobHandler = (e) => {
    e.preventDefault();
    dispatch(
      createJob({
        user:{userInfo},
        jobField: field,
        jobTitle: name,
        detailRequirement: detailRequirement,
        projectInfo:{ 
          skillsRequirement: skillsRequirement,
          limitTime: limitTime,
          workingForm: workingForm,
          salaryPaymentMethod: salaryPaymentMethod,
          budget: budget,}
    
      })
    );
    if (!toast.isActive(ToastId.current)) {
      ToastId.current = toast.success("Thêm dự án thành công", ToastObject);

  }
  }
  console.log(success)
  useEffect(() => {
    if(success){
  
        window.location ='/';
    }
  },[success])
  return (
    <div className="post_wrapper">
      <Header_CvCreate></Header_CvCreate>
      <Toast />
      <h1>ĐĂNG TIN</h1>
      <div className="post_forms">
      
        <div className="Information_form">
          <form onSubmit={postJobHandler} className="list_form">
            <div className="item_form">
              <div>
                <h1>Việc cần tuyển</h1>
                <p>Chọn lĩnh vực cần tuyển</p>
              </div>
              <select onChange={(e) => setField(e.target.value)}
                id="vlance_jobbundle_jobtype_category"
                name="vlance_jobbundle_jobtype[category]"
                required="required"
                placeholder="Chọn lĩnh vực phù hợp"
                data-toggle="popover"
                data-placement="top"
                data-content="Chọn lĩnh vực phù hợp"
                data-trigger="hover"
                class="popovers-input span12"
              >
                <option disabled="disabled" selected="selected">
                  - Tên lĩnh vực -
                </option>{" "}
                <optgroup label="IT và lập trình">
                  <option value="Lập trình web">Lập trình web</option>
                  <option value="Ứng dụng di động">Ứng dụng di động</option>
                  <option value="Việc lập trình khác">Việc lập trình khác</option>
                  <option value="Lập trình phần mềm">Lập trình phần mềm</option>
                  <option value="Tối ưu cho công cụ tìm kiếm - SEO">Tối ưu cho công cụ tìm kiếm - SEO</option>
                  <option value="Tư vấn, thiết kế hệ thống mạng">Tư vấn, thiết kế hệ thống mạng</option>
                  <option value="QA Tester">QA Tester</option>
                  <option value="Quản lý dự án">Quản lý dự án</option>
                  <option value="Lập trình nhúng">Lập trình nhúng</option>
                  <option value="AI - Trí tuệ nhân tạo, Machine Learning">
                    AI - Trí tuệ nhân tạo, Machine Learning
                  </option>{" "}
                </optgroup>
                <optgroup label="Marketing &amp; Bán hàng">
                  <option value="Quảng cáo google adwords – SEM">Quảng cáo google adwords – SEM</option>
                  <option value="Cộng tác viên bán hàng">Cộng tác viên bán hàng</option>
                  <option value="Tư vấn bán hàng &amp; Giới thiệu sản phẩm">
                    Tư vấn bán hàng &amp; Giới thiệu sản phẩm
                  </option>
                  <option value="Nghiên cứu &amp; khảo sát thị trường">
                    Nghiên cứu &amp; khảo sát thị trường
                  </option>
                  <option value="Việc KD và marketing khác">Việc KD và marketing khác</option>
                  <option value="Tổ chức sự kiện">Tổ chức sự kiện</option>
                  <option value="Tư vấn, lập kế hoạch &amp; triển khai marketing online">
                    Tư vấn, lập kế hoạch &amp; triển khai marketing online
                  </option>
                  <option value="Quảng cáo facebook">Quảng cáo facebook</option>
                  <option value="Email marketing">Email marketing</option>
                  
                </optgroup>
              
              </select>
             
              <div>
                <p>Đặt tên cụ thể cho công việc cần tuyển</p>
              </div>
              <input onChange={(e) => setName(e.target.value)}
                type="text"
                required="required"
                maxlength="255"
                placeholder="VD: Thiết kế trang web bán hàng cao cấp"
              ></input>
            </div>

            <div className="item_form">
              <div>
                <h1>Thông tin đầy đủ về yêu cầu tuyển dụng</h1>
                <p>
                  Nội dung chi tiết, và các đầu việc cần Freelancer thực hiện
                  (càng chi tiết, freelancer càng có đầy đủ thông tin để gửi báo
                  giá chính xác hơn).
                </p>
              </div>
              <textarea  onChange={(e) => setDetailRequirement(e.target.value)}
                placeholder="Ví dụ: Các giao diện website cần thiết kế như trang chủ, xem hàng, thanh toán..."
                rows={"20"}
              ></textarea>
              <div>
                <a>Thêm tài liệu đính kèm</a>
              </div>

              <div>
                <p>Kỹ năng yêu cầu phải có</p>
                <input onChange={(e) => setSkillsRequirement(e.target.value)}
                  type="text"
                  id="vlance_jobbundle_jobtype_skill"
                  data-provide="typeahead"
                  name="hiddenTagListA"
                  placeholder="VD: Photoshop, Tiếng Anh,..."
                  class="tm-input"
                  data-original-title=""
                  title=""
                ></input>
              </div>
              <div>
                <p>Hạn cuối nhận chào giá của </p>
                <input  onChange={(e) => setLimitTime(e.target.value)}
                  type="text"
                  id="vlance_jobbundle_jobtype_closeAt"
                  name="vlance_jobbundle_jobtype[closeAt]"
                  required="required"
                  placeholder="VD: 08/10/2022"
                  title=""
                  autocomplete="off"
                  data-toggle="popover"
                  data-placement="top"
                  data-content="Hạn nhận báo giá, VD: 24/11/2016"
                  data-trigger="hover"
                  class="popovers-input span12"
                ></input>
              </div>

              <div>
                <p>Hình thức làm việc</p>
                <select  onChange={(e) => setWorkingForm(e.target.value)}
                  id="vlance_jobbundle_jobtype_onsiteLocation"
                  name="vlance_jobbundle_jobtype[onsiteLocation]"
               
                
                  placeholder="ví dụ: 14"
                  class="row-fluid span12"
                >
                  <option value="Làm online">Làm online</option>
                  <option value="Làm tại văn phòng" selected="selected">
                    Làm tại văn phòng
                  </option>
                </select>
              </div>
            </div>
            <div className="item_form">
                <div>
                  <h1>Ngân sách dự kiến chi cho công việc này</h1>
                  <p>Hình thức trả lương</p>
                </div>
                <select  onChange={(e) => setSalaryPaymentMethod(e.target.value)}
                  id="vlance_jobbundle_jobtype_typePay"
                  name="vlance_jobbundle_jobtype[typePay]"
                  required="required"
                  pattern="[0-9]*"
                  placeholder="ví dụ: 14"
                  class="row-fluid span12 valid"
                >
                  <option value="Trả theo dự án" selected="selected">
                    Trả theo dự án
                  </option>
                  <option value="Trả theo giờ">Trả theo giờ</option>
                  <option value="Trả theo tháng">Trả theo tháng</option>
                </select>
                <div>
                  <p>Số tiền tối đa tôi có thể trả trong khoảng</p>
                 
                  <input  onChange={(e) => setBudget(e.target.value)} type="text" id="vlance_jobbundle_jobtype_budgetMax" placeholder="Ví dụ : Từ 10 - 15tr VND" data-toggle="popover" data-placement="top" data-content="Thù lao dự kiến, VD: 500.000" data-trigger="hover" class="popovers-input span12"></input>
                </div>
              </div>
              <button type="submit" className="bg-amber-600">Đăng tin</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostJob;
