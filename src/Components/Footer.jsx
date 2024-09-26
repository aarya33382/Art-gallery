import React from 'react'

export default function Footer() {
  return (
    <div className=' w-full p-[8%] lg:py-[5%]  lg:h-[244px] h-[350px] bg-black  '>
      <div className=' flex lg:flex-row flex-col justify-evenly lg:h-auto h-[310px] '>
      <div className='text-white font-bold font-big text-6xl'>MODERN <br /> ART  GALLERY</div>
      <div className='text-white lg:w-[380px] lg:h-[84px] '>The Modern Art Gallery is free to all visitors and open  seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.</div>
      <div className=' h-[60px] w-[140px] p-3 lg:p-0'>
      <img src="/icons.svg" alt="icons" />
      </div>
      </div>
    </div>
  )
}
