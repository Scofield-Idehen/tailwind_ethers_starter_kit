import { Link } from "react-router-dom"
import Identicons from "react-identicons"


const Projects = () => {
    return (
      <div className=" flex flex-col px-6">
          <div className="flex justify-center items-center flex-wrap ">
              {Array(6)
              .fill()
              .map((card, i) => (
                  <ProjectCard key={i} id={i} projects={card} />
              )
                  )}
  
          </div>
      </div>
    )
  }
  
  const ProjectCard = ({projects, id }) => (
      <div id="projects" className=" rounded-lg shadow-lg bg-white w-64 m-4">
          <Link to={`/projects/${id}`}>
  

                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hA_-t9vy11xbjl5wBc-G3gHaE8%26pid%3DApi&f=1&ipt=81ecbff59893db144e070e07e02abe05f18b513d283240029fbcdfe6cede6538&ipo=images"
            alt="project image"
            className=" rounded-xl h-64 w-full object-cover"
            />
            <div className="p-4">
                <h3>Building a cryptic robot</h3>
            
                <div className="flex flex-col">
                    <div className="flex justify-between items-center mb-3">
                        <Identicons className="rounded-full shadow-md" 
                        string="01e4...78ui" size={15} 
                        />
                        <small className=" text-gray-700">
                        01e4...78ui
                        </small>
                        
                    </div>
                        <small className="text-gray-500">
                                2days Left
                        </small>

                    <div className="w-full bg-gray-400">
                        <div className="bg-green-600 text-xs font-medium text-green-100 text-center p-0.5 leading-none
                            rounded-l-full h-1 
                            style"
                            style={{width: '50%'}}
                            >
                        </div>
                           
                    </div>
                            <div
                                className=" flex justify-between items-center flex-wrap mt-4 mb-2 text-gray-500 "
                                >
                                <small className="font-bold">
                                    {14} backers
                                </small>
                                <div>
                                    <small className="text-green-400">
                                        open
                                    </small>
                                </div>
                            </div>
                </div>
            </div>
        </Link>

    </div>
)

export default Projects
