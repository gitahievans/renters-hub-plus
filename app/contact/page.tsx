import React from 'react'

export async function generateMetadata({ params }: {
    params: { id: string }
}) {
    return {
        title: 'Contact RentersHub',
    };
}

const Contact = () => {
    return (
        <div>Contact us</div>
    )
}

export default Contact;