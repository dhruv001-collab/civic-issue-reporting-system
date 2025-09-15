import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import RecentlyReported from '../../components/RecentlyReported/RecentlyReported'

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <RecentlyReported/>
    </div>
  )
}

export default Home
