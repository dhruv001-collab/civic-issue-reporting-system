import React, { useEffect, useState, useRef } from 'react';
import { useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReportIssueleft = () => {
  const [loading, setLoading] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();
  const fileInputRef = useRef(null);

  const [image, setImage] = useState(null);
  const [openCategory, setOpenCategory] = useState(false);
  const [openUrgency, setOpenUrgency] = useState(false);

  const CategoryOptions = ['polythene', 'Garbage', 'Electricity', 'Water'];
  const UrgencyOptions = ['Normal', 'High', 'Critical'];

  const [issueDetails, setIssueDetails] = useState({
    Issue_title: "",
    category: "",
    location: "",
    description: "",
    image: "",
    email: "",
    urgency: "",
  });

  // Set user email if signed in
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      const email = user?.primaryEmailAddress?.emailAddress || user?.emailAddresses?.[0]?.emailAddress || "";
      setIssueDetails(prev => ({ ...prev, email }));
    }
  }, [isLoaded, isSignedIn, user]);

  // Handle file selection
  const ImageHandler = (e) => setImage(e.target.files[0]);

  const changeHandler = (e) => setIssueDetails({ ...issueDetails, [e.target.name]: e.target.value });

  const handleDeleteImage = () => {
    setImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Add issue
  const addProduct = async () => {
    // Check if any field is empty
    const { Issue_title, category, location, description, urgency } = issueDetails;
    if (!Issue_title || !category || !location || !description || !urgency) {
      toast.error("Please complete all required fields!", {
        position: "top-right",
        autoClose: 3000,
      });
      return; // Stop submission
    }


    if (!isSignedIn) {
      toast.error("LogIn / SignUp to submit the issue", { position: "top-right", autoClose: 6000 });
      return;
    }

    setLoading(true); // start loading
    toast.info("Submitting your issue...", { autoClose: 2000 }); // show info toast

    let product = { ...issueDetails };
    let responseData;

    if (image) {
      const formData = new FormData();
      formData.append("IssuePhoto", image);
      await fetch('https://civic-issue-reporting-system-server.vercel.app/upload', {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData
      })
        .then(resp => resp.json())
        .then(data => { responseData = data; });

      if (responseData.success) product.image = responseData.image_url;
    }

    await fetch('https://civic-issue-reporting-system-server.vercel.app/ReportIssue', {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify(product)
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.success) {
          toast.success("Issue posted successfully!", { position: "top-right", autoClose: 3000 });
          setIssueDetails({
            Issue_title: "",
            category: "",
            location: "",
            description: "",
            image: "",
            email: issueDetails.email,
            urgency: ""
          });
          setImage(null);
          if (fileInputRef.current) fileInputRef.current.value = "";
        } else {
          toast.error("❌ Failed to post issue");
        }
      });
  };

  return (
    <div className="min-w-full max-w-md bg-white p-6 flex flex-col gap-2 rounded-2xl shadow-xl relative">
      <h1 className="font-bold text-lg">Report Issue</h1>

      {/* Issue Title */}
      <div>
        <h2 className="font-medium">Issue Title <span className="text-red-400">*</span></h2>
        <input
          required
          value={issueDetails.Issue_title}
          name="Issue_title"
          onChange={changeHandler}
          placeholder="Enter Title"
          className="w-full border border-gray-400 rounded-md h-8 px-3 text-sm bg-gray-50 hover:bg-white focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
      </div>

      {/* Category */}
      <div>
        <h2 className="font-medium">Category <span className="text-red-400">*</span></h2>
        <input
          name="category"
          value={issueDetails.category}
          onClick={() => { setOpenCategory(!openCategory); setOpenUrgency(false); }}
          readOnly
          placeholder="Select Category*"
          className="w-full border border-gray-400 rounded-md h-8 px-3 text-sm bg-gray-50 hover:bg-white focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        {openCategory && (
          <div className="absolute mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-10">
            <ul className="py-1">
              {CategoryOptions.map(cat => (
                <li
                  key={cat}
                  onClick={() => { setIssueDetails({ ...issueDetails, category: cat }); setOpenCategory(false); }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Location */}
      <div>
        <h2 className="font-medium">Location <span className="text-red-400">*</span></h2>
        <input
          required
          value={issueDetails.location}
          name="location"
          onChange={changeHandler}
          placeholder="Street address or nearby landmark"
          className="w-full border border-gray-400 rounded-md h-8 px-3 text-sm bg-gray-50 hover:bg-white focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
      </div>

      {/* Urgency */}
      <div>
        <h2 className="font-medium">Urgency <span className="text-red-400">*</span></h2>
        <input
          name="urgency"
          value={issueDetails.urgency}
          onClick={() => { setOpenUrgency(!openUrgency); setOpenCategory(false); }}
          readOnly
          placeholder="Select Urgency"
          className="w-full border border-gray-400 rounded-md h-8 px-3 text-sm bg-gray-50 hover:bg-white focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        {openUrgency && (
          <div className="absolute mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-10">
            <ul className="py-1">
              {UrgencyOptions.map(urg => (
                <li
                  key={urg}
                  onClick={() => { setIssueDetails({ ...issueDetails, urgency: urg }); setOpenUrgency(false); }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {urg}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Description */}
      <div>
        <h2 className="font-medium sm:text-sm">Description <span className="text-red-400">*</span></h2>
        <input
          required
          value={issueDetails.description}
          name="description"
          onChange={changeHandler}
          placeholder="Provide a detailed description"
          className="w-full border border-gray-400 rounded-md h-8 px-3 text-sm bg-gray-50 hover:bg-white focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
      </div>

      {/* Photo/Video */}
      <div>
        <h2 className="font-medium">Photo/Video <span className="text-red-400">*</span></h2>
        <label htmlFor="file-input">
          {image ? (
            <div className="relative w-30 h-30">
              <img src={URL.createObjectURL(image)} alt="preview" className="w-full h-full object-cover rounded-xl border" />
              <button
                type="button"
                onClick={handleDeleteImage}
                className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ) : (
            <div className="w-full h-30 border-2 border-dashed border-gray-400 flex flex-col items-center justify-center rounded-xl cursor-pointer hover:bg-gray-100 transition">
              <p className="text-gray-500">Click or Drag & Drop</p>
              <p className="text-sm text-gray-400">Upload your file here</p>
            </div>
          )}
        </label>
        <input
          ref={fileInputRef}
          onChange={ImageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>

      <button
        onClick={addProduct}
        className="px-6 py-2 mt-5 w-full bg-teal-400 text-white rounded-full hover:bg-black transition-all cursor-pointer"
      >
        Post Issue
      </button>
    </div>
  );
};

export default ReportIssueleft;
