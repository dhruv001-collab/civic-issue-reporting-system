import React from 'react'
import Nav from '../../components/Header/Header'
import ReportIssueleft from '../../components/ReportIssue/ReportIssueleft'
import ReportIssueRight from '../../components/ReportIssue/ReportIssueRight'
import Footer from "../../components/Footer/Footer";

const ReportIssue = () => {
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
