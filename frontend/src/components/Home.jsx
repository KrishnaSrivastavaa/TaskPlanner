import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
export const Home = () => {
  return (
    <>
    <div className='flex '>

    
      <div className='min-h-screen bg-indigo-950 w-[25%] flex  justify-center'>
          <div className='bg-indigo-600 rounded-xl p-4 h-20 m-10 flex items-center gap-4'>
         
            <div className='bg-indigo-400 ml-2 flex items-center justify-center text-white font-bold rounded-xl h-10 w-10 text-center'>
              A
            </div>
            <div className='flex flex-col text-white'>
              <strong>Andrew Alfred</strong>
              <span>Technical advisor</span>
            </div>
            
            <MdKeyboardArrowDown className='text-white font-bold h-10 w-5' />
            
          </div>
          
      </div>

      <div className='min-h-screen bg-indigo-600 w-[85%] flex justify-center'>
        <div>
          <h1>Todos</h1>
        </div>
      </div>

      <div>

      </div>


    </div>
    </>
  )
}
