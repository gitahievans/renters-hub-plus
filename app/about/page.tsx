'use client'

import { Carousel } from '@mantine/carousel';
import React from 'react'
import house from '@/public/images/house.jpg';
import Image from 'next/image';


const About = () => {
  return (
    <div className='min-h-[100dvh] bg-slate-100 flex flex-col gap-4 py-4 px-1 lg:px-10 '>
      <div>
        <Carousel
          align='start'
          slideGap='sm'
          withControls
          withIndicators
          loop
          breakpoints={[
            { minWidth: 'md', slideSize: '40%' },
            { maxWidth: 'sm', slideSize: '100%', slideGap: 'xs' },
          ]}
          className='bg-slate-200 shadow-md shadow-gray-100'
        >
          <Carousel.Slide>
            <Image src={house} alt='house' />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image src={house} alt='house' />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image src={house} alt='house' />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image src={house} alt='house' />
          </Carousel.Slide>
        </Carousel>
      </div>
      <div className='flex flex-col gap-2'>
        <h1 className='text-xl font-semibold'>About RentersHub</h1>
        <p className='font-font-2'>Renters Hub is a national company that makes house searching a simple, fast and cheap exercise. We are committed to connecting the house owners to their tenants in both residential and commercial rental property. The era when you would walk days looking for a house, asking people if there is a vacant space around them, paying brokers to find you a house(which you may not end up liking) and having to pay to view a house is over. Renters Hub is therefore your savior from the chaos of house searching. It is where Renters run to get their customers more easily, faster and cheaply.</p>
      </div>
    </div>
  )
}

export default About;