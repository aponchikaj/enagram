import { useState } from "react";
import dropdownArrow from '../../assets/arrow-drop-down-line.png'
import plusIcon from '../../assets/Plus, Add.png'

export default function Menu(){

    // languages section
    const [selectedLanguage,setSelectedLanguage] = useState("GEO")
    const [languageOpen,setLanguageOpen] = useState(false)

    // formatis shenarchunebis seqcia
    const [isFormat,setIsFormat] = useState(false)

    // axlis gaxsnis seqcia
    const [newWindowDisabled,setNewWindowDisabled] = useState(false);

    return(
        <main className='w-full h-auto lg:h-[10vh] p-[10px] flex flex-col items-center justify-center md:flex-row p-[10px]'>

          <section className='w-[95%] h-full border-b border-[#EDEDED] flex flex-col md:flex-row items-center '>
            {/* erti meoredi mxare aq anu language da formatis shenarchunebis seqcia */}
            <section className="flex flex-col md:flex-row w-full md:w-1/2">
              {/* language section */}
              <section className='w-full md:w-auto p-[5px] flex gap-2 flex-col items-center justify-center relative'>
                
                <div className='w-full flex items-center justify-between border border-[#E0E0E0] p-[5px] px-[10px] rounded-[7px] cursor-pointer cursor-pointer py-[5px] ' onClick={()=>setLanguageOpen(languageOpen == true ? false : true)}>

                  <section className='px-[5px]'>
                    <p className='font-light'>{selectedLanguage == "GEO" ? "ქართული" : "ინგლისური"}</p>
                  </section>

                  <section className='flex items-center cursor-pointer'>
                    <button className={`${languageOpen == true ? "rotate-180" : ""}`}><img  src={dropdownArrow} alt="arrow" className={`w-[25px]`} /></button>
                  </section>

                </div>

                {
                  languageOpen == true ?(
                  <div className='top-full w-full md:w-auto p-[10px] flex flex-col absolute border bg-white rounded-[7px] gap-1 border-[#E0E0E0] items-start justify-start'>

                    <button onClick={()=>{setSelectedLanguage("GEO");setLanguageOpen(false);}} className={`flex items-center gap-2 justify-center font-light cursor-pointer `}><div className={`rounded-[100%] border border-[#E0E0E0] p-[10px] ${selectedLanguage == "GEO" ? "bg-[#4571E4]" : "bg-white"}`} /><p>ქართული</p></button>
                    
                    <button onClick={()=>{setSelectedLanguage("ENG");setLanguageOpen(false);}} className={`flex items-center gap-2 justify-center font-light cursor-pointer`}><div className={`rounded-[100%] border border-[#E0E0E0] p-[10px] ${selectedLanguage == "ENG" ? "bg-[#4571E4]" : "bg-white"}`} /><p>ინგლისური</p></button>

                  </div>) : null
                }

              </section>

              {/* formatis shenarchunebis seqcia */}
              <section className="flex items-center justify-start gap-1 w-auto p-[5px] ">
                <div className={`p-[10px] rounded-[5px] border border-[#E0E0E0] ${isFormat == true ? "bg-[#4571E4]" : "bg-white"}`} onClick={()=>setIsFormat(isFormat == true ? false : true)} />
                <p className="font-light">ფორმატის შენარჩუნება</p>
              </section>
            </section>
            
            {/* aq axlis damatebis button is seqcia */}
            <section className="py-[10px] w-full md:w-1/2 flex items-center justify-end">
              {
                newWindowDisabled == true ? (
                  <button className={`bg-[#4571E4] flex text-white cursor-pointer p-[5px] rounded-[10px] items-center justify-center gap-1 w-full md:w-auto`}><img src={plusIcon} alt="plus" className="w-[30px]" /><p className="text-sm">ახლის გახსნა</p></button>
                ) : (
                  <button className={`bg-[#383A4899] flex text-white cursor-pointer p-[5px] rounded-[10px] items-center justify-center gap-1 w-full md:w-auto `} disabled><img className="w-[30px]" src={plusIcon} alt="plus" /><p className="text-sm">ახლის გახსნა</p></button>
                )
              }
            </section>

          </section>

        </main>
    )
}