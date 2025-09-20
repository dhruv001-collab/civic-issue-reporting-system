import React, { useState } from 'react';
import email from '../../assets/email_icon.png';
import phone from '../../assets/phone_icon.png';
import location from '../../assets/location_icon.png';
import ContactUs from '../../assets/contact_us.png';
import reCaptcha from '../../assets/RecaptchaLogo.svg.webp';


const ContactPage = () => {
    const [open, setOpen] = useState(false);
    const [isHuman, setIsHuman] = useState(false);
    const [selected, setSelected] = useState('');


    const options = ['General Query', 'Technical Support', 'Return Status', 'Feedback'];

    const handleSelect = (option) => {
        setSelected(option);
        setOpen(false);
    };


    return (
        <div className="bg-gray-100 text-gray-800 min-h-screen">
            {/* Info Bar */}
            <div className="bg-teal-500 flex justify-center flex-col sm:flex-row items-center gap-5 text-white text-center py-3  text-sm">
                <span className='flex items-center gap-2 '>
                    <img className='w-8' src={phone} alt="" />
                    <p className='font-semibold'>
                        +91 996 896 9557
                    </p>
                </span>
                <p className='text-xl font-bold hidden sm:block '>
                    |
                </p>
                <p className="line w-full border-1 border-gray-300 sm:hidden"></p>
                <span className='flex items-center gap-2'>
                    <img className='w-8' src={email} alt="" />
                    <p className='font-semibold'>
                        urbanfixsupport@gmail.com
                    </p>
                </span>
                <p className='text-xl font-bold hidden sm:block'>
                    |
                </p>
                <p className="line w-full border-1 border-gray-300 sm:hidden"></p>
                <span className='flex items-center gap-2'>
                    <img className='w-8' src={location} alt="" />
                    <p className='font-semibold'>
                        New Delhi, India
                    </p>
                </span>

            </div>

            {/* Main Layout */}
            <div className='grid grid-cols-1 lg:grid-cols-2 w-11/12 mx-auto gap-6 lg:gap-10 my-6 px-2'>

                {/* Left Section */}
                <div className="lg:w-full space-y-4 lg:border-r-2 lg:border-gray-300 ">
                    <h2 className="text-4xl font-extrabold text-black">Contact Us</h2>
                    <p className="text-gray-600 ">
                        We are here to listen. If you have queries, suggestions, or feedback about reported civic issues, fill out the form or reach us directly through the details below.
                    </p>
                    <img
                        src={ContactUs}
                        alt="Illustration"
                        className="rounded-lg pt-8 w-11/12 mx-auto lg:px-4 hidden lg:block "
                    />
                </div>



                {/* Contact Form */}
                <div className="w-full bg-white p-6 rounded-lg shadow-md ">
                    <div className="" >
                        <div className='pb-2'>
                            <h2 className='font-bold text-sm'>Full Name <span className='text-red-400 text-lg'>*</span></h2>
                            <input

                                type="text"
                                placeholder="Full Name*"
                                required
                                className="w-full px-4 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            />

                        </div>

                        <div className='pb-2'>
                            <h2 className='font-bold text-sm'>Email <span className='text-red-400 text-lg'>*</span></h2>
                            <input
                                type="email"
                                placeholder="Email*"
                                required
                                className="w-full px-4 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>
                        <div className='pb-2'>
                            <h2 className='font-bold text-sm'>Subject <span className='text-red-400 text-lg'>*</span></h2>
                            <input
                                onClick={() => setOpen(!open)}
                                value={selected}
                                type="text"
                                placeholder="Subject*"
                                required
                                readOnly
                                className="w-full px-4 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            {/* Dropdown List */}
                            {open && (
                                <div className="absolute mt-2  bg-white border border-gray-200 rounded-md shadow-lg z-10">
                                    <ul className="py-1">
                                        {options.map((option) => (
                                            <li
                                                key={option}
                                                onClick={() => handleSelect(option)}
                                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                            >
                                                {option}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}


                        </div>
                        <div className='pb-2'>
                            <h2 className='font-bold text-sm'>Message <span className='text-red-400 text-lg'>*</span></h2>
                            <textarea
                                rows="4"
                                placeholder="Message"
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                            ></textarea>
                        </div>

                        {/* Checkbox */}
                        <label className="flex justify-around items-center w-55 space-x-2  bg-gray-50 border border-black rounded-md px-3 py-2 mb-4">
                            <div className='flex gap-2'>
                                <input
                                    type="checkbox"
                                    checked={isHuman}
                                    onChange={() => setIsHuman(!isHuman)}
                                    className="accent-green-500 scale-150"
                                />
                                <span>I'm not a robot</span>
                            </div>
                            <div>
                                <img className='w-10' src={reCaptcha} alt="" />
                            </div>
                        </label>

                        <button type="submit" className="w-full bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 transition">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;