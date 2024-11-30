import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoBookOutline ,IoSchool} from "react-icons/io5";
import { FaSchool } from "react-icons/fa6";
import { GiSchoolBag } from "react-icons/gi";
function EducationTimeline(){
return (

<div className=' relative my-8'>

    <VerticalTimeline lineColor={'hsl(0, 0%, 20%)'}
    layout={"1-column"} animate={0}>
    <VerticalTimelineElement
      contentStyle={{ 
        background: '#1E1E1F', 
        padding:'0',
        color: '#fff',
        boxShadow: '0 4px 6px #1E1E1F'
      }}
      contentArrowStyle={{ 
        borderRight: '7px solid rgb(33, 150, 243)',
        borderRightColor: '#1E1E1F'
      }}
    

      // Icon-related props
      icon={<IoBookOutline />}
      iconClassName=" border-t border-l border-[#353535] p-2"
      iconStyle={{ 
        background: '#262628', 
        color: '#FFDB70',
        fontSize:'2.25rem',
        lineHeight:'2.5rem',
        borderRadius: '0.375rem',
        boxShadow: '0 0 0 0 white'
      }}
    >
        <h1 className='text-xl pt-1 '>Education</h1>
    </VerticalTimelineElement>
    <VerticalTimelineElement
     

     // Content styles
     contentStyle={{ 
       background: '#1E1E1F', 
       padding:'0',
       color: '#fff',
       boxShadow: '0 0 0 0'
     }}
     contentArrowStyle={{ 
       borderRight: '7px solid rgb(33, 150, 243)',
       borderRightColor: '#1E1E1F'
     }}
     

     // Date-related props
     date="June 2021 – June 2024"
     dateClassName=" "

     // Icon-related props
     icon={<IoSchool />}
     iconClassName="border-t border-l border-[#353535] p-2"
     iconStyle={{ 
       background: '#262628', 
       color: '#FFDB70',
       fontSize:'2.25rem',
       lineHeight:'2.5rem',
       boxShadow: '0 0 0 0 white'
     }}
   >
     <h1 className='text-[0.9rem]'>Nandha Arts and Science College</h1>
     <div className='text-sm text-[#ceb15a] my-2'>Bachelor of Computer Applications</div>
     <div className='text-sm text-[#ceb15a] '>CGPA: 8.2/10</div>
   </VerticalTimelineElement>
   <VerticalTimelineElement
     

     // Content styles
     contentStyle={{ 
       background: '#1E1E1F', 
       padding:'0',
       color: '#fff',
        boxShadow: '0 0 0 0'
     }}
     contentArrowStyle={{ 
       borderRight: '7px solid rgb(33, 150, 243)',
       borderRightColor: '#1E1E1F'
     }}
     

     // Date-related props
     date="May 2019 – May 2021"
     

     // Icon-related props
     icon={<FaSchool />}
     iconClassName="border-t border-l border-[#353535] p-2"
     iconStyle={{ 
       background: '#262628', 
       color: '#FFDB70',
       fontSize:'2.25rem',
       lineHeight:'2.5rem',
       boxShadow: '0 0 0 0 white'
     }}
   >
     <h1 className='text-[0.9rem]'>Railway Colony Municipal Higher Secondary School</h1>
     <div className='text-sm text-[#ceb15a] my-2'>HSC, Commerce with Computer Applications</div>
     <div className='text-sm text-[#ceb15a] '>65%</div>
   </VerticalTimelineElement>
   <VerticalTimelineElement
     

     // Content styles
     contentStyle={{ 
       background: '#1E1E1F', 
       padding:'0',
       color: '#fff',
        boxShadow: '0 0 0 0'
     }}
     contentArrowStyle={{ 
       borderRight: '7px solid rgb(33, 150, 243)',
       borderRightColor: '#1E1E1F'
     }}
     

     // Date-related props
     date="March 2018 – March 2019"
     

     // Icon-related props
     icon={<GiSchoolBag />}
     iconClassName="border-t border-l border-[#353535] p-2"
     iconStyle={{ 
       background: '#262628', 
       color: '#FFDB70',
       fontSize:'2.25rem',
       lineHeight:'2.5rem',
       boxShadow: '0 0 0 0 white'
     }}
   >
     <h1 className='text-[0.9rem]'>Government Boys Higher Secondary School</h1>
     <div className='text-sm text-[#ceb15a] my-2'>SSLC, Tamil Nadu State Board Syllabus</div>
     <div className='text-sm text-[#ceb15a] '>51%</div>
   </VerticalTimelineElement>
    </VerticalTimeline>
  </div>
)
}

export default EducationTimeline;
