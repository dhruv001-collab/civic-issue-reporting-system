import React from 'react'
import { useRef } from 'react';
import { useState, useEffect } from 'react'
import { toast } from "react-toastify";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import defaultAvatar from '../../assets/default-avatar.jpg'; // adjust path
import threedots from '../../assets/three-dot.svg'



const RightSection = ({ report }) => {
  const [openMenuId, setOpenMenuId] = useState(null);
  const menuRef = useRef();
  const { user } = useUser();
  const [allComments, setAllComments] = useState([]);

  const [Comments, setComments] = useState({
    comment: "",
    ReportId: "",
    name: "",
    image: ""
  })

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenuId(null); // close any open menu
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  // this function is for delete the comment

  const handleDelete = async (_id) => {
    try {
      const res = await fetch("http://localhost:5000/deleteComment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id }),   // ✅ send _id directly
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Comment deleted successfully!");
        setAllComments(prev => prev.filter(c => c._id !== _id)); // ✅ filter by _id
      } else {
        toast.error(data.message || "Failed to delete comment");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  // this function for handle edit


  const handleEdit = async (comment) => {
    // 1. Put old comment text into input
    setComments(prev => ({
      ...prev,
      comment: comment.comment
    }));

    // 2. Delete the old comment right away
    try {
      const res = await fetch("http://localhost:5000/deleteComment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id: comment._id }),
      });

      const data = await res.json();

      if (res.ok) {
        // remove from UI
        setAllComments(prev => prev.filter(c => c._id !== comment._id));
      } else {
        toast.error(data.message || "Failed to delete for editing");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };
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




          {allComments.length === 0 ? (
            <p className="text-gray-500">No comments yet.</p>
          ) : (
            allComments.map((c, idx) => (

              <div key={idx} className="flex items-center justify-between gap-4 my-2 w-full border border-gray-400 rounded-md h-15 sm:text-sm sm:h-15 md:h-15 px-3 sm:px-4 text-sm bg-gray-50 hover:bg-white focus:outline-none focus:ring-2 focus:ring-teal-400">
                <div className='flex gap-5 items-center'>
                  <div>
                    {c.image && <img src={c.image} alt={c.name} className="w-8 h-8 rounded-full" />}
                  </div>
                  <div>
                    <p className="font-light text-sm"> {c.name && c.name.charAt(0).toUpperCase() + c.name.slice(1).toLowerCase()}</p>
                    <p className="text-gray-600 text-sm">{c.comment}</p>
                  </div>
                </div>
                <div className="relative inline-block" ref={menuRef}>
                  <div onClick={() => setOpenMenuId(openMenuId === c._id ? null : c._id)} >
                    <img src={threedots} alt="" />
                  </div>
                  {/* Dropdown menu */}
                  {openMenuId === c._id && (
                    <div className="absolute right-0 mt-2 w-28 bg-white shadow-lg rounded-md border border-gray-200 z-50">
                      <button
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => {
                          handleEdit(c); // 👈 pass the whole comment
                          setOpenMenuId(null);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                        onClick={() => {
                          handleDelete(c._id); // pass the comment id
                          setOpenMenuId(null); // close menu
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>

            ))
          )}
        </div>
      </div>
    </>
  );
};

export default RightSection;


