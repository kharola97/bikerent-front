import React from 'react'

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
      <h1 className='text-6xl m-3'>What our partners have to say about us?</h1>
      <div className=' w-full flex flex-wrap gap-4'>
      <div className='w-96 p-6 rounded-full shadow-2xl  shadow-slate-950 bg-stone-100'>
    <p className="text-2xl mt-2 text-indigo-500 font-bold text-center">Mr. Shop owner</p>
    <h2>"Our bike rental shop is thrilled with the seamless experience offered by the web app. It's incredibly user-friendly, simplifying reservations and payment processing. Managing our inventory has never been easier, allowing us to focus more on delivering excellent service. Kudos to the developers for creating such an amazing tool!"</h2>
    
      </div> 
      <div className='w-96 p-6 rounded-full shadow-2xl shadow-slate-950 bg-stone-100'>
    <p className="text-2xl mt-2 text-indigo-500 font-bold text-center">Mr. Shop owner</p>
      <h3>"Since integrating the web app into our operations, our bike rental shop has seen a remarkable boost in efficiency. From reservation management to inventory control, every aspect is streamlined. Real-time updates and customizable features make it a perfect fit for our needs. Highly recommended for any bike rental business!"</h3>
      </div> 
      <div className='w-96 p-6 rounded-full  shadow-2xl shadow-blue-950 bg-stone-100'>
    <p className="text-2xl mt-2 text-indigo-500 font-bold text-center">Mr. Shop owner</p>
    <h4>"This web app has revolutionized how we operate our bike rental shop. With comprehensive analytics and easy report generation, decision-making has become data-driven and efficient. The responsive customer support team ensures any issues are promptly addressed. Thanks to this innovative tool, our business is thriving like never before!"</h4>
    
      </div> 
    </div>
    </div>
   
    </div>
  )
}
