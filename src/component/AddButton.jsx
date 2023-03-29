import React from 'react'
import { setGlobalState } from '../store'
import { BsPlusLg } from 'react-icons/bs'

const AddButton = () => {
  return (
    <div className='fixed right-10 bottom-10 flex space-x-2 justify-center'
    >
      <button type='button'
                className=' flex justify-center items-center w-9 h-9 bg-green-500 text-white font-medium text-xs leading-tight uppercase
                rounded-full showdow-md  hover:bg-green-600 '
                onClick={() => setGlobalState('createmodal', 'scale-100' )}
                >
                   <BsPlusLg className='font-bold justify-center items-center' size={30} />
        </button>
        
        </div>
  )
}

export default AddButton 