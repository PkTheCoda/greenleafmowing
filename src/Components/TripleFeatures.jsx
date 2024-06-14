import React from "react";
import trimpic from "../assets/trimpic.png";
import trimpic2 from "../assets/trimpic2.png";
import statlawn from "../assets/statlawn.png";
import { FaMapLocationDot } from "react-icons/fa6";
import { LuBadgeCheck } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { HiOutlineTrophy } from "react-icons/hi2";

const TripleFeatures = () => {
  return (
    <>
      <div className="py-20 bg-[#edf2e8] flex justify-center">
        <div className="max-w-[95rem] w-full flex gap-x-20 font-merri">
          <img
            src={trimpic}
            alt="image of weeds being trimmed"
            className="rounded-2xl w-1/2 shadow-xl"
          />
          <div className="flex flex-col gap-y-6 justify-center">
            <h2 className="six-title font-medium">
              Transform Your
              <span className="block mt-4">Outdoor Space</span>
            </h2>
            <p className="text-slate-800 font-fig tracking-wider leading-8 text-lg w-3/4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At dicta
              qui rem itaque cumque amet fugiat quo ipsam laboriosam atque. Quam
              totam dolore pariatur eius harum sapiente adipisci accusamus
              nesciunt?
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

      <div className="py-20 bg-[#edf2e8] flex justify-center">
        <div className="max-w-[95rem] w-full flex gap-x-20 font-merri">
          <div className="flex flex-col gap-y-6 justify-center">
            <h2 className="six-title font-medium">
              When we work for you,
              <span className="block mt-4">we work.</span>
            </h2>
            <p className="text-slate-800 font-fig tracking-wider leading-8 text-lg w-3/4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At dicta
              qui rem itaque cumque amet fugiat quo ipsam laboriosam atque. Quam
              totam dolore pariatur eius harum sapiente adipisci accusamus
              nesciunt?
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
            className="rounded-2xl w-1/2 shadow-xl"
          />
        </div>
      </div>

      <div className="py-20 bg-[#1d4a34] flex justify-center">
        <div className="max-w-[95rem] w-full flex gap-x-20 font-merri">
          <div className="flex flex-col gap-y-6 justify-center items-center w-full">
            <h2 className="six-title font-medium text-center text-white w-full">
              The Numbers Never Lie.
            </h2>
            <p className="text-slate-100 text-center w-1/2 font-light font-fig tracking-wider text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At dicta qui
                rem itaque cumque amet fugiat quo ipsam laboriosam atque. Quam totam dolore
                pariatur eius harum sapiente adipisci accusamus nesciunt?
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
                    <FaMapLocationDot className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] text-[#53aa0e]"/>
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
