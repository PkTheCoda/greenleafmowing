import React from 'react'
import mower from '../assets/lawniconmower.png'
import shovel from '../assets/lawniconshovel.png'
import sprinkler from '../assets/lawniconsprinkler.png'
import tree from '../assets/lawnicontree.png'

const Services = () => {
  return (
    <div className='py-10 bg-[#edf2e8]'>
        <div className="max-w-[95rem] w-full mx-auto flex gap-x-10">
            <div className="w-[60%] py-10 flex flex-col gap-y-6 font-semibold font-merri">
                <h2 className='five-title'>
                    Our Services
                </h2>
                <div className="w-full grid grid-cols-2 gap-4">

                    <div className="py-4 flex flex-col gap-y-4">
                        <img src={mower} alt="mower icon" className='w-28'/>
                        <h3 className="three-title">Lawncare</h3>
                        <p className='text-slate-700 font-normal tracking-wide font-fig'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem voluptas, ipsam ullam neque 
                            consectetur beatae lorem ipsum dolor sit amet consectetur
                        </p>
                    </div>

                    <div className="py-4 flex flex-col gap-y-4">
                        <img src={shovel} alt="mower icon" className='w-28'/>
                        <h3 className="three-title">Landscaping</h3>
                        <p className='text-slate-700 font-normal tracking-wide font-fig'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem voluptas, ipsam ullam neque 
                            consectetur beatae lorem ipsum dolor sit amet consectetur
                        </p>
                    </div>

                    <div className="py-4 flex flex-col gap-y-4">
                        <img src={sprinkler} alt="mower icon" className='w-28'/>
                        <h3 className="three-title">Sprinklers</h3>
                        <p className='text-slate-700 font-normal tracking-wide font-fig'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem voluptas, ipsam ullam neque 
                            consectetur beatae lorem ipsum dolor sit amet consectetur
                        </p>
                    </div>

                    <div className="py-4 flex flex-col gap-y-4">
                        <img src={tree} alt="mower icon" className='w-28'/>
                        <h3 className="three-title">Tree Trimming</h3>
                        <p className='text-slate-700 font-normal tracking-wide font-fig'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem voluptas, ipsam ullam neque 
                            consectetur beatae lorem ipsum dolor sit amet consectetur
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-[40%] py-4 font-merri">
                <div class="bg-white relative -top-32 py-12 lg:px-8 rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                    <div class="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
                        <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Request a Quote</h1>
                    </div>
                    <form class="mx-auto max-w-xl mt-10">
                        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                            <div class="mt-2.5">
                            <input required="" type="text" name="first-name" id="first-name" autocomplete="given-name" placeholder="Your First Name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>
                        <div>
                            <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
                            <div class="mt-2.5">
                            <input required="" type="text" name="last-name" id="last-name" autocomplete="family-name" placeholder="Your Last Name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                            <div class="mt-2.5">
                            <input required="" type="email" name="email" id="email" autocomplete="email" placeholder="Your Email Address" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="phone" class="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
                            <div class="mt-2.5">
                            <input required="" type="tel" name="phone" id="phone" autocomplete="tel" placeholder="Your Phone Number" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                            <div class="mt-2.5">
                            <textarea name="message" id="message" rows="4" placeholder="Share your thoughts..." class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"></textarea>
                            </div>
                        </div>
                        </div>
                        <div class="mt-8">
                        <button type="submit" class="bg-main text-xl font-bold text-white rounded-full py-4 w-full block">Submit Request</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Services