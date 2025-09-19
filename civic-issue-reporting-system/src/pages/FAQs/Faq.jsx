import React, { useState } from 'react';
import Nav from '../../components/Header/Header';
import FaqImage from '../../assets/Faqs_header.png';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FaqData } from '../../FaqData/FaqData';
import Footer from '../../components/Footer/Footer';

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState(FaqData[0].category);
  const [openFaq, setOpenFaq] = useState({});

  const toggleFaq = (question) => {
    setOpenFaq(prevState => ({
      ...prevState,
      [question]: !prevState[question]
    }));
  };
  const activeFaqs = FaqData.find(item => item.category === activeCategory)?.faqs || [];

  return (
    <>
      <Nav />
      <section className='container mx-auto px-4 py-8 md:py-16 lg:py-0' >
        <nav className='flex flex-col md:flex-row md:items-center md:justify-between'>
          <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl text-gray-800 leading-tight mb-1 md:mb-0'>
            Frequently Asked Questions
          </h1>
          <div className='w-full md:w-1/2 lg:w-1/3 h-[200px] lg:h-[250px] '>
            <img className='w-full h-full object-contain' src={FaqImage} alt="FAQs illustration" />
          </div>
        </nav>
      </section>
      
      <section className='container mx-auto px-4  lg:py-16'>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='w-full md:w-1/3 bg-gray-50 p-6 rounded-lg shadow-inner border border-gray-100'>
            <h2 className='text-2xl font-semibold text-gray-700 mb-4 border-b pb-2 border-gray-200'>
              Categories
            </h2>
            <ul className='space-y-2'>
              {FaqData.map((item, index) => (
                <li
                  key={index}
                  className={`
                    px-4 py-3 rounded-md cursor-pointer transition-colors duration-200
                    ${activeCategory === item.category 
                      ? 'bg-teal-200 text-teal-500 font-bold' 
                      : 'hover:bg-gray-100 text-gray-600'}
                  `}
                  onClick={() => setActiveCategory(item.category)}
                >
                  {item.category}
                </li>
              ))}
            </ul>
          </div>
          <div className='w-full md:w-2/3'>
            {activeFaqs.map((faq, index) => (
              <div key={index} className='border-b border-gray-200 py-4'>
                <div
                  className='flex justify-between items-center cursor-pointer'
                  onClick={() => toggleFaq(faq.question)}
                >
                  <h3 className='text-lg font-semibold text-gray-800'>{faq.question}</h3>
                  <div className='ml-4 text-blue-500 transition-transform duration-300'>
                    {openFaq[faq.question] ? <AiOutlineMinus /> : <AiOutlinePlus />}
                  </div>
                </div>
                {openFaq[faq.question] && (
                  <p className='mt-2 text-gray-600 leading-relaxed transition-all duration-300 ease-in-out'>
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Faq;