export const projects = [
  {
    id: "winc",
    title: "Women in Computing Website",
    tech: "React.js, Next.js, Tailwind CSS, GitHub",
    date: "October 2023 – December 2023",
    image: "misc/cutie-preview.png",
    screen2: [
      "Developed a responsive website for Women in Computing at UCR to showcase club events, leadership, and opportunities.",
      "Coordinated with 9 developers in weekly Agile scrums to prioritize features and enhance mobile responsiveness.",
    ],
    screen3: {
      points: [
        "Identified recurring production inconsistencies from hardcoded event data; developed reusable components to automate rendering, removed 250+ lines of redundant code, and initiated a broader cleanup across the codebase.",
      ],
      links: [
        { href: "https://winc.cs.ucr.edu/", img: "misc/www.png" },
        {
          href: "https://github.com/acm-ucr/winc-website",
          img: "misc/gitcat.png",
        },
      ],
    },
  },
  {
    id: "hsp",
    title: "Highlander Space Program Website",
    tech: "React.js, Next.js, Tailwind CSS, GitHub",
    date: "January 2024 – March 2024",
    image: "misc/cutie-preview.png",
    screen2: [
      "Developed a responsive website for Highlander Space Program at UCR to showcase club events, leadership, and opportunities.",
    ],
    screen3: {
      points: [
        "Coordinated with 9 developers in weekly Agile scrums to prioritize features and enhance mobile responsiveness.",
        "Built a reusable Footer component with club logo, contact text, and social icons using a responsive grid layout.",
      ],
      links: [
        { href: "https://hsp.ucrhighlanders.org/", img: "misc/www.png" },
        {
          href: "https://github.com/acm-ucr/hsp-website",
          img: "misc/gitcat.png",
        },
      ],
    },
  },
    {
    id: "cave",
    title: "Cave Adventure - Terminal-Based C++ Game",
    tech: "C++, GitHub, GitHub Actions, GoogleTest",
    date: "October 2024 – December 2024",
    image: "misc/cutie-preview.png",
    screen2: [
      "Engineered abstract Item classes and a vector-based inventory with polymorphism and dynamic memory.",
    ],
    screen3: {
      points: [
        "Ensured code quality via 20+ unit tests with GoogleTest, CI using GitHub Actions, and debugging/profiling tools.",
      ],
      links: [
        {
          href: "https://github.com/kellyma626/rpg-cave-game",
          img: "misc/gitcat.png",
        },
      ],
    },
  },
  {
    id: "cutie",
    title: "Cutie Mood - Mobile Mental Health App",
    tech: "React Native, Expo, TypeScript, NativeWind, Supabase, GitHub, Figma",
    date: "July 2025 – August 2025",
    image: "misc/cutie-preview.png",
    screen2: [
      "Led project vision and technical execution, architecting features including mood tracking, journaling, and chatbot.",
    ],
    screen3: {
      points: [
        "Implemented Supabase flows for async mood entry creation and retrieval, managing 120+ entries seamlessly.",
        "Designed all 5 screens, creating a cohesive, playful mobile UI with custom mood-to-image/color mappings."
      ],
      links: [
        {
          href: "https://github.com/kellyma626/cutieMood",
          img: "misc/gitcat.png",
        },
      ],
    },
  },

];
