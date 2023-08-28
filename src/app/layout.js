import './globals.css'
import '@/styles/Navbar.css'
import '@/styles/Bigscreen.css'
import '@/styles/HomeSection.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Taskino | A task management and productivity app ',
  description: 'Taskino- a task management and productivity app',
}


export default function RootLayout({ children }) {
  return (

    <html lang="en">
   <link rel="icon" href="/favicon.png" type="image/x-icon" sizes="any"/>
<Head>
<Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  </Head>

      <body className={inter.className}>{children}</body>
<Script src="https://kit.fontawesome.com/be98f66bcc.js" crossorigin="anonymous"/>
   
    </html>

  )
  
}
