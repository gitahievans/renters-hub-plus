import { SidebarProvider } from '@/Context/SidebarContext'
import LandlordLayout from '@/components/Landlords/Layout/LandlordLayout'

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
            <section className='font-ff-poppins'>
                <SidebarProvider>
                    <LandlordLayout>{children}</LandlordLayout>
                </SidebarProvider>
            </section>
    )
}
