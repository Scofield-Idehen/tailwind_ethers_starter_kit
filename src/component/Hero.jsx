import { setGlobalState } from "../store"

const Hero = () => {
  return (
    <div className=" py-24 text-center bg-white text-gray-800 ">
        <h1 className=" text-5xl md:text-6xl xl:text-4xl font-bold tracking-tight mb-12 ">
            <span className=" capitalize">
                Creativity is where you make your voice heard
            </span>
            <br />
            <span className="uppercase text-green-500">
                Scofield Funding
            </span>

        </h1>
        <div className=" flex justify-center items-center space-x-2">
        <button type='button'
                className=' inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase
                rounded-full showdow-md  hover:bg-green-600 '
                onClick={() => setGlobalState('createmodal', 'scale-100' )}
                >
                   Add Project
        </button>
        <button type='button'
                className=' inline-block px-6 py-2.5 border border-green-500 bg-green-500 text-green-600 font-medium text-xs leading-tight uppercase
                rounded-full showdow-md bg-transparent hover:bg-green-600 hover:text-white '
                >
                    All Back Project
        </button>
        </div>

        <div className=" flex justify-center items-center mt-10">
            <div
                className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full">
                    <span
                        className=" text-lg font-bold  text-green-900 leading-5"> 
                        {0}
                    </span>
                    <span > Projects</span>
            </div>
            <div
                className=" flex flex-col justify-center items-center h-20 border  border-gray-200 shadow-md w-full"
                >
                <span
                    className=" text-lg font-bold text-green-900 leading-5"
                    
                    > 
                    {0}
                    
                </span>
                <span > Backing</span>
            </div>
            <div
                className=" flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full"
                >
                <span
                    className=" text-lg font-bold text-green-900 leading-5"
                    
                    > 
                    {0} ETH
                </span>
                <span > Donated</span>
            </div>
        </div>

    
    </div>
  )
}

export default Hero