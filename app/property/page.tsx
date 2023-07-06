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
    <div>Property listings here</div>
  )
}

export default Property;