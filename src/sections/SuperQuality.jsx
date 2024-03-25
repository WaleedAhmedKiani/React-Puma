import Button from "../components/Button"
import { shoe8 } from "../assets/images/index"


const SuperQuality = () => {
  return (
   <section id="about-us" className="flex justify-between items-center max-lg:flex-col
   w-full max-container">
    <div className="flex flex-1 flex-col">


       <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
        Puma Provide <span className="text-Green-dark">Super</span>
        <span className="text-Green-dark"> Quality</span> Shoes
        </h2> 
       <p className="mt-4 lg:max-w-lg info-text "> Puma shoes are known for their comfort due to their cushioning and ergonomic design.
        If comfort is a priority for you, Puma might have met your needs in this regard.
       Puma shoes are often designed with performance in mind, particularly for athletes and sports enthusiasts.
       If you're looking for shoes that offer good performance features such as traction, support, and durability, Puma could be a suitable choice. </p>

       <div className="mt-10">
        <Button label= 'Get details' /></div>
       
    </div>

    <div className="flex flex-1 justify-center items-center">
      <img src={shoe8} alt="shoe8" width={500} height={500} />
    </div>
   </section>
  )
}

export default SuperQuality