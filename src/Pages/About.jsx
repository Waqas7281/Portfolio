import React from 'react'

const About = () => {
  return (
    <main className='sm:mt-[14rem]  mt-80' id='about' > 
    <div >
       <h2 className="text-white  font-bold flex justify-center text-[3rem]"  >About me:</h2>
    </div>
    <div className='flex sm:justify-between flex-col'>
      <div className='relative'>
        <img src="/images/el.png"  alt="not found" />
        <img src="/images/w.png" alt="" className='absolute top-0' />
      </div>
      <div> <p className="m-[2wv] text-white max-w-[20rem]  " >
      Hi, my name is Waqas Ali Shah, i am a Fullstack web developer, Frontend React js, and Backend developer. I have honed my skills in Web Development and advance i have core understanding of advance Development principles. 
      Here are the major skills i have. Years of experience. Specialised in building apps, while ensuring a seamless
      web experience for end users.
      </p></div>
    </div>
    
    </main>
  )
}

export default About