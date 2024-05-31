import React from 'react'
import "./style.css"
import Button from '../Common/Button/Button.jsx'
import Share from '../Common/Button/Share.jsx'
import gradient from "../../assets/gradient.png"
import iphn from "../../assets/iphone.png"

function MainPage() {
  return (
    <div className='px-20 py-4 flex flex-col md:flex-row items-center justify-between gap-10 relative' >
        <div className='left leading-tight'>
            <h1 className='stroke-effect text-[2rem] md:text-[4rem] lg:text-[6rem]  font-bold'>Track Crypto</h1>
            <h1  className='text-[2rem] md:text-[4rem] lg:text-[6rem] font-bold text-blue'>Real Time.</h1>
            <p className='text-gray text-md mt-2 sm:text-[0.6rem] md:text-[1rem]'>Track crypto through a publich api in real time. Visit the dashboard to do so!</p>
        
            <div className='button flex gap-6 mt-5 items-center'>
                <Button className="" text={"Dashboard"}/>
                <Share className="" text={"Share"}/>
            </div>
        </div>
        
        <div className='right relative h-[36rem] w-[26rem]'>
            <img src={gradient} className='absolute right-8 h-[30rem] w-[15rem] mt-10'/>
            <img src={iphn} className='absolute animate-[bounce_2s_ease-in-out_infinite] right-8 h-[34rem] w-[20rem]'/>
        </div>
    </div>
  )
}

export default MainPage
