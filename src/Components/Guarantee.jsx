import React from 'react'
import { PiSpeakerHighDuotone } from "react-icons/pi";
import manmowing from '../assets/manmowing.png'

const Guarantee = () => {
  return (
    <div className='bg-[#1d4a34] gap-x-6 flex justify-center font-merri mb-40'>
        <div className='w-full flex max-w-[1900px]'>

            <div className="w-[35%]">
                <img src={manmowing} alt="" className='w-full'/>
            </div>

            <div className="w-[65%] py-10 flex justify-center items-center">

                <div className='w-[70%] flex flex-col gap-y-8'>

                    <div className="flex flex-col gap-y-2">
                        <h2 className="five-title text-white">
                            We Offer the Best Guaruantee
                            <span className="block mt-4">In The Business</span>
                        </h2>
                        <p className="text-slate-300 font-light font-fig tracking-wider text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At dicta qui
                            rem itaque cumque amet fugiat quo ipsam laboriosam atque. Quam totam dolore
                            pariatur eius harum sapiente adipisci accusamus nesciunt?
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 font-fig">

                        <div className=" py-2 flex gap-x-4 items-start text-white">
                            <div className='w-[15%]'>
                                <PiSpeakerHighDuotone className='w-10 h-10 '/>
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
                            <div className='w-[15%]'>
                                <PiSpeakerHighDuotone className='w-10 h-10 '/>
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
                            <div className='w-[15%]'>
                                <PiSpeakerHighDuotone className='w-10 h-10 '/>
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
                            <div className='w-[15%]'>
                                <PiSpeakerHighDuotone className='w-10 h-10 '/>
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