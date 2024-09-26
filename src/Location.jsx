import React from 'react'
import { Link } from 'react-router-dom'
export default function Location() {
  return (
    <div className=' w-[100%] h-[1000px] lg:w-[90%] lg:ml-[70px]  '>
      <div className=' w-full h-[40%] relative'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61816.02396293105!2d75.87509987606694!3d14.455868269263458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bba25726a6222e5%3A0x4a120de147c6d472!2sDavanagere%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1727283940027!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full h-full'   ></iframe>
        <div className='flex  w-[200px] h-[50px] justify-center absolute left-0 top-0 lg:left-[120px]'>
          <Link to='/'>
            <button className='bg-[#D5966c] rotate-180 w-[40px] h-[48px] flex justify-center items-center'> <img src="/arrow.svg" alt="" /> </button>
          </Link>
          <div className='bg-black  lg:h-12 w-32 h-12 text-white flex items-center '> <h2>BACK TO HOME</h2></div>
        </div>

      </div>
      <div className=' w-full h-[40%] '>
        <div className='bg-black h-full w-full flex lg:flex-row flex-col  
        justify-evenly lg:items-center lg:p-0 p-4'>
          <h2 className=' text-white  lg:w-[15%] font-big lg:text-6xl text-5xl font-bold  '>OUR LOCATION</h2>
          <div className=' lg:w-[50%]  flex justify-center '>
            <img src="/locationDetails.svg" alt="" />
          </div>
        </div>
      </div>
      {/* footer */}
      <div className=' w-full h-[20%]'>
        <div className=' w-full p-[8%] lg:py-[5%]  lg:h-[244px] h-[350px] bg-[#D5966c]  '>
          <div className=' flex lg:flex-row flex-col justify-evenly lg:h-auto h-[310px] '>
            <div className='text-black font-extrabold font-big text-6xl'>MODERN <br /> ART  GALLERY</div>
            <div className='text-black lg:w-[380px] lg:h-[84px] font-bold '>The Modern Art Gallery is free to all visitors and open  seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.</div>
            <div className=' h-[60px] w-[140px] pt-4'>
            <img src="/icons2.svg" alt="icons" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
