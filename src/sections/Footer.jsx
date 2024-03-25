import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"


const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-10 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150}  alt=""/>
          </a>
          <p className="text-white font-montserrat  text-base leading-5 sm:max-w-sm">Get Shoes ready for your Puma Store. Find your perfect size in store and Get Rewards.</p>
          <div className="flex items-center mt-5 gap-5 ">
            {socialMedia.map((mediaIcon)=>(
              <div className="flex justify-center items-center w-8 h-8 hover:bg-green-700 bg-white cursor-pointer rounded mt-4 mb-4">
                <img src={mediaIcon.src} alt={mediaIcon.alt} width={24} height={24} />
              </div>
            ))}

          </div>
        </div>

      
      </div>

      <div className="flex flex-1 justify-between lg:gap-8 gap-16 flex-wrap mt-8">
          {footerLinks.map((section)=>(
            <div key={section}> 
            <h4 className="text-white font-montserrat leading-normal text-3xl mb-5 font-medium">{section.title} </h4> 
            <ul>
              {section.links.map((link)=>(
                
                <li key={link.name} className="text-white font-montserrat text-xl leading-8 hover:text-green-400 cursor-pointer">
                  <a>{link.name}</a>
                </li>
              ))}
            </ul>
            </div>
          ))}
        </div>
        <div className="flex text-white max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-center gap-2 items-center cursor-pointer font-montserrat">
            <img src={copyrightSign} alt="CopyRight" width={15} height={15} className="rounded-full mt-24"/>
            <p className="mt-24 max-sm:text-[10px] ">Copyright. 2022 WaleedAhmed, All rights reserved.</p>
           
          </div>
        </div>
    </footer>
  )
}

export default Footer