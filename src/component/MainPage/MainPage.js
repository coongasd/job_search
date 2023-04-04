import React from 'react';
import BoxSearch from './BoxSearch';
import MostViewedJob from './MostViewedJob';
import TopCategory from './TopCategory';
import Header_CvCreate from '../CV_Create/Header_CvCreate';
import Search_Header from '../CV_Create/Search_Header';

function MainPage() {
  return (
    <div className="content-wraper  text-base mx-auto relative">
        <Header_CvCreate />
        <BoxSearch/>
        <TopCategory/>
        <MostViewedJob/> 
    </div>
   
  )
}

export default MainPage