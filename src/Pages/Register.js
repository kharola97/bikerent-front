import React, { useState } from 'react'
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";

import {useNavigate, Link } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const [password, setPassword]= useState(false)

    const handlePassword =(e)=>{
        e.preventDefault();
        setPassword(!password)
    }
    const handleClick = (e)=>{
      e.preventDefault();
      navigate("/login")
    }
  return (
    <div className='container h-screen min-w-full mb-72  flex justify-center  bg-slate-100'>
      <div className=' container  max-w-2xl p-4 m-1 border border-gray-300  rounded-md shadow-sm bg-gray-100'>
        <div>
            <h2 className='text-center text-3xl font-extrabold text-blue-700'>Register</h2>
            <p className='text-center mt-2 text-sm text-blue-500'>Please register to create your account </p>
        </div>
        <form className='space-y-2 ' onSubmit={handleClick}>
            <div className='mt-0'>
                <label htmlFor='username' className='block text-sm font-medium text-gray-700'>
                Username
                </label>
                <div className='mt-0'>
                    <input type='text' id='username' name='username' required className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500  sm:text-sm' />
                </div>
            </div>
            <div className='mt-0'>
                <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                Password
                </label>
                <div className="relative">
                    <input type={password ? "text" : "password"} id='password' name='password' required className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500  sm:text-sm'/>
                    <div onClick={handlePassword} className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                    {password ? <GoEye className="h-5 w-5 text-gray-500" /> : <GoEyeClosed className="h-5 w-5 text-gray-500" />}
                </div>
                </div>
            </div>
            <div className='mt-0'>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                Email
                </label>
                <div>
                    <input type='email' id='email' name='email' required className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500  sm:text-sm'/>
                </div>
            </div>
            <div className='flex justify-between gap-2 flex-wrap mt-0'>
                <div>
                <label htmlFor='phone' className='block text-sm font-medium text-gray-700'>
                Phone
                </label>
                <div>
                    <input type='tel' id='phone' name='phone' required className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500  sm:text-sm'/>
                </div>
                </div>
                <div >
                     <div>
                <label htmlFor='totalBikes' className='block text-sm font-medium  text-gray-700'>
                Totalbikes
                </label>
                <div>
                    <input type='number' id='totalBikes' name='totalBikes' required className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500  sm:text-sm'/>
                </div>
            </div>
                </div>
            </div>
           
           
            <div>
                <h4 className='text-center mb-1 mt-0' >Shop Address</h4>
                <div>
                <label htmlFor='shopName' className='block text-sm font-medium text-gray-700'>
                Shopname
                </label>
                <div>
                    <input type='text' id='shopName' name='shopName' required className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-500  sm:text-sm'/>
                </div>
            </div>
                <div className='flex justify-between mt-4'>
                    <div >
                <label htmlFor='street' className=' block text-sm font-medium'>Street</label>

                <input type='text' id='street' name='street' required className="appearance-none mb-2 rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>    
                </div>
                <div>
                <label htmlFor='city' className=' block text-sm font-medium'>City</label>

                <input type='text' id='city' name='city' required className="appearance-none mb-2 rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>
                </div>

                <label htmlFor='state' className='block text-sm font-medium'>State</label> 

                <input type='text' id='state' name='state' required className="appearance-none mb-2 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>

                </div>
                <button
            type="submit"
            
            className="w-full uppercase flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Register
          </button>
          <div className='text-center '>
            Already have an account? <Link className='text-blue-600' to='/Login'>Login</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register