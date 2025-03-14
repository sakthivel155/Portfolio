import LaptopNavbar from '../components/LaptopNavbar'
import { TypeAnimation } from 'react-type-animation';
import { skillIcons } from '../Data/SkillIcons';
function About() {
    return (
        <div className="relative mobile:text-center tablet:text-left bg-[#1E1E1F] border-[0.2px] border-[#353535] my-4 mb-16 rounded-xl p-4 tablet:p-14 laptop:mb-0 desktop:m-0 desktop:overflow-auto w-full">
            <LaptopNavbar/>
            {/* <div className='my-5'>
            <p>I&apos;m Recent BCA graduate with 8.2 CGPA from Nandha Arts and Science College with solid foundation in computer science and web technologies. Specialized in React, JavaScript, and Java.</p>
            <p>Demonstrated commitment to continuous learning through completion of the 2024 Web Development Bootcamp on Udemy, complementing my formal education with practical, industry-relevant skills.</p>
            <p>Seeking an entry-level software development position where I can leverage my technical expertise, problem-solving abilities, and collaborative mindset to contribute to innovative projects and team success.</p>
            </div> */}
        <TypeAnimation
          className="text-[#FFDB70] absolute top-8 left-5 right-5 tablet:left-14 tablet:top-10  text-md font-mono"
          sequence={
            [`Hello World...!`, 1000, 
              'I\'m Sakthivel Ramesh',1000,
            ]}
          wrapper="h2"
          speed={160}
          repeat={0}  
          cursor={false}
        />
      <p className=' mt-12 text-md font-mono tablet:text-justify'>Recent BCA graduate with a strong foundation in computer science and web technologies. I specialize in creating responsive, user-friendly websites and applications using modern web technologies. Seeking opportunities to break into the
        world of web development.</p>

        
        <h3 className=" mt-20  text-lg ">Technical Skills</h3>
        <div className="mobile:mx-auto tablet:mx-0 h-[3px] mobile:w-[60px] tablet:w-[30px]  my-2 rounded bg-gradient-to-r from-[#FFDB70] to-[#FFBB5C]"></div>
        <div className="grid mobile:grid-cols-3 tablet:grid-cols-4 laptop:grid-cols-5 gap-y-10  font-[poppins] text-[.8rem] my-16 w-full"> 
                  <div className='flex flex-col justify-between items-center '>
                          <img className='w-14 my-auto mb-2' src={skillIcons.html} alt="" />
                          <p >Html</p>
                </div>
                <div className='flex flex-col justify-between items-center '>
                          <img className='w-14 my-auto mb-2' src={skillIcons.css} alt="" />
                          <p >Css</p>
                      </div>
                
                <div className='flex flex-col justify-between items-center '>
                      <img className='w-12 rounded-sm  ' src={skillIcons.js} alt="" />
                      <p>JavaScript</p>
                    </div>
                      <div className='flex flex-col justify-between items-center'>
                          <img className='w-14 my-auto' src={skillIcons.react} alt="" />
                          <p>React</p>
                </div>
                <div className='flex flex-col justify-between items-center '>
                          <img className='w-14 my-auto ' src={skillIcons.tailwindcss} alt="" />
                          <p >Tailwindcss</p>
                </div>
                <div className='flex flex-col justify-between items-center '>
                          <img className='w-12 mb-2' src={skillIcons.figma} alt="" />
                          <p >Figma</p>
                      </div>

                  <div className='flex flex-col justify-between items-center '>
                          <img className='w-14 my-auto mb-2' src={skillIcons.node} alt="" />
                          <p >Node</p>
                </div>
                <div className='flex flex-col justify-between items-center '>
                          <img className='w-14 my-auto mb-2' src={skillIcons.express} alt="" />
                          <p >Express</p>
                      </div>
                
                <div className='flex flex-col justify-between items-center '>
                      <img className='w-14 rounded-sm my-auto ' src={skillIcons.postgresql} alt="" />
                      <p>PostgreSQL</p>
                    </div>
                      <div className='flex flex-col justify-between items-center'>
                          <img className='w-14' src={skillIcons.git} alt="" />
                          <p>Git</p>
                </div>
                <div className='flex flex-col justify-between items-center '>
                          <img className='w-14  mb-2' src={skillIcons.postman} alt="" />
                          <p >Postman</p>
                </div>
              
                  </div>  
        </div>
    )
}

export default About;
