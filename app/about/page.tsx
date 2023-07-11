import React from 'react'
export async function generateMetadata({ params }: {
  params: { id: string }
}) {
  return {
    title: 'About RentersHub',
  };
}
const About = () => {
  return (
    <div className='h-[500px] bg-slate-100'>About Us</div>
  )
}

export default About