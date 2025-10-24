import { Route, Routes } from 'react-router-dom';
import './App.css'
import { lazy } from 'react';
// import Home from './pages/Home/Home';
// import Login from './pages/AuthLogin/Login';
// import Reports from './pages/Reports/Reports';
// import Dashboard from './pages/Dashboard/Dashboard';
// import ReportsDetails from './pages/ReportsDetails/ReportsDetails';
// import ReportIssue from './pages/ReportIssue/ReportIssue';
// import Contact from './pages/Contact/Contact';``
// import Faq from './pages/FAQs/Faq';
// import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Stats from './pages/stats/Stats';
import Loader from './components/Loader/Loader';
import { Suspense } from 'react';

const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./pages/AuthLogin/Login"));
const Reports = lazy(() => import("./pages/Reports/Reports"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const ReportsDetails = lazy(() => import("./pages/ReportsDetails/ReportsDetails"));
const ReportIssue = lazy(() => import("./pages/ReportIssue/ReportIssue"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/ScrollToTop"));
const Faq = lazy(() => import("./pages/FAQs/Faq"));
const Stats = lazy(() => import("./pages/stats/Stats"));

function App() {

  return (<>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<Suspense fallback={<Loader/>}><Home /></Suspense>} />
      <Route path='/home' element={<Suspense fallback={<Loader/>}><Home /></Suspense>} />
      <Route path='/login' element={<Suspense fallback={<Loader/>}><Login /></Suspense>} />
      <Route path='/reports' element={<Suspense fallback={<Loader/>}><Reports /></Suspense>} />
      <Route path="/reports/:id" element={<Suspense fallback={<Loader/>}><ReportsDetails /></Suspense>} />
      <Route path='/dashboard' element={<Suspense fallback={<Loader/>}><Dashboard /></Suspense>} />
      <Route path='/report-issue' element={<Suspense fallback={<Loader/>}><ReportIssue /></Suspense>} />
      <Route path='/faqs' element={<Suspense fallback={<Loader/>}><Faq /></Suspense>} />
      <Route path='/contact' element={<Suspense fallback={<Loader/>}><Contact/></Suspense>} />
      <Route path='/stats' element={<Suspense fallback={<Loader/>}><Stats/></Suspense>}/>

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
