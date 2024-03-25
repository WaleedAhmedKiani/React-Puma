import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"


const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse max-container gap-10">
      <div className="flex-1">
        <img src={offer} width={760} height={660} className='object-contain w-full'/>
      </div>

      <div className="flex flex-1 flex-col">


       <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
         <span className="text-Green-dark">Special</span>
        <span className="text-Green-dark"> Discount</span> Offers
        </h2> 
       <p className="mt-4 lg:max-w-lg info-text "> 
       <span className="text-2xl font-palanquin font-semibold">Flash Sale: &nbsp;</span>

Discount: 20% off
Duration: 24 hours
Eligible Products: Select Puma shoe styles
Coupon Code: FLASH30
Start Date: March 18, 2022
End Date: March 19, 2022
Limited Quantities: Offer available while supplies last.
        </p>

       <p className="mt-4 lg:max-w-lg info-text ">
       <span className="text-2xl font-palanquin font-semibold">Seasonal Sales:&nbsp;</span> 

Discount Type: Seasonal Sale
Discount Percentage: Up to 50% off
Duration: Two weeks
Eligible Products: Select Puma shoe styles
Start Date: June 1, 2022
End Date: June 15, 2022
Availability: Offer available both online and in participating Puma retail stores
Terms and Conditions: Discount applied at checkout. Cannot be combined with other offers. Excludes clearance items. </p>

       <div className="mt-10 flex flex-wrap gap-5">
        <Button label= 'Shop Now' iconURL={arrowRight}/>
        
        <button className="bg-gray-200 rounded-full px-7 py-4 text-lg flex justify-center items-center text-slate-gray  font-montserrat">
          Learn More</button>
        </div>
       
    </div>
    </section>
  )
}

export default SpecialOffer