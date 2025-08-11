import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  mongodb,
  cts,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Technical Marketer",
    icon: web,
  },
  {
    title: "Product Manager",
    icon: mobile,
  },
  {
    title: "Web developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [

  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
 
  
 
];

const experiences = [
  {
    title: "Subject Matter Expert",
    company_name: "Cognizant Technology Solutions",
    icon: cts, 
    iconBg: "#383E56",
    date: "July 2025 - Present",
    points: [
      "Work with LCS tier Google Advertisers to resolve technical issues and provide solutions.",
      "Write and maintain technical documentation for internal use.",
      "Work with management to identify and implement process improvements.",
      "Work with Stakeholders from Google to validate and implement new processes and tools.",
    ],
  },
  {
    title: "Senior Process Executive",
    company_name: "Cognizant Technology Solutions",
    icon: cts,
    iconBg: "#383E56",
    date: "May 2023- July 2025",
    points: [
      "Work with Medium speed Google Advertisers to resolve technical issues and provide solutions.",
      "Handled escalations to ensure any errors were corrected and imact was minimised.",
      "Set up and maintained internal tools to improve team efficiency.",
      "led aactivities initiatives to improve morale and team bonding.",
    ],
  },
  {
    title: "Associate consultant",
    company_name: "Regalix India Pvt Ltd",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - May 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  /*
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  */
];

const testimonials = [
  {
    testimonial:
      "Very efficient. Always inquisitive to learn something new.\
       A team player. Wants to be ahead of the curve always.\
       A bankable and valuable employee at any organisation.\
       Kudos to you. Glad to have you in my team :)",
    name: "Tarun Jain",
    designation: "Team Lead",
    company: "Cognizant Technology Solutions",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFox9ZaQtugFg/profile-displayphoto-shrink_800_800/B56ZQsTSIeGsAc-/0/1735910042579?e=1757548800&v=beta&t=IyrAnpkwBJcZrJac19bONTW9F0S-VUA1oHlaimkc2ss",
  },
  {
    testimonial:
      "Working with Varun was a privilege. He's a remarkable team member who tackles complex problems with calm precision and always seeks to improve processes for everyone. His curiosity and work ethic make him a truly valuable professional.",
    name: "Vishal Tiwari",
    designation: "Team Lead",
    company: "Cognizant Technology Solutions",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGiuJh6ElE6tg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714228113856?e=1757548800&v=beta&t=c5O7Yy6GenSGBi5KKxA7vfsLbxtyRFuRCwKYlrQXlx0",
  },
  {
    testimonial:
      "Varun is a cornerstone of the team, valued for his unwavering reliability and initiative. He is the go-to expert for complex implementations, new procedures, and urgent requests, making him an indispensable source of solutions and information. His proactive approach and technical skill make him a tremendous asset.",
    name: "Prateek Kashyap",
    designation: "Deputy General Manager",
    company: "Cognizant Technology Solutions",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFZZ5DPv2NGYA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1685011479382?e=1757548800&v=beta&t=4sOEaDmd0gUEZFCAGHKM0dNIhNrldcVBOpmcLCKQ_gU",
  },
];

const projects = [
  {
    name: "SheetFlow",
    description:
      "An automated data synchronization tool that automates the daily distribution of data across multiple teams, providing a scalable and efficient solution for internal data management.",
    tags: [
      {
        name: "Google Sheets",
        color: "blue-text-gradient",
      },
      {
        name: "Appscript",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Advertiser Self-Help",
    description:
      "An initiative that helped advertisers install conversion tracking by testing and documenting Google's self-help tools, providing an efficient path to user independence.",
    tags: [
      {
        name: "Bug Reporting & Issue Tracking",
        color: "blue-text-gradient",
      },
      {
        name: "Ad & Martech",
        color: "green-text-gradient",
      },
      {
        name: "Software Testing",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "3D Stunt Driver",
    description:
      "A 3D car stunt playground currently under development, where users can drive vehicles and perform thrilling stunts in an immersive three-dimensional environment.",
    tags: [
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "HTML, CSS, & JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "PROJECTCHRONO",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
