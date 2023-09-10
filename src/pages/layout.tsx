
import '../app/globals.scss'

import { Inter } from 'next/font/google'

import 'bootstrap/dist/css/bootstrap.min.css'

import { FC, PropsWithChildren } from 'react'
import NavBar from '../app/components/NavBar'


const inter = Inter({ subsets: ['latin'] })



 const RootLayout:FC<PropsWithChildren> = ({
  children
})  => {
  return (
    <>

     <NavBar />
     
       <main style={{ marginTop: "30px" }}>
        {children}
        </main>

    </>
  )
}


export default RootLayout