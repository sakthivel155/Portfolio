
import EducationTimeline from "../components/EducationTimeline";
function Resume() {
    return (
        <div className="bg-[#1E1E1F] border-[0.2px] border-[#353535] my-4 mb-16 rounded-xl p-4">
           <h2 className="text-xl">Resume</h2>
           <div className="h-[3px] w-[30px] my-2 rounded bg-gradient-to-r from-[#FFDB70] to-[#FFBB5C]"></div>
          
            <EducationTimeline />
        </div>
    );
}

export default Resume