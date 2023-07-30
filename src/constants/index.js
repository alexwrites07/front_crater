import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
   
  linkedin,
  whatsapp,
  youtube,
  instagram,
    git,
    figma,
    docker,
    meta,
    lm,
    starbucks,
    tesla,
    shopify,
    mm,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    // {
    //   name: "JavaScript",
    //   icon: javascript,
    // },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    // {
    //   name: "React JS",
    //   icon: whatsapp,
    // },
    // {
    //   name: "Redux Toolkit",
    //   icon: whatsapp,
    // },
    {
      name: "Tailwind CSS",
      icon: whatsapp,
    },
    {
      name: "Node JS",
      icon: linkedin,
    },
    {
      name: "MongoDB",
      icon: youtube,
    },
    {
      name: "Three JS",
      icon: instagram,
    },
    // {
    //   name: "git",
    //   icon: git,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      
        title: "Without Crater",
        // company_name: "Tesla",
        icon: mm,
        // iconBg: "#E6DEDD",
        // date: "Jan 2021 - Feb 2022",
        points: [
          "Manual Business Management",
          "Spend hours, Limited focus on Creativity and struggle to optimize margins",
          
          "Manual Social Media Management",
          "Manage multiple accounts manually, limited engagement with your followers and lot of guess work in selecting captions and thumbnails.",
          
          "Manual Financial Management",
          "Increase in Financial risk via manual methods and missed revenue opportunities",
          
          "Costly Solutions",
          "Expensive management options and High expenditure on hiring managers or outsourcing",
          
          "Vulnerability to Cyber Threats",
          "Increased risk of cyber attacks and Lack of dedicated security features",
        ],
      },
      {
        title: "With Crater",
        // company_name: "Tesla",
        icon: mm,
        // iconBg: "#E6DEDD",
        // date: "Jan 2021 - Feb 2022",
        points: [
          "Automated Business Management",
          "Save time, Focus on creativity and increse margins by more than 30%",
          
          "AI-powered Social Media Management",
          "Manage multiple Social Media accounts, AI-powered replies and ML-powered views and revenue predictor",
          
          "AI-powered Financial Management",
          "Monitor and control finances and let AI file taxes in less than 10 minutes",
          
          "Affordability",
          "Cost-effective subscription plans and Value for money",
          
          "Cyber Threat Mitigation",
          "Protect against cyber threats and Enhanced security measures",
        ],
      },
      {
      title: "What is Crater?",
      // company_name: "Starbucks",
       icon: mm,
      // iconBg: "#383E56",
      // date: "March 2020 - April 2021",
      points: [
        "Crater is an AI-powered Business Manager for Creators, Freelancers and Solo entrepreneurs. We help users automate Social Media, Finances and Cyber security, all in one place.",
      ],
    },
    {
      title: "What are the features?",
      // company_name: "Tesla",
      icon: mm,
      // iconBg: "#E6DEDD",
      // date: "Jan 2021 - Feb 2022",
      points: [
        "Crater provides a wide range of useful features including sentiment analysis, audience engagement tools, social media management, insurance coverage for digital accounts, and automated tax management. Additionally, it offers tools to help maximize your YouTube views.",
      ],
    },
    {
      title: "Is Crater only for Creators?",
      
      icon: mm,
      
      points: [
        "Crater can also be used by startups, agencies, talent managers to manage their social media.",
        ,
      ],
    },
    {
      title: "Is my data safe?",

       icon: mm,
      
      points: [
        "Crater uses official Instagram/ Facebook/ TikTok/ Linkedin APIs to access data. We are regulated by the API guidelines of Instagram/ Facebook/ Youtube/ Linkedin and don't indulge in unauthorized activities on your Social Media Accounts. Also, We don't store any unnecessary data about your profile at our end.",
       
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I have been able to increase my Youtube views by more than 30% by using their Views Predictor",
      name: "Mitansh",
      designation: "Content Creator",
      company: "Youtube",
     
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
      "Crater is the ultimate all-in-one solution. I can't imagine going back to managing everything manually.",
      name: "Chintan",
      designation: "Solo Entrapreneure",
      company: "ABC.pvt.ltd",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
      "I was skeptical at first, but after using Crater for just a few weeks, I'm completely sold. The AI-powered features are incredibly accurate and make my life so much easier.",
      name: "Manisha",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Sentimental Analysis",
      description:
        "Automatically hides damaging, hateful, racist comments and spam from your Social Media posts.",
      tags: [
        {
          name: "youtube",
          color: "blue-text-gradient",
        },
        {
          name: "analytics",
          color: "green-text-gradient",
        },
        {
          name: "business",
          color: "pink-text-gradient",
        },
      ],
      image: lm,
      source_code_link: "https://github.com/",
    },
    {
      name: "Maximize Your YouTube Views",
      description:
        "Compare thumbnails and titles and see which will get more Views on YouTube. Predict YouTube Views before you upload.",
        tags: [
          {
            name: "youtube",
            color: "blue-text-gradient",
          },
          {
            name: "analytics",
            color: "green-text-gradient",
          },
          {
            name: "business",
            color: "pink-text-gradient",
          },
        ],
      image: lm,
      source_code_link: "https://github.com/",
    },
    {
      name: "Engage with Your Audience",
      description:
        "Al will Reply to 1000s of comments/messages just like how the Creator would in less than a second",
        tags: [
          {
            name: "youtube",
            color: "blue-text-gradient",
          },
          {
            name: "analytics",
            color: "green-text-gradient",
          },
          {
            name: "business",
            color: "pink-text-gradient",
          },
        ],
      image: lm,
      source_code_link: "https://github.com/",
    },
    {
      name: "Social Media Manager",
      description:
        "Manage all your Social Media accounts from a single Dashboard",
        tags: [
          {
            name: "youtube",
            color: "blue-text-gradient",
          },
          {
            name: "analytics",
            color: "green-text-gradient",
          },
          {
            name: "business",
            color: "pink-text-gradient",
          },
        ],
      image: lm,
      source_code_link: "https://github.com/",
    },
    {
      name: "Digital Account Recovery",
      description:
        "Don't lose your entire digital business to a hack, protect it with Crater.",
        tags: [
          {
            name: "youtube",
            color: "blue-text-gradient",
          },
          {
            name: "analytics",
            color: "green-text-gradient",
          },
          {
            name: "business",
            color: "pink-text-gradient",
          },
        ],
      image: lm,
      source_code_link: "https://github.com/",
    },
    {
      name: "Automation of taxes",
      description:
        "Once you sync your accounts, our AI will handle the rest. It will help you file taxes in less than 20 minutes.",
        tags: [
          {
            name: "youtube",
            color: "blue-text-gradient",
          },
          {
            name: "analytics",
            color: "green-text-gradient",
          },
          {
            name: "business",
            color: "pink-text-gradient",
          },
        ],
      image: lm,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };