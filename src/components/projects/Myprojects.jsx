import React from 'react'
import Card from '../global/Card'
import daraz from '../../assets/Daraz.jpg'
import todo from '../../assets/Todolist.jpg'
import game from '../../assets/Suffle.png'

const Myprojects = () => {

    const project=[
        {
        id:1,
        projectname:'Daraz-Clone App',
        image:daraz,
        link:'https://utshavud.github.io/Daraz-Clone/'
    },
    {
        id:2,
        projectname:'Suffle-And-Solve',
        image:game,
        link:'https://utshavud.github.io/SuffleAndSolve/'
    },
    {
        id:3,
        projectname:'To-do-List App',
        image:todo,
        link:'https://utshavud.github.io/To-do-list/'
    }
]

  return (
    <div className='h-screen w-screen bg-gradient-to-tr from-white via-yellow-50 to-yellow-200 border'>
        <div><nav className='flex items-center justify-center font-serif font-bold text-3xl text-red-900 bg-white border rounded-xl py-4'>My projects</nav></div>

<h2 className='text-3xl font-pompiere mt-10 mb-10 flex items-center justify-center'>Some of the projects that i have worked on: </h2>

<div className='px-10 flex items-center justify-center'>
<div className='grid grid-cols-3 place-items-center place-content-center gap-10'>
    {project.map((item)=>(
        <Card key={item.id} projectname={item.projectname} image={item.image} link={item.link}  />
    ))}
</div>
</div>

<div className='mt-24 text-green-950 px-20 flex items-center justify-center text-xl'>
<label className='font-mono text-center'>Working on some exciting new projects that are in development.<br/>I’m constantly learning and refining my skills, and I’ll be showcasing my upcoming projects right here on my website with detailed descriptions and live demos. Stay tuned — updates are coming soon!</label>
</div>

    </div>
  )
}

export default Myprojects