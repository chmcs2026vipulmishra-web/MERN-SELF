import React from 'react'
import { Link } from 'react-router'
import { CirclePlus, Store } from 'lucide-react'

const Navbar = () => {
  return (
    <header className='bg-green-400 border-b border-base-content/10'>
      <div className='ms-auto max-6xl p-4'>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-bold text-primary font-monotracking-tight'><Store className='size-10 inline mr-2 text-red-800' />
            FOOTWEAR MANAGEMENT SYSTEM
          </h1>
          <div className='flex items-center gap-4 transition duration-200'>
            <Link to='/create' className='btn btn-secondary hover:border-primary hover:bg-red-500 text-[20px] px-6 py-3 hover:scale-105 hover:shadow-lg transition duration-300'>
              <CirclePlus className='size-5' />
              <span>Add Footwear</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar