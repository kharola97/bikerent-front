import React from 'react'
import { Link } from 'react-router-dom';

export const AboutUs = () => {
  return (
    <div className='container min-w-full min-h-screen px-5 py-8 mb-4 flex justify-center  flex-wrap gap-2 bg-blue-100'>
    <div className='w-96 h-96 text-center rounded-lg shadow-md bg-slate-50'> 
    <p className="text-2xl mt-6 text-indigo-500 font-bold text-center">Why Choose Us?</p>
    <ul className=" p-4 text-2xl text-center list-none space-y-2 ">
          <li >Easy to advertise your bikes</li>
          <li>Customers can book your bike through our platform</li>
          <li>Details of customers is shared with you</li>
          <li>Know the location of your bike</li>
        </ul>
    </div>
    <div className='w-96 h-96 rounded-lg shadow-md bg-gray-50'>
    <p className="text-2xl mt-6 text-indigo-500 font-bold text-center">Currently in locations</p>
    <ul className=" p-4 text-2xl list-none text-center space-y-2 ">
          <li>Uttarakhand</li>
          <li>Himachal pradesh</li>
          <li>Maharashtra</li>
          <li>Hyedrabad</li>
        </ul>
      </div>
    <div className='w-96 h-96 rounded-lg shadow-md bg-zinc-100'>
    <p className="text-2xl mt-6 text-indigo-500 font-bold text-center">Hassle free renting</p>
    <ul className=" p-4 text-2xl list-none text-center space-y-2">
        <li>User-Friendly Interface</li>
          <li>Transparent Pricing</li>
          <li>24/7 Support</li>
          <li>Flexible Bookings</li>
          <li>Instant Booking Confirmation</li>
          <li>Feedback System</li>
        </ul>

    </div>
    <div className='w-96 h-96 rounded-lg shadow-md bg-stone-100'>
    <p className="text-2xl mt-6 text-indigo-500 font-bold text-center">Safety measures for your bikes</p>
    <ul className=" p-4 text-2xl text-center list-inside space-y-2">
        <li>Regular Maintenance</li>
          <li>Inspection Before Renting</li>
          <li>Safety Gear Availability</li>
          <li>Emergency Assistance</li>
          <li>Cleaning and Sanitization</li>
        </ul>
      </div> 
    <div className=' container m-10'>
      <h1 className='text-6xl text-center m-5  text-indigo-700'>What our partners have to say about us?</h1>
      <div className=' w-full flex justify-center flex-wrap gap-4'>
      <div className='w-96 p-6  shadow-2xl  shadow-slate-950 bg-stone-100'>
    <p className="text-2xl m-2  text-indigo-500 font-bold text-center">Mr. Shop owner</p>
    <h2 className='m-3'>"Our bike rental shop is thrilled with the seamless experience offered by the web app. It's incredibly user-friendly, simplifying reservations and payment processing. Managing our inventory has never been easier, allowing us to focus more on delivering excellent service. Kudos to the developers for creating such an amazing tool!"</h2>
    <h1 className='m-3 text-2xl'>Rating :-</h1>
    
      </div> 
      <div className='w-96 p-6  shadow-2xl shadow-slate-950 bg-stone-100'>
    <p className="text-2xl m-2 text-indigo-500 font-bold text-center">Mr. Shop owner</p>
      <h3 className='m-3'>"Since integrating the web app into our operations, our bike rental shop has seen a remarkable boost in efficiency. From reservation management to inventory control, every aspect is streamlined. Real-time updates and customizable features make it a perfect fit for our needs. Highly recommended for any bike rental business!"</h3>
      <h1 className='m-3 text-2xl'>Rating :-</h1>
      </div> 
      <div className='w-96 p-6   shadow-2xl shadow-blue-950 bg-stone-100'>
    <p className="text-2xl m-2 text-indigo-500 font-bold text-center">Mr. Shop owner</p>
    <h4 className='m-3'>"This web app has revolutionized how we operate our bike rental shop. With comprehensive analytics and easy report generation, decision-making has become data-driven and efficient. The responsive customer support team ensures any issues are promptly addressed. Thanks to this innovative tool, our business is thriving like never before!"</h4>
    <h1 className='m-3 text-2xl'>Rating :-</h1>
    
      </div> 
    </div>
    </div>
  
    <p className='text-6xl m-3 block w-full text-center  font-light'>Want to Rent your bikes with us and become a partner?</p>
    
     
    <div className='flex flex-wrap justify-around gap-4'>
      <p className='text-4xl mt-3  font-light'>Create your account now</p>
      <Link className="px-8 py-4 bg-gray-800 text-white font-semibold uppercase tracking-wider rounded-full shadow-md transition duration-300 hover:bg-indigo-500 hover:text-white transform hover:scale-105 focus:outline-none focus:ring focus:ring-indigo-300" to='/adminregister'>Register</Link>
    </div>
   
    </div>
  )
}
