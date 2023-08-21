'use client'

import React from 'react'
import OverviewTable from '@/components/Landlords/OverviewTable/OverviewTable';

const Stats = () => {
  return (
    <div className='flex flex-col gap-3 min-h-full p-1 my-2 md:max-w-3xl lg:max-w-full mx-auto'>
      <h1 className='text-xl font-semibold'>All property clicks</h1>
      <OverviewTable />
    </div>
  )
}

export default Stats;