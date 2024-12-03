import ProjectCard from '../components/ProjectCard'
import projectData from '../Data/DataStorage.js';
// import workingImg from '../assets/images/projectThumbnails/commingsoon-preview.png';
function Project() {
    return (
        <div className="bg-[#1E1E1F] border-[0.2px] border-[#353535] my-4 mb-16 rounded-xl p-4">
              <h2 className="text-lg">Projects</h2>
              <div className="h-[3px] w-[30px] my-2 rounded bg-gradient-to-r from-[#FFDB70] to-[#FFBB5C]"></div>
             <div className='projects-section'>

            <div className='projects-container'>

                {projectData.map((project) => {
                    return(
                        <ProjectCard
                        key={project.id}
                        name={project.name}
                        imageUrl={project.imageUrl}
                        liveLink={project.liveLink}
                        gitRepo={ project.GitRepo} />
                    )
                })}
                {/* <ProjectCard name={'Comming soon'} imageUrl={ workingImg} /> */}
                </div>
                </div>
            </div>
        
    );
}   

export default Project