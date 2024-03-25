import React from 'react'

const ShoeCard = ({imgURL, BigShoeImgChange, BigShoeImg}) => {
  const handleClick = ()=> {
    if(BigShoeImg !== imgURL.bigShoe) {
      BigShoeImgChange(imgURL.bigShoe)
    }
  }
  return (
    <div className={`border-2 rounded-xl
    ${BigShoeImg === imgURL.bigShoe ? 'border-Green-dark': 'border-transparent'} 
    cusror-pointer max-sm:flex-1`}
    onClick={handleClick}>
      <div className='flex items-center justify-center bg-card bg-center bg-cover
      sm:w-40 sm:h-40 rounded-xl max-sm:p-4 cursor-pointer'>
        <img src={imgURL.thumbnail} alt="SCollections" width={124} height={100} 
        className='object-contain'/>
      </div>
    </div>
  )
}

export default ShoeCard