import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  docker,
  shirtai,
  openai,
  flexibble,
  chatgpt,
  nft_cardgame,
  dashboard,
  gym,
  dicegame,
  wordle,
  twodportfolio,
  threejs,
  vuejs,
  bootstrap,
  antd,
  iu,
  nbk,
  cyber,
  chawarong,
  patrick,
  citynow,
  facilitybot,
  okkami,
  homeland
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'JavaScript TypeScript',
    icon: web,
  },
  {
    title: 'React Native',
    icon: mobile,
  },
  {
    title: 'ReactJS NextJS ',
    icon: backend,
  },
  {
    title: 'VueJS NuxtJS',
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: 'HTML 5',
  //   icon: html,
  // },
  // {
  //   name: 'CSS 3',
  //   icon: css,
  // },
  // {
  //   name: 'JavaScript',
  //   icon: javascript,
  // },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Vue JS',
    icon: vuejs,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'Bootstrap',
    icon: bootstrap,
  },
  // {
  //   name: 'git',
  //   icon: git,
  // },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Front-end Web Developer',
    company_name: 'Facilitybot (Product of Robust Tech House)',
    icon: facilitybot,
    iconBg: '#383E56',
    date: 'Jan 2022 - Aug 2022',
    points: [
      'Implement the search function by drawing an area on the map',
      'Create CRUD pages with table that con sort, filter. Also forms and handle validation',
      'Implement drag and drop feature that can nest infinite levels, sort, filter, search for each row and have CRUD features',
      'Handle responsive column',
      'Use ChartJS to make a graph that show the statistics',
      'Create custom dashboard that help users can pin, arrange tables and statistical graphs',
    ],
  },
  {
    title: 'Front-end Web Developer',
    company_name: 'Okkami (Outsourcing project of Robust Tech House)',
    icon: okkami,
    iconBg: '#383E56',
    date: 'Aug 2022 - Present',
    points: [
      'Build the code base',
      'Configure Linters in code base, CICD using Github Actions and Dockerfile for DockerHub',
      'Code the UI/UX following the mobile app',
      'Handle responsive',
      'Write unit test and integration test using Jest & React Testing Library',
      'Deploy to Vercel for QA/QC from Okkami to test',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I have had the pleasure of working with Tai Nguyen on multiple projects, and I can confidently say that they are an exceptional talent in their field. Hí ability to consistently combined with their remarkable speed, sets them apart from the rest. They possess a deep understanding of front-end technologies, enabling them to navigate complex coding challenges with ease.',
    name: 'Patrick Sim',
    designation: 'Founder',
    company: 'Robust Tech House',
    image: patrick,
  },
  {
    testimonial:
      'Tai is a phenomenal developer. He has an innate knack for understanding project requirements and translating them into visually stunning and highly functional websites. It is a pleasure to collaborate with Tai and I highly recommend him to anyone seeking a top-notch front-end web developer who consistently delivers exceptional results.',
    name: 'Chawarong Songserm',
    designation: 'QA/QC',
    company: 'Okkami',
    image: chawarong,
  },
];

const projects = [
  {
    name: 'Homeland',
    tech: 'ThreeJS',
    description:
    'Homeland is an innovative 3D web application designed to showcase my skills in 3D graphics and web development. Leveraging the power of ThreeJS and React Three Fiber, this project demonstrates my ability to create immersive and interactive experiences directly within a web browser.',
    tags: [
      {
        name: 'View Demo',
        color: 'blue-text-gradient',
      },
    ],
    image: homeland,
    source_code_link: 'https://github.dev/tainguyencoder/3d-trial',
    demo_link:
      'https://taikool.cloud/',
  },
  {
    name: 'Web 3 NFT Card Game',
    tech: 'ReactJS + Solidity',
    description:
      'The Online Multiplayer Web 3 NFT Card Game that allows users to create thier characters, create and join live battles, choose their battleground, and battle other players in real-time!\
        This application uses AvalancheJS for the transactions to the X-Chain, P-Chain, and C-Chain.',
    tags: [
      {
        name: 'View Demo',
        color: 'pink-text-gradient',
      },
    ],
    image: nft_cardgame,
    source_code_link: 'https://github.dev/tainguyencoder/nft_card_game',
    demo_link: 'https://taithanhnguyen-nft-cardgame.netlify.app/',
  },

  {
    name: 'OpenAI-Powered 3D',
    tech: 'ThreeJS + OpenAI',
    description:
      'Utilize brand-new 3D customizing tool to make your special and unique T-shirt. Imagination at full throttle and define your personal style.\
        The best thing of this app is that generating images by using DALL-E - AI system that can create realistic images and art from a description in natural language.',
    tags: [
      {
        name: 'View Demo',
        color: 'green-text-gradient',
      },
    ],
    image: shirtai,
    source_code_link: 'https://github.dev/tainguyencoder/openai-dalle-tshirt',
    demo_link: 'https://taithanhnguyen-openai-dalle.netlify.app/',
  },

  // {
  //   name: 'ChatGPT',
  //   tech: 'OpenAI',
  //   description:
  //     'With a sophisticated user interface that is similar to the ChatGPT, communication with the text-davinci-003,\
  //     and most significantly, the capability to ask the AI for assistance using any programming language and give it code that can be translated to another programming language.',
  //   tags: [
  //     {
  //       name: 'View Demo',
  //       color: 'green-text-gradient',
  //     },
  //   ],
  //   image: chatgpt,
  //   source_code_link: 'https://github.dev/tainguyencoder/openai-chat',
  //   demo_link: 'https://taithanhnguyen-chatgpt.netlify.app/',
  // },
  // {
  //   name: 'OpenAI Summarizer',
  //   tech: 'ReactJS',
  //   description:
  //     'Summarize your articles with OpenAI GPT-4 ? This app is Article Summarizer - an open-source article summarizer that transforms lengthy articles into succinct summaries.\
  //       Using Redux Toolkit to manage statement, local storage to save history, RapidAPI to get data and TailwindCSS for styling.',
  //   tags: [
  //     {
  //       name: 'View Demo',
  //       color: 'blue-text-gradient',
  //     },
  //   ],
  //   image: openai,
  //   source_code_link: 'https://github.dev/tainguyencoder/openai_summizer',
  //   demo_link: 'https://taithanhnguyen-articlesummarizer.netlify.app/',
  // },
  // {
  //   name: 'Admin Dashboard',
  //   tech: 'Syncfusion React',
  //   description:
  //     'Admin Dashboard includes one Dashboard, Three Pages, Four Apps, and Seven fully functional charts. Context API is used to manage statement. The most important in this app is React Syncfusion - World Best UI Component Suite for Building Powerful Web, Desktop, and Mobile Apps.',
  //   tags: [
  //     {
  //       name: 'View Demo',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: dashboard,
  //   source_code_link: 'https://github.dev/tainguyencoder/admin-dashboard',
  //   demo_link: 'https://taithanhnguyen-admin-dashboard.netlify.app/',
  // },
  // {
  //   name: '2D Portfolio',
  //   tech: 'React Bricks',
  //   description:
  //     'Besides this 3D portfolio was built with NextJS, I also built a modern 2D portfolio using React Bricks with visual editing for NextJS, also using Tailwind CSS for styling.\
  //     The goal of creating a 2D portfolio is to display my portfolio. Moreover, this project is teaching me more about content management systems.',
  //   tags: [
  //     {
  //       name: 'View Demo',
  //       color: 'green-text-gradient',
  //     },
  //   ],
  //   image: twodportfolio,
  //   source_code_link: 'https://github.dev/tainguyencoder/my-portfolio',
  //   demo_link: 'https://taithanhnguyen-2d-portfolio.netlify.app/',
  // },
  // {
  //   name: 'Mini Dice Game',
  //   tech: 'NextJS',
  //   description:
  //     'I build this mini game to consolidate knowledge using NextJS, Redux (Saga + Toolkit) to mange the statement, ESLint(airbnb) + Prettier + StyleLint + Lint-Staged + Husky for convention code, Bootstrap 5 + styled-component for styling, Next Cloudinary to optimize images.',
  //   tags: [
  //     {
  //       name: 'View Demo',
  //       color: 'blue-text-gradient',
  //     },
  //   ],
  //   image: dicegame,
  //   source_code_link: 'https://github.dev/tainguyencoder/gamexucxac',
  //   demo_link: 'https://taithanhnguyen-dicegame.netlify.app/',
  // },
  // {
  //   name: 'Wordle Game',
  //   tech: 'React Native',
  //   description:
  //   'A Wordle Clone Game built on React Native using JavaScript. In this app, I used AsyncStorage from Expo to manage the game state for different days and years.\
  //   In oder to play this demo, you need to download and install EXPO GO, then scan the QR code.',
  //   tags: [
  //     {
  //       name: 'View Demo',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: wordle,
  //   source_code_link: 'https://github.dev/tainguyencoder/wordle',
  //   demo_link:
  //   'https://expo.dev/@tainguyencoder/Wordle?release-channel=default',
  // },
  // {
  //   name: 'Gym Exercises',
  //   tech: 'ReactJS',
  //   description:
  //     'This fitness app offers a variety of options, including the ability to select particular muscle groups and exercise categories, browse over a thousand activities with detailed instructions, pagination, and associated YouTube videos, display similar workouts, and much more.',
  //   tags: [
  //     {
  //       name: 'View Demo',
  //       color: 'green-text-gradient',
  //     },
  //   ],
  //   image: gym,
  //   source_code_link: 'https://github.dev/tainguyencoder/gym-exercises',
  //   demo_link: 'https://taithanhnguyen-gym-exercises.netlify.app/',
  // },
];

const schools = [
  {
    name: 'Nguyen Binh Khiem High School for the gifted',
    major: '📚 Major: Mathematics 📐📏📈',
    time: '📅 Time: 2011 - 2014',
    image: nbk,
  },
  {
    name: 'International University - VNU',
    major: '📚 Major: Computer Science 🧑‍💻🧑‍💻🧑‍💻',
    time: '📅 Time: 2017 - 2021',
    image: iu,
  },
  {
    name: 'Front-end development in CyberSoft Academy',
    major: '📚 Major:  Front-end Development',
    time: '📅 Time: 2021 - 2021',
    image: cyber,
  },
];

export { services, technologies, experiences, testimonials, projects, schools };
