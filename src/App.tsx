import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/layout/navbar'
import Sidemenu from './components/layout/sidebar'
import Menu from './components/layout/menu'


function App() {

  useEffect(()=>{
    document.title = "ENAGRAM"
  })

  return (
    <>
      <section className='w-full h-auto flex flex-col lg:flex-row'>
        <section className='w-auto h-auto lg:hidden'>
          <Navbar/>
        </section>
        <section className='w-auto h-auto hidden lg:flex relative'>
          <Sidemenu/>
        </section>

        <section className=' h-auto w-full'>
          <Menu/>
        </section>
        
      </section>
    </>
  )
}

export default App
