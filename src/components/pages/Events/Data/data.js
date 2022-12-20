/* eslint-disable prettier/prettier */
const data = {
  photographyData: [
    {
      id: 1,
      img: process.env.REACT_APP_AWS_S3_URI + '/infocus-01.png',
      genre: 'photography',
      type: 'Contest',
      title: 'InFocus',
      link: 'https://drive.google.com/file/d/1ypZkoyI1x3Es-zCTiT0jytmZTazSXmNp/view?usp=sharing',
      price: 129,
      prize: '12K'
    },
    {
      id: 2,
      img: process.env.REACT_APP_AWS_S3_URI + '/snapIT-01.png',
      genre: 'photography',
      type: 'Contest',
      title: 'Snap It Now',
      link: 'https://drive.google.com/file/d/1YyKAYn-PBXPoKSB1Z1iU6fa6wjaVGULL/view?usp=sharing',
      price: 129,
      prize: '8K'
    },
    {
      id: 3,
      img: process.env.REACT_APP_AWS_S3_URI + '/photoArt-01.png',
      genre: 'photography',
      type: 'Contest',
      title: 'Photo Art',
      link: 'https://drive.google.com/file/d/1nEwQqQeI5mulbMTA1I6u9YzXsLLLEiKC/view?usp=sharing',
      price: 129,
      prize: '10K'
    }
  ],
  outreachData: [
    {
      id: 4,
      img: process.env.REACT_APP_AWS_S3_URI + '/vlogholic-01.png',
      genre: 'outreach',
      type: 'Contest',
      title: 'Vlogoholic',
      link: 'https://drive.google.com/file/d/1qTdAlnarcZ47eOS-R7O_ImNfsZPnvnBZ/view?usp=sharing',
      price: 129,
      prize: '10K'
    },
    {
      id: 5,
      img: process.env.REACT_APP_AWS_S3_URI + '/documentary-01.png',
      genre: 'outreach',
      type: 'Contest',
      title: 'Documentary Making',
      link: 'https://drive.google.com/file/d/1-j7QXOXQpBTioe3S7jrTeydKBLGPkcZe/view?usp=sharing',
      price: 129,
      prize: '10K'
    },
    {
      id: 6,
      img: process.env.REACT_APP_AWS_S3_URI + '/admad-01.png',
      genre: 'outreach',
      type: 'Contest',
      title: 'Ad-Mad',
      link: 'https://drive.google.com/file/d/1YOj9LLElPbGTbFbL2DP-8QAcltoFAMY5/view?usp=sharing',
      price: 129,
      prize: '9K'
    }
  ],
  cineData: [
    {
      id: 7,
      img: process.env.REACT_APP_AWS_S3_URI + '/bRoll-01.png',
      genre: 'cine',
      type: 'Contest',
      title: 'Thats how B-Roll',
      link: 'https://drive.google.com/file/d/1pQMLQD-NpXDh26tlTystzPNsU9Mcxzge/view?usp=sharing',
      price: 129,
      prize: '10K'
    },
    {
      id: 8,
      img: process.env.REACT_APP_AWS_S3_URI + '/magic-01.png',
      genre: 'cine',
      type: 'Contest',
      title: 'Magic Behind the Lens',
      link: 'https://drive.google.com/file/d/1MF0nFWgHMGxGEU3Kad9qEKbAOTVWVM-w/view?usp=sharing',
      price: 129,
      prize: '15K'
    },
    {
      id: 9,
      img: process.env.REACT_APP_AWS_S3_URI + '/shortFilm-01.png',
      genre: 'cine',
      type: 'Contest',
      title: 'Make It Short',
      link: 'https://drive.google.com/file/d/1mW5PcltZXyPRmOTaJaHE3QKdlCoPI7Hz/view?usp=sharing',
      price: 129,
      prize: '8K'
    }
  ],
  designData: [
    {
      id: 11,
      img: process.env.REACT_APP_AWS_S3_URI + '/designTunes-01.png',
      genre: 'design',
      type: 'Contest',
      title: 'Design The Tunes',
      link: 'https://drive.google.com/file/d/1-VApwFFzYsxfs5Kc8vGfzK5YowaJ7DYP/view?usp=sharing',
      price: 129,
      prize: '10K'
    },
    {
      id: 12,
      img: process.env.REACT_APP_AWS_S3_URI + '/logoRedesign-01.png',
      genre: 'design',
      type: 'Contest',
      title: 'Logo Redesign',
      link: 'https://drive.google.com/file/d/1miS5p8eaeN-ZaLiip4ApnatmpnoVVMqj/view?usp=sharing',
      price: 129,
      prize: '12K'
    },
    {
      id: 13,
      img: process.env.REACT_APP_AWS_S3_URI + '/notJustWords-01.png',
      genre: 'design',
      type: 'Contest',
      title: 'Not Just Words',
      link: 'https://drive.google.com/file/d/1ULnLIRNCJzkgYD57vRQM73EEs_vcY3Ls/view?usp=sharing',
      price: 129,
      prize: '8K'
    }
  ],
  mediaData: [
    {
      id: 14,
      img: process.env.REACT_APP_AWS_S3_URI + '/hades_-01.png',
      genre: 'media',
      type: 'Contest',
      title: 'Hades Reporters',
      link: 'https://drive.google.com/file/d/1L4xS562Rld4_j7Lr1xv7iU0L4cu7gHPW/view?usp=sharing',
      price: 129,
      prize: '8K'
    },
    {
      id: 15,
      img: process.env.REACT_APP_AWS_S3_URI + '/straightSite-01.png',
      genre: 'media',
      type: 'Contest',
      title: 'Straight from Site',
      link: 'https://drive.google.com/file/d/1w-fj86xTKa9X0jQjhH4UFLNu5HRpRvdO/view?usp=sharing',
      price: 129,
      prize: '8K'
    },
    {
      id: 16,
      img: process.env.REACT_APP_AWS_S3_URI + '/writer_block-01.png',
      genre: 'media',
      type: 'Contest',
      title: "Writer's Block",
      link: 'https://drive.google.com/file/d/1-3a8h2Z4Wg5invFtBQoCJLT_iL2we-Ky/view?usp=sharing',
      price: 129,
      prize: '8K'
    }
  ],
  animationData: [
    {
      id: 17,
      img: process.env.REACT_APP_AWS_S3_URI + '/capture-01.png',
      genre: 'animation',
      type: 'Contest',
      title: 'Capture the Imagination',
      link: 'https://drive.google.com/file/d/1jRpV-ZjKNNTm8RFOGktaaZfCz73uQfAx/view?usp=sharing',
      price: 129,
      prize: '10K'
    },
    {
      id: 18,
      img: process.env.REACT_APP_AWS_S3_URI + '/realmOfWonder-01.png',
      genre: 'animation',
      type: 'Contest',
      title: 'Unreal',
      link: 'https://drive.google.com/file/d/13FR_L6kpYO6Zo5-kbikKxoA6Q1YzerEX/view?usp=sharing',
      price: 129,
      prize: '9K'
    },
    {
      id: 19,
      img: process.env.REACT_APP_AWS_S3_URI + '/unreal-01.png',
      genre: 'animation',
      type: 'Contest',
      title: 'Realm of Wonders',
      link: 'https://drive.google.com/file/d/17n4rzKwRtKgCljrkxgUF6DZ02qwsZOG_/view?usp=sharing',
      price: 129,
      prize: '6K'
    }
  ],
  photographyWorkshopData: [
    {
      id: 1,
      img: process.env.REACT_APP_AWS_S3_URI + '/rathika.jpeg',
      genre: 'photography',
      type: 'Workshop',
      title: 'Photography Workshop',
      link: 'https://drive.google.com/file/d/1ypZkoyI1x3Es-zCTiT0jytmZTazSXmNp/view?usp=sharing',
      price: 149,
      prize: 'Rathika Ramasamy',
      date: '30th January',
      time: '5:00 p.m. - 6:00 p.m.',
      desc: 'Rathika Ramasay captures the beauty in nature in unbeleivbaly beautiful shots! Unparallelled experience behind the lense and unrivalled skills in the field proudly adorn her.'
    },
    {
      id: 2,
      img: process.env.REACT_APP_AWS_S3_URI + '/navin.jpeg',
      genre: 'photography',
      type: 'Workshop',
      title: 'Photography Workshop',
      link: 'https://drive.google.com/file/d/1YyKAYn-PBXPoKSB1Z1iU6fa6wjaVGULL/view?usp=sharing',
      price: 199,
      prize: 'Navin Vatsa',
      date: '13th February',
      time: '2:00 p.m. - 3:00 p.m.',
      desc: 'A Contributer to National Geographic Your Shot and a Mentor at Tamron India, Navin Vatsa caputes unbelievably beautiful photographs in search of soul!'
    }
    // {
    //   id: 3,
    //   img: 'https://drive.google.com/uc?export=view&id=10GSj5pAbMYv_Pb36iJO7US4Tg6AIsRjv',
    //   genre: 'photography',
    //   type: 'Workshop',
    //   title: 'Photo Art',
    //   link: 'https://drive.google.com/file/d/1nEwQqQeI5mulbMTA1I6u9YzXsLLLEiKC/view?usp=sharing',
    //   price: 129,
    //   prize: '10K'
    // }
  ],
  outreachWorkshopData: [
    {
      id: 4,
      img: process.env.REACT_APP_AWS_S3_URI + '/priyankaoutreach.png',
      genre: 'outreach',
      type: 'Workshop',
      title: 'Travel Vlogging',
      link: 'https://drive.google.com/file/d/1qTdAlnarcZ47eOS-R7O_ImNfsZPnvnBZ/view?usp=sharing',
      price: 149,
      prize: 'Priyanka Chandola',
      date: '11th February',
      time: '4:00 p.m. - 5:00 p.m.',
      desc: 'From a software engineer to a YouTuber, Priyanka Chandola is going places with her ‘Desi Girl Traveller’ channel on social media platforms. She creates content on travel in the digital space with the aim to break societal norms. Here’s a look at her journey.'
    },
    {
      id: 5,
      img: process.env.REACT_APP_AWS_S3_URI + '/csvenketaram.jpeg',
      genre: 'outreach',
      type: 'Workshop',
      title: 'Documentary Filmmaking workshop',
      link: 'https://drive.google.com/file/d/1-j7QXOXQpBTioe3S7jrTeydKBLGPkcZe/view?usp=sharing',
      price: 149,
      prize: 'C.S. Venkateswaran',
      date: '11th February',
      time: '2:00 p.m. - 3:00 p.m.',
      desc: 'He is a National-award winning film critic, professor, documentary filmmaker and writer.'
    }
  ],
  cineWorkshopData: [
    {
      id: 7,
      img: process.env.REACT_APP_AWS_S3_URI + '/sanjayf.png',
      genre: 'cine',
      type: 'Workshop',
      title: 'Filmmaking workshop ',
      link: 'https://drive.google.com/file/d/1pQMLQD-NpXDh26tlTystzPNsU9Mcxzge/view?usp=sharing',
      price: 149,
      prize: 'Sanjay F. Gupta',
      date: '12th February',
      time: '5:00p.m. - 6:00 p.m',
      desc: 'Film Director, Cinematographer, and Photographer Sanjay F Gupta brings energy, creativity and professionalism to each and every production! The tale of his incredivle career and journey is one to applaud!'
    }
    // {
    //   id: 8,
    //   img: 'https://drive.google.com/uc?export=view&id=10GSj5pAbMYv_Pb36iJO7US4Tg6AIsRjv',
    //   genre: 'cine',
    //   type: 'Workshop',
    //   title: '(Screenwriting + cinematograpy) session',
    //   link: 'https://drive.google.com/file/d/1MF0nFWgHMGxGEU3Kad9qEKbAOTVWVM-w/view?usp=sharing',
    //   price: 199,
    //   date: '13th February',
    //   time: '4:00 p.m. - 5:00 p.m.',
    //   prize: 'Mitesh Shah + Anand Gandhi',
    //   desc: 'Acclaimed writer Mitesh Shah is known for his contributions to Helicopter Eela, Tumbbad, Mitwa, and the Intern. Indian filmmaker, entrepreneur, media producer and innovator Anand Gandhi is renowned for his debut feature film Ship of Thesaurus which won the National Film Award for Best Picture. His film Tumbbad opened the Critic’s Week at the 75th Venice Film Festival.'
    // }
  ],
  designWorkshopData: [
    {
      id: 11,
      img: process.env.REACT_APP_AWS_S3_URI + '/annada.png',
      genre: 'design',
      type: 'Workshop',
      title: 'Design Workshop',
      link: 'https://drive.google.com/file/d/1-VApwFFzYsxfs5Kc8vGfzK5YowaJ7DYP/view?usp=sharing',
      price: 149,
      prize: 'Annada Menon',
      date: '4th February',
      time: '11:00a.m. - 12:00 p.m.',
      desc: 'Creating illustrations with the silver lining of nostalgia is an astounding skill and Annada Menon has it all! Having illustration featured in the cosmopolitan Annada is a going places!'
    },
    {
      id: 12,
      img: process.env.REACT_APP_AWS_S3_URI + '/rishabh.jpeg',
      genre: 'design',
      type: 'Workshop',
      title: 'Product design',
      link: 'https://drive.google.com/file/d/1miS5p8eaeN-ZaLiip4ApnatmpnoVVMqj/view?usp=sharing',
      price: 149,
      prize: 'Rishabh Jain',
      date: '11th February',
      time: '6:00 p.m. - 7:00 p.m.',
      desc: "Rishabh Jain's Journey as a product designer and as the founder of confetti studios, is admirable and one known to encompass learnings from multiple UI/UX projects impacting millions of users!"
    }
  ],
  mediaWorkshopData: [
    {
      id: 14,
      img: process.env.REACT_APP_AWS_S3_URI + '/nikita.jpeg',
      genre: 'media',
      type: 'Workshop',
      title: 'Creative Writing workshop',
      link: 'https://drive.google.com/file/d/1L4xS562Rld4_j7Lr1xv7iU0L4cu7gHPW/view?usp=sharing',
      price: 199,
      prize: 'Nikita Singh',
      date: '13th February',
      time: '10:00 a.m. - 11:00 a.m.',
      desc: 'Having written a number of best selling novels, Nikita Singh is impacting and influencing numersous minds and lives. Having spoken on the Tedx platform on multiple occasions, this indian author is winning hearts!'
    },
    {
      id: 15,
      img: process.env.REACT_APP_AWS_S3_URI + '/ankitmedia.png',
      genre: 'media',
      type: 'Workshop',
      title: 'Tech Journalism Workshop',
      link: 'https://drive.google.com/file/d/1w-fj86xTKa9X0jQjhH4UFLNu5HRpRvdO/view?usp=sharing',
      price: 149,
      date: '',
      time: '',
      desc: 'He has worked with renowned news channels and has received numerous awards for his outstanding works including “India’s Best Gadget Show” by ENBA India for his show- Tech it out.',
      prize: 'Ankit Tuteja'
    }
  ],
  animationWorkshopData: [
    {
      id: 17,
      img: process.env.REACT_APP_AWS_S3_URI + '/sandeepvfx.png',
      genre: 'animation',
      type: 'Workshop',
      title: 'VFX Workshop',
      link: 'https://drive.google.com/file/d/1jRpV-ZjKNNTm8RFOGktaaZfCz73uQfAx/view?usp=sharing',
      price: 199,
      prize: 'Sandeep Kamal',
      date: '12th February',
      time: '11:00 a.m.- 12:00 p.m.',
      desc: "Having contributed to critically acclaimed films such as Jal, Panipat, Badla, and Barfi, VFX designer and digitla nomad, Sandeep kamal's career is admired greatly"
    }
  ]
};

export default data;
