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
          <img src='Group_7211.svg' />
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