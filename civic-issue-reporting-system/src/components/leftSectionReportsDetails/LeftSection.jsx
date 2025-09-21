import { FaMapMarkerAlt, FaExclamationCircle, FaClock } from "react-icons/fa";
import moment from 'moment';


const LeftSection = ({ report }) => {
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
      <p className="text-xs text-gray-500 text-right">
        Issued on {moment(report.date).format('DD/MM/YYYY')} 
      </p>
    </div>
  );
};

export default LeftSection;
