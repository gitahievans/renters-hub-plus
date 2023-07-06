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
    <div>About Us</div>
  )
}

export default About