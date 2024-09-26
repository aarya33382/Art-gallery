import React from 'react'
import { Link } from 'react-router-dom'
export default function Top() {
  return (
    <div className='  lg:h-[900px] lg:pl-12 lg:relative '>
      <div className='lg:w-[100%] lg:h-full lg:flex '>
        <div className='bg-black lg:w-[42%] lg:h-[100%] lg:block hidden'></div>
        <div className='lg:w-[70%] lg:h-full .....  h-[300px] '>
          <img src="/People.png" alt="img" className='lg:h-[100%] lg:w-[70%]  ..... h-[300px] w-[100%] object-cover ' />
        </div>
      </div>
      {/* second part */}
      <div className=' lg:flex lg:justify-evenly lg:h-[240px] lg:absolute  lg:w-[95%] lg:top-[180px] .....
      '>
        <div className='lg:text-white lg:text-8xl lg:mix-blend-difference lg:ml-[110px] lg:font-big lg:font-bold ..... text-6xl font-big font-bold ....  flex pl-4 py-6 items-center' >MODERN <br />ART GALLERY</div>
        <div className='lg:relative lg:left-40 lg:w-[320px] lg:flex lg:flex-col lg:p-0 lg:justify-between lg:ml-[30px] lg:text-xl lg:h-[312px] ...   p-4 h-[330px] flex justify-evenly items-start flex-col'>
          <div className='  w-[100%] h-[200px] text-[25px]'>The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.</div>
          <div className='lg:flex flex'>
            <div className='lg:w-[170px] lg:h-[50px] w-[215px] h-[70px] bg-black text-white lg:flex lg:justify-center lg:items-center flex justify-center items-center'> OUR lOCATION</div>
          <Link to='/Location' className='lg:flex lg:justify-center lg:items-center flex justify-center items-center '>
            <button className='lg:w-[40px] lg:flex lg:justify-center lg:items-center bg-[#D5966c] w-[60px] lg:h-[50px] h-[70px] flex justify-center items-center' ><img src="/arrow.svg" alt='img' className='w-[15px]' /> 
            </button>
          </Link>
          
          </div>
        </div>
      </div>
    </div>
  )
}
