import React from "react";
import tourism from './Videos/tourism.mp4'

const ComingSoon=()=>{
    return(
        <div className='flex flex-col items-center justify-center space-y-10 w-full h-screen bg-[#0F1630]'>
            <p className="md:text-2xl text-md text-center md:mt-[4%] italic text-pink-400 font-bold">Coming Soon – Here's a Sneak Peek! 👀</p>
            <video src={tourism} className="md:w-7/12 px-12 flex items-center justify-center" autoPlay={true}></video>
        </div>
    )
}

export default ComingSoon; 