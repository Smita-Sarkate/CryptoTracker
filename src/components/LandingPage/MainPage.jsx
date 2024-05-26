import React from 'react'
import "./style.css"
import Button from '../Common/Button/Button.jsx'
import Share from '../Common/Button/Share.jsx'

function MainPage() {
  return (
    <div className='px-6 py-4 flex justify-between' >
    <div className='left leading-tight'>
        <h1 className='stroke-effect text-[6rem] font-bold'>Track Crypto</h1>
        <h1  className='text-[6rem] font-bold text-blue'>Real Time.</h1>
        <p className='text-gray text-md mt-2'>Track crypto through a publich api in real time. Visit the dashboard to do so!</p>
    
        <div className='button flex gap-6 mt-5 items-center'>
            <Button className="" text={"Dashboard"}/>
            <Share className="" text={"Share"}/>
         </div>
    </div>
    
    <div className='right'>
        phone
    </div>
    
    </div>
  )
}

export default MainPage
