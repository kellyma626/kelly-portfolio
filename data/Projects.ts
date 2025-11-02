export const projects = [
  {
    id: "winc",
    title: "Women in Computing Website",
    tech: "React.js, Next.js, Tailwind CSS, GitHub",
    date: "October 2023 - December 2023",
    screen2: [
      "Developed a responsive website for Women in Computing at UCR to showcase club info",
      "Used GitHub Issues to organize work and collaborated through weekly Agile scrum meetings",
    ],
    screen3: {
      points: [
        "Identified recurring production inconsistencies caused by hardcoded event data; implemented dynamic component generation, removed 250+ lines of redundant code, and initiated a broader cleanup across the codebase",
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
    date: "January 2024 - March 2024",
    screen2: [
      "Helped develop a static site for the Highlander Space Program to share projects, events, and contact info",
    ],
    screen3: {
      points: [
        "Built a reusable Footer component with club logo, contact text, and social icons using a 2-column + 3-column grid layout in Tailwind",
        "Prioritized consistent design and reusability—this footer was used across all pages of the site",
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
    title: "Cave Adventure RPG",
    tech: "C++, GoogleTest, GitHub, Valgrind, GDB, Gcov, Lcov",
    date: "October 2024 - December 2024",
    screen2: [
      "Collaborated with a team of 5 to build a turn-based RPG game in C++ using Agile workflows and weekly scrums",
      "Designed an abstract Item class and implemented Potion and Weapon subclasses to support flexible in-game item behavior via polymorphism",
    ],
    screen3: {
      points: [
        "Developed a vector-based inventory system with dynamic memory handling and custom destructors",
        "Wrote 20+ unit tests with GoogleTest and integrated continuous testing using GitHub Actions and CMake",
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
    title: "cutieMood",
    tech: "React Native, Expo, TypeScript, NativeWind, Supabase, Gemini API, Figma",
    date: "July 2025 - August 2025",
    screen2: [
      "Spearheaded project vision and technical execution, architecting mood tracking, journaling, and AI chatbot integration.",
    ],
    screen3: {
      points: [
        "Designed all 5 screens, creating a cohesive, playful mobile UI with mood-based color mappings.",
        "Implemented Supabase flows for async mood entry creation and retrieval, managing 120+ entries seamlessly.",
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
