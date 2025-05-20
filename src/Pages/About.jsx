import React from 'react'
import DawnloadCv from '../Components/DawnloadCv'

const About = () => {
  return (
    <main className='sm:mt-[14rem]  mt-80' id='about' > 
    <div >
       <h2 className="text-white  font-bold flex justify-center text-[3rem]"  >About me:</h2>
    </div>
    <div className='flex sm:justify-between flex-col items-center'>
      <div className='relative'>
        <img src="/images/el.png"  alt="not found" />
        <img src="/images/w.png" alt="" className='absolute top-[20px] right-[29px] h-[16rem]' />
      </div>
      <div> <p className="m-[2wv] text-white max-w-[20rem]  pt-3" >
      Hi, my name is Waqas Ali Shah, i am a Fullstack web developer, Frontend React js, and Backend developer. I have honed my skills in Web Development and advance i have core understanding of advance Development principles. 
      Here are the major skills i have. Years of experience. Specialised in building apps, while ensuring a seamless
      web experience for end users.
      </p></div>
    <div className='mt-3'>
      <DawnloadCv/>
    </div>
    </div>
     
    </main>
  )
}

export default About