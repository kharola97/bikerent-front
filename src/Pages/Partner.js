import React from 'react'
import styled from 'styled-components'

export default function Partner() {
  return (
    <div className='container max-h-screen  min-w-full bg-zinc-100 overflow-scroll scroll-smooth'>
    <p className="text-3xl text-indigo-800 font-extrabold text-center pt-8 mb-8">We make bike renting easier for you.</p>

    <div className="container mx-auto mb-20  px-4 flex gap-8 flex-wrap  justify-around ">
      <div className='w-full'>
      <div className="rounded-lg shadow-md mb-10 hover:shadow-2xl transition-all ease-in-out duration-300 transform hover:scale-105">
        
          <p className="text-xl text-indigo-500 font-bold text-center">Why Choose Us?</p>
        
        <ul className=" p-4 text-2xl text-center list-none space-y-2 opacity-0 hover:opacity-100 transition-opacity duration-300 ">
          <li >Easy to advertise your bikes</li>
          <li>Customers can book your bike through our platform</li>
          <li>Details of customers is shared with you</li>
          <li>Know the location of your bike</li>
        </ul>
      </div>
      <div className="rounded-lg shadow-md mb-10 hover:shadow-2xl transition-all ease-in-out duration-300 transform hover:scale-105">
        
          <p className="text-xl text-indigo-500 font-bold text-center">Currently in locations</p>
        
        <ul className=" p-4 text-2xl list-none text-center space-y-2 opacity-0 hover:opacity-100 transition duration-300">
          <li>Uttarakhand</li>
          <li>Himachal pradesh</li>
          <li>Maharashtra</li>
          <li>Hyedrabad</li>
        </ul>
      </div>
      </div>
      <div className='w-full'>
      <div className="rounded-lg shadow-md mb-10 hover:shadow-2xl transition-all ease-in-out duration-300 transform hover:scale-105">
        
          <p className="text-xl text-indigo-500 font-bold text-center">Hassle free renting</p>
        
        <ul className=" p-4 text-2xl list-none text-center space-y-2 opacity-0 hover:opacity-100 transition duration-300">
        <li>User-Friendly Interface</li>
          <li>Transparent Pricing</li>
          <li>24/7 Support</li>
          <li>Flexible Bookings</li>
          <li>Instant Booking Confirmation</li>
          <li>Feedback System</li>
        </ul>
      </div>
      <div className="rounded-lg shadow-md mb-10 hover:shadow-2xl transition-all ease-in-out duration-300 transform hover:scale-105">
        
          <p className="text-xl text-indigo-500 font-bold text-center">Safety measures for your bikes</p>
        
        <ul className=" p-4 text-2xl text-center list-inside space-y-2 opacity-0 hover:opacity-100 transition duration-300">
        <li>Regular Maintenance</li>
          <li>Inspection Before Renting</li>
          <li>Safety Gear Availability</li>
          <li>Emergency Assistance</li>
          <li>Cleaning and Sanitization</li>
        </ul>
      </div>
      </div>
    </div>
  </div>
  )
}

