import React from 'react';
import worldBackground from '../../assets/world.png';
import HeroImg from '../../assets/Hero-img.png'; 

const Hero = () => {
  return (
    <div className='h-[90vh] relative flex items-center justify-center overflow-hidden bg-white'>
      <img
        className='absolute w-full h-full object-cover opacity-65' 
        src={worldBackground}
        alt="World map background"
      />
      <div className='relative z-10 w-full max-w-6xl mx-auto p-4 md:p-8 flex flex-col md:flex-row items-center justify-between'>
        <div className='flex-1 text-center lg:text-left mb-8 lg:mb-0 lg:pr-12'>
          <h1 className='text-4xl md:text-5xl md:text-left text-balance sm:text-balance mt-60 md:mt-0 font-extrabold text-gray-900 leading-tight mb-4'>
            Crowdsourced <span className='text-teal-500'>Civic Issue</span> Reporting and Resolution System
          </h1> 
          <p className='text-lg md:text-xl text-balance md:text-left md:text-balance text-gray-700 mb-8'>
            See a problem like a pothole, garbage, or broken streetlight? Just click a photo and share it. Your report helps the right people take action.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
            <input
              type='text'
              placeholder='Enter a nearby postcode, or street name and area'
              className='flex-grow px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800'
            />
            <button className='px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-colors duration-200'>
              Continue
            </button>
          </div>
        </div>


        <div className='flex-1 flex justify-center lg:justify-end '>
          <img
            src={HeroImg}
            alt="Collage of civic issues"
            className='max-w-full h-auto rounded-xl'
           
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;