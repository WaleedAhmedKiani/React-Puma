import React from 'react';
import { star } from '../assets/icons';

const ReviewCard = ({imgURL,customerName, feedback, rating}) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img src={imgURL} alt="customerImg" className='object-cover rounded-full
      w-[120px] h-[120px] '/>
      <p className='mt-5 info-text text-center max-w-sm'>{feedback} </p>
      <h3 className='mt-2 text-2xl font-palanquin font-bold'>{customerName}</h3>
      
      <div className='flex mt-2 justify-center items-center gap-2'>
        <img src={star} alt="" width={24} height={24} className='object-contain m-0' />
        <p className='text-xl font-montserrat text-slate-gray'>{rating} </p>
      </div>
      
    </div>
  )
}

export default ReviewCard