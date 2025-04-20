import React from 'react'

const Card = ({image,projectname}) => {
  return (
    <div className='h-64 w-64 flex-col items-center border-4 border-green-900 rounded-lg bg-emerald-900 text-white hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer'>

    <div className='h-40 w-full overflow-hidden rounded-t-lg'>
      <img src={image} alt={projectname} className='h-full w-full object-cover' />
    </div>
  
  <div className='px-2'>
    <label className='font-outfit py-2 mt-5 text-lg bg-red-950 flex items-center justify-center hover:scale-105 hover:cursor-pointer border-x-2 rounded-xl'>{projectname}</label>
  </div>

  </div>
  
  )
}

export default Card