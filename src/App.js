import React from 'react'
import Navbar from './Components/Navbar';
import Home from './Components/HomePage';
import Login from './Pages/AdminLogin';

import Register from './Pages/AdminRegister';
import ShopOwner from './Pages/ShopOwner';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutUs } from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import ClientLogin from './Pages/ClientLogin';
import ClientRegister from './Pages/ClientRegister';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
    <Routes>
     
      <Route path='/' element={<Home/>}/>
   
      <Route path='/adminlogin' element={<Login/>}/>
      <Route path='/adminregister' element={<Register/>}/>
      <Route path='/clientlogin' element={<ClientLogin/>}/>
      <Route path='/clientregister' element={<ClientRegister/>}/>
      <Route path='/shopowner' element={<ShopOwner/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
