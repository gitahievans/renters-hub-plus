import LandlordLayout from '@/components/Landlords/LandlordLayout'

export const metadata = {
    title: 'Renters Hub',
    description: 'The place where smart Kenyans come to find houses',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className='font-ff-poppins'>
                <LandlordLayout>{children}</LandlordLayout>
            </body>
        </html>
    )
}
