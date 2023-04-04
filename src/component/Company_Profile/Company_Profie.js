import Header_CvCreate from "../CV_Create/Header_CvCreate";
import Search_Header from "../CV_Create/Search_Header";

function Company_Profile() {
    return(
        <div>
            <Header_CvCreate></Header_CvCreate>,
            <Search_Header></Search_Header>,
            <div className="Company_Wrapper">
                <div className="box_header_company">
                    <div className="job_title">
                        <div className="company_image">
                        <img src="https://cdn.topcv.vn/80/company_logos/cong-ty-cp-phat-trien-noi-dung-blue-c-608100484a90b.jpg" alt="company_img"></img>
                        </div>
                        <div className="company_title">
                        <h1>Chuyên Viên Nội Dung <a>(Content write)</a></h1>
                        <h1>Công ty CP Phát triển nội dung Blue C</h1>
                        <p> Hạn nộp hồ sơ: 01/10/2022</p>
                        </div>
                        
                    </div>
                    <div className="job_title_button">

                    </div>
                </div>
                <div className="box_info_job">
                    
                </div>
            </div>
        </div>
        
    );
}

export default Company_Profile;