import React from 'react'
import Icon from './Icon'
const Footer = () => {
  return (
    <div className='text-white bg-gray-950 '>
        <h1 className='flex justify-center text-[2rem] p-3'>Logo</h1>
        <ul className='flex flex-wrap justify-center gap-3 sm:gap-10 pt-3 '>
            <li>Home</li>
             <li>Services</li>
              <li>About me</li>
               <li>Portfolio</li>
                <li>Contect Me</li>
        </ul>
         <div className='flex justify-center pt-2 '><Icon /></div>
        <div className='flex justify-center flex-col items-center  sm:gap-[10%] pt-4 pb-10 flex-wrap'>
            <p>WaqasAliShah9040@gmail.com</p>
            <p className='p-2'>0321-8636730</p>
        </div>
        <hr className=''/>
        <div className='flex justify-center pt-4  text-white-500 pb-5'> 
            Design By Waqas ali Shah
        </div>

    </div>
  )
}

export default Footer