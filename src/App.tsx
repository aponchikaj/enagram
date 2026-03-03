import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/layout/navbar'
import Sidemenu from './components/layout/sidebar'
import Menu from './components/layout/menu'
import Textarea from './components/common/textarea'
import Arrow from './assets/Arrow.png'
import Loading from './components/common/loading'


function App() {

  useEffect(()=>{
    document.title = "Enagram - Interview Project"
  })

  const [loading,setLoading] = useState(false)

  const [text1,setText1] = useState("")
  const [text2,setText2] = useState("")

  

  return (
    <>
      
      <main className='w-full h-screen flex flex-col lg:flex-row '>

        <section className='w-auto h-auto lg:hidden '>
          <Navbar/>
        </section>

        <section className='w-auto h-auto hidden lg:flex relative'>
          <Sidemenu/>
        </section>

        <section className='flex flex-col flex-1 h-full '>
          <section className=' h-auto w-full '>
            <Menu/>
          </section>

          {
            loading == false ? (
              <section className='h-auto flex flex-col items-center justify-center'>
                
                <section className='flex w-full flex-col h-auto p-[10px] gap-2 md:flex-row items-center justify-center'>
                  <textarea value={text1} onChange={(e)=>setText1(e.target.value)} className="font-light bg-[#F0F7FF] h-[35vh] md:h-[60vh] w-full resize-none outline-none p-[10px] rounded-[5px]" placeholder="დაიწყე წერა..." />

                  <img src={Arrow} alt="arrow" className='rotate-90 md:rotate-0 w-[30px] h-[35px]' />

                  <textarea value={text2} onChange={(e)=>setText2(e.target.value)} className="font-light bg-[#F0F7FF] h-[35vh] md:h-[60vh] w-full resize-none outline-none p-[10px] rounded-[5px]" placeholder="დაიწყე წერა..." />
                </section>

                <section className='w-full p-[10px] flex items-center justify-center '>
                  {
                    text1 == "" || text2 == "" ? (
                      <button className='rounded-[5px] text-sm font-light px-[20px] p-[10px] text-white bg-[#383A4899]' disabled>შედარება</button>
                    ) : (
                      <button className='rounded-[5px] text-sm font-light px-[20px] p-[10px] text-white bg-[#4571E4] cursor-pointer '>შედარება</button>
                    )
                  }
                </section> 

              </section>
            ) : (
              <section className='w-full h-full flex items-center justify-center'>
                <Loading pixel='190' precent={100}/>
              </section>
            )
          }

        </section>

      </main>
    </>
  )
}

export default App
