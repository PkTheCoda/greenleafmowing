import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free-snap",
        breakpoints: {
          "(min-width: 1024px)": {
            slides: { perView: 3, spacing: 15 }, // 3 slides per view above 1024px
          },
          "(min-width: 768px) and (max-width: 1023px)": {
            slides: { perView: 2, spacing: 15 }, // 2 slides per view between 768px and 1024px
          },
        },
        slides: {
          perView: 1, // 1 slide per view below 768px
          spacing: 15,
        },
      });

  return (
    <>
    <div className="flex flex-col py-28 font-merri bg-[#fffbf0]">
        <div className="flex flex-col items-center justify-center gap-y-6 text-black">
            <h2 className="six-title font-medium text-center w-full">
              The only thing we don't
              <span className="block">cut are <span className="underline">Corners</span></span>
            </h2>
            <p className="text-slate-900 text-center lg:w-1/2 font-fig tracking-wider text-xl mb-8">
                See what our customers have to say about our lawncare services.
            </p>
        </div>
        <p className="text-sm text-right w-full text-amber-800 pr-4">scroll right {'->'}</p>
        <div ref={sliderRef} className="keen-slider flex px-10">

            <div class="keen-slider__slide number-slide1 shadow-xl bg-red-100 rounded-2xl my-10 mt-2">
                <div class="flex flex-col justify-between w-full h-full px-6 py-6 bg-white md:px-14 rounded-2xl md:py-14">
                    <div className="flex space-x-1 mb-4">
                        {[...Array(5)].map((_, index) => (
                            <FaStar key={index} className="text-yellow-500 h-8 w-8" />
                        ))}
                    </div>
                    <p class="text-2xl leading-normal dark:text-gray-300">
                    They are very{" "}
                    <mark class="mx-1 text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
                        professional, reliable, and always do a fantastic job.
                    </mark>{" "}
                    My lawn has never looked better, and I would highly recommend them to anyone.
                    </p>
                    <div class="flex items-center mt-8 space-x-3">
                    <div class="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                        <img
                        alt="Avatar"
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        loading="lazy"
                        />
                    </div>
                    <div>
                        <div class="text-lg font-medium text-gray-700">
                        Dylan A.
                        </div>
                        <div class="text-gray-600 dark:text-gray-400">
                        September 12th, 2023{" "}
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="keen-slider__slide number-slide2 shadow-xl bg-red-100 rounded-2xl my-10 mt-2">
                <div class="flex flex-col justify-between w-full h-full px-6 py-6 bg-white md:px-14 rounded-2xl md:py-14">
                    <div className="flex space-x-1 mb-4">
                        {[...Array(5)].map((_, index) => (
                            <FaStar key={index} className="text-yellow-500 h-8 w-8" />
                        ))}
                    </div>
                    <p class="text-2xl leading-normal dark:text-gray-300">
                    I had been struggling with my yard for years, and it wasn't until I found this company that{" "}
                    <mark class="mx-1 text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
                        I was able to achieve the beautiful lawn I had always wanted.
                    </mark>{" "}
                    </p>
                    <div class="flex items-center mt-8 space-x-3">
                    <div class="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                        <img
                        alt="Avatar"
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        loading="lazy"
                        />
                    </div>
                    <div>
                        <div class="text-lg font-medium text-gray-700">
                        Paul M.
                        </div>
                        <div class="text-gray-600 dark:text-gray-400">
                        July 21st, 2023{" "}
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="keen-slider__slide number-slide3 shadow-xl bg-red-100 rounded-2xl my-10 mt-2">
                <div class="flex flex-col justify-between w-full h-full px-6 py-6 bg-white md:px-14 rounded-2xl md:py-14">
                    <div className="flex space-x-1 mb-4">
                        {[...Array(5)].map((_, index) => (
                            <FaStar key={index} className="text-yellow-500 h-8 w-8" />
                        ))}
                    </div>
                    <p class="text-2xl leading-normal dark:text-gray-300">
                    I have used this company for both lawn care and landscaping project, and {" "}
                    <mark class="mx-1 text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
                        they never disappoint.
                    </mark>{" "}
                    Their attention to detail is impeccable.
                    </p>
                    <div class="flex items-center mt-8 space-x-3">
                    <div class="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                        <img
                        alt="Avatar"
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        loading="lazy"
                        />
                    </div>
                    <div>
                        <div class="text-lg font-medium text-gray-700">
                        Rosanne S.
                        </div>
                        <div class="text-gray-600 dark:text-gray-400">
                        June 4th, 2024{" "}
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="keen-slider__slide number-slide4 shadow-xl bg-red-100 rounded-2xl my-10 mt-2">
                <div class="flex flex-col justify-between w-full h-full px-6 py-6 bg-white md:px-14 rounded-2xl md:py-14">
                    <div className="flex space-x-1 mb-4">
                        {[...Array(5)].map((_, index) => (
                            <FaStar key={index} className="text-yellow-500 h-8 w-8" />
                        ))}
                    </div>
                    <p class="text-2xl leading-normal dark:text-gray-300">
                    <mark class="mx-1 text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
                        Simply the best landscaping company I've worked with.
                    </mark>{" "}
                    Better than all the rest. I'd recommend them to anyone. They are very straightforward and always willing to go above and beyond!
                    </p>
                    <div class="flex items-center mt-8 space-x-3">
                    <div class="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                        <img
                        alt="Avatar"
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        loading="lazy"
                        />
                    </div>
                    <div>
                        <div class="text-lg font-medium text-gray-700">
                        Jaylen Z.
                        </div>
                        <div class="text-gray-600 dark:text-gray-400">
                        August 11th, 2023{" "}
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="keen-slider__slide number-slide5 shadow-xl bg-red-100 rounded-2xl my-10 mt-2">
                <div class="flex flex-col justify-between w-full h-full px-6 py-6 bg-white md:px-14 rounded-2xl md:py-14">
                    <div className="flex space-x-1 mb-4">
                        {[...Array(5)].map((_, index) => (
                            <FaStar key={index} className="text-yellow-500 h-8 w-8" />
                        ))}
                    </div>
                    <p class="text-2xl leading-normal dark:text-gray-300">
                        Greenleafmowing has been my 
                    <mark class="mx-1 text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
                        go-to mowing company for over a year now.
                    </mark>{" "}
                    They respond very quick and always leave my lawn in a spotless condition. Looking forward to continue working with them!
                    </p>
                    <div class="flex items-center mt-8 space-x-3">
                    <div class="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                        <img
                        alt="Avatar"
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        loading="lazy"
                        />
                    </div>
                    <div>
                        <div class="text-lg font-medium text-gray-700">
                        Lexi H.
                        </div>
                        <div class="text-gray-600 dark:text-gray-400">
                        May 30th, 2024{" "}
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="keen-slider__slide number-slide6 shadow-xl bg-red-100 rounded-2xl my-10 mt-2">
                <div class="flex flex-col justify-between w-full h-full px-6 py-6 bg-white md:px-14 rounded-2xl md:py-14">
                    <div className="flex space-x-1 mb-4">
                        {[...Array(5)].map((_, index) => (
                            <FaStar key={index} className="text-yellow-500 h-8 w-8" />
                        ))}
                    </div>
                    <p class="text-2xl leading-normal dark:text-gray-300">
                        Greenleafmowing has been my 
                    <mark class="mx-1 text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
                        go-to mowing company for over a year now.
                    </mark>{" "}
                    They respond very quick and always leave my lawn in a spotless condition. Looking forward to continue working with them!
                    </p>
                    <div class="flex items-center mt-8 space-x-3">
                    <div class="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                        <img
                        alt="Avatar"
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        loading="lazy"
                        />
                    </div>
                    <div>
                        <div class="text-lg font-medium text-gray-700">
                        Lexi H.
                        </div>
                        <div class="text-gray-600 dark:text-gray-400">
                        May 30th, 2024{" "}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <a
            className="mx-auto w-max px-4 py-2 font-fig text-lg bg-main text-white rounded-full block md:mb-0 mb-2 transition300scale"
            href="#"
        >
            You Could Be Next
        </a>
    </div>

    </>
  );
};

export default Testimonials;
