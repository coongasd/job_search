import axios from "axios";
import { ALL_JOB_FAIL, ALL_JOB_REQUEST, ALL_JOB_SUCCESS, JOB_APPLY_FAIL, JOB_APPLY_REQUEST, JOB_APPLY_SUCCESS, JOB_DETAIL_FAIL, JOB_DETAIL_REQUEST, JOB_DETAIL_SUCCESS, JOB_POST_FAIL, JOB_POST_REQUEST, JOB_POST_SUCCESS } from "../Constants/JobConstants";
import { logout } from "./UserAction";
export const createJob = (job) => async(dispatch,getState) => {
    try {
        dispatch({type: JOB_POST_REQUEST});
       
    const {
        userLogin: {userInfo}, 
    } = getState();


    const config ={
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
        },
    };
    const {data} = await axios.post(
        `http://localhost:5000/api/job`,job,
        config
    );
    dispatch({type: JOB_POST_SUCCESS, payload: data});



    } catch (error) {
        const message =  error.response && error.response.data.message ? error.response.data.message
        : error.message;
        if(message === "Not authorized, token failed")
        {
            dispatch(logout);
        }
        dispatch({
            type: JOB_POST_FAIL,
            payload:
            message,

        });
    }


}

// get all job
export const getAllJob = (keyword = " ") => async(dispatch,getState) => {
    try {
        dispatch({type: ALL_JOB_REQUEST});
       
    const {
        userLogin: {userInfo}, 
    } = getState();


    const config ={
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
        },
    };
    const {data} = await axios.get(
        `http://localhost:5000/api/job?keyword=${keyword}`,
        config
    );
    dispatch({type: ALL_JOB_SUCCESS, payload: data});



    } catch (error) {
        const message =  error.response && error.response.data.message ? error.response.data.message
        : error.message;
        if(message === "Not authorized, token failed")
        {
            dispatch(logout);
        }
        dispatch({
            type: ALL_JOB_FAIL,
            payload:
            message,

        });
    }


}

export const getSingleJob = (id) => async(dispatch) => {
    try {
        dispatch({type: JOB_DETAIL_REQUEST});
        const {data} = await axios.get(`http://localhost:5000/api/job/${id}`);
        dispatch({ type:JOB_DETAIL_SUCCESS, payload: data });
        
    } catch (error) {
        dispatch({
            type: JOB_DETAIL_FAIL,
            payload:
            error.response && error.response.data.message ? error.response.data.message
            : error.message
        });
    }
}


//order pay
export const jobApply = (jobId,offers) => async(dispatch,getState) => {
    try {
        dispatch({type: JOB_APPLY_REQUEST});
       
    const {
        userLogin: {userInfo}, 
    } = getState();


    const config ={
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
        },
    };
    const {data} = await axios.put(
        `http://localhost:5000/api/job/${jobId}/apply`,offers,
        config
    );
    dispatch({type: JOB_APPLY_SUCCESS, payload: data});
   


    } catch (error) {
        const message =  error.response && error.response.data.message ? error.response.data.message
        : error.message;
        if(message === "Not authorized, token failed")
        {
            dispatch(logout);
        }
        dispatch({
            type: JOB_APPLY_FAIL,
            payload:
            message,

        });
    }


}
