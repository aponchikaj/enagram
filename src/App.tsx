import { useEffect } from 'react'
import './App.css'
import Navbar from './components/layout/navbar'

function App() {

  useEffect(()=>{
    document.title = "ENAGRAM"
  })

  return (
    <>
      <section className='w-auto h-auto lg:hidden'>
        <Navbar/>
      </section>
    </>
  )
}

export default App
