import {FaTimes} from 'react-icons/fa'
import { useGlobalState, setGlobalState} from '../store'

const CreateProject = () => {
    const [createmodal] = useGlobalState('createmodal')
  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50
    transform transition-transform duration-300 scale-100 ${createmodal} `}>
        <div className=" bg-white shadow-xl shadow-black rounded-xl w-11/12
        md:w-2/5 h-7/12 p-6">
            <form className=" flex flex-col">
                <div className=" flex justify-between items-center">
                    <p className="font-semibold">Add New Project</p>
                    <button type ="button" className=" border-0 bg-transparent
                    focus:outline-none"
                    onClick={() => setGlobalState('createmodal', 'scale-0' )}
                    >
                        <FaTimes />

                    </button>
                </div>
                <div className=' flex justify-center items-center mt-5'>
                   <div className=' rounded-xl overflow-hidden h-20 w-20  '>
                   <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hA_-t9vy11xbjl5wBc-G3gHaE8%26pid%3DApi&f=1&ipt=81ecbff59893db144e070e07e02abe05f18b513d283240029fbcdfe6cede6538&ipo=images"
                alt="project image"
                className=" h-full w-full object-cover cursor-pointer"
                />
                    </div> 
                </div>
                <div className=' flex justify-between items-center bg-gray-300 rounded-xl mt-5 '>
                    <input className='block w-full bg-transparent border-0 text-sm text-slate-500
                    focus:outline-none focus:ring-0' 
                    type = "text"
                    name ="Title"
                    placeholder='Title'
                    required
                     /> 
                </div>
                <div className=' flex justify-between items-center bg-gray-300 rounded-xl mt-5 '>
                    <input className='block w-full bg-transparent border-0 text-sm text-slate-500
                    focus:outline-none focus:ring-0' 
                    type = "number"
                    step = {0.01}
                    min = {0.01}
                    name ="amount"
                    placeholder='Amount (ETH)'
                    required
                     />
                     
                </div>
                <div className=' flex justify-between items-center bg-gray-300 rounded-xl mt-5 '>
                    <input className='block w-full bg-transparent border-0 text-sm text-slate-500
                    focus:outline-none focus:ring-0' 
                    type = "date"
                    name ="date"
                    placeholder='Expire'
                    required
                     />
                     
                </div>
                <div className=' flex justify-between items-center bg-gray-300 rounded-xl mt-5 '>
                    <input className='block w-full bg-transparent border-0 text-sm text-slate-500
                    focus:outline-none focus:ring-0' 
                    type = "url"
                    name ="ImageURL"
                    placeholder='Image URl'
                    required
                     />
                     
                </div>
                <div className=' flex justify-between items-center bg-gray-300 rounded-xl mt-5 '>
                    <textarea className='block w-full bg-transparent border-0 text-sm text-slate-500
                    focus:outline-none focus:ring-0' 
                    type = "text"
                    name ="description"
                    placeholder='Description'
                    required
                     ></textarea>   
                </div >
                <button type='button'
                className=' inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight 
                rounded-full showdow-md  hover:bg-green-600 mt-5 '
                >
                   Submit Project
        </button>
                
            </form>
        </div>
        </div>
  )
}

export default CreateProject 