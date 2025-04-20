import React from 'react';

const Navbar = () => {
  return (
    <div className="absolute flex justify-between h-fit w-full bg-white p-4 items-center text-red-700 border rounded-md">
      {/* Brand Name */}
      <a
        className="text-3xl text-red-900 font-lemon hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
        href="#"
      >
        Utshav Dahal
      </a>

      {/* Navigation Links */}
      <ul className=" flex gap-10 text-lg font-outfit font-semibold sm:text-nowrap ">
        <li className="hover:scale-110 hover:text-red-400 cursor-pointer transition duration-500">
          Home
        </li>
        <li className="hover:scale-110 hover:text-red-400 cursor-pointer transition duration-500">
          Projects
        </li>
        <li className="hover:scale-110 hover:text-red-400 cursor-pointer transition duration-500">
          About me
        </li>
        <li className="hover:scale-110 hover:text-red-400 cursor-pointer transition duration-500">
        Contact
        </li>
      </ul>

      {/* Call-to-Action Button */}
      <div className="p-2 text-sm text-white text-nowrap hidden sm:block font-bold font-outfit rounded-lg bg-gradient-to-t from-red-900 to-red-700 transition-transform hover:scale-110 duration-300 ease-in-out cursor-pointer">
        Connect With Me <i class='bx bx-message-dots'></i>
      </div>
    </div>
  );
};

export default Navbar;
