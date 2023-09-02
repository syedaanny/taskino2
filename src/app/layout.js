import './globals.css'
import '@/styles/Navbar.css'
// import '@/styles/Bigscreen.css'
import '@/styles/HomeSection.css'
import { Inter, Plus_Jakarta_Sans} from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import { Poppins } from 'next/font/google';



const plus_Jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'] });
const poppins = Poppins({
  weight: ['400', '700','600','500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})


export const metadata = {
  title: 'Taskino | A task management and productivity app ',
  description: 'Taskino- a task management and productivity app',
}




export default function RootLayout({ children }) {
  return (

    <html lang="en" className={poppins.className}>
   <link rel="icon" href="/favicon.png" type="image/x-icon" sizes="any"/>
<Head>
<Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  </Head>
 
      <body className={plus_Jakarta_sans.className}>
          {children}
          </body>
<Script src="https://kit.fontawesome.com/be98f66bcc.js" crossorigin="anonymous"/>
   
    </html>

  )
  
}
