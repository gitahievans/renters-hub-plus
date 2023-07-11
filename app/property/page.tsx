import React from 'react'
export async function generateMetadata({ params }: {
  params: { id: string }
}) {
  return {
    title: 'Rentershub listings',
  };
}
const Property = () => {
  return (
    <div className='h-[500px] bg-slate-100'>Property listings here</div>
  )
}

export default Property;