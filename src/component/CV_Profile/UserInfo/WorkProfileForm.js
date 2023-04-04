import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Toast from '../../Toast';
import { toast } from 'react-toastify'
import { updateUserProfile } from '../../../Redux/Action/UserAction';
import TextInput from 'react-autocomplete-input';
import 'react-autocomplete-input/dist/bundle.css';
function WorkProfileForm() {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo, error, loading } = userLogin;

    const [accountTitle, setAccountTitle] = useState("");
    const [userType, setUserType] = useState("");
    const [aboutMe, setAboutMe] = useState("");
    const [skills, setSkills] = useState([]);

    const dispatch = useDispatch();
    //use toast to display noti
    const ToastId = React.useRef(null);
    const ToastObject = {
        pauseOnFocusLoss: false,
        draggable: false,
        pauseOnHover: false,
        autoClose: 200,


    }
        useEffect(() => {
            setAccountTitle(userInfo?.accountTitle);
            setUserType(userInfo?.userType);
            setAboutMe(userInfo?.aboutMe);
        },[userInfo])

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setSkills(oldArray => [...oldArray, e.target.value]);
            e.target.value = "";
            console.log(skills);
        }
    }

    const submitHandler = (e) => {

        e.preventDefault();
        dispatch(updateUserProfile({ id: userInfo._id, userType: userType, aboutMe: aboutMe,accountTitle: accountTitle,skills:skills }))
        if (!toast.isActive(ToastId.current)) {
            ToastId.current = toast.success("Chỉnh sửa thành công", ToastObject);

        }
        setTimeout(() => {
            window.location.reload()
        },3000)


    };


    return (
        <div className='mt-5 ml-auto'>

            <br />
            <Toast />
            <div className='float-left'>

                <span className='border bg-amber-600 px-5 py-4 text-white rounded-full'>1</span>
                <b className='ml-1'>GIỚI THIỆU CHUNG</b>
            </div>

            <div className='form mt-10'>
                <form onSubmit={submitHandler} className='text-left'>
                    <div className=''>

                        <br />
                        <div className='flex gap-8 w-1/2 justify-between'>

                            <label className='font-bold mt-2'>Tôi là*</label>
                            <select value={userType} onChange={(e) => setUserType(e.target.value)} id="vlance_accountbundle_accounttype_type" name="vlance_accountbundle_accounttype[type]" required="required" placeholder="Loại hình tài khoản" data-toggle="popover" data-placement="right" data-content="Chọn <b>Freelancer</b> nếu bạn đang tìm việc.<br/>Chọn <b>Nhà tuyển dụng</b> nếu bạn đang tìm kiếm freelancer." data-trigger="hover" data-html="true" class="w-1/2" data-original-title="" title="">
                                <option value="freelancer" selected="selected">Freelancer</option>
                                <option value="client">Nhà tuyển dụng</option>
                            </select>
                        </div><br />

                        <div className='flex gap-8 w-1/2 justify-between'>

                            <label className='font-bold mt-2'>Chức danh*</label>
                            <input value={accountTitle} onChange={(e) => setAccountTitle(e.target.value)} type="text" className='p-3 border rounded' placeholder=''></input>
                        </div>
                        <p className="text-slate-500 font-light">Ví dụ Lập trình viên PHP / Chuyên gia thiết kế đồ họa với 6 năm kinh nghiệm v.v...</p>
                        <br />

                        <div className='flex gap-8 w-full'>

                            <label className='font-bold mt-2'>Giới thiệu bản thân</label>
                            <textarea value={aboutMe} onChange={(e) => setAboutMe(e.target.value)} type="text" className='p-3 border rounded w-1/2' placeholder='Đôi điều về bản thân bạn'></textarea>

                        </div>
                        <br />

                        <div className='float-left'>

                            <span className='border bg-amber-600 px-5 py-4 text-white rounded-full'>2</span>
                            <b className='ml-1'>KINH NGHIỆM LÀM VIỆC</b>
                        </div><br /><br /><br />
                        <div className='flex gap-8 w-full'>

                            <label className='font-bold mt-2'>Lĩnh vực chuyên môn</label>
                            <select id="vlance_accountbundle_accounttype_category" name="vlance_accountbundle_accounttype[category]" required="required" placeholder="Lĩnh vực" data-toggle="popover" data-placement="right" data-content="Lĩnh vực chuyên môn mà bạn đang hoạt động chính." data-trigger="hover" class="popovers-input w-1/2" data-original-title="" title="">
                                <optgroup label="IT và lập trình">
                                    <option value="2" selected="selected">Lập trình web</option>
                                    <option value="3">Ứng dụng di động</option>
                                    <option value="8">Việc lập trình khác</option>
                                    <option value="9">Lập trình phần mềm</option>
                                    <option value="10">Tối ưu cho công cụ tìm kiếm - SEO</option>
                                    <option value="11">Tư vấn, thiết kế hệ thống mạng</option>
                                    <option value="40">QA Tester</option>
                                    <option value="42">Quản lý dự án</option>
                                    <option value="71">Lập trình nhúng</option>
                                    <option value="72">AI - Trí tuệ nhân tạo, Machine Learning</option> </optgroup>
                                <optgroup label="Marketing &amp; Bán hàng">
                                    <option value="26">Quảng cáo google adwords – SEM</option>
                                    <option value="27">Cộng tác viên bán hàng</option>
                                    <option value="28">Tư vấn bán hàng &amp; Giới thiệu sản phẩm</option>
                                    <option value="29">Nghiên cứu &amp; khảo sát thị trường</option>
                                    <option value="30">Việc KD và marketing khác</option>
                                    <option value="33">Tổ chức sự kiện</option>
                                    <option value="50">Tư vấn, lập kế hoạch &amp; triển khai marketing online</option>
                                    <option value="51">Quảng cáo facebook</option>
                                    <option value="52">Email marketing</option>
                                    <option value="53">Forum seeding</option>
                                    <option value="83">Tiếp thị liên kết</option> </optgroup>
                                <optgroup label="Trợ lý, Nhập liệu &amp; Hành chính">
                                    <option value="32">Nhập dữ liệu</option>
                                    <option value="36">Việc hành chính khác</option>
                                    <option value="54">Trợ lý từ xa</option>
                                    <option value="55">Xử lý dữ liệu</option>
                                    <option value="56">Hợp đồng</option>
                                    <option value="60">Tuyển dụng</option> </optgroup>
                                <optgroup label="Lĩnh vực khác">
                                    <option value="38">Chụp ảnh</option>
                                    <option value="39">Tuyển dụng</option> </optgroup>
                                <optgroup label="Thiết kế">
                                    <option value="7">Thiết kế Logo</option>
                                    <option value="13">Thiết kế đồ họa</option>
                                    <option value="14">Thiết kế giao diện Website</option>
                                    <option value="15">Banner quảng cáo</option>
                                    <option value="16">Nhãn hiệu và bao bì</option>
                                    <option value="17">Làm video clip</option>
                                    <option value="18">Ảnh và chỉnh sửa ảnh</option>
                                    <option value="20">Các việc thiết kế khác</option>
                                    <option value="43">Thiết kế bộ nhận diện thương hiệu</option>
                                    <option value="44">Thiết kế flash &amp; HTML5</option>
                                    <option value="45">Thiết kế giao diện ứng dụng di động</option>
                                    <option value="46">Thiết kế brochure</option>
                                    <option value="47">Thiết kế infographic</option> </optgroup>
                                <optgroup label="Kế toán, Thuế &amp; Luật">
                                    <option value="34">Kế toán</option>
                                    <option value="35">Tư vấn luật</option>
                                    <option value="59">Hồ sơ pháp lý</option> </optgroup>
                                <optgroup label="Viết lách &amp; dịch thuật">
                                    <option value="6">Viết báo &amp; tạp chí</option>
                                    <option value="21">Quản lý blog &amp; fanpage</option>
                                    <option value="22">Dịch thuật</option>
                                    <option value="23">Viết sách</option>
                                    <option value="24">Viết bài PR &amp; quảng cáo sáng tạo</option>
                                    <option value="48">Copywriting</option>
                                    <option value="49">Viết bài SEO, nội dung cho website</option>
                                    <option value="61">Biên tập &amp; chỉnh sửa nội dung</option>
                                    <option value="73">Viết bài review đánh giá sản phẩm</option>
                                </optgroup>
                                <optgroup label="Kiến trúc và xây dựng">
                                    <option value="19">Thiết kế nội thất nhà và chung cư</option>
                                    <option value="64">Thiết kế ngoại thất</option>
                                    <option value="65">Thiết kế xây dựng nhà</option>
                                    <option value="66">Dựng phối cảnh 3D</option>
                                </optgroup>
                                <optgroup label="Video">
                                    <option value="68">Video hoạt hình</option>
                                    <option value="69">TVC giới thiệu sản phẩm, công ty</option>
                                    <option value="70">Video review</option>
                                </optgroup>
                                <optgroup label="Đào tạo &amp; Khoá học">
                                    <option value="76">Ngoại ngữ</option>
                                    <option value="77">Đào tạo kỹ năng mềm</option>
                                    <option value="78">Gia sư</option>
                                </optgroup>
                                <optgroup label="Tư vấn doanh nghiệp &amp; Coaching">
                                    <option value="80">Cải tiến quy trình doanh nghiệp</option>
                                    <option value="81">Tư vấn chiến lược kinh doanh</option>
                                    <option value="82">Coaching</option>
                                </optgroup>
                            </select>
                        </div>
                        <br />
                    </div>
                    <div className='right'>
                        <div className='flex gap-8 w-1/2 justify-between'>
                            <label className='font-bold mt-2'>Trình độ*</label>
                            <select id="vlance_accountbundle_accounttype_level" name="vlance_accountbundle_accounttype[level]" required="required" placeholder="profile.edit_profile.level.placeholder" data-toggle="popover" data-placement="right" data-trigger="hover" data-html="true" class="popovers-input" data-original-title="" title="">
                                <option disabled="disabled">Chọn mức kinh nghiệm phù hợp</option>
                                <option value="beginner" selected="selected">1 - Mới đi làm</option>
                                <option value="professional">2 - Đã có kinh nghiệm</option>
                                <option value="expert">3 - Chuyên gia</option>
                            </select>

                        </div>
                        <div class="subtitle mt-5 text-slate-500">
                            Hãy chọn mức "Trình độ" đúng với năng lực của bạn để được nhận những công việc phù hợp:<br />
                            - <b>Mới đi làm</b> (dưới 2 năm kinh nghiệm, bạn sẽ dễ dàng nhận được các việc đơn giản, ngân sách thấp)<br />
                            - <b>Đã có kinh nghiệm</b> (có từ 2-5 năm kinh nghiệm, bạn sẽ dễ dàng nhận được các việc vừa phải)<br />
                            - <b>Chuyên gia</b> (trên 5 năm kinh nghiệm, bạn sẽ dễ dàng nhận được các việc yêu cầu chuyên môn cao, ngân sách cao)
                        </div>
                        <br />

                        <div className='flex gap-8 w-1/2 justify-between'>
                            <label className='font-bold mt-2'>Kĩ năng</label>
                            <TextInput onSelect={selectedValue => {
                                setSkills(oldArray => [...oldArray, selectedValue])

                            }} value="" onKeyDown={handleKeyDown} trigger={["", " "]} options={["HTML5", "CSS3", "Javascript", "ReactJS", "Python", "PHP", "NodeJS", "Java", "C++"]} />
                            {
                                skills && skills.map((skill) => (
                            
                                    <div className='flex gap-2 items-center' key={skill}>
                                        <p className="text-black font-bold">{skill}</p>
                                        <span onClick={() => console.log(skills)} className='text-red-500 cursor-pointer font-bold'>x</span>
                                    </div>


                                ))
                            } {
                                userInfo?.skills && userInfo?.skills.map((skill) => (
                            
                                    <div className='flex gap-2 items-center' key={skill}>
                                        <p className="text-black font-bold">{skill}</p>
                                        <span onClick={() => console.log(skills)} className='text-red-500 cursor-pointer font-bold'>x</span>
                                    </div>


                                ))
                            }
                        </div>
                        <br />
                    </div>
                    <button type="submit" className='p-1 bg-amber-600'>Lưu thay đổi</button>

                </form>
            </div>
        </div>
    )

}

export default WorkProfileForm