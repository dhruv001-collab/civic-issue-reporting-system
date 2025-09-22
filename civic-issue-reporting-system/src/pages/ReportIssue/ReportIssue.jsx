import React from 'react'
import Nav from '../../components/Header/Header'
import ReportIssueleft from '../../components/ReportIssue/ReportIssueLeft'
import ReportIssueRight from '../../components/ReportIssue/ReportIssueRight'
import Footer from "../../components/Footer/Footer";
import { AppContext } from '../../Context/AppContext';
import { useContext } from 'react';

const ReportIssue = () => {
  const { setAllproducts, allproducts } = useContext(AppContext);
  return (
    <>
      <Nav/>
      <div className='grid grid-cols-1 lg:grid-cols-2 w-11/12 mx-auto gap-6 lg:gap-10 my-6'>
        <ReportIssueleft/>
        <ReportIssueRight/>
      </div>
      <Footer/>

    </>
  )
}

export default ReportIssue
