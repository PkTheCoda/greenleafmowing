import React from 'react';
import lawnstock from '../assets/lawnstock.png';

const Hero = () => {
  const containerStyle = {
    backgroundImage: `url(${lawnstock})`, // Corrected the syntax for backgroundImage
    backgroundSize: 'cover', // This ensures the image covers the entire background without distortion
    backgroundPosition: 'center', // Center the background image
  };

  return (
    <>

      <div
        className="py-60 flex justify-center"
        style={containerStyle}
      >
        <div className="py-4 max-w-[95rem] w-full font-merri text-white mx-4 lg:mx-0">
          <div className="py-8 w-full md:w-[75%] lg:w-[50%] flex flex-col gap-y-4 bg-black/60 rounded-2xl p-6">
            <h1 className='seven-title font-medium '>
              Best Lawn Ever,
              <span className="block mt-3">Guaranteed<span className="text-green-500">.</span></span>
            </h1>

            <p className='font-fig font-light text-sm md:text-lg lg:text-xl tracking-loose md:tracking-wide md:leading-8'>
              Our team of experienced landscapers will work with you to 
              develop a custom plan that meets your needs and budget. From 
              the initial design phase to the final installation, we'll 
              ensure that every detail is executed to perfection.
            </p>

            <a
              className="w-max px-4 py-2 font-fig text-sm md:text-lg bg-main text-white rounded-full block md:mb-0 mb-2 transition300scale"
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
