import React from "react";
import { headerLogo } from "../assets/images/index";
import { hamburger } from "../assets/icons/index";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header className="padding-x py-4 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={90} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal
                text-lg text-slate-800 font-bold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="bg-Green-dark px-4 py-3 text-lg text-white-400 font-montserrat font-bold leading-4 rounded-md max-lg:hidden">SignUp</button>
        <div className="hidden max-lg:block">
          <img src={hamburger} height={26} width={26} alt="Hamburger" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
