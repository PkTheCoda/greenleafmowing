import React from 'react'
import { PiSpeakerHighDuotone } from "react-icons/pi";
import { FaHandSparkles, FaShieldHeart, FaMoneyBill1Wave } from "react-icons/fa6";

import manmowing from '../assets/manmowing.png'

const Guarantee = () => {
  return (
    <div className='bg-[#1d4a34] gap-x-6 flex justify-center font-merri'>
        <div className='w-full flex lg:flex-row flex-col max-w-[1900px] pt-10 lg:pt-0'>

            <div className="w-full lg:w-[40%] flex items-center lg:justify-start justify-center">
                <img src={manmowing} alt="" className='w-[90%] sm:w-[60%] lg:w-full rounded-r-2xl rounded-l-2xl lg:rounded-l-none lg:rounded-r-2xl'/>
            </div>

            <div className="w-full lg:w-[60%] py-10 flex justify-center items-center">

                <div className='w-full px-4 sm:w-[75%] md:w-[70%] flex flex-col gap-y-8'>

                    <div className="flex flex-col gap-y-2">
                        <h2 className="five-title text-white w-full">
                            We Offer the Best Guaruantee
                            In the Business
                        </h2>
                        <p className="text-slate-300 font-light font-fig tracking-wider text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At dicta qui
                            rem itaque cumque amet fugiat quo ipsam laboriosam atque. Quam totam dolore
                            pariatur eius harum sapiente adipisci accusamus nesciunt?
                        </p>
                    </div>

                    <div className="grid grid-cols-1 min-[545px]:grid-cols-2 gap-8 font-fig">

                        <div className=" py-2 flex gap-x-4 items-start text-white">
                            <div className='w-[10%]'>
                                <PiSpeakerHighDuotone className='w-8 h-8'/>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <h3 className='three-title'>
                                    We are Quiet
                                </h3>
                                <p className='text-md font-light text-slate-200 font-fig tracking-wide'>
                                    No Seriously. Our Battery Powered Equipment Won't even wake up the baby! We're never loud.
                                </p>
                            </div>
                        </div>

                        <div className=" py-2 flex gap-x-4 items-start text-white">
                            <div className='w-[10%]'>
                                <FaHandSparkles className='w-8 h-8'/>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <h3 className='three-title'>
                                    We Care
                                </h3>
                                <p className='text-md font-light text-slate-200 font-fig tracking-wide'>
                                   The owner and the team are out daily to ensure the quality of work and make sure that you are satisifed.
                                </p>
                            </div>
                        </div>

                        <div className=" py-2 flex gap-x-4 items-start text-white">
                            <div className='w-[10%]'>
                                <FaShieldHeart className='w-8 h-8'/>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <h3 className='three-title'>
                                    We Guarantee It
                                </h3>
                                <p className='text-md font-light text-slate-200 font-fig tracking-wide'>
                                    We are so confident in our ability to provide excellent service that we guarantee your satisfaction.
                                </p>
                            </div>
                        </div>

                        <div className=" py-2 flex gap-x-4 items-start text-white">
                            <div className='w-[10%]'>
                                <FaMoneyBill1Wave className='w-8 h-8'/>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <h3 className='three-title'>
                                    Transparent Pricing
                                </h3>
                                <p className='text-md font-light text-slate-200 font-fig tracking-wide'>
                                    We want to make the pricing as transparent as possible so we offer a straightforward monthly plan.
                                </p>
                            </div>
                        </div>
                    </div>

                    <a
                        className="w-max px-6 py-3 font-fig text-lg bg-green-700 text-white rounded-full block md:mb-0 mb-2 transition300scale"
                        href="#"
                        >
                        Get Free Quote
                    </a>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Guarantee