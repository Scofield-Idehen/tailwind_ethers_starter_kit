import { TbBusinessplan } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header 
        className="flex justify-between items-center p-5 bg-white text-gray-500 hover:text-gray-700 
        shadow-lg fixed top-0 right-0 left-0
        ">

            <Link
                to="/" 
                    className=' flex justify-start items-center text-xl text-black space-x-1'>
                        <TbBusinessplan />
                <span>
                        Scofield
                </span>
               
            </Link>
            <div>
                <button type='button'
                className=' inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase
                rounded-full showdow-md hover:bg-green-600 '
                >
                    Connect Wallet
                </button>
            </div>
            
    </header>

  )
}

export default Header