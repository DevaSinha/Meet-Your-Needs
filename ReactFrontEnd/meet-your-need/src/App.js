import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Homepage';
import Loginn from './Components/Login';
import { Navbar, Nav } from 'react-bootstrap';
import ClientHome from './Components/Clienthome';
import VendorHome from './Components/VendorHome';
import AdminHome from './Components/AdminHome';
import RegistrationForm from './Components/newregistration';
import ForgotPassword from './Components/forgotPassword';
import FormWithValidation from './Components/FormWithValidation';
import AboutSection from './Components/AboutSection';


function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Meet Your Need</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href='/login'>Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginn />} />
          <Route path="/client" element={<ClientHome/>} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/vendor" element={<VendorHome />} />
          <Route path="/register" element={<FormWithValidation/>} />
          <Route path='/password' element={<ForgotPassword/>}/>
          <Route path='/about' element={<AboutSection/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
