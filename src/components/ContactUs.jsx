import { useRef, useState } from 'react';
import { IoIosSend } from "react-icons/io";
import { CheckCircleIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("Message sent successfully!");

  const showSuccessPopup = (message = "Message sent successfully!") => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_95qpdxn', 'template_fz2971s', form.current, {
        publicKey: '3EdyW1GFxAoD4Nwmx',
      })
      .then(
        () => {
          showSuccessPopup('Message sent successfully!');
          // Clear form fields
          e.target.user_name.value = '';
          e.target.user_email.value = '';
          e.target.message.value = '';
        },
        (error) => {
          console.log('FAILED...', error.text);
          showSuccessPopup('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="relative w-full">
      {/* Success Popup - Mobile Responsive */}
      {showPopup && (
        <div 
          className="
            fixed top-0 w-full right-0 z-50 
             backdrop-blur-md bg-gray-700/30 rounded-b-full   text-green-500 
             py-5  
            flex items-center justify-center space-x-2 
            animate-dropdown-mobile 
           laptop:w-[300px] laptop:rounded-xl laptop:right-4  laptop:top-5
          "
        >
          <CheckCircleIcon className="w-5 h-5" />
          <span className="text-sm font-medium">{popupMessage}</span>
        </div>
      )}


      {/* Contact Form */}
      <form 
        ref={form} 
        onSubmit={sendEmail} 
        className="
          w-full mt-10 
        "
      >
      <div className='tablet:flex gap-5'>    
        <div className="mb-5 w-full">
          <input 
            type="text" 
            name="user_name" 
            placeholder='Name'
            required
            className="
              text-sm w-full 
              bg-[#1E1E1F] 
              border-[0.2px] border-[#353535] 
              rounded-lg px-3 py-2 tablet:py-3
              outline-none 
              placeholder:opacity-80
            "
          />
        </div>
        
        <div className="mb-5 w-full">
          <input 
            type="email" 
            name="user_email" 
            placeholder='Email'
            required
            className="
              text-sm w-full 
              bg-[#1E1E1F] 
              border-[0.2px] border-[#353535] 
              rounded-lg px-3 py-2 tablet:py-3
              outline-none 
              placeholder:opacity-80
            "
          />
        </div>
      </div>  
        <div className="mb-5">
          <textarea 
            name="message" 
            placeholder='Your Message'
            required
            rows="5"
            className="
              text-sm w-full 
              bg-[#1E1E1F] 
              border-[0.2px] border-[#353535] 
              rounded-lg px-3 py-3 
              outline-none 
              placeholder:opacity-80
            "
          ></textarea>
        </div>
        <div className='flex justify-end'>
        <button 
          type="submit" 
          className="
            flex gap-1 w-full tablet:w-[160px] 
            justify-center 
            text-sm font-[poppins-medium] 
            opacity-80 
            bg-[#262628] 
            rounded-xl 
            text-[#FFDB70] 
            border-t border-l border-[#353535] 
            px-3 py-3 
            outline-none
          "
        >
          <IoIosSend className='text-lg'/>
          Send Message
        </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;