"use client"
import Footer from '@/Components/Footer'
import WithSubnavigation from '@/Components/Navbar'
import { ChakraBaseProvider } from '@chakra-ui/react'
import { Open_Sans } from 'next/font/google'

const Open = Open_Sans({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={Open.className}>
        <ChakraBaseProvider>
        <WithSubnavigation/>
        {children}
        <Footer/>
        </ChakraBaseProvider>
        </body>
    </html>
  )
}
