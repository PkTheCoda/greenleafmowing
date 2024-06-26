import React from "react";
import trimpic from "../assets/trimpic.png";
import trimpic2 from "../assets/trimpic2.png";
import statlawn from "../assets/statlawn.png";
import { IoMapOutline } from "react-icons/io5";
import { LuBadgeCheck } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { HiOutlineTrophy } from "react-icons/hi2";

const TripleFeatures = () => {
  return (
    <>
      <div className="py-20 bg-[#edf2e8] flex justify-center px-4">
        <div className="max-w-[95rem] w-full flex lg:flex-row flex-col gap-x-20 gap-y-8 font-merri lg:px-0 px-10">
          <img
            src={trimpic}
            alt="image of weeds being trimmed"
            className="rounded-2xl lg:w-1/2 shadow-xl"
          />
          <div className="flex flex-col gap-y-6 justify-center">
            <h2 className="six-title font-medium">
              Transform Your
              <span className="block mt-4">Outdoor Space</span>
            </h2>
            <p className="text-slate-800 font-fig tracking-wide md:tracking-wider md:leading-8 text-base md:text-lg md:w-3/4">
              Ready to transform your lawn into a beautiful, well-maintained outdoor space? 
              Our expert team is here to make your vision a reality. We provide top-notch lawn care 
              services to keep your yard looking its best year-round.
            </p>
            <a
              className="w-max px-4 py-2 font-fig text-lg bg-main text-white rounded-full block md:mb-0 mb-2 transition300scale"
              href="#quote"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>

      <div className="py-20 bg-[#edf2e8] flex justify-center px-4">
        <div className="max-w-[95rem] w-full flex lg:flex-row flex-col gap-x-20 gap-y-8 font-merri lg:px-0 px-10">
          <div className="flex flex-col gap-y-6 justify-center lg:order-1 order-2">
            <h2 className="six-title font-medium">
              When we work for you,
              <span className="block mt-4">we work. <i className="text-slate-700">Hard.</i></span>
            </h2>
            <p className="text-slate-800 font-fig tracking-wide md:tracking-wider md:leading-8 text-base md:text-lg md:w-3/4">
              Our team is dedicated to delivering exceptional results every time. We take pride in our work 
              and ensure that every job is done to your satisfaction, with attention to detail and professionalism.
            </p>
            <a
              className="w-max px-4 py-2 font-fig text-lg bg-main text-white rounded-full block md:mb-0 mb-2 transition300scale"
              href="#"
            >
              Send A Message
            </a>
          </div>
          <img
            src={trimpic2}
            alt="image of weeds being trimmed"
            className="rounded-2xl lg:w-1/2 shadow-xl lg:order-2 order-1"
          />
        </div>
      </div>

      <div className="py-20 bg-[#1d4a34] flex justify-center">
        <div className="max-w-[95rem] w-full flex gap-x-20 font-merri">
          <div className="flex flex-col gap-y-6 justify-center items-center w-full">
            <h2 className="six-title font-medium text-center text-white w-full">
              The Numbers Never Lie.
            </h2>
            <p className="text-slate-100 text-center w-full md:w-2/3 lg:w-1/2 font-light font-fig md:px-0 px-4 tracking-wide md:tracking-wider text-base md:text-lg">
                Throughout our over 5+ years serving the Greater Richmond areas, we've 
                made a sizable imapct. With over 100+ different homes and homeowners impacted 
                along with over 40 5-star reviews, Greenleafmowing is the way to go.
            </p>

            <section class="flex flex-col mt-6">

              <div class="grid grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0 gap-x-5 place-items-center w-full mx-auto max-w-7xl px-5">

                <div class="rotate-1 flex flex-col justify-center items-center bg-white px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
                  <div class="flex flex-row justify-center items-center">
                    <HiOutlineTrophy className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] text-[#53aa0e]"/>
                    <p class="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                      40+
                    </p>
                  </div>
                  <p class="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
                    5 Star Reviews
                  </p>
                </div>

                <div class="-rotate-1 flex flex-col justify-center items-center bg-white px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
                  <div class="flex flex-row justify-center items-center">
                    <FaRegStar className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] text-[#53aa0e]"/>
                    <p class="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                      4.9
                    </p>
                  </div>
                  <p class="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
                    Average Rating
                  </p>
                </div>

                <div class="rotate-1 flex flex-col justify-center items-center bg-white px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
                  <div class="flex flex-row justify-center items-center">
                    <LuBadgeCheck className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] text-[#53aa0e]"/>
                    <p class="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                      110+
                    </p>
                  </div>
                  <p class="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
                    Projects Completed
                  </p>
                </div>

                <div class="-rotate-1 flex flex-col justify-center items-center bg-white px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
                  <div class="flex flex-row justify-center items-center">
                    <IoMapOutline className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] text-[#53aa0e]"/>
                    <p class="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                      6+
                    </p>
                  </div>
                  <p class="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
                    Cities and Locations
                  </p>
                </div>

              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default TripleFeatures;
