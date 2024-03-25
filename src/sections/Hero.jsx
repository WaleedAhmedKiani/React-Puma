import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import { shoes, statistics } from "../constants"



const Hero = () => {
  const [BigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
    <section id="home" className="flex xl:flex-row flex-col w-full 
    justify-center min-h-screen gap-10 max-container ">

      <div className="relative xl:w-2/5 flex flex-col items-start justify-center
      w-full max-xl:padding-x pt-28">
      <p className="text-xl font-montserrat text-emerald-950 max-sm:mt-6">Our Men's  collections</p>
       <h1 className="mt-10 font-palanquin text-6xl  leading-normal max-sm:text-[70]"><span className="xl:bg-white xl:whitespace-nowrap
       relative z-10 pr-10">The New Arrival</span>
       <br /><span className="text-Green-dark inline-block mt-3 font-bold">Puma </span>  Shoes </h1> 
       <p className="font-montserrat text-slate-gray text-lg leading-6 mt-6 mb-12 sm:max-w-sm">Designed for style, engineered for performance and built for your active lifestyle, PUMA's collection of men's sneakers are ready to take you through your day. </p>

       <Button label= 'Shop now' iconURL={arrowRight} />

       <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
        {statistics.map((stat)=> (
          <div key={stat.label}>
            <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
            <p className="font-montserrat leading-6 text-slate-gray">{stat.label}</p>
          </div>
        )) }
       </div>
      </div>
      {/* image gallery */}
      <div className="relative flex-1 items-center flex justify-center xl:min-h-screen
      max-xl:py-40 bg-primary bg-hero bg-cover bg-center ">

        <img src={BigShoeImg} alt="Shoes" width={600} height={500} className="object-contain relative z-10"/>

        <div className="flex absolute sm:gap-6 gap-3 -bottom-[7%] sm:left-[10%] max-sm:px-6 ">
          {shoes.map((shoe)=>(
            <div key={shoe}>
              <ShoeCard imgURL= {shoe} BigShoeImgChange={(shoe)=>{setBigShoeImg (shoe)}} BigShoeImg={BigShoeImg} />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Hero