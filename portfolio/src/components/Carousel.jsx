import { useState } from "react"

export default function Carousel({slides}){
    let [Current,setCurrent]= useState(0)
    let previousslide=()=>{
        if(Current==0) setCurrent(slides.length-1);
        else setCurrent(Current-1);
    }
    let nextslide=()=>{
        if(Current==slides.length-1) setCurrent(0);
        else setCurrent(Current+1);    
    }
    return(
    <div className="overflow-hidden relative">
        <div className="flex w-100 md:w-150 transition ease-out duration-300"
        style={{
            transform: `translateX(-${Current*100}%`
        }}
        >

        {
            slides.map((s)=>{
                return<img src={s}/>
            })
        }
        </div>
    <div className="top-0 h-full w-full justify-between items-center absolute flex p-1 ">
        <button className="cursor-pointer" onClick={previousslide}>
            <img src="\left.png" alt="" className="w-10 bg-white rounded-full" />
        </button>
        <button className="cursor-pointer"onClick={nextslide}>
            <img src="\right.png" alt="" className="w-10 bg-white rounded-full" />
        </button>
    </div>
    </div>
    ) 
}