import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';
import Login from './pages/AuthLogin/Login';
import Reports from './pages/Reports/Reports';
import Dashboard from './pages/Dashboard/Dashboard';
import ReportsDetails from './pages/ReportsDetails/ReportsDetails';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/reports' element={<Reports/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path="/reports/:id" element={<ReportsDetails />} />
    </Routes>
   
  );
}

export default App
