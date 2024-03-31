import React from 'react'
import {IoSearch} from 'react-icons/io5'

function SearchInput() {
  return (
    <div >
        <form action="" className='flex items-center gap-2'>
            <input type="text" placeholder='Search' className='input  input-bordered rounded-full' />
            
            <button type='submit' className='btn btn-circle bg-blue-400'><IoSearch className='w-6 h-6'/></button>
        </form>
    </div>
  )
}

export default SearchInput