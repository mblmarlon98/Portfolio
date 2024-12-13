import { ProjectList } from "../types/Project";

export const gameProjects: ProjectList = {
    projectList: [
      {
        title: "Messi vs Ronaldo",
        type: "Pong Game",
        description: "A fast-paced Pong game with unique power-ups and dynamic gameplay.",
        folderName: "pong",
        img: { url: "https://via.placeholder.com/600x400", alt: "Pong Game" },
        year: "October 2024",
        roles: ["Tech", "Art"],
        progress: 100,
        screenshots: [
          { url: "https://via.placeholder.com/300x200", alt: "Gameplay Screenshot" },
          { url: "https://via.placeholder.com/300x100", alt: "Gameplay Screenshot" },
          { url: "https://via.placeholder.com/300x300", alt: "Gameplay Screenshot" },
          { url: "https://via.placeholder.com/300x400", alt: "Gameplay Screenshot" },
          { url: "https://via.placeholder.com/300x200", alt: "Gameplay Screenshot" },
          { url: "https://via.placeholder.com/300x200", alt: "Gameplay Screenshot" },
        ],
        features: [
          {
            name: "Power-ups",
            description: "Dynamic power-ups like Knuckleball, Powerball, and Wall.",
            screenshots: [
              { url: "https://via.placeholder.com/300x200", alt: "Knuckleball Screenshot" },
              { url: "https://via.placeholder.com/300x200", alt: "Powerball Screenshot" },
              { url: "https://via.placeholder.com/300x200", alt: "Wall Screenshot" },
            ],
            codeScreenshots: [
              { url: "https://via.placeholder.com/300x200", alt: "Knuckleball Code" },
              { url: "https://via.placeholder.com/300x200", alt: "Powerball Code" },
            ],
          },
          {
            name: "Crowd Balloons",
            description: "Interactive balloons affect gameplay dynamics by redirecting the ball.",
            screenshots: [
              { url: "https://via.placeholder.com/300x200", alt: "Balloon Gameplay" },
            ],
            codeScreenshots: [
              { url: "https://via.placeholder.com/300x200", alt: "Balloon Code" },
            ],
          },
        ],
        challenges: [
          {
            description: "Fixing collision issues where the ball would slow down or go out of bounds.",
            screenshots: [
              { url: "https://via.placeholder.com/300x200", alt: "Collision Issue Fixed" },
            ],
            codeScreenshots: [
              { url: "https://via.placeholder.com/300x200", alt: "Collision Fix Code" },
            ],
          },
        ],
        tools: ["Stencyl", "Photoshop"],
        rules: ["Two players required", "Two modes: Normal and Turbo"],
        resources: [
          { title: "Game Engine", interpret: "Stencyl", url: "" },
          { title: "Game Engine", interpret: "Stencyl", url: "" },
        ],
      },
      {
        title: "VietVaders",
        type: "Shoot em up",
        description: "A shoot-em-up game with procedurally generated waves and endless mode.",
        folderName: "vietVaders",
        img: { url: "https://via.placeholder.com/600x400", alt: "Shoot-em-up Game" },
        year: "2024",
        roles: ["Tech", "Art"],
        progress: 95,
        screenshots: [
          { url: "https://via.placeholder.com/300x200", alt: "Gameplay Screenshot" },
        ],
        features: [
          {
            name: "Wave Mode",
            description: "Challenging waves of enemies with increasing difficulty.",
            screenshots: [
              { url: "https://via.placeholder.com/300x200", alt: "Wave Mode Screenshot" },
            ],
            codeScreenshots: [
              { url: "https://via.placeholder.com/300x200", alt: "Wave Code" },
            ],
          },
        ],
        challenges: [
          {
            description: "Optimizing enemy spawns to handle procedural generation.",
            screenshots: [
              { url: "https://via.placeholder.com/300x200", alt: "Spawn Optimization" },
            ],
            codeScreenshots: [
              { url: "https://via.placeholder.com/300x200", alt: "Spawn Code" },
            ],
          },
        ],
        tools: ["Stencyl", "Photoshop", "Illustrator"],
        rules: ["Single-player mode", "Endless and Wave modes"],
        resources: [
            { 
                title: "Blacknut Cloud Gaming. (n.d.). Men of War: Vietnam - Apocalypse Now. Retrieved November 22, 2024, from", 
                url: "https://www.blacknutlemag.com/en/men-of-war-vietnam-video-game" 
            }, { 
                title: "Ahemotion Music. (2022, March 1). Helicopter sound effect [Video]. YouTube. ", 
                url: "https://www.youtube.com/watch?v=QlGzLhnwJX4" 
            }, { 
                title: "Sound Effects Pro. (2019, July 15). Explosion sound effect [Video]. YouTube.", 
                url: "https://www.youtube.com/watch?v=LdGe-qosfRA" 
            }, { 
                title: "HD Sound Effects. (2016, November 30). Missile sound effect [Video]. YouTube.", 
                url: "https://www.youtube.com/watch?v=1qUN59Oebe0" 
            }, { 
                title: "PhantomMusic. (2014, April 12). Title song [Video]. YouTube. ", 
                url: "https://www.youtube.com/watch?v=OrPKJos3tA0" 
            }, 
        ],
      },
    ],
  };
  
  