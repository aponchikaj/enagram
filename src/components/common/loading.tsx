export default function Loading({ pixel,precent }: { pixel: string,precent:number }){
    return(
        <main className="flex items-center justify-center border rounded-[10px] border-[#E1E1E1] p-[10px] gap-2">
            <section className="flex items-center justify-center">
                <div className="border rounded-[100%] border-2 border-[#4571E4] p-[10px] bg-white">
                    <div className="bg-[#4571E4] rounded-[100%] p-[7px] hover:p-[6px] ease-in-out duration-200"/>
                </div>
            </section>
            <section className="flex flex-col items-center justify-center">
                <section>
                    <p className="text-xs font-light text-[#383A4899]">Converting... Thank you For your Patience</p>
                </section>
                <section className="flex items-center justify-start gap-2 w-full">
                    <h2 className="font-medium">{precent}%</h2>

                    <div className="w-full h-[13px] rounded-[10px] bg-[#F6F9FF] ">
                        {/*  190 px is full */}
                        <div className="h-full bg-[#4571E4] rounded-[10px]" style={{ width: `${pixel}px` }}/>
                    </div>

                </section>
            </section>
        </main>
    )
}