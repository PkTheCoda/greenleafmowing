import React from 'react'
import greenleaflogo from '../assets/greenleaflogo.png';

const Navbar = () => {
  return (
    <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center justify-center py-4 font-fig">
        <div className="flex-1 flex justify-between items-center">
            <a href="/"><img src={greenleaflogo} alt="Greenleaf logo image" className="h-14" /></a>
        </div>

        <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
        <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
        >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
            <ul className="md:flex items-center justify-between text-lg text-gray-700 pt-4 md:pt-0 font-medium">
            <li>
                <a className="md:p-4 py-3 px-0 block" href="#services">
                Services
                </a>
            </li>
            <li>
                <a className="md:p-4 py-3 px-0 block" href="#reviews">
                Reviews
                </a>
            </li>
            {/* <li>
                <a className="md:p-4 py-3 px-0 block" href="#">
                Pricing
                </a>
            </li>
            <li>
                <a className="md:p-4 py-3 px-0 block" href="#">
                About
                </a>
            </li> */}
            <li>
                <a
                className="px-4 py-2 ml-4 bg-main font-bold text-white transition300scale rounded-full block md:mb-0 mb-2"
                href="/contact"
                >
                Contact Us
                </a>
            </li>
            </ul>
        </nav>
        </div>
    </header>
  )
}

export default Navbar