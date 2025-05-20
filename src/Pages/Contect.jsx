import React from 'react'

const Contect = () => {
  return (
    <div id="contect" className='text-white mt-2 '>
      <h1 className='text-[2rem] flex justify-center'  id='contact'>Contect Me</h1>
     <div className='flex flex-col py-2 gap-4 items-center  '> 
       <input type="text" name="name"  placeholder='Name' className='p-3 rounded-md bg-slate-900 w-full'/>
      <input type="text" name="email"  placeholder='Email' className='p-3 rounded-md bg-slate-900 w-full'/>
      <input type="text" name="phone" placeholder='Phone Number' className='p-3 rounded-md bg-slate-900 w-full'/>
      <input type="text" name="interest"  placeholder='Service of Interest' className='p-3 rounded-md w-full bg-slate-900'/>
      <input type="text" name="timeline"  placeholder='Timeline' className='p-3 rounded-md bg-slate-900 w-full'/>
      <textarea name="Detail" id="" className='h-[15rem] p-3 rounded-md bg-slate-900 w-full ' placeholder='Enter project Detail'></textarea>
      <button className='flex justify-center border-2 rounded-md p-2 w-[7rem]'>Send</button>
     </div>
    </div>
  )
}

export default Contect