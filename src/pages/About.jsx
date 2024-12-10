import iconDesign from '../assets/icon-design.svg'
import iconCode from '../assets/icon-code.svg'
import LaptopNavbar from '../components/LaptopNavbar'
function About() {
    return (
        <div className="relative bg-[#1E1E1F] border-[0.2px] border-[#353535] my-4 mb-16 rounded-xl p-4 laptop:mb-0 ">
            <LaptopNavbar/>
            <h2 className="text-xl font-[Poppins-medium]">About Me</h2>
            <div className="h-[3px] w-[30px] my-3 rounded bg-gradient-to-r from-[#FFDB70] to-[#FFBB5C]"></div>

            <div className='my-5'>
            <p>I&apos;m Recent BCA graduate with 8.2 CGPA from Nandha Arts and Science College with solid foundation in computer science and web technologies. Specialized in React, JavaScript, and Java.</p>
            <p>Demonstrated commitment to continuous learning through completion of the 2024 Web Development Bootcamp on Udemy, complementing my formal education with practical, industry-relevant skills.</p>
            <p>Seeking an entry-level software development position where I can leverage my technical expertise, problem-solving abilities, and collaborative mindset to contribute to innovative projects and team success.</p>
            </div>

            <h3 className="my-2 text-lg font-[Poppins-medium]">What I&apos;m Doing</h3>
           <div className='laptop:flex gap-8 '>
            <div className="relative bg-gradient-to-br from-[hsl(0,0%,25%)] to-[hsla(0,0%,25%,0)]  rounded-lg p-[1px] my-5">
                  <div className="flex flex-col gap-5 items-center text-center p-3 bg-[#242324] rounded-lg h-full tablet:flex-row tablet:text-left">
                    <img src={iconDesign} alt="" className='w-12 tablet:mx-5'/>
                   <div >
                   <h3 className='font-[poppins] mb-2 mx-3 laptop:font-[poppins-medium]'>Java Programming</h3>
                   <p className='text-sm text-justify mx-3'>Java programming with a solid understanding of basic concepts and syntax. I&apos;m improving my problem solving skills by practicing coding and learning data structures and algorithms with Java.</p>
                   </div> 
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-[hsl(0,0%,25%)] to-[hsla(0,0%,25%,0)]  rounded-lg p-[1px] my-5">
                  <div className="flex flex-col gap-5 items-center text-center p-3 bg-[#242324] rounded-lg tablet:flex-row tablet:text-left">
                    <img src={iconCode} alt="" className='w-12 tablet:mx-5'/>
                   <div>
                   <h3 className='font-[poppins] mb-2 mx-3 laptop:font-[poppins-medium]'>Web development</h3>
                   <p className='text-sm text-justify mx-3'>I&apos;m proficient in HTML, CSS, and JavaScript with a solid understanding of basic concepts and syntax in React.js, enabling me to build engaging and functional frontend applications.</p>
                   </div> 
              </div>
            </div>
           </div> 
        </div>
    )
}

export default About