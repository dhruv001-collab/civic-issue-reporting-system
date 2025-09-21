import { FaMapMarkerAlt, FaExclamationCircle, FaClock } from "react-icons/fa";
import moment from 'moment';
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const LeftSection = ({ report, removeReportFromState }) => {
  const navigate = useNavigate();
  const { setAllproducts, allproducts } = useContext(AppContext);


  const handleDeleteIssue = async () => {
    try {
      const res = await fetch("http://localhost:5000/removeIssue", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id: report._id }),
      });
      const data = await res.json();

      if (data.success) {
        toast.success("Issue deleted successfully!", { autoClose: 1000 });

        // Redirect to /reports after deletion
        setTimeout(() => {
          navigate("/reports");
        }, 1000); // wait 1 second to allow toast to show
      } else {
        toast.error(data.message || "Failed to delete issue.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    }
  };

  if (!report) return <p>No report found.</p>;
  return (
    <div className="flex-1 bg-white rounded-2xl shadow p-6">
      <img
        src={report.image}
        alt={report.title}
        className="w-full h-72 object-cover rounded-xl mb-4"
      />
      <span
        className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3
        ${report.category === "Urgent" ? "bg-red-100 text-red-600" : "bg-yellow-100 text-yellow-600"}
      `}
      >
        {report.category}
      </span>
      <h2 className="text-2xl font-bold mb-2 ">
        {report.title}
      </h2>
      <p className="text-gray-600 text-sm mb-4">{report.description}</p>
      <p className="font-semibold mb-3">
        {report.user} <span className="text-gray-500">(Anonymous)</span>
      </p>

      <div className="flex items-start gap-2 mb-4">
        <FaMapMarkerAlt className="w-5 h-5 text-red-500 mt-0.5" />
        <p className="text-gray-700 text-sm">{report.location}</p>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <span className="flex items-center gap-1 px-3 py-1 text-xs font-semibold text-red-600 bg-red-100 rounded-full">
          <FaExclamationCircle className="w-4 h-4" /> Reported
        </span>
        <span className="flex items-center gap-1 px-3 py-1 text-xs font-semibold text-yellow-600 bg-yellow-100 rounded-full">
          <FaClock className="w-4 h-4" /> Pending
        </span>
      </div>
      <div className="w-full flex justify-between">
        <div onClick={() => handleDeleteIssue(report._id)} className="cursor-pointer">
          {/* Lordicon Trash */}
          <lord-icon
            src="https://cdn.lordicon.com/jzinekkv.json"
            trigger="hover"
            colors="primary:#242424,secondary:#08a88a"
            stroke="bold"
            style={{ width: '30px', height: '30px', cursor: 'pointer' }}
          ></lord-icon>
        </div>
        <p className="text-xs text-gray-500 text-right">
          Issued on {moment(report.date).format('DD/MM/YYYY')}
        </p>
      </div>
    </div>
  );
};

export default LeftSection;
