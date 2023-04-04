import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import { userDetailsReducer, userLoginReducer, userProfileReducer, userRegisterReducer, userUpdateProfileReducer } from './Reducer/UserReducer';
import { getAllJobReducer, getJobDetailReducer, jobApplyReducer, jobCreateReducer } from './Reducer/JobReducer';

const reducer = combineReducers({
  
    userLogin:userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
    createJob:jobCreateReducer,
    getAllJob: getAllJobReducer,
    getSingleJob: getJobDetailReducer,
    jobApply: jobApplyReducer,
    getUserProfile: userProfileReducer
});

    //login

    const userInfoFromLocalStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo"))
: null;

const initialState = {
 
    userLogin:{ userInfo:userInfoFromLocalStorage },
    
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;