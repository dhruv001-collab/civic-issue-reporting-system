import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';
import Login from './pages/AuthLogin/Login';
import Reports from './pages/Reports/Reports';
import Dashboard from './pages/Dashboard/Dashboard';
import ReportsDetails from './pages/ReportsDetails/ReportsDetails';
import ReportIssue from './pages/ReportIssue/ReportIssue';
import Faq from './pages/FAQs/Faq';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Stats from './pages/stats/stats';


function App() {

  return (<>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/reports' element={<Reports />} />
      <Route path="/reports/:id" element={<ReportsDetails />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/report-issue' element={<ReportIssue />} />
      <Route path='/faqs' element={<Faq />} />
      <Route path='/stats' element={<Stats/>}/>

    </Routes>

    {/* ✅ Toast container at root */}
    <ToastContainer
  toastClassName="my-toast"
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  closeOnClick
  draggable
  pauseOnHover
/>

  </>
  );
}

export default App
