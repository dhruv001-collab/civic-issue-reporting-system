import React from 'react'
import howitworks from '../../assets/howitworks.png'


const ReportIssueRight = () => {
  return (
    <div className='min-w-full flex flex-col items-center min-h-[20vh] gap-10 '>
      <h1 className='font-bold text-lg'>How it Works?</h1>
      <img className='max-w-[80%]' src={howitworks} alt="" />
    </div>
  )
}

export default ReportIssueRight
