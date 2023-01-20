/* eslint-disable prettier/prettier */
const data = {
  photographyData: [
    {
      id: 1,
      img: process.env.REACT_APP_AWS_S3_URI + '/Group7175.png',
      genre: 'photography',
      type: 'Contest',
      title: 'PhotoArt',
      link: 'https://iitbhuacin-my.sharepoint.com/:w:/g/personal/vaibhav_sinha_phe21_iitbhu_ac_in/EdC0oFVQKa9BgUAlTsZ-478BzqCHxT4u1JxH_xdfn4gGpg?e=IM7zKs',
      price: 129,
      prize: '12K',
      color: '#00CCF5',
      color2: '#2ED9FC',
      content:
        '"Manipulation is the art of blending seemingly opposite realities into a single image." Photoart brings to you the opportunity to fill the canvas with master- strokes and create an ethereal piece of art! "'
    },
    {
      id: 2,
      img: process.env.REACT_APP_AWS_S3_URI + '/Group7175.png',
      genre: 'photography',
      type: 'Contest',
      title: 'Portfolio in 24',
      link: 'https://docs.google.com/document/d/1AIc4URCDZddJ0EZjV5FCrkVSUaTirZXvPQwXb8Sbp_I/edit?usp=sharing',
      price: 129,
      prize: '8K',
      color: '#00CCF5',
      color2: '#2ED9FC',
      content:
        'We click a number of pictures and put them in the gallery, but  Portfolio in 24 hrs of FMC Weekend brings you a chance to show your skills on India’s largest digital art festival.'
    },
    {
      id: 3,
      img: process.env.REACT_APP_AWS_S3_URI + '/Group7175.png',
      genre: 'photography',
      type: 'Contest',
      title: 'InFocus',
      link: 'https://docs.google.com/document/d/1am6Q14ZGIHs83RyEYyrcUuCX4TXOF4xRlGU9EhAH7RM/edit?usp=drivesdk',
      price: 129,
      prize: '14K',
      color: '#00CCF5',
      color2: '#2ED9FC',
      content:
        "A blank canvas provides one with endless possibilities to create magnificent artworks. A photograph is a work of art in its own right! FMC Weekend gives you the chance to show off your skills on India's largest platform for digital artists. Creativity and Composition being the significant parameters, your submissions should belong to any of the below-mentioned themes wherein winners will be declared for each theme separately. Long exposure Minimalism Architecture Colors of India Winter Conceptual portraits Monochrome"
    },
    {
      id: 4,
      img: process.env.REACT_APP_AWS_S3_URI + '/Group7175.png',
      genre: 'photography',
      type: 'Contest',
      title: 'InstaMeet',
      link: 'https://docs.google.com/document/d/1SuC5eWRvRM9zPJD_YfDZakiAdSGon_IUsnWnb0qm-Ws/edit?usp=sharing',
      price: 129,
      prize: '14K',
      color: '#00CCF5',
      color2: '#2ED9FC',
      content:
        '"Banaras is older than history; older than tradition, older than even legends and looks twice as old as all of them out together ..."- Mark Twain.Banaras is one of the oldest cities where you can feel like a dweller and an alien at the same time. Come with us and explore this chaotic and wonderful city. Show us your perspective of mystic cultures of this lively city through your lens.'
    },
    {
      id: 5,
      img: process.env.REACT_APP_AWS_S3_URI + '/Group7175.png',
      genre: 'photography',
      type: 'Contest',
      title: 'SnapChase',
      link: 'https://docs.google.com/document/d/1gpkcbcFulNc2haFFD6PAo6ieglO0qjQAUG6WcU9QGfI/edit?usp=drivesdk',
      price: 129,
      prize: '14K',
      color: '#00CCF5',
      color2: '#2ED9FC',
      content:
        "Snapchase  a unique photographic treasure hunt, takes you through an adrenaline rush in a chose around the campus. So get ready and enjoy the ride, explore the unexplored sections and find what you need. IIT (BHU), Varanasi Campus has over 100 years old Architecture and has an essence of beauty at every small corner. It contains more histories and memories than one can imagine. Every clue, a riddle to solve, pointing to the specific history of that location, find and click that location's picture and submit the exact composition before time runs out, Shoot them before the histories melt away. Good shots can be found in every timeline of this world but unfortunately, we live in the present. So try learning the history from all that we have from the past, A 100 year old Structure, A home to thousands"
    }
  ],
  outreachData: [
    {
      id: 6,
      img: process.env.REACT_APP_AWS_S3_URI + '/outreach.svg',
      genre: 'outreach',
      type: 'Contest',
      title: 'Vlogoholic',
      link: 'https://docs.google.com/document/d/1PlGyzKJo_OZSJC35ZZaJmv8brSf6GMx77xl47qz-Rxg/edit?usp=sharing',
      price: 129,
      prize: '10K',
      color: '#FFC900',
      color2: '#FFDC5A',
      content:
        'You have to make a video log in the range of 60-600 seconds. It can be about anything- visiting nearby attractions, indulging in festive activities, pulling pranks on people, etc. - as long as it is exciting and in which you can show the theme “COLOUR OF MY CITY”.'
    },
    {
      id: 7,
      img: process.env.REACT_APP_AWS_S3_URI + '/outreach.svg',
      genre: 'outreach',
      type: 'Contest',
      title: 'Rant it',
      link: 'https://docs.google.com/document/d/1dWAbsuj0r3L1pNtiwiC24AGOPpQ0oAEoffjPWhXlsFg/edit?usp=sharing',
      price: 129,
      prize: '10K',
      color: '#FFC900',
      color2: '#FFDC5A',
      content:
        'You will have to give a live solo open-mic performance of your rant. It could be a monologue, an interview, a prank or anything else that can captivate the interest of the public.'
    },
    {
      id: 8,
      img: process.env.REACT_APP_AWS_S3_URI + '/outreach.svg',
      genre: 'outreach',
      type: 'Contest',
      title: 'Ad-Mad',
      link: 'https://docs.google.com/document/d/13K_BvRrRAHGDk2SbgXOjM3YDaAlzNwnVP1VJW0SRpZY/edit',
      price: 129,
      prize: '9K',
      color: '#FFC900',
      color2: '#FFDC5A',
      content:
        'The participants need to make an advertisement on the provided, within 36 hrs. The themes for the same would be released at the start of the event and participants need to submit their entries in due time.'
    }
  ],
  cineData: [
    {
      id: 9,
      img: process.env.REACT_APP_AWS_S3_URI + '/cine.svg',
      genre: 'cine',
      type: 'Contest',
      title: 'Thats how B-Roll',
      link: 'https://1drv.ms/w/s!AieflRg28nxYgydLqafGrtwhUywk?e=DMhy7j',
      price: 129,
      prize: '10K',
      color: '#14F0B9',
      color2: '#62FFD8',
      content:
        'For this event, however, you’ve got to aim those lenses inwards and tell an interesting story about yourself; hence the theme - “I, Me and My Things – A Story”. Weave a tale involving your personal effects and belongings and make everyone and their friends turn their heads.'
    },
    {
      id: 10,
      img: process.env.REACT_APP_AWS_S3_URI + '/cine.svg',
      genre: 'cine',
      type: 'Contest',
      title: 'Frame By Frame',
      link: 'https://docs.google.com/document/d/1zN4n8oHEixgfW8yYV472Y7gsipoN4V-SzqHcsuNiumk/edit?usp=sharing',
      price: 129,
      prize: '15K',
      color: '#14F0B9',
      color2: '#62FFD8',
      content:
        'Frame by Frame is an Open-theme Online Stop motion making event, and stop-motion entries are to be submitted in due time. The participants need to create a stop-motion movie using only inanimate objects. '
    },
    {
      id: 11,
      img: process.env.REACT_APP_AWS_S3_URI + '/cine.svg',
      genre: 'cine',
      type: 'Contest',
      title: 'Director’s Cut',
      link: 'https://docs.google.com/document/d/1xhgdOSMRK4rGPc4-tMtt5q3nrQAWwRYWE5RAt5b1nRU/edit?usp=sharing',
      price: 129,
      prize: '8K',
      color: '#14F0B9',
      color2: '#62FFD8',
      content:
        'Participants need to make a short film within 50 hours based on the theme provided to them in the campus at the start of the event.'
    },
    {
      id: 12,
      img: process.env.REACT_APP_AWS_S3_URI + '/cine.svg',
      genre: 'cine',
      type: 'Contest',
      title: 'Trim it up',
      link: 'https://docs.google.com/document/d/11s6Lq2zMBV09CH9md7L_ANTv8npZnM5GF3gwWcLhJxU/edit',
      price: 129,
      prize: '8K',
      color: '#14F0B9',
      color2: '#62FFD8',
      content:
        'Participants will be given different genres ,from which they will choose to make a video based on the clips given to them .The time duration of the video can be from 30-60 seconds.'
    }
  ],
  designData: [
    {
      id: 13,
      img: process.env.REACT_APP_AWS_S3_URI + '/cine.svg',
      genre: 'design',
      type: 'Contest',
      title: 'Design The Tunes',
      link: 'https://drive.google.com/file/d/1-VApwFFzYsxfs5Kc8vGfzK5YowaJ7DYP/view?usp=sharing',
      price: 129,
      prize: '10K',
      color: '#685EDA',
      color2: '#9990FF',
      content:
        'It’s an Online design challenge to design the cover page of a song or an album.You can also use the elements of the songs or album for the cover.'
    },
    {
      id: 14,
      img: process.env.REACT_APP_AWS_S3_URI + '/cine.svg',
      genre: 'design',
      type: 'Contest',
      title: 'Design-a-thon',
      link: 'https://drive.google.com/file/d/1ULnLIRNCJzkgYD57vRQM73EEs_vcY3Ls/view?usp=sharinghttps://docs.google.com/document/d/1yUcO3FqBB-imYYFEegLGVHt06iduS8zwnrKhuDNX1b8/edit?usp=sharing',
      price: 129,
      prize: '8K',
      color: '#685EDA',
      color2: '#9990FF',
      content:
        "The strength of a company's brands determines its long-term viability and market domination. Branding is important since it informs customers and clients of what to expect from your organization in addition to being what makes a lasting impression on consumers. It is a technique for differentiating yourself from the competition and emphasizing what it is that you have to offer that makes you the superior choice. What could happen if a corporation known for one product introduces a different one? Can they survive in a world where nothing but change exists? This is a rebranding challenge, you'll have to rebrand an intriguing company using a different product line than the one it now uses. It will be a 24-hour offline event. It will be a Team event with 1-4 people in each team."
    },
    {
      id: 15,
      img: process.env.REACT_APP_AWS_S3_URI + '/cine.svg',
      genre: 'design',
      type: 'Contest',
      title: 'FrameX',
      link: 'https://docs.google.com/document/d/1SiMd1_DVWT6_i0oD3kntLXQQpjXpHquoL6X5A4zaOSA/edit?usp=drivesdk',
      price: 129,
      prize: '12K',
      color: '#685EDA',
      color2: '#9990FF',
      content:
        'It is a 10-day-long Online UI/UX design challenge. The challenge is to redesign the UI and UX of an app which will be revealed when the event starts. This competition is divided into two phases: Phase 1 focuses on User Experience. (5 days) and Phase 2 focuses on User Interface design(5 days). Expected deliverables in this challenge will be logos, wireframes, mockups, or interactive prototypes. Purpose of the software shall be the same as the original; all the other things can be changed.'
    }
  ],
  mediaData: [
    {
      id: 16,
      img: process.env.REACT_APP_AWS_S3_URI + '/media.svg',
      genre: 'media',
      type: 'Contest',
      title: 'Straight from Site',
      link: 'https://docs.google.com/document/d/1uoFKCqAf9mtdaotzTcb59WmR44Qv7e7OAYJpwfbkDaM/edit?usp=drivesdk',
      price: 129,
      prize: '8K',
      color: '#FF90E8',
      color2: '#FFC8F4',
      content:
        'Whatever the news may be, wherever it may be, regardless of how harsh the circumstances might be, you can always count on a reporter to deliver the news to you in the comfort of your home. In this event, you will put yourself in the shoes of such on-site reporters. Analyse the scene, collect your thoughts and speak!'
    },
    {
      id: 17,
      img: process.env.REACT_APP_AWS_S3_URI + '/media.svg',
      genre: 'media',
      type: 'Contest',
      title: "Editor's House",
      link: 'https://docs.google.com/document/d/1TJe8P8cJy7rOfmiszenCmY5IAh0xrOBnHHHUX9vsZ30/edit?usp=drivesdk',
      price: 129,
      prize: '8K',
      color: '#FF90E8',
      color2: '#FFC8F4',
      content:
        'Prompts will be given to the participants. They have to write their opinion upon a particular prompt. it will be in an editorial form. You shall be provided with a problem statement, presenting an opinion on a relevant topic. For example : if the problem statement is as follows With serious issues plaguing the world, like pandemic control, terrorism and global hunger, spending billions of dollars in space exploration does not seem worth it. Your task is to provide a brief assessment of the space exploration industry, the  problems discussed above, and the correctness of the argument presented ( that space exploration might not be worth it). Additionally you have to analyze the situation from different viewpoints ( for example, from that of a public health worker who might agree with the claim made in the Problem statement, and a proponent of space exploration, like Elon Musk ;) Finally you have to present your own opinions. They do not have to be clear-cut agreement / disagreement to the claim made in the problem statement. You can also find a middle ground or agree with the claim with reservations.'
    },
    {
      id: 18,
      img: process.env.REACT_APP_AWS_S3_URI + '/media.svg',
      genre: 'media',
      type: 'Contest',
      title: 'Infinite Tales',
      link: 'https://docs.google.com/document/d/18GCWEEJE2fHWpozcodEo791zxT1cRtB_PzATKhTjBoA/edit?usp=sharing',
      price: 129,
      prize: '8K',
      color: '#FF90E8',
      color2: '#FFC8F4',
      content:
        '“Great stories happen to them who can tell them”Best stories are those with incredible twists and turns. From the death of the protagonist to hilarious puns and enigmatic mysteries every element plays a part in making that story great. Interestingly, our lives too are quite similar to them where nobody actually knows what’s gonna happen next. So embracing this uncertainty, the FMC Weekend presents to you INFINITE TALES,an event where you can present your story with a partner of not yours but fortune’s choice and blow minds.'
    },
    {
      id: 19,
      img: process.env.REACT_APP_AWS_S3_URI + '/media.svg',
      genre: 'media',
      type: 'Contest',
      title: 'RJ hunt',
      link: 'https://docs.google.com/document/d/1Z9fW4LqzpUvOg2oNqwqkPZ_eYl8jhGOij02nMpnS2AE/edit?usp=sharing',
      price: 129,
      prize: '8K',
      color: '#FF90E8',
      color2: '#FFC8F4',
      content:
        'The Powerful yet energetic voices of  Radio Jockeys keep you hooked to the show just by their voices. They can make swirl a whole round of emotions around you. If you hold the power to hold the interests of a large audience just by your voice and entertain them throughout, Then FMC Weekend’s RJ hunt is definitely your thing; fasten your seat belt and be ready to get your ability tested by a Professional RJ Himself.'
    },
    {
      id: 20,
      img: process.env.REACT_APP_AWS_S3_URI + '/media.svg',
      genre: 'media',
      type: 'Contest',
      title: 'Screenplay',
      link: 'https://docs.google.com/document/d/112ZyMtoYplavhAwdVlVpykN5TiMX9Y9DcAA4a2KKcqw/edit?usp=drivesdk',
      price: 129,
      prize: '8K',
      color: '#FF90E8',
      color2: '#FFC8F4',
      content:
        '"To make a great film you need three things - the script, the script and the script."  - Alfred Hitchcock "'
    }
  ],
  animationData: [
    {
      id: 21,
      img: process.env.REACT_APP_AWS_S3_URI + '/anim.svg',
      genre: 'animation',
      type: 'Contest',
      title: 'Realm Of Wonders',
      link: 'https://docs.google.com/document/d/1arU2WyTGO1LT1SZVoD9BCLVeTmdM5PPkrvxcIPTqSVg/edit?usp=sharing',
      price: 129,
      prize: '10K',
      color: '#FE6263',
      color2: '#FD8A8B',
      content:
        'Every great animation began with just an idea. What if we gave you the idea of where to start and you show us the best result you can come up with?'
    },
    {
      id: 22,
      img: process.env.REACT_APP_AWS_S3_URI + '/anim.svg',
      genre: 'animation',
      type: 'Contest',
      title: 'Artscape',
      link: 'https://docs.google.com/document/d/1sRZnNcLPIriGLbQZyMndMilqP47oOSkn7E8e0nVTKMM/edit?usp=sharing',
      price: 129,
      prize: '9K',
      color: '#FE6263',
      color2: '#FD8A8B',
      content:
        'Take reference of some place in Varanasi or campus and create it. (or some scene which represents the essence of Varanasi)'
    },
    {
      id: 23,
      img: process.env.REACT_APP_AWS_S3_URI + '/anim.svg',
      genre: 'animation',
      type: 'Contest',
      title: 'VFXorama',
      link: 'https://docs.google.com/document/d/1wD3INF7sSEfODUXvCLn-A3RkhC_GicMMQxFQ_ANCtkE/edit?usp=sharing',
      price: 129,
      prize: '6K',
      color: '#FE6263',
      color2: '#FD8A8B',
      content:
        'Participants have to create a VFX based video. The scene must be placed in Varanasi.'
    },
    {
      id: 24,
      img: process.env.REACT_APP_AWS_S3_URI + '/anim.svg',
      genre: 'animation',
      type: 'Contest',
      title: 'Capture the Imagination',
      link: 'https://docs.google.com/document/d/19CvHkSsEhQqBdU49dtRzucydoI3ICqccNMuPZkzqKcM/edit?usp=sharing',
      price: 129,
      prize: '6K',
      color: '#FE6263',
      color2: '#FD8A8B',
      content:
        'You need to create a 3D scene. There is no theme. You can use any software to make your scene. Premade 3D models from the internet can be used. A single image will be sent to the judges. Ratings will be done based on the judgment criteria below.'
    }
  ],
  photographyWorkshopData: [
    {
      id: 1,
      img: process.env.REACT_APP_AWS_S3_URI + '/rathika.jpeg',
      color: '#00CCF5',
      color2: '#2ED9FC',
      genre: 'photography',
      type: 'Workshop',
      title: 'Photography Workshop',
      link: 'https://drive.google.com/file/d/1ypZkoyI1x3Es-zCTiT0jytmZTazSXmNp/view?usp=sharing',
      price: 149,
      name: 'Rathika Ramasamy',
      date: '30th January',
      time: '5:00 p.m. - 6:00 p.m.',
      desc: 'Rathika Ramasay captures the beauty in nature in unbeleivbaly beautiful shots! Unparallelled experience behind the lense and unrivalled skills in the field proudly adorn her.'
    },
    {
      id: 2,
      img: process.env.REACT_APP_AWS_S3_URI + '/navin.jpeg',
      color: '#00CCF5',
      color2: '#2ED9FC',
      genre: 'photography',
      type: 'Workshop',
      title: 'Photography Workshop',
      link: 'https://drive.google.com/file/d/1YyKAYn-PBXPoKSB1Z1iU6fa6wjaVGULL/view?usp=sharing',
      price: 199,
      name: 'Navin Vatsa',
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
      color: '#FFC900',
      color2: '#FFDC5A',
      genre: 'outreach',
      type: 'Workshop',
      title: 'Travel Vlogging',
      link: 'https://drive.google.com/file/d/1qTdAlnarcZ47eOS-R7O_ImNfsZPnvnBZ/view?usp=sharing',
      price: 149,
      name: 'Priyanka Chandola',
      date: '11th February',
      time: '4:00 p.m. - 5:00 p.m.',
      desc: 'From a software engineer to a YouTuber, Priyanka Chandola is going places with her ‘Desi Girl Traveller’ channel on social media platforms. She creates prize on travel in the digital space with the aim to break societal norms. Here’s a look at her journey.'
    },
    {
      id: 5,
      img: process.env.REACT_APP_AWS_S3_URI + '/csvenketaram.jpeg',
      color: '#FFC900',
      color2: '#FFDC5A',
      genre: 'outreach',
      type: 'Workshop',
      title: 'Documentary Filmmaking workshop',
      link: 'https://drive.google.com/file/d/1-j7QXOXQpBTioe3S7jrTeydKBLGPkcZe/view?usp=sharing',
      price: 149,
      name: 'C.S. Venkateswaran',
      date: '11th February',
      time: '2:00 p.m. - 3:00 p.m.',
      desc: 'He is a National-award winning film critic, professor, documentary filmmaker and writer.'
    }
  ],
  cineWorkshopData: [
    {
      id: 7,
      img: process.env.REACT_APP_AWS_S3_URI + '/sanjayf.png',
      color: '#14F0B9',
      color2: '#62FFD8',
      genre: 'cine',
      type: 'Workshop',
      title: 'Filmmaking workshop ',
      link: 'https://drive.google.com/file/d/1pQMLQD-NpXDh26tlTystzPNsU9Mcxzge/view?usp=sharing',
      price: 149,
      name: 'Sanjay F. Gupta',
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
      color: '#685EDA',
      color2: '#9990FF',
      genre: 'design',
      type: 'Workshop',
      title: 'Design Workshop',
      link: 'https://drive.google.com/file/d/1-VApwFFzYsxfs5Kc8vGfzK5YowaJ7DYP/view?usp=sharing',
      price: 149,
      name: 'Annada Menon',
      date: '4th February',
      time: '11:00a.m. - 12:00 p.m.',
      desc: 'Creating illustrations with the silver lining of nostalgia is an astounding skill and Annada Menon has it all! Having illustration featured in the cosmopolitan Annada is a going places!'
    },
    {
      id: 12,
      img: process.env.REACT_APP_AWS_S3_URI + '/rishabh.jpeg',
      color: '#685EDA',
      color2: '#9990FF',
      genre: 'design',
      type: 'Workshop',
      title: 'Product design',
      link: 'https://drive.google.com/file/d/1miS5p8eaeN-ZaLiip4ApnatmpnoVVMqj/view?usp=sharing',
      price: 149,
      name: 'Rishabh Jain',
      date: '11th February',
      time: '6:00 p.m. - 7:00 p.m.',
      desc: "Rishabh Jain's Journey as a product designer and as the founder of confetti studios, is admirable and one known to encompass learnings from multiple UI/UX projects impacting millions of users!"
    }
  ],
  mediaWorkshopData: [
    {
      id: 14,
      img: process.env.REACT_APP_AWS_S3_URI + '/nikita.jpeg',
      color: '#FF90E8',
      color2: '#FFC8F4',
      genre: 'media',
      type: 'Workshop',
      title: 'Creative Writing workshop',
      link: 'https://drive.google.com/file/d/1L4xS562Rld4_j7Lr1xv7iU0L4cu7gHPW/view?usp=sharing',
      price: 199,
      name: 'Nikita Singh',
      date: '13th February',
      time: '10:00 a.m. - 11:00 a.m.',
      desc: 'Having written a number of best selling novels, Nikita Singh is impacting and influencing numersous minds and lives. Having spoken on the Tedx platform on multiple occasions, this indian author is winning hearts!'
    },
    {
      id: 15,
      img: process.env.REACT_APP_AWS_S3_URI + '/ankitmedia.png',
      color: '#FF90E8',
      color2: '#FFC8F4',
      genre: 'media',
      type: 'Workshop',
      title: 'Tech Journalism Workshop',
      link: 'https://drive.google.com/file/d/1w-fj86xTKa9X0jQjhH4UFLNu5HRpRvdO/view?usp=sharing',
      price: 149,
      date: '',
      time: '',
      desc: 'He has worked with renowned news channels and has received numerous awards for his outstanding works including “India’s Best Gadget Show” by ENBA India for his show- Tech it out.',
      namee: 'Ankit Tuteja'
    }
  ],
  animationWorkshopData: [
    {
      id: 17,
      img: process.env.REACT_APP_AWS_S3_URI + '/sandeepvfx.png',
      color: '#FE6263',
      color2: '#FD8A8B',
      genre: 'animation',
      type: 'Workshop',
      title: 'VFX Workshop',
      link: 'https://drive.google.com/file/d/1jRpV-ZjKNNTm8RFOGktaaZfCz73uQfAx/view?usp=sharing',
      price: 199,
      name: 'Sandeep Kamal',
      date: '12th February',
      time: '11:00 a.m.- 12:00 p.m.',
      desc: "Having contributed to critically acclaimed films such as Jal, Panipat, Badla, and Barfi, VFX designer and digitla nomad, Sandeep kamal's career is admired greatly"
    }
  ]
};

export default data;
