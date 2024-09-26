import React from 'react'

export default function Middle() {
  return (
    <div className='lg:h-[1300px] lg:w-[100%]  lg:pl-12 lg:pt-32  pt-20 h-[1725px]'>
      <div className=' lg:w-[90%] lg:h-[37%] lg:flex lg:flex-row lg:justify-end flex flex-col-reverse h-[550px] justify-between '>
        <div className='lg:h-[85%] lg:w-[30%] flex flex-col justify-evenly lg:items-center  h-[300px] lg:p-0 p-3 '>
          <h1 className='font-big  lg:font-bold font-extrabold text-6xl lg:self-start'>YOUR DAY AT <br /> THE GALLERY</h1>
          <p className='text-xl '>Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.</p>
        </div>  
        <div className=' lg:h-[90%] lg:w-[60%] lg:flex lg:justify-end lg:p-0 p-3'>
          <img src="/Hall.png" alt="Hall" className=''/>
        </div>
      </div>
      <div className='lg:w-[90%] lg:h-[61%] lg:flex lg:justify-end h-[1060px]'>
        <div className=' lg:h-[100%] lg:w-[55%] h-[450px] p-3'>
          <img src="/Desk.png" alt="Desk" className='h-[100%] w-[100%] object-cover' />
        </div>
        <div className=' lg:h-[100%] lg:w-[35%] lg:flex flex-col justify-between items-end h-[605px]' >
          <div className=' lg:w-[92%] lg:h-[44%] lg:flex justify-end lg:p-0 p-3  '>
            <img src="Wait.png" alt="wait" className='h-full' />
          </div>
          <div className='  lg:w-[92%] lg:h-[52%] lg:flex items-end lg:p-0 p-3 
          h-[330px] '>
            <img src="TextImg.svg" alt="textImg" className='h-full lg:object-cover' />

          </div>
        </div>
      </div>
    </div>

    
  )
}
