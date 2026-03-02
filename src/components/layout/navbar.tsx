import menu from '../../assets/menu.png'
import { useState } from 'react'
import logo from '../../assets/logo.png'
import textLogo from '../../assets/Spelling, Check, Text.png'
import expandLogo from '../../assets/expand_more_black_24dp 3.png'
import './navbar.css'

export default function Navbar(){

    const [menuMode,setMenuMode] = useState(false);

    if(menuMode){
       return(
            <nav className='w-[35dvh] h-screen sidebar flex flex-col bg-[#132450] absolute top-0 right-0 justify-between'>
                <section className='w-auto h-auto'>
                    <header className='w-full p-[10px] flex items-center justify-between'>
                        <section className='flex items-center justify-center px-[10px] gap-1'>
                            <img src={logo} alt="logo" className='w-[35px]'/>
                            <h1 className='text-white font-medium'>ENAGRAM</h1>
                        </section>
                        <section className='px-[10px]'>
                            <button onClick={()=>setMenuMode(false)} className='text-white font-medium text-xl'>X</button>
                        </section>
                    </header>
                    <section className='w-full p-[10px] flex items-center justify-center border-y border-[#EAEAEA] h-[10vh]'>
                        <button className='text-white font-medium cursor-pointer ease-in-out duration-200 hover:text-[#cccccc]'>ავტორიზაცია</button>
                    </section>
                    <section className='w-full p-[10px] flex items-center justify-center px-[10px]'>
                        <div className='w-full border-b border-[#cccccc] flex items-center justify-center'>
                            <input type="text" name="search" id="search" placeholder='ძიება...' className='outline-none text-white' />
                        </div>
                    </section>
                </section>
                <section className='w-auto h-auto flex items-center justify-center p-[10px]'>

                    <button className='rounded-[10px] p-[10px] text-sm bg-blue-500 text-white'>პრემიუმი</button>

                </section>
            </nav>
       )
    }

    return(
        <>
            <nav className="w-full navbar h-[10vh] flex items-center justify-between p-[10px] bg-[#132450]">
                <section className="text-center items-center justify-center gap-2 flex px-[10px]">
                    <img src={logo} alt="logo" className='w-[40px]'/>
                    <h1 className='text-white font-medium'>ENAGRAM</h1>
                </section>
                <section className='px-[10px]'>
                    <button onClick={()=>setMenuMode(true)}><img src={menu} alt="menu" className='w-[30px]' /></button>
                </section>
            </nav>
            <section className='w-full navbar border-b border-[#EDEDED] p-[10px] flex items-center px-[10px]'>
                <button className='flex items-center text-center justify-center gap-1'>
                    <img src={textLogo} alt="text Logo" className='w-[25px]' />
                    <p className='font-medium text-sm'>ტექსტის შედარება</p>
                    <img src={expandLogo} alt="expand Logo" className='w-[20px]' />
                </button>
            </section>
        </>
    )
}