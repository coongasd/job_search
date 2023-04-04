import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllJob } from "../../Redux/Action/JobAction";

function MostViewedJob() {
    const dispatch = useDispatch();

    const { jobs } = useSelector((state) => state.getAllJob)
    const keyword = useParams();
    console.log(keyword?.keyword)
   
    useEffect(() => {
        dispatch(getAllJob(keyword?.keyword));
    }, [dispatch,keyword])
    return (
        <div style={{ backgroundImage: 'url(https://www.topcv.vn/v4/image/welcome/linear_web.png)' }} className='container '>
            <div className='ml-20 mr-20'>
                <h2 className='text-amber-600 text-xl font-bold text-center py-5'>Các công việc được quan tâm nhất</h2>
                <div className='list-job-box m-auto'>
                    {
                        jobs && jobs.map((job) =>
                        (
                            <>
                                <div key={job?._id} className='single-job text-left p-5 border-2 rounded '>
                                    <a href={`/job/${job?._id}`} className='text-amber-500'>{job?.jobTitle}</a>
                                    <p className='ml-5 mt-1'>{job?.user?.userInfo?.name}</p>
                                    <div className='job-required flex justify-between bg-gray-200 mt-5'>
                                        <p className='mx-10 text-slate-500 font-bold '>Toàn Quốc | {job?.jobField} | {job?.projectInfo?.budget}</p>
                                        <p className=''>{job?.projectInfo?.limitTime}</p>
                                    </div>
                                    <div className='description mt-5 ml-2'>
                                        {job?.detailRequirement}
                                    </div>
                                    <div className='job-category mt-3 flex cursor-pointer'>
                                        <p className='text-sm p-1 rounded bg-blue-400 text-white'>{job?.jobField}</p>
                                    </div>
                                </div>
                            </>
                        )
                        )
                    }

                    {/* <div className='single-job text-left p-5 border-2 rounded '>
                    <a href="#" className='text-amber-500'>Thiết kế website máy ảnh, phụ kiện máy ảnh</a>
                    <p className='ml-5 mt-1'>Minh Nhật</p>
                    <div className='job-required flex justify-between bg-gray-200 mt-5'>
                        <p className='mx-10 text-slate-500 font-bold '>Toàn Quốc | Lập trình web | 15.000.000 đ - 20.000.000 đ</p>
	@@ -68,7 +37,7 @@ function MostViewedJob() {
                    <div className='job-category mt-3 flex cursor-pointer'>
                        <p className='text-sm p-1 rounded bg-blue-400 text-white'>Dựng website bán hàng</p>
                    </div>
                </div> */}

                </div>
                <button className='ml-auto bg-amber-600 p-2 text-center'>Xem tất cả công việc</button>
            </div>
        </div>
    )
}
export default MostViewedJob