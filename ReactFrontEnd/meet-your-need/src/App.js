import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Homepage';
import Loginn from './Components/Login';
import { Navbar, Nav } from 'react-bootstrap';
import ClientHome from './Components/Clienthome';
import VendorHome from './Components/Vendor/VendorHome';
import AdminHome from './Components/AdminHome';
import ForgotPassword from './Components/forgotPassword';
import FormWithValidation from './Components/FormWithValidation';
import AboutSection from './Components/AboutSection';
import Navigation from './Components/Navbar';
import RequestForm from './Components/client/Request';
import { Link } from '@mui/material';


function App() {
  return (
    <div className='bg-glass'>
      
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5" style={{backgroundColor:"#00ABE4"}}>
                <Link href='/' underline="none">
                    <div style={{ fontSize: '30px', fontFamily: 'Courgette', color: '#FFFFFF' }}>
                        Meet Your Need
                    </div></Link>
            </div>
            <Navigation/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginn />} />
        <Route path="/client" element={<ClientHome />}>
          <Route path="/client/request" element={<RequestForm />} />
        </Route>
        <Route path="/request" element={<RequestForm />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/vendor" element={<VendorHome />} />
        <Route path="/register" element={<FormWithValidation />} />
        <Route path='/password' element={<ForgotPassword />} />
      </Routes>
      
    </div>
  );
}

export default App;
