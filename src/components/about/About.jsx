import React from 'react'
import utshav from '../../assets/utshav2.jpeg'

const About = () => {
  return (
    <div className='mt-10 min-h-screen w-full bg-gradient-to-tl from-white via-yellow-50 to-yellow-200 font-outfit'>
      <nav className='flex gap-4 border-4 rounded-2xl border-yellow-50  bg-white py-4 items-center justify-center text-3xl text-red-900 font-serif font-extrabold mb-10'>
       About Me
      </nav>

      <div className='flex items-start justify-start gap-10 px-10'>
        {/* ✅ Use div instead of image tag */}
        <div className='mt-0'>
          <img src={utshav} alt='Utshav' className='h-[70vh] w-96 object-cover border-8 border-white' />
        </div>

        <div className='flex flex-col items-start justify-start text-left px-10 text-lg mt-10 w-full'>
          <p className='mb-05 text-xl font-outfit'>
            I am a final-year BCA student studying in <h2 className='font-pompiere font-bold text-3xl inline text-red-950'> Mahendra Morang Adarsha Multiple Campus.</h2><br/>I love building cool stuff with code. I enjoy creating websites and mobile apps that are simple, useful, and actually fun to use. Whether it has a small feature or a full project, I like diving in and figuring things out.
            <br/>I have a strong passion for Web development—especially using MERN stack.I am working on to become a full stack web developer. I love turning ideas into smooth, user-friendly interfaces that not only look good but feel great to use.
          </p>

          {/* ✅ Skill bars with widths as percentages */}
          <div className='flex flex-col font-kavivanar font-bold text-lg gap-4 w-full mt-5'>
            <h2 className='font-kavivanar font-bold text-green-900 text-xl'>Some of the skills I have:</h2>
            <span className='flex items-center gap-4 hover:scale-105 transition-transform duration-300 cursor-pointer'>
              <h2 className='w-32'>HTML & CSS</h2>
              <div className='h-3 bg-gradient-to-r from-gray-400 via-gray-600 to-black rounded-full w-[70%]' />
            </span>

            <span className='flex items-center gap-4 hover:scale-105 transition-transform duration-300 cursor-pointer'>
              <h2 className='w-32'>TailwindCSS</h2>
              <div className='h-3 bg-gradient-to-r from-gray-400 via-gray-600 to-black rounded-full w-[60%]' />
            </span>

            <span className='flex items-center gap-4 hover:scale-105 transition-transform duration-300 cursor-pointer'>
              <h2 className='w-32'>JavaScript</h2>
              <div className='h-3 bg-gradient-to-r from-gray-400 via-gray-600 to-black rounded-full w-[65%]' />
            </span>

            <span className='flex items-center gap-4 hover:scale-105 transition-transform duration-300 cursor-pointer'>
              <h2 className='w-32'>ReactJS</h2>
              <div className='h-3 bg-gradient-to-r from-gray-400 via-gray-600  to-black rounded-full w-[60%]' />
            </span>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-evenly ml-72'>
  <h2 className='border-2 shadow-2xl border-red-900 rounded-2xl p-4 hover:scale-105 text-2xl text-emerald-900 font-pompiere font-extrabold transition-transform duration-500 hover:cursor-pointer'>Internship on Office management system</h2>
  <h2 className='border-2 shadow-2xl border-red-900 rounded-2xl p-4 hover:scale-105 text-2xl text-emerald-900 font-pompiere font-extrabold transition-transform duration-500 hover:cursor-pointer'>Developed Android mobile apps</h2>
  <h2 className='border-2 shadow-2xl border-red-900 rounded-2xl p-4 hover:scale-105 text-2xl text-emerald-900 font-pompiere font-extrabold transition-transform duration-500 hover:cursor-pointer'>Developed web applications</h2>
</div>
    </div>
  )
}

export default About
