import React from 'react'
import { useAuthContext } from '../../context/AuthContext'

function StartMessage() {

  const {authUser} = useAuthContext()
  
  return (
    <div className="md:min-w-[450px] flex  items-center w-full h-full ">
      <div className=" px-5 flex flex-col ">
      <h1 className='px-4 text-3xl text-bold text-gray-500 text-center'> hello <span className='text-blue-500'>"{authUser.fullName}"</span> Select any chat to  </h1>
     <p className=' text-center text-pretty text-2xl'> start messaging!! </p>

      </div>

      
    </div>
  )
}

export default StartMessage