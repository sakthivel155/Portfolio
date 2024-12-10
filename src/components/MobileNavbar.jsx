import { NavLink } from 'react-router-dom'

function MobileNavbar() {
    return (
        <nav className='laptop:hidden backdrop-blur-md fixed bottom-0 z-50 w-full bg-gray-700/30 rounded-t-xl border-[0.2px] border-[#353535]'>
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

export default MobileNavbar