import React from 'react';
import pp from '../../assets/Utshav.jpg';

const StartPage = () => {
  return (
    <header className="bg-yellow-100 text-black px-8 flex justify-center items-start min-h-screen rounded-lg gap-7">
      {/* Profile Image */}
      <div className="flex-shrink-0 mt-20">
        <img
          src={pp}
          alt="Profile"
          className="w-96 h-1/2 mt-10 rounded-xl border-8 border-white"
        />
      </div>

      {/* Text Content */}
      <div className="text-center flex flex-col px-20 mt-52 gap-2">
        <h1 className="text-4xl font-outfit font-extrabold mb-2">Hi, I'm Utshav Dahal</h1>
        <h2 className="text-2xl text-red-900 font-outfit font-medium mb-2">
          Frontend Developer from Biratnagar
        </h2>
        <p className="text-lg font-outfit mb-10">
          I am a fresher Frontend developer from Biratnagar, Nepal. Currently
          studying at Mahendra Morang Adarsha Multiple Campus. Passionate about
          building user-friendly interfaces and learning new technologies.
        </p>

<div className='flex items-center justify-center gap-6'>
        <span className='border rounded-full p-3 bg-red-800 hover:bg-red-700 hover:border-red-400 hover:scale-105 hover:shadow-2xl cursor-pointer transition-transform duration-300 text-white font-semibold
        font-outfit'>Connect with me</span>
        <span className='border rounded-full p-3 text-white bg-green-900 hover:bg-green-700 hover:scale-105 transition-transform duration-300 cursor-pointer font-outfit font-semibold'>My Resume</span>
      </div>
        
      </div>
    </header>
  );
};

export default StartPage;
