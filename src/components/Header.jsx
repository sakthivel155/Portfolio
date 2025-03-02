import { useState, useEffect } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

import profileAvatar from '../assets/profile-avatar.png'
import {
    IoMailOutline, IoPhonePortraitOutline, IoCalendarOutline, IoLocationOutline,
    IoLogoLinkedin, IoLogoGithub
} from "react-icons/io5";

function Header() {
    const [showInfo, setShowInfo] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
       
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 1440);
            if (window.innerWidth >= 1440) {
                setShowInfo(true);
            }
        };

        // Check initial screen size
        checkScreenSize();

        // Add event listener for window resize
        window.addEventListener('resize', checkScreenSize);

        // Cleanup event listener
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const toggleShowInfo = () => {
        if (!isLargeScreen) {
            setShowInfo(!showInfo);
        }
    };

    return (
        <header className='relative font-[Poppins] bg-[#1E1E1F] rounded-[20px] border-[0.2px] border-[#353535] p-4 desktop:flex desktop:flex-col desktop:justify-between desktop:py-10'
        onClick={()=> {
            if (window.innerWidth >= 1440) {
                setShowInfo(true);
            }else{
                setShowInfo(!showInfo)}
            }}>
            
            <div className="flex gap-4 items-center desktop:flex-col ">
                {!isLargeScreen && (
                    <button 
                        className={`absolute right-0 top-0 p-[5px] border-t border-l border-[#353535] bg-[#202025] rounded-tr-2xl rounded-bl-2xl 
                    ${showInfo &&  `border-[#9b9436] bg-gradient-to-tl`} from-[#1E1E1F] to-[#665014]`}
                        onClick={toggleShowInfo}
                    >
                        <p className='hidden text-[hsl(45,100%,75%)] text-xs p-1 tablet:block'>Show Contacts</p>
                        <MdKeyboardArrowDown className={`text-xl text-[hsl(45,100%,75%)] transition-transforn duration-500 ${showInfo ? 'rotate-180' : 'rotate-0'} tablet:hidden`} />
                    </button>
                )}
                
                <div className='w-[80px] h-[80px] overflow-hidden rounded-2xl desktop:w-[140px] desktop:h-[140px] desktop:rounded-[20px]'>
                    <img className='scale-[2.1] pt-3 pr-1' src={profileAvatar} alt="" />
                </div>
                <div className='desktop:flex desktop:flex-col desktop:items-center '>
                    <h1 className="text-[17px] mb-[8px] font-[Poppins-medium] desktop:text-xl">Sakthivel Ramesh</h1>
                    <span className='text-xs font-[Poppins] bg-[#2B2B2C] px-3 py-[2px] rounded-lg '>Frontend Developer</span>
                </div>
            </div>

            <div className={`
                transition-all duration-700 ease-in-out overflow-hidden 
                ${showInfo ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
            `}>
                <div className='transform transition-transform duration-700'>
                    <hr className='my-5 border-[#353535]' />
                    <div className='tablet:grid tablet:grid-cols-2 gap-4 desktop:block  '>
                        <div className='flex items-center gap-3 mb-5 desktop:py-2'>
                            <div>
                                <IoMailOutline className='bg-[#262628] text-3xl rounded-md text-[#FFDB70] border-t border-l border-[#353535] p-1' />
                            </div>
                            <div>
                                <p className='text-xs opacity-50 mb-0'>EMAIL</p>
                                <a className='text-[.8rem]' href="mailto:sakthivelramesh.work@gmail.com">sakthivelramesh.work@gmail.com</a>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 mb-5 desktop:py-2'>
                            <div>
                                <IoPhonePortraitOutline className='bg-[#262628] text-3xl rounded-md text-[#FFDB70] border-t border-l border-[#353535] p-1' />
                            </div>
                            <div>
                                <p className='text-xs opacity-50 mb-0'>PHONE</p>
                                <a className='text-[.8rem]' href="tel:+919360835548">+91 9360835548</a>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 mb-5 desktop:py-2'>
                            <div>
                                <IoCalendarOutline className='bg-[#262628] text-3xl rounded-md text-[#FFDB70] border-t border-l border-[#353535] p-1' />
                            </div>
                            <div>
                                <p className='text-xs opacity-50 mb-0'>BIRTHDAY</p>
                                <p className='text-[.8rem]'>Oct 14, 2003</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 mb-5 desktop:py-2'>
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
                    <div className='flex ml-2 gap-4 desktop:justify-center '>
                        <a href="https://www.linkedin.com/in/sakthivelramesh/" target='_blank'>
                            <IoLogoLinkedin className='opacity-50 text-xl' />
                        </a>
                        <a href="https://github.com/sakthivel155" target='_blank'>
                            <IoLogoGithub className='opacity-50 text-xl' />
                        </a>
                        <a href="https://x.com/SakthivelRame10" target='_blank'>
                            <FaXTwitter className='opacity-50 text-xl' />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;