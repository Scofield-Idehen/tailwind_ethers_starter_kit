import Identicon from 'react-identicons'
import {FaEthereum} from 'react-icons/fa'

const ProjectBackers = () => {
  return (
    <div className=" flex flex-col justify-center items-start px-6 mx-auto ">
        <div className=" max-h-[calc(100vh_-_25rem)] overflow-y-auto shadow-md rounded-md mx-auto my-10 ">
            <table className="min-w-full">
                <thead className=" border-b">
                        <tr>
                            <th scope="col" className=" text-sm font-medium px-6 py-4 text-left">
                                    Backers
                            </th>
                            <th scope="col" className=" text-sm font-medium px-6 py-4 text-left">
                                    Donations
                            </th>
                            <th scope="col" className=" text-sm font-medium px-6 py-4 text-left">
                                    Refunded Status
                            </th><th scope="col" className=" text-sm font-medium px-6 py-4 text-left">
                                    Time
                            </th>
                        </tr>
                </thead>
                <tbody>
                    {Array(10).fill().map((backing, i) => (
                        <tr key= {i} className="border-b border-gray-300 ">
                        <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                            <div className='flex justify-center items-center space-x-2'>
                                <Identicon className='h-10 w-10 object-contain rounded-full showdow-md' string={"Ox23...8g7h" + i} size={25} />
                                <span className='font-bold'>Ox23...8g7h {i}</span>
                            </div>
                        </td>
                        <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                            <small className=' flex justify-start items-center'> 
                            <FaEthereum />
                                <span className='text-gray-600 font-bold'>{3}ETH</span>
                            </small>
                        </td><td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                            {false ? 'Yes' : 'No' }
                        </td>
                        <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                            {new Date().getTime()}
                        </td>
                    </tr>
                    ))}

                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ProjectBackers