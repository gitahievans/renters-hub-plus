'use client'

import React from 'react'
import ManagePropertyCard from '@/components/Landlords/ManagePropertyCard';

const ManageProperty = () => {
  return (
    <div className='flex flex-col gap-3 min-h-screen p-1 my-2 md:max-w-3xl lg:max-w-full mx-auto'>
      <h1 className='text-xl font-semibold'>Manage property here</h1>
      <section className='mx-auto mt-4 flex flex-col gap-20 w-full items-center justify-center'>
        {
          [1, 2, 3, 4, 5, 6].map(_ => (
            <ManagePropertyCard key={crypto.randomUUID()} />
          ))
        }
      </section>
    </div>
  )
}

export default ManageProperty;