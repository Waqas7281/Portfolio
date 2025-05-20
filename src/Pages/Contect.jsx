import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contect = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_204sehi',       // your EmailJS service ID
      'template_8jv2zmo',      // your EmailJS template ID
      form.current,
      'lYwh5WwNRxDKbSAJ8'      // your EmailJS public key
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
    <div id="contact" className="text-white mt-2 px-4">
      <h1 className="text-[2rem] flex justify-center mb-4">Contact Me</h1>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col py-2 gap-4 items-center max-w-xl mx-auto">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="p-3 rounded-md bg-slate-900 w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="p-3 rounded-md bg-slate-900 w-full"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          pattern="^((\+92)|0)?3[0-9]{9}$"
          title="Please enter a valid Pakistani phone number (e.g., +923001234567 or 03001234567)"
          required
          className="p-3 rounded-md bg-slate-900 w-full"
        />
        <textarea
          name="detail"
          className="h-[15rem] p-3 rounded-md bg-slate-900 w-full"
          placeholder="Enter project details"
          required
        ></textarea>
        <button
          type="submit"
          className="flex justify-center border-2 rounded-md p-2 w-[7rem] hover:bg-[#fa6d00] hover:text-white"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contect;
