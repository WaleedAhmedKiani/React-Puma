

import ProductsCard from '../components/ProductsCard';
import {products} from '../constants/index';
const PopularProducts = () => {
  return (
   <section id='products' className='max-container max-sm:mt-12'>
    <div className='flex flex-col justify-start gap-5'>
      <h2 className='text-4xl font-palanquin font-semibold'> Our's <span className='text-Green-dark font-bold'>Popular</span> Products</h2>
      <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Their durability is attributed to the use of high-quality materials in manufacturing, including leather uppers and rubber soles, contributing to a product that withstands the test of time</p>

    </div>

    <div className='mt-16 grid lg:grid-cols-4 xl:gap-2 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-16 gap-10'>
      {products.map((product)=>(
        <ProductsCard key={product.name} {...product} />
      ))}
    </div>
   </section>
  )
}

export default PopularProducts