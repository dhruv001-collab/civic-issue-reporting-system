import React from 'react'

const RightSection = ({ comments }) => {
  return (
    <div className="flex-1 bg-gray-50 p-4 rounded-xl">
      <h3 className="text-lg font-semibold mb-3">
        Comments ({comments.length})
      </h3>
      {comments.length === 0 ? (
        <p className="text-gray-500">No comments yet.</p>
      ) : (
        comments.map((c, idx) => (
          <div key={idx} className="mb-3 p-3 border rounded-md bg-white">
            <p className="font-medium">{c.username}</p>
            <p className="text-gray-600 text-sm">{c.comment}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RightSection;

