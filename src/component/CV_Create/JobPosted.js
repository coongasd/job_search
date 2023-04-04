import Header_CvCreate from "./Header_CvCreate";
import Manager_CV from "./Manager_CV";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../MainPage/Header";
import "./style.css";
import { getAllJob } from "../../Redux/Action/JobAction";
import moment from "moment";
function JobPosted() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;
  const { jobs } = useSelector((state) => state.getAllJob)
  const postedJob = [];
  useEffect(() => {
    dispatch(getAllJob());
}, [dispatch])
  console.log(jobs)

  const found = jobs?.map((job) => {
    if(job.user?.userInfo._id === userInfo?._id){
      postedJob.push(job);
      
    }
  })
  console.log(postedJob)
  return (
    <div className="min-h-screen">
      <Header_CvCreate />,
      <div class="Manager_CV_Container">
        <div class="Manager_CV_BoxLeft">
        <div class="Manager_CV_Items_Company">
            <div class="Company_Text">
              <h1>Công việc đã đăng</h1>
            </div>
            {
              postedJob?.length !== 0  ? 
              (postedJob.map((job) => 
              (<>
               <div key={job._id} class="Company_Items">
                <div class="Company_Description">
                 
                  <div class="Company_Link">
                    <a href={`/job/candidates/${job._id}`}>
                     {job.jobTitle}
                    </a>
                    <a href="#">{job.user?.userInfo?.name}</a>
                  </div>
                  <div className="Cv_Apply_State">
                      <p> {moment(job?.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                      <div>
                     
                          <a href="#" style={{color: '#fff'}}>Những người đã ứng tuyển</a>
                      </div>
                  </div>
                </div>
              <div class="Company_State">
                <p>{job.projectInfo?.budget}</p>
                <p>Hà Nội</p>
                <p>{moment(job.createdAt, "YYYYMMDD").fromNow()}</p>
              </div>
            </div>
              </>))) :  (<><p className="text-red-500 text-3xl font-bold">Bạn chưa đăng công việc nào</p></>)
}
              
           
           
          </div>

          
          <div class="Manager_CV_BoxBottom"></div>
        </div>
      </div>
    </div>
  );
}

export default JobPosted;
