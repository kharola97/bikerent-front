import React from 'react';
import { useNavigate } from 'react-router-dom';
import bike from "../Images/bikes4.png"

function Home() {
  const navigate = useNavigate();
  const bikes = "https://bikerentalsingoa.in/upload/1667824178Motorcycle%20Rent%20in%20Goa.jpg";
  
  const handleExplore = () => {
    navigate("/aboutus");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <header className="text-center">
        <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Rent your bikes with us{' '}
          <span className="text-indigo-500">Become a partner</span>
        </p>
        <button
          onClick={handleExplore}
          className="mt-6 md:mt-8 px-8 py-4 bg-gray-800 text-white font-semibold uppercase tracking-wider rounded-full shadow-md transition duration-300 hover:bg-indigo-500 hover:text-white transform hover:scale-105 focus:outline-none focus:ring focus:ring-indigo-300"
        >
          Explore now
        </button>
      </header>
      <img src={bike} alt="image" className="mt-8 md:mt-10 w-full md:w-3/4 lg:w-1/2 xl:w-2/3 rounded-lg " />
    </div>
  );
}

export default Home;
