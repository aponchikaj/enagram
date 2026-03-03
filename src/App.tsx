import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/layout/navbar'
import Sidemenu from './components/layout/sidebar'
import Menu from './components/layout/menu'
import Arrow from './assets/Arrow.png'
import Loading from './components/common/loading'


function App() {

  useEffect(()=>{
    document.title = "Enagram - Interview Project"
  })

  const [loading,setLoading] = useState(false)

  const [text1,setText1] = useState("")
  const [text2,setText2] = useState("")

  const [precent,setPrecent] = useState(0)
  const [pixel,setPixel] = useState("1")

  async function computeDiff(text1: string, text2: string) {
    const words1 = text1.trim().split(/\s+/)
    const words2 = text2.trim().split(/\s+/)
    const m = words1.length
    const n = words2.length

    setPixel("50")
    setPrecent(25)
    await new Promise(r => setTimeout(r, 300))

    const dp: number[][] = []
    for (let i = 0; i <= m; i++) {
      dp[i] = new Array(n + 1).fill(0)
    }
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (words1[i - 1] === words2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
        }
      }
    }

    setPixel("130")
    setPrecent(59)
    await new Promise(r => setTimeout(r, 300))

    const result = []
    let i = m, j = n
    while (i > 0 || j > 0) {
      if (i > 0 && j > 0 && words1[i-1] === words2[j-1]) {
        result.unshift({ type: "same", word: words1[i-1] })
        i--; j--
      } else if (j > 0 && (i === 0 || dp[i][j-1] >= dp[i-1][j])) {
        result.unshift({ type: "added", word: words2[j-1] })
        j--
      } else {
        result.unshift({ type: "removed", word: words1[i-1] })
        i--
      }
    }

    setPixel("190")
    setPrecent(100)
    await new Promise(r => setTimeout(r, 300))

    return result
  }

  const [diffResult, setDiffResult] = useState<{type: string, word: string}[]>([])
  const [showResult, setShowResult] = useState(false)

  const checkTexts = async () => {
    setLoading(true)
    const result = await computeDiff(text1, text2)
    setDiffResult(result)
    setLoading(false)
    setShowResult(true)
  }

  const handleNewWindow = () => {
    setText1("")
    setText2("")
    setDiffResult([])
    setShowResult(false)
  }

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
            <Menu onReset={handleNewWindow} diffRes={diffResult} />
          </section>

          {loading == true ? (
            <section className='w-full h-full flex items-center justify-center'>
              <Loading pixel={pixel} precent={precent} />
            </section>

          ) : showResult == true ? (
            <section className='flex flex-col p-[10px] gap-3'>

              <section className='flex w-full flex-col h-auto gap-2 md:flex-row items-center justify-center'>
                <textarea value={text1} readOnly className="font-light bg-[#E8E8E8] text-gray-400 h-[20vh] md:h-[25vh] w-full resize-none outline-none p-[10px] rounded-[5px]"/>
                <img src={Arrow} alt="arrow" className='rotate-90 md:rotate-0 w-[30px] h-[35px]' />
                <textarea value={text2} readOnly className="font-light bg-[#E8E8E8] text-gray-400 h-[20vh] md:h-[25vh] w-full resize-none outline-none p-[10px] rounded-[5px]"/>
              </section>

              <section className='flex gap-2'>
                <span className='bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full'>+ {diffResult.filter(w => w.type === "added").length} დამატებული</span>
                <span className='bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full'> − {diffResult.filter(w => w.type === "removed").length} წაშლილი</span>
              </section>

              <section className='bg-white border border-gray-200 rounded-[5px] p-[14px] leading-8 text-[15px]'>
                {diffResult.map((item, index) => {
                  if (item.type === "added") {
                    return <span key={index} className='bg-green-100 text-green-800 underline mx-[2px] px-1 rounded'>{item.word} </span>
                  }
                  if (item.type === "removed") {
                    return <span key={index} className='bg-red-100 text-red-700 line-through mx-[2px] px-1 rounded'>{item.word} </span>
                  }
                  return <span key={index} className='mx-[2px]'>{item.word} </span>
                })}
              </section>

              <section className='w-full p-[10px] flex items-center justify-center'>
                <button onClick={() => { setShowResult(false); setDiffResult([]) }} className='self-start text-sm bg-[#4571E4] cursor-pointer text-white p-[10px] rounded-[10px] cursor-pointer border-none'>← უკან</button>
              </section>

            </section>
          ) : (
            <section className='h-auto flex flex-col items-center justify-center'>

              <section className='flex w-full flex-col h-auto p-[10px] gap-2 md:flex-row items-center justify-center'>
                <textarea value={text1} onChange={(e) => setText1(e.target.value)} className="font-light bg-[#F0F7FF] h-[35vh] md:h-[60vh] w-full resize-none outline-none p-[10px] rounded-[5px]" placeholder="დაიწყე წერა..."/>
                <img src={Arrow} alt="arrow" className='rotate-90 md:rotate-0 w-[30px] h-[35px]' />
                <textarea value={text2} onChange={(e) => setText2(e.target.value)} className="font-light bg-[#F0F7FF] h-[35vh] md:h-[60vh] w-full resize-none outline-none p-[10px] rounded-[5px]" placeholder="დაიწყე წერა..."/>
              </section>

              <section className='w-full p-[10px] flex items-center justify-center'>
                {text1 == "" || text2 == "" ? (
                  <button className='rounded-[5px] text-sm font-light px-[20px] p-[10px] text-white bg-[#383A4899]' disabled>შედარება</button>
                ) : (
                  <button onClick={checkTexts} className='rounded-[5px] text-sm font-light px-[20px] p-[10px] text-white bg-[#4571E4] cursor-pointer'>შედარება</button>
                )}
              </section>

            </section>
          )}

        </section>

      </main>
    </>
  )
}

export default App
