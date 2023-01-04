import React, { useState, useEffect } from 'react';

import img3 from './Group 7211.png';
import buttonLeft from './Group 6buttonLeft.png';
import buttonRight from './Group 7buttonRight.png';

const T1 = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index == testimonials.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: 'balveer singh rao',
      head: 'Had a lot of fun, amazing event',
      title: 'Student',
      content:
        'I just wanted to express my admiration and appreciation for the FMC Weekend event. The organization and execution of the event was truly impressive and the variety of activities and workshops offered was truly outstanding.'
    },
    {
      name: 'puneet chawala',
      head: 'Enjoyed the keynote speaker and the opportunity to network',
      title: 'Manager',
      content:
        "Thank you to all the organizers and volunteers for their hard work in making this such a memorable and enriching experience. I am already looking forward to next year's FMC Weekend. Keep up the great work!"
    }
  ];
  return (
    <section class="bg-[#0AFFC2] ">
      <div class=" px-6 py-10 mx-auto">
        <div class="lg:-mx-6 lg:flex lg:items-center">
          <img
            class="object-contain object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
            //  src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
            src={img3}
          />

          <div class="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
            <p class="text-5xl font-semibold text-blue-700 ">“</p>

            <h1 class="text-4xl font-semibold text-gray-800  lg:text-4xl lg:w-96">
              {testimonials[index].head}
            </h1>

            <p class="max-w-lg mt-6 text-lg">“ {testimonials[index].content} ”</p>

            <h3 class="mt-6 text-lg font-semibold text-blue-700 uppercase">
              {testimonials[index].name}
            </h3>
            <p class="">{testimonials[index].title}</p>

            <div class="flex items-center justify-between mt-12 lg:justify-start">
              <button
                title="left arrow"
                class="p-2  transition-colors duration-300 border rounded-full rtl:-scale-x-100  dark:hover:bg-gray-800 hover:bg-gray-100">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg> */}
                <img
                  onClick={() => {
                    console.log('clicked');
                    if (index == 0) {
                      setIndex(testimonials.length - 1);
                    } else {
                      setIndex(index - 1);
                    }
                  }}
                  className="w-10"
                  src={buttonLeft}
                  alt=""
                />
              </button>

              <button
                title="right arrow"
                class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg> */}
                <img
                  onClick={() => {
                    if (index == testimonials.length - 1) {
                      setIndex(0);
                      console.log('df');
                    } else {
                      setIndex(index + 1);
                    }
                  }}
                  className="w-10"
                  src={buttonRight}
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default T1;
