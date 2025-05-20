import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contect = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_204sehi',     // replace with your EmailJS service ID
      'template_kjycqvg',    // replace with your EmailJS template ID
      form.current,
      'lYwh5WwNRxDKbSAJ8'      // replace with your EmailJS public key
    ).then(
      (result) => {
        alert('Message sent successfully!');
        e.target.reset();
      },
      (error) => {
        alert('Failed to send message. Please try again.');
        console.log(error.text);
      }
    );
  };

  return (
    <div id="contact" className='text-white mt-2'>
      <h1 className='text-[2rem] flex justify-center'>Contact Me</h1>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col py-2 gap-4 items-center'>
        <input type="text" name="name" placeholder='Name' required className='p-3 rounded-md bg-slate-900 w-full'/>
        <input type="email" name="email" placeholder='Email' required className='p-3 rounded-md bg-slate-900 w-full'/>
        <input type="text" name="phone" placeholder='Phone Number' className='p-3 rounded-md bg-slate-900 w-full'/>
        {/* <input type="text" name="interest" placeholder='Service of Interest' className='p-3 rounded-md w-full bg-slate-900'/>
        <input type="text" name="timeline" placeholder='Timeline' className='p-3 rounded-md bg-slate-900 w-full'/> */}
        <textarea name="detail" className='h-[15rem] p-3 rounded-md bg-slate-900 w-full' placeholder='Enter project details'></textarea>
        <button type="submit" className='flex justify-center border-2 rounded-md p-2 w-[7rem]'>
          Send
        </button>
      </form>
    </div>
  );
};

export default Contect;
