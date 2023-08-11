import MainLayout from '@/components/MainLayout'

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
                <MainLayout>{children}</MainLayout>
            </body>
        </html>
    )
}
