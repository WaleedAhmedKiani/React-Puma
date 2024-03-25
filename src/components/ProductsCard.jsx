import React from 'react'
import { star } from '../assets/icons'

const ProductsCard = ({imgURL,name,price }) => {
  return (
    <div className='flex flex-1  flex-col w-full max-sm:w-full'>
    <img src={imgURL} alt={name} width={300} height={300} className='mb-[-14px]  cursor-pointer' />

    <h3 className='mb-2 text-xl leading-normal font-semibold font-palanquin flex justify-center'>{name} </h3>
    <p className='mb-2 font-semibold font-montserrat text-Green-dark text-xl leading-normal flex justify-center'>{price} </p>
    <div className='flex justify-center gap-2'>
        <img src={star} alt="rating" width={20} height={20} className='object-contain'/>
        <p className='font-montserrat text-xl leading-normal text-Green-dark'>4.7</p>
    </div>
 </div>
 
  )
}

export default ProductsCard