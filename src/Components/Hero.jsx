import React from 'react';
import greenleaflogo from '../assets/greenleaflogo.png';
import lawnstock from '../assets/lawnstock.png';

const Hero = () => {
  const containerStyle = {
    backgroundImage: `url(${lawnstock})`, // Corrected the syntax for backgroundImage
    backgroundSize: 'cover', // This ensures the image covers the entire background without distortion
    backgroundPosition: 'center', // Center the background image
  };

  return (
    <>
      <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center justify-center py-4 font-fig">
        <div className="flex-1 flex justify-between items-center">
          <img src={greenleaflogo} alt="Greenleaf logo image" className="h-14" />
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
                <a className="md:p-4 py-3 px-0 block" href="#">
                  Services
                </a>
              </li>
              <li>
                <a className="md:p-4 py-3 px-0 block" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="md:p-4 py-3 px-0 block" href="#">
                  About
                </a>
              </li>
              <li>
                <a
                  className="px-4 py-2 ml-4 bg-main text-white transition300scale rounded-full block md:mb-0 mb-2"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div
        className="py-48 flex justify-center"
        style={containerStyle}
      >
        <div className="py-4 max-w-[95rem] w-full font-merri text-white">
          <div className="py-8 w-[45%] flex flex-col gap-y-4 bg-black/60 rounded-2xl p-6">
            <h1 className='seven-title font-medium '>
              Best Lawn Ever 
              <span className="block mt-3">Guaranteed</span>
            </h1>

            <p className='font-fig font-light text-xl tracking-wide leading-8'>
              Our team of experienced landscapers will work with you to 
              develop a custom plan that meets your needs and budget. From 
              the initial design phase to the final installation, we'll 
              ensure that every detail is executed to perfection.
            </p>

            <a
              className="w-max px-4 py-2 font-fig text-lg bg-main text-white rounded-full block md:mb-0 mb-2 transition300scale"
              href="#"
            >
              Request a Quote
            </a>


          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
