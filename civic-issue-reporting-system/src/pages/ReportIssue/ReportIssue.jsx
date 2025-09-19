import React from 'react'
import Nav from '../../components/Header/Header'
import ReportIssueleft from '../../components/ReportIssue/ReportIssueleft'
import ReportIssueRight from '../../components/ReportIssue/ReportIssueRight'
import Footer from "../../components/Footer/Footer";

const ReportIssue = () => {
  return (
    <>
      <Nav/>
      <div className='grid grid-cols-2 mx-auto w-11/12 gap-10 my-6'>
        <ReportIssueleft/>
        <ReportIssueRight/>
      </div>
      <Footer/>

    </>
  )
}

export default ReportIssue
