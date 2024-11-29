import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <nav className='fixed bottom-0 z-50 w-full bg-[#1E1E1F] rounded-t-xl border-[0.2px] border-[#353535] '>
            <ol className='flex justify-center gap-7 py-5 text-xs font-sans font-semibold '>
                <li>
                    <Link to={"/"} className='text-[#FFDB70]'>
                    About
                    </Link>
                </li>
                <li>
                    <Link to={"/resume"}>
                    Resume
                    </Link>
                </li>
                <li>
                    <Link to={"/project"}>
                    Project
                    </Link>
                </li>
                <li>
                    <Link to={"/contact"}>
                    Contact
                    </Link>
                </li>
            </ol>
        </nav>
    )
}

export default Navbar