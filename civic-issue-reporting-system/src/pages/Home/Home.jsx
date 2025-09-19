import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import RecentlyReported from "../../components/RecentlyReported/RecentlyReported";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <RecentlyReported />
      <FeaturesSection />
      <Footer/>
    </div>
  );
};

export default Home;
