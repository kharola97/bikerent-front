import React from 'react'
import Navbar from './Components/Navbar';
import Home from './Components/HomePage';
import Login from './Pages/Login';
import Partner from './Pages/Partner';
import Register from './Pages/Register';
import ShopOwner from './Pages/ShopOwner';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutUs } from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
    <Routes>
     
      <Route path='/' element={<Home/>}/>
      <Route path='/partner' element={<Partner/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/shopowner' element={<ShopOwner/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
