import MainLayout from '../components/MainLayout'
import './globals.css'

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
