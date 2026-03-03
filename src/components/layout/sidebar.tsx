import { useState } from "react"
import leftImage from '../../assets/chevrons-left.png'
import './sidebar.css'
import logo from '../../assets/logo.png'

import checkIcon from '../../assets/check.png'
import spellingIcon from '../../assets/Spelling, Check, Text.png'
import micIcon from '../../assets/mic.png'
import soundIcon from '../../assets/align-center.png'
import documentIcon from '../../assets/programming-code-document.png'
import userLogo from '../../assets/User Images.png'
import threeDotsLogo from '../../assets/Group.png'

export default function Sidemenu(){

    const [menuMode,setMenuMode] = useState(true);
    const [selectedIndex, setSelectedIndex] = useState(1)

    const menuButtons = [
        {
            title:"მართმწერი",
            icon:checkIcon,
        },
        {
            title:"ტექსტის შედარება",
            icon:spellingIcon,
        },
        {
            title:"ხმა -> ტექსტი",
            icon:micIcon,
        },
        {
            title:"ტექსტი -> ხმა",
            icon:soundIcon,
        },
        {
            title:"PDF კონვერტაცია",
            icon:documentIcon,
        },
    ]

    if(!menuMode){
        return(
            <nav className="w-[10vh] closed h-screen bg-[#132450] flex items-center justify-center">
                <button onClick={()=>setMenuMode(true)} className="cursor-pointer"><img src={leftImage} alt="left" className="w-[40px] rotate-180" /></button>
            </nav>
        )
    }

    return(
        <nav className="w-[35vh] open h-screen bg-[#132450] flex flex-col overflow-visible ">

            <section className="flex items-center justify-end p-[10px] px-[10px]">
                <button onClick={()=>setMenuMode(false)} className="cursor-pointer"><img src={leftImage} alt="left" className="w-[35px]" /></button>
            </section>

            <section className="w-full p-[10px] h-[10vh] flex items-center justify-start px-[10px] gap-2">
                <img src={logo} alt="logo" className="w-[40px]" />
                <h1 className="text-white font-medium">ENAGRAM</h1>
            </section>

            <section className="w-full flex flex-col items-center justify-center p-[10px] pr-0 gap-2 overflow-visible">
                <ul className="flex flex-col items-center justify-center text-center w-full">
                    {menuButtons.map((d, i) => (
                        <li key={i} className="w-full">
                        <button
                            onClick={() => setSelectedIndex(i)}
                            className={`flex cursor-pointer items-center justify-start gap-2 w-full px-[10px] py-[14px] transition-all ${selectedIndex === i ? "selected-btn" : "bg-transparent"}`}
                        >
                            <img src={d.icon} alt="icon" className="w-[30px]" />
                            <p className={`font-medium ${selectedIndex === i ? "text-[#132450]" : "text-white"}`}>{d.title}</p>
                        </button>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="w-full p-[10px] flex items-center justify-around border-t border-[#9EB9FF33] mt-auto">
                <section className="flex gap-2 items-center">
                    <img src={userLogo} alt="user" className="w-[30px]" />
                    <p className="text-white ">თამარ ონიანი</p>
                </section>
                <img src={threeDotsLogo} alt="three dots" className="w-[30px]" />
            </section>
        </nav>
    )
}