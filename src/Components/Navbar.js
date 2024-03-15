import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleHome = (e)=>{
    e.preventDefault();
    navigate("/")
  }
  const handleAbout = (e)=>{
    e.preventDefault();
    navigate("/aboutus")
  }
  const handleContact = (e)=>{
    e.preventDefault();
    navigate("/contactus")

  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
  
    <div className="bg-gray-100">
  <div className="container flex justify-between mx-auto py-4">
    <div className='w-full flex justify-around'>
      <h1 className="text-2xl font-bold text-indigo-700">
        Book<span className="text-indigo-500">Bike</span>
      </h1>
      <div >
        <RxHamburgerMenu className="md:hidden ml-auto w-6 h-6 text-gray-600 cursor-pointer" onClick={toggleMenu} />
      </div>
    </div>
    <div className={`md:hidden ${isMenuOpen ? 'block z-50' : 'hidden'}`}>
      <div className="bg-white shadow-md absolute left-0 right-0 mt-10">
        <h2 className="text-lg cursor-pointer uppercase py-2 px-4 rounded-full hover:bg-indigo-500 hover:text-white" onClick={handleHome}>Home</h2>
        <h2 className="text-lg cursor-pointer uppercase py-2 px-4 rounded-full hover:bg-indigo-500 hover:text-white" onClick={handleAbout}>About us</h2>
        <h2 className="text-lg cursor-pointer uppercase py-2 px-4 rounded-full hover:bg-indigo-500 hover:text-white" onClick={handleContact}>Contact us</h2>
        <button className="text-lg font-semibold uppercase py-2 px-6 rounded-full border border-indigo-700 hover:bg-indigo-500 hover:text-white" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
    {/* Render these sections outside of the conditional rendering */}
    <div className="md:flex w-full hidden gap-4">
      <h2 className="text-lg cursor-pointer uppercase hover:bg-indigo-500 hover:text-white py-2 px-4 rounded-full" onClick={handleHome}>Home</h2>
      <h2 className="text-lg cursor-pointer uppercase hover:bg-indigo-500 hover:text-white py-2 px-4 rounded-full" onClick={handleAbout}>About us</h2>
      <h2 className="text-lg cursor-pointer uppercase hover:bg-indigo-500 hover:text-white py-2 px-4 rounded-full" onClick={handleContact}>Contact us</h2>
      <button className="text-lg font-semibold uppercase py-2 px-6 rounded-full border border-indigo-700 hover:bg-indigo-500 hover:text-white" onClick={handleLogin}>
        Login
      </button>
    </div>
  </div>
</div>
  );
}

export default Navbar;
