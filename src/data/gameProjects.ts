import { ProjectList } from "../types/Project";

export const gameProjects: ProjectList = {
    projectList: [
      {
        title: "Messi vs Ronaldo Pong",
        description: "A fast-paced Pong game with unique power-ups and dynamic gameplay.",
        folderName: "pong",
        img: { url: "https://via.placeholder.com/600x400", alt: "Pong Game" },
        year: "2024",
        role: "Developer",
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
        tools: ["Stencyl", "Photoshop", "Illustrator"],
        rules: ["Two players required", "Two modes: Normal and Turbo"],
        resources: [
          { title: "Game Engine", interpret: "Stencyl" },
          { title: "Music Assets", interpret: "Audio Jungle" },
        ],
      },
      {
        title: "VietVaders",
        description: "A shoot-em-up game with procedurally generated waves and endless mode.",
        folderName: "vietVaders",
        img: { url: "https://via.placeholder.com/600x400", alt: "Shoot-em-up Game" },
        year: "2024",
        role: "Developer and Artist",
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
        tools: ["Unity", "Blender", "Aseprite"],
        rules: ["Single-player mode", "Endless and Wave modes"],
        resources: [
          { title: "Game Engine", interpret: "Unity" },
          { title: "Sprites", interpret: "Custom-made" },
        ],
      },
    ],
  };
  
  