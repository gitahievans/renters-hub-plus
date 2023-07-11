import React from 'react'
export async function generateMetadata({ params }: {
    params: { id: string }
}) {
    return {
        title: 'Become a landlord',
    };
}
const Landlords = () => {
    return (
        <div className='h-[500px] bg-slate-100'>Landlords</div>
    )
}

export default Landlords;