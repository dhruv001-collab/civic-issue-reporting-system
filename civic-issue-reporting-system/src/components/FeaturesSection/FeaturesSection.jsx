import React from 'react'
import darkWorld from '../../assets/darkWorld.png'
import { FeaturesHomeData } from '../../FeaturesHomeData/FeaturesHomeData'

const FeaturesSection = () => {
  return (
    <section className="w-full  relative bg-black flex justify-center  items-center lg:overflow-hidden scrollbar-none  lg:mt-20">
      <img
        src={darkWorld}
        className="w-full h-full object-cover absolute opacity-30"
        alt="World map background"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 relative z-10 max-w-6xl mx-auto">
        {FeaturesHomeData.map((data, index) => (
          <div
            key={index}
            className="p-6 rounded-xl shadow-lg border border-white/20 
                       bg-white/10 backdrop-blur-lg 
                       flex flex-col items-start text-white 
                       transition-transform duration-300 transform 
                       hover:scale-105 hover:bg-white/20"
          >
            <div className="mb-4">
              <img src={data.image} alt={data.title} className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
            <p className="text-gray-200">{data.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection
