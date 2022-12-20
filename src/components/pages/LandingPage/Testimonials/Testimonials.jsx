/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Testimonials = () => {
  let [index, setIndex] = useState(0);

  const testimonials = [
    {
      name: 'Micheal Gough',
      position: 'CEO at Google',
      imageLink: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png',
      review:
        '"Landwind is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."'
    },
    {
      name: 'Balveer Singh Rao',
      position: 'CEO at Netflix',
      imageLink: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png',
      review:
        '"Fmc is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."'
    },
    {
      name: 'Mukesh Kumar',
      position: 'CEO at Mircrosoft',
      imageLink: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png',
      review:
        '"Fmc is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."'
    }
  ];
  return (
    <section className="bg-#1b083d dark:bg-#1b083d">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
        <figure className="max-w-screen-md mx-auto">
          <svg
            className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <div className="flex align-center justify-center gap-10">
            <ArrowBackIcon
              onClick={() => {
                if (index === 0) {
                  setIndex(testimonials.length - 1);
                } else {
                  setIndex(index - 1);
                }
              }}
              style={{ color: 'white', transition: 'all 0.5s ease' }}
            />
            <blockquote>
              <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
                {testimonials[index].review}
              </p>
            </blockquote>
            <ArrowForwardIcon
              onClick={() => {
                if (index === testimonials.length - 1) {
                  setIndex(0);
                } else {
                  setIndex(index + 1);
                }
              }}
              style={{ color: 'white', transition: 'all 0.5s ease' }}
            />
          </div>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <img
              className="w-6 h-6 rounded-full"
              src={testimonials[0].imageLink}
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div className="pr-3 font-medium text-gray-900 dark:text-white">
                {testimonials[index].name}
              </div>
              <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                {testimonials[index].position}
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;
