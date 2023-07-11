'use client'

import FilterSort from '@/components/FilterSort'
import PropertyCard from '@/components/PropertyCard'
import Sort from '@/components/Sort'
import Image from 'next/image'
import oneCard from '@/public/images/square.png';
import twoCards from '@/public/images/2sections.png';
import { useEffect, useState } from 'react'
import { Pagination, Select } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export default function Home() {
  const [twoColumns, setTwoColumns] = useState<boolean | undefined>(false);
  const [activePage, setActivePage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [value, setValue] = useState<string | null>('10');
  const isSmallScreen = useMediaQuery('(max-width: 640px)')
  const isLargeScreen = useMediaQuery('(min-width: 1440px)')

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch('https://api.rentcast.io/v1/listings/rental/long-term', {
  //       headers: {
  //         'X-Api-Key': '95375650c71547a8864a7bb1fc959f3f',
  //         'X-RapidAPI-Host': 'realtymole-rental-estimate-v1.p.rapidapi.com'
  //       }
  //     })
  //     const data = await res.json()
  //     console.log(data)
  //   }
  //   getData();
  // }, [])


  // create an array of 50 items
  const arr = new Array(50);
  arr.fill(0);
  const nums = arr.map((_, index) => index + 1)


  const handlePageChange = (page: number) => {
    setActivePage(page);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('activePage', page.toString());
    }
  };

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('activePage', activePage.toString());
    }
  }, [activePage]);

  useEffect(() => {
    setItemsPerPage(parseInt(value || '10'));
  }, [value])


  const handleOneSection = () => {
    setTwoColumns(false);
  };

  const handleTwoSections = () => {
    setTwoColumns(true);
  };

  const totalPages = Math.ceil(nums.length / itemsPerPage);
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = nums.slice(startIndex, endIndex);

  return (
    <div className='bg-slate-50 h-full py-4 px-1 lg:px-10 '>
      <FilterSort />
      <section className='flex flex-col gap-3 mt-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4 lg:self-end'>
            <h3 className='text-base font-semibold' >Items per page</h3>
            <div className='w-20 md:w-40'>
              <Select
                data={[
                  { value: '5', label: '5' },
                  { value: '10', label: '10' },
                  { value: '25', label: '25' },

                ]}
                placeholder="Select category"
                searchable
                size='xs'
                value={value}
                radius='lg'
                width={10}
                onChange={setValue}
              />
            </div>
          </div>
          <div className='md:hidden '>
            <div className='flex items-center justify-end gap-2'>
              <Image src={oneCard} alt='one-column' className={`w-6 h-5 cursor-pointer bg-${!twoColumns ? 'app-green rounded-sm' : null} `} onClick={handleOneSection} />

              <Image src={twoCards} alt='two-columns' className={`w-8 h-[32px] cursor-pointer bg-${twoColumns ? 'app-green rounded-md' : null}`} onClick={handleTwoSections} />
            </div>
          </div>
        </div>

        <div className={`grid grid-cols-${twoColumns ? 2 : 1}  md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  place-items-center gap-${twoColumns ? 2 : 4} py-2 h-full`}>
          {
            displayedItems.map((n, index) => (
              <PropertyCard key={index} twoColumns={twoColumns} />
            )
            )}
        </div>
      </section>
      <div className='flex items-center justify-center w-full py-4'>
        <Pagination
          value={activePage}
          onChange={handlePageChange}
          total={totalPages}
          withEdges
          radius='md'
          spacing={isSmallScreen ? 'sm' : 'lg'}
          size={isSmallScreen ? 'sm' : isLargeScreen ? 'xl' : 'lg'}
          styles={(theme) => ({
            control: {
              '&[data-active]': {
                backgroundImage: theme.fn.gradient({ from: 'blue', to: 'green' }),
                border: 0,
              },
            },
          })}
        />
      </div>
    </div>
  )
}
