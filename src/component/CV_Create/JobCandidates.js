import Header_CvCreate from "./Header_CvCreate";
import Manager_CV from "./Manager_CV";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../MainPage/Header";
import "./style.css";
import { getAllJob, getSingleJob } from "../../Redux/Action/JobAction";
import moment from "moment";
import { useParams } from "react-router-dom";
import {FaCheck, FaEye} from "react-icons/fa";
function JobCandidates() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const id = useParams();
  const { error, loading, userInfo } = userLogin;
  const { jobs } = useSelector((state) => state.getAllJob)

  const {job} = useSelector((state) => state.getSingleJob);

 
  useEffect(() => {
    dispatch(getSingleJob(id?.id));
}, [dispatch,id])



  console.log(job)
 
  return (
    <div className="min-h-screen">
      <Header_CvCreate />,
      <div class="Manager_CV_Container">
        <div class="Manager_CV_BoxLeft">
        <div class="Manager_CV_Items_Company">
            <div class="Company_Text">
              <h1>Các ứng viên đã ứng tuyển công việc</h1>
              <h2>{job?.jobTitle}</h2>
            </div>
            {
              job?.offers?.length !== 0  ? 
              (job?.offers?.map((offer) => 
              (<>
               <div key={offer?._id} class="Company_Items">
                <div class="Company_Description">
                 
                  <div class="Company_Link">
                    <a href={`/profile/${offer.users.userInfo._id}`}>
                      {offer?.users?.userInfo?.name}
                    </a>
                    <a href="#">{offer?.users?.userInfo?.email}</a>
                  </div>
                  <div className="Cv_Apply_State">
                      <p> {offer?.applyTime}</p>
                      <div>
                     
                          <a href={`/profile/${offer.users?.userInfo?._id}`}>
                            <FaEye class="fa fa-eye" aria-hidden="true"></FaEye>
                          </a>
                          
                      </div>
                  </div>
                </div>
              <div class="Company_State">
  
                <p>Hà Nội</p>
            
              </div>
            </div>
              </>))) :  (<><p className="text-red-500 text-3xl font-bold">Chưa có ai ứng tuyển</p></>)
}
              
           
           
          </div>

          
          <div class="Manager_CV_BoxBottom"></div>
        </div>
      </div>
    </div>
  );
}

export default JobCandidates;
