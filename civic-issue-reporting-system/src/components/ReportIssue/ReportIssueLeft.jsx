import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useUser } from "@clerk/clerk-react";
// import { set } from 'mongoose';


const ReportIssueleft = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const fileInputRef = useRef(null)
  const [image, setImage] = useState(false)
  const [issueDetails, setIssueDetails] = useState({
    Issue_title: "",
    category: "",
    location: "",
    description: "",
    image: "",
    email: ""
  })

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      const email =
        user?.primaryEmailAddress?.emailAddress ||
        user?.emailAddresses?.[0]?.emailAddress ||
        "";
      setIssueDetails((prev) => ({ ...prev, email }));
    }
  }, [isLoaded, isSignedIn, user]);

  const ImageHandler = (e) => {
    setImage(e.target.files[0])
  }

  const changeHandler = (e) => {
    setIssueDetails({ ...issueDetails, [e.target.name]: e.target.value })
  }

  // cleanup object URL
  useEffect(() => {
    return () => {
      if (image) {
        URL.revokeObjectURL(image);
      }
    };
  }, [image]);

  const handleDeleteImage = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear the file input value
    }
  }

  const addProduct = async () => {
    console.log(issueDetails)
    let responceData;
    let product = {
      ...issueDetails,
      email:
        user?.primaryEmailAddress?.emailAddress ||
        user?.emailAddresses?.[0]?.emailAddress ||
        "",
    };

    let formData = new FormData();
    formData.append("IssuePhoto", image)

    await fetch('http://localhost:5000/upload', {
      method: "POST",
      headers: {
        Accept: "appication/json"
      },
      body: formData,
    }).then((resp) => resp.json()).then((data) => { responceData = data })

    if (responceData.success) {
      product.image = responceData.image_url;
      console.log(product)
      await fetch('http://localhost:5000/ReportIssue', {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }, body: JSON.stringify(product),

      }).then((resp) => resp.json()).then((data) => {
        data.success ? alert("Product Added") : alert("failed")
        if (data.success) {
          setIssueDetails({
            Issue_title: "",
            category: "",
            location: "",
            description: "",
            image: "",
          })
          setImage(null);
          fileInputRef.current.value = null;
        }
      })
    }
  }

  return (
    <div className='min-w-full max-w-md bg-white p-6 flex flex-col gap-2  rounded-2xl shadow-xl'>
      <h1 className='font-bold text-lg'>Report Issue</h1>

      <div>
        <h2 className='font-medium'>Issue Title <span className='text-red-400 text-xl'>*</span></h2>
        <input value={issueDetails.Issue_title} name='Issue_title' onChange={changeHandler} className='w-full border border-gray-400 rounded-md h-8 sm:text-sm sm:h-8 md:h-8 px-3 sm:px-4 text-sm bg-gray-50 hover:bg-white focus:outline-none focus:ring-2 focus:ring-teal-400' type="text" placeholder='Enter Title' />
      </div>

      <div>
        <h2 className='font-medium'>Category <span className='text-red-400 text-xl'>*</span></h2>

        <input value={issueDetails.category} name='category' onChange={changeHandler} className='w-full border border-gray-400 rounded-md h-8 sm:text-sm sm:h-8 md:h-8 px-3 sm:px-4 text-sm bg-gray-50 hover:bg-white focus:outline-none focus:ring-2 focus:ring-teal-400' type="text" placeholder='Select a category' />
      </div>

      <div>
        <h2 className='font-medium'>Location <span className='text-red-400 text-xl'>*</span></h2>
        <input value={issueDetails.location} name='location' onChange={changeHandler} className='w-full border border-gray-400 rounded-md h-8 sm:text-sm sm:h-8 md:h-8 px-3 sm:px-4 text-sm bg-gray-50 hover:bg-white focus:outline-none focus:ring-2 focus:ring-teal-400' type="text" placeholder='Street address or nearby landmark' />
      </div>

      <div>
        <h2 className='font-medium sm:text-sm'>Description <span className='text-red-400 text-xl'>*</span></h2>
        <input value={issueDetails.description} name='description' onChange={changeHandler} className='w-full border border-gray-400 rounded-md h-8 sm:text-sm sm:h-8 md:h-8 px-3 sm:px-4 text-sm bg-gray-50 hover:bg-white focus:outline-none focus:ring-2 focus:ring-teal-400' type="text" placeholder='Provide a detailed description' />
      </div>

      <div>
        <h2 className='font-medium'>Photo/Video <span className='text-red-400 text-xl'>*</span></h2>
        <label htmlFor="file-input">
          {image ?
            <div className="relative w-30 h-30">
              <img
                src={URL.createObjectURL(image)}
                alt="preview"
                className="w-full h-full object-cover rounded-xl border"
              />
              {/* delete button */}
              <button
                type="button"
                onClick={handleDeleteImage}
                className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
            :
            <div
              className="w-full h-30 border-2 border-dashed border-gray-400 flex flex-col items-center justify-center rounded-xl cursor-pointer hover:bg-gray-100 transition">
              <p className="text-gray-500">Click or Drag & Drop</p>
              <p className="text-sm text-gray-400">Upload your file here</p>
            </div>
          }

        </label>
        <input ref={fileInputRef} onChange={ImageHandler} suppressHydrationWarning type="file" name='image' id='file-input' hidden />

      </div>

      <button onClick={() => { addProduct() }} className='px-6 py-2 mt-5 w-full bg-teal-400 text-white rounded-full hover:bg-black transition-all'>Post Issue</button>
    </div >
  )
}

export default ReportIssueleft
