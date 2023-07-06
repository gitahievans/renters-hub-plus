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
        <div>Landlords</div>
    )
}

export default Landlords;