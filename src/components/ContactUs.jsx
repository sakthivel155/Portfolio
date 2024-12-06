import { useRef } from 'react';
import { IoIosSend } from "react-icons/io";
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_95qpdxn', 'template_fz2971s', form.current, {
        publicKey: '3EdyW1GFxAoD4Nwmx',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto my-5">
  <div className="mb-4">
   
    <input 
      type="text" 
      name="user_name" 
      placeholder='Name'
      required
      className="text-sm w-full bg-[#1E1E1F] border-[0.2px] border-[#353535] rounded-sm px-3 py-2 outline-none placeholder:opacity-80"
    />
  </div>
  
  <div className="mb-4">
   
    <input 
      type="email" 
      name="user_email" 
      placeholder='Email'
      required
      className="text-sm w-full bg-[#1E1E1F] border-[0.2px] border-[#353535] rounded-sm px-3 py-2 outline-none placeholder:opacity-80"
    />
  </div>
  
  <div className="mb-4">
    <textarea 
      name="message" 
      placeholder='Your Message'
      required
      rows="4"
      className="text-sm w-full bg-[#1E1E1F] border-[0.2px] border-[#353535] rounded-sm px-3 py-2 outline-none placeholder:opacity-80"
    ></textarea>
  </div>
  
  <button 
    type="submit" 
    className="flex gap-1 w-full justify-center text-sm font-[poppins-medium] opacity-80 bg-[#262628] rounded-md text-[#FFDB70] border-t border-l border-[#353535] px-3 py-3 outline-none"
  > <IoIosSend className='text-lg'/>
    Send Message
  </button>
</form>
  );
};

export default ContactUs;