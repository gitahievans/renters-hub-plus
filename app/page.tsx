'use client'

import FilterSort from '@/components/FilterSort'
import PropertyCard from '@/components/PropertyCard'
import Sort from '@/components/Sort'
import Image from 'next/image'
import oneCard from '@/public/images/square.png';
import twoCards from '@/public/images/2sections.png';
import { useState } from 'react'

export default function Home() {
  const [twoColumns, setTwoColumns] = useState(false);

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]

  const handleOneSection = () => {
    setTwoColumns(false);
  };

  const handleTwoSections = () => {
    setTwoColumns(true);
  };

  return (
    <div className='bg-slate-50 h-screen py-4 px-1 lg:px-10 '>
      <FilterSort />
      <section className='flex flex-col gap-3 mt-4'>
        <div className='lg:hidden '>
          <div className='flex items-center justify-end gap-2'>
            <Image src={oneCard} alt='one-column' className={`w-6 h-5 cursor-pointer bg-${!twoColumns ? 'app-green rounded-sm' : null} `} onClick={handleOneSection} />

            <Image src={twoCards} alt='two-columns' className={`w-8 h-[32px] cursor-pointer bg-${twoColumns ? 'app-green rounded-md' : null}`} onClick={handleTwoSections} />
          </div>
        </div>
        <div className={`grid grid-cols-${twoColumns ? 2 : 1}  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  place-items-center gap-4 py-2 h-full`}>
          {
            nums.map((n, index) => (
              <PropertyCard key={index} />
            )
            )}
        </div>
      </section>
    </div>
  )
}
