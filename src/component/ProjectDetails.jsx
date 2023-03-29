import {FaEthereum} from 'react-icons/fa'

const ProjectDetails = () => {
  return <div className="py-24 px-6 flex justify-center">
        
        <div className='flex justify-center flex-col md:w-2/3'>
            <div className=" flex justify-start items-start sm:space-x-4 flex-wrap">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hA_-t9vy11xbjl5wBc-G3gHaE8%26pid%3DApi&f=1&ipt=81ecbff59893db144e070e07e02abe05f18b513d283240029fbcdfe6cede6538&ipo=images"
                alt="project image"
                className=" rounded-xl h-64 w-full object-cover sm:w-1/3"
                />
                
                <div className=" flex-1 sm:py-0 py-4">
                    <div className="flex flex-col justify-start flex-wrap">
                        <h5 className=" text-gray-900 text-sm font-medium mb-2">
                            Ongoing Building Project</h5>
                        <small className=" text-gray-500">
                            3 days left
                        </small>
                    </div>
                        <div className=" flex justify-between items-center w-full">
                            <div className="flex justify-start space-x-2">
                                <small className="text-gray-500">
                                    01re3...657
                                </small>
                                <small className=" text-gray-500 font-bold">
                                    {12} Backer
                                </small>
                                
                            </div>
                                <div className=" font-bold">
                                    <small className="text-gray-500">
                                        open
                                    </small>
                                </div>
                        </div>
                    
                </div>
            </div>
            <p className="text-sm font-light my-5 ">
            Based on the code provided, it seems that there might be an issue with the route path in the App component.

            The Link component in the ProjectCard component is linking to /Users/alpha/Desktop/starterFile/src/Views/projects.jsx/ + id, which is a file path and not a valid route path. Instead, the route path should match the URL path that is being linked to.

            Assuming that the projects component is the one that should be rendered when clicking on a project link, the Route path for it should be set to /projects/:id to match the linked URL path.
            </p>
            <div className="w-full bg-gray-400  ">
                <div className="bg-green-600 text-xs font-medium text-green-100 text-center p-0.5 leading-none
                    rounded-l-full h-1 
                    style"
                    style={{width: '30%'}}
                    >
                </div>
            </div>
            
                <div className=" flex justify-between py-1 items-center font-bold">
                    <small>
                        {3} ETH Raised
                    </small>
                    <small className=' flex justify-center items-center'>
                        <FaEthereum />
                        <span>{10} ETH</span>
                    </small>
                </div>
                <div className=" flex justify-center items-center mt-4 space-x-2">
                    <button type='button'
                        className=' inline-block px-6 py-2.5 border border-green-500 bg-green-500 text-green-600 font-medium text-xs leading-tight uppercase
                        rounded-full showdow-md bg-transparent hover:bg-green-600 hover:text-white '
                        >
                        Back Project
                    </button>
                    <div className=" flex justify-center items-center space-x-2">
        <button type='button'
                className=' inline-block px-6 py-2.5 bg-gray-500 text-white font-medium text-xs leading-tight uppercase
                rounded-full showdow-md  hover:bg-gray-600 '
                >
                   Edit
        </button>
        </div>
        <div className=" flex justify-center items-center space-x-2">
        <button type='button'
                className=' inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase
                rounded-full showdow-md  hover:bg-red-600 '
                >
                   Delete
        </button>
        </div>
        <div className=" flex justify-center items-center space-x-2">
        <button type='button'
                className=' inline-block px-6 py-2.5 bg-orange-500 text-white font-medium text-xs leading-tight uppercase
                rounded-full showdow-md  hover:bg-orange-600 '
                >
                   Payout
        </button>
        </div>
                </div> 
                

                
        </div>
  </div>
}

export default ProjectDetails