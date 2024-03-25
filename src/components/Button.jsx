import React from 'react'

const Button = ({label, iconURL,}) => {
  return (
    <button className='flex justify-center items-center px-7 py-4 gap-2
    font-montserrat text-lg leading-none bg-Green-dark text-white-400
    rounded-full border-Green-dark'>
        {label}
        {iconURL && 
        <img src={iconURL} className='ml-2 rounded-full w-5 h-5' alt="" />}
        
    </button>
  )
}

export default Button