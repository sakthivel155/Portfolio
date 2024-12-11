import { NavLink } from 'react-router-dom'

function LaptopNavbar() {
    return (
        <nav className='hidden laptop:block absolute top-0 right-0 z-50 px-[50px] bg-[#2B2B2C] border-b border-l border-[#383838] rounded-bl-2xl  '>
            <ol className='flex justify-center gap-7 py-5 text-xs font-sans font-semibold'>
                <li>
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => 
                            isActive 
                            ? 'text-[#FFDB70]' 
                            : 'text-white hover:text-[#FFDB70] transition-colors duration-300'
                        }
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/resume" 
                        className={({ isActive }) => 
                            isActive 
                            ? 'text-[#FFDB70]' 
                            : 'text-white hover:text-[#FFDB70] transition-colors duration-300'
                        }
                    >
                        Resume
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/project" 
                        className={({ isActive }) => 
                            isActive 
                            ? 'text-[#FFDB70]' 
                            : 'text-white hover:text-[#FFDB70] transition-colors duration-300'
                        }
                    >
                        Project
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/contact" 
                        className={({ isActive }) => 
                            isActive 
                            ? 'text-[#FFDB70]' 
                            : 'text-white hover:text-[#FFDB70] transition-colors duration-300'
                        }
                    >
                        Contact
                    </NavLink>
                </li>
            </ol>
        </nav>
    )
}

export default LaptopNavbar