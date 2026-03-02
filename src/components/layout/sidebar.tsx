import { useState } from "react"
import leftImage from '../../assets/chevrons-left.png'
import './sidebar.css'

export default function Sidemenu(){

    const [menuMode,setMenuMode] = useState(false);

    if(menuMode == false){
        return(
            <nav className="w-[10vh] closed h-screen bg-[#132450] flex items-center justify-center">
                <button onClick={()=>setMenuMode(true)} className="cursor-pointer"><img src={leftImage} alt="left" className="w-[40px] rotate-180" /></button>
            </nav>
        )
    }

    return(
        <nav className="w-[35vh] open h-screen bg-[#132450] flex flex-col">
            <section className="flex items-center justify-end p-[10px]">
                <button></button>
            </section>
        </nav>
    )
}