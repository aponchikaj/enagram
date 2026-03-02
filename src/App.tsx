import { useEffect } from 'react'
import './App.css'
import Navbar from './components/layout/navbar'
import Sidemenu from './components/layout/sidebar'

function App() {

  useEffect(()=>{
    document.title = "ENAGRAM"
  })

  return (
    <>
      <section className='w-auto h-auto lg:hidden'>
        <Navbar/>
      </section>
      <section className='w-auto h-auto hidden lg:flex'>
        <Sidemenu/>
      </section>
    </>
  )
}

export default App
