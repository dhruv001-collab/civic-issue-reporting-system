import React from 'react'
import { useState, useEffect } from 'react'
import { toast } from "react-toastify";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import defaultAvatar from '../../assets/default-avatar.jpg'; // adjust path



const RightSection = ({ report }) => {
  const { user } = useUser();
  const userImage = user?.profileImageUrl || "";
  const [allComments, setAllComments] = useState([]);
  const [Comments, setComments] = useState({
    comment: "",
    ReportId: "",
    name: "",
    image: ""
  })

  // Update ReportId and Clerk name whenever report or user changes
  useEffect(() => {
    if (report?._id && user) {
      // get the user profile image from Clerk
      const userImage = user.profileImageUrl || defaultAvatar
      console.log("User image URL:", userImage);
      setComments(prev => ({
        ...prev,
        ReportId: report._id,
        name: user.fullName || user.firstName || "Anonymous",
        image: userImage
      }));
    }
  }, [report, user]);


  // Update ReportId when report prop changes
  useEffect(() => {
    const fetchComments = async () => {
      if (!report?._id) return;

      try {
        const res = await fetch("http://localhost:5000/getComments", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ReportId: report._id }),
        });
        const data = await res.json();

        console.log("Fetched comments:", data);
        setAllComments(data); // save only comments for this report
      } catch (err) {
        console.error("Failed to fetch comments", err);
      }
    };

    fetchComments();
  }, [report]);


  // useEffect(() => {
  //   console.log(report)
  // }, [report])


  const changeHandler = (e) => {
    setComments({ ...Comments, [e.target.name]: e.target.value })
  }

  const addComment = async () => {

    if (!user) {
      toast.error("Please login first to add a comment!", {
        position: "top-right",
        autoClose: 3000,
      });
      return; // stop execution
    }

    // Include user's name and profile image
    const commentData = { ...Comments };

    console.log(commentData);

    try {
      const response = await fetch("http://localhost:5000/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Your comment added successfully!", {
          position: "top-right",
          autoClose: 3000,
        });

        // Clear input
        setComments(prev => ({ ...prev, comment: "" }));

        // Add the new comment to allComments state so it shows immediately
        setAllComments(prev => [
          {
            ...commentData,  // includes comment, ReportId, name, image
            _id: data._id,   // id from backend
            date: data.date  // date from backend
          },
          ...prev
        ]);
      } else {
        toast.error(data.message || "Failed to submit message.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };
  return (
    <>
      <div className='flex-1 flex flex-col'>

        <div className=" bg-gray-50 p-4 rounded-xl">
          <h3 className="text-lg font-semibold mb-3">
            Comments
          </h3>
          <div className='my-2'>
            <input name='comment' value={Comments.comment} type="text" onChange={changeHandler} className='w-full border border-gray-400 rounded-md h-8 sm:text-sm sm:h-8 md:h-8 px-3 sm:px-4 text-sm bg-gray-50 hover:bg-white focus:outline-none focus:ring-2 focus:ring-teal-400' placeholder='Comment' />
          </div>

          <button onClick={() => { addComment() }} className=' bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 transition'>Send</button>


        </div>

        {allComments.length === 0 ? (
          <p className="text-gray-500">No comments yet.</p>
        ) : (
          allComments.map((c, idx) => (
            <>

              <div key={idx} className="flex items-center gap-4 mx-3 w-full border border-gray-400 rounded-md h-15 sm:text-sm sm:h-15 md:h-15 px-3 sm:px-4 text-sm bg-gray-50 hover:bg-white focus:outline-none focus:ring-2 focus:ring-teal-400">
                <div>
                  {c.image && <img src={c.image} alt={c.name} className="w-8 h-8 rounded-full" />}

                </div>
                <div>

                  <p className="font-light text-sm"> {c.name && c.name.charAt(0).toUpperCase() + c.name.slice(1).toLowerCase()}</p>
                  <p className="text-gray-600 text-sm">{c.comment}</p>
                </div>
              </div>
            </>
          ))
        )}
      </div>
    </>
  );
};

export default RightSection;


