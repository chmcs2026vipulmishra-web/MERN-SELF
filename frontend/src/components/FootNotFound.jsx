import React from 'react'
import { Link } from 'react-router'
import { ShoppingBag } from 'lucide-react'

const FootNotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center'>
      <div className='bg-primary/10 rounded-full p-8'>
        <ShoppingBag className='size-10 text-primary' />
      </div>
      <h3 className='text-2xl font-bold'>No footwear yet</h3>
      <p className='text-base-content/70'>
        Ready to add footwear? Add your first item to the store
      </p>
      <Link to='/create' className='btn btn-primary'>
        Add first footwear to the store
      </Link>
    </div>
  )
}

export default FootNotFound