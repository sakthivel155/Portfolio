
import EducationTimeline from "../components/EducationTimeline";
import LaptopNavbar from "../components/LaptopNavbar";
function Resume() {
    return (
        <div className="relative bg-[#1E1E1F] border-[0.2px] border-[#353535] my-4 mb-16 rounded-xl p-4 laptop:mb-0 desktop:m-0 desktop:w-full desktop:overflow-auto tablet:px-8 tablet:py-7">
            <LaptopNavbar/>
           <div className="flex items-center justify-between text-[0.8rem] ">
             <h2 className="text-xl font-[Poppins-medium]">Resume</h2> 
             <span className="text-[#ceb15a] underline cursor-pointer"><a href="https://drive.google.com/file/d/1iJaKpcc-NhZLsvgRDzBPsrLy_jubb89s/view" target="_blank">myResume</a></span>
           </div>
           <div className="h-[3px] w-[30px] my-2 rounded bg-gradient-to-r from-[#FFDB70] to-[#FFBB5C]"></div>
          
            <EducationTimeline />
            <h3 className="my-2 text-lg">My Skills</h3>
            <div className="relative bg-gradient-to-br from-[hsl(0,0%,25%)] to-[hsla(0,0%,25%,0)]  rounded-lg p-[1px] my-5 tablet:mx-[5%]">
                  <div className="flex flex-col gap-2 p-5 bg-[#242324] rounded-lg ">
                    <div>
                        <h4>HTML & CSS <span className="ml-2 text-[.9rem] opacity-60"> 80%</span></h4>
                        <div className="w-full h-[6px] rounded my-2 bg-[#383838]">
                                <div className="w-[80%] h-full bg-slate-300 rounded bg-gradient-to-r from-[#ffda6b] to-[#fbba60] "></div>
                        </div>
                    </div>
                    <div>
                        <h4>Javascript<span className="ml-2 text-[.9rem] opacity-60"> 70%</span></h4>
                        <div className="w-full h-[6px] rounded my-2 bg-[#383838]">
                                <div className="w-[70%] h-full bg-slate-300 rounded bg-gradient-to-r from-[#ffda6b] to-[#fbba60] "></div>
                        </div>
                    </div>
                    <div>
                        <h4>React JS <span className="ml-2 text-[.9rem] opacity-60"> 60%</span></h4>
                        <div className="w-full h-[6px] rounded my-2 bg-[#383838]">
                                <div className="w-[60%] h-full bg-slate-300 rounded bg-gradient-to-r from-[#ffda6b] to-[#fbba60] "></div>
                        </div>
                    </div>
                    <div>
                        <h4>Java<span className="ml-2 text-[.9rem] opacity-60"> 65%</span></h4>
                        <div className="w-full h-[6px] rounded my-2 bg-[#383838]">
                                <div className="w-[65%] h-full bg-slate-300 rounded bg-gradient-to-r from-[#ffda6b] to-[#fbba60] "></div>
                        </div>
                    </div>
                  </div>
            </div>
        </div>
    );
}

export default Resume