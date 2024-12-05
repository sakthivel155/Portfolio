import { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import profileAvatar from '../assets/profile-avatar.png'
import {
    IoMailOutline, IoPhonePortraitOutline, IoCalendarOutline, IoLocationOutline,
    IoLogoLinkedin, IoLogoGithub
} from "react-icons/io5";

function Header() {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <header className='relative bg-[#1E1E1F] rounded-2xl border-[0.2px] border-[#353535] p-4'>
            <div className="flex gap-4 items-center">
                <button 
                    className='absolute right-0 top-0 p-[5px] border-t border-l border-[#353535] bg-[#202025] rounded-tr-2xl rounded-bl-2xl 
                    focus:border-[#9b9436] focus:bg-gradient-to-tl from-[#1E1E1F] to-[#665014] 
                    '
                    onClick={() => setShowInfo(!showInfo)}
                >
                    <MdKeyboardArrowDown className={`text-xl text-[hsl(45,100%,75%)] transition-transforn duration-500 ${showInfo ? 'rotate-180' : 'rotate-0'}`} />
                </button>
                
                <div className='w-[80px] h-[80px] overflow-hidden rounded-2xl'>
                    <img className='scale-[2.3] pt-3 pr-1' src={profileAvatar} alt="" />
                </div>
                <div>
                    <h1 className="text-[17px] mb-[8px] font-[Poppins-medium]">Sakthivel Ramesh</h1>
                    <span className='text-xs bg-[#2B2B2C] px-3 py-[2px] rounded-lg'>Software Developer</span>
                </div>
            </div>

            <div className={`transition-all duration-700 ease-in-out overflow-hidden ${showInfo ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className='transform transition-transform duration-700'>
                    <hr className='my-5 border-[#353535]' />
                    <div>
                        <div className='flex items-center gap-3 mb-5'>
                            <div>
                                <IoMailOutline className='bg-[#262628] text-3xl rounded-md text-[#FFDB70] border-t border-l border-[#353535] p-1' />
                            </div>
                            <div>
                                <p className='text-xs opacity-50 mb-0'>EMAIL</p>
                                <a className='text-[.8rem]' href="mailto:sakthivelramesh.work@gmail.com">sakthivelramesh.work@gmail.com</a>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 mb-5'>
                            <div>
                                <IoPhonePortraitOutline className='bg-[#262628] text-3xl rounded-md text-[#FFDB70] border-t border-l border-[#353535] p-1' />
                            </div>
                            <div>
                                <p className='text-xs opacity-50 mb-0'>PHONE</p>
                                <a className='text-[.8rem]' href="tel:+919360835548">+91 9360835548</a>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 mb-5'>
                            <div>
                                <IoCalendarOutline className='bg-[#262628] text-3xl rounded-md text-[#FFDB70] border-t border-l border-[#353535] p-1' />
                            </div>
                            <div>
                                <p className='text-xs opacity-50 mb-0'>BIRTHDAY</p>
                                <p className='text-[.8rem]'>Oct 14, 2003</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 mb-5'>
                            <div>
                                <IoLocationOutline className='bg-[#262628] text-3xl rounded-md text-[#FFDB70] border-t border-l border-[#353535] p-1' />
                            </div>
                            <div>
                                <p className='text-xs opacity-50 mb-0'>LOCATION</p>
                                <p className='text-[.8rem]'>Chennai, Tamilnadu, India</p>
                            </div>
                        </div>
                    </div>
                    <hr className='my-5 border-[#353535]' />
                    <div className='flex ml-2 gap-4'>
                        <a href="https://www.linkedin.com/in/sakthivelramesh/">
                            <IoLogoLinkedin className='opacity-50 text-xl' />
                        </a>
                        <a href="https://github.com/sakthivel155">
                            <IoLogoGithub className='opacity-50 text-xl' />
                        </a>
                        
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;