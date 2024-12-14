import { projectsOverview } from "../types/Project";

export const projectsOverviewData: projectsOverview = {
    projectList: [
        {
            title: "VietVaders",
            type: "Game",
            description: "Classic shoot 'em up game ",
            img: { url: `${process.env.PUBLIC_URL}/assets/images/games/VietVaders/game-screenshot.png`, alt: "Pong Game" },
            year: "2024",
        },{
            title: "Messi vs Ronaldo",
            type: "Game",
            description: "A fast-paced Pong game with unique power-ups and dynamic gameplay.",
            img: { url: `${process.env.PUBLIC_URL}/assets/images/games/pong/TitleScreen.png`, alt: "Pong Game" },
            year: "2024",
        },{
            title: "PartyPass",
            type: "Website",
            description: "A fast-paced Pong game with unique power-ups and dynamic gameplay.",
            img: { url: `${process.env.PUBLIC_URL}/assets/images/images/partyPass.jpg`, alt: "Pong Game" },
            year: "2023",
        },{
            title: "Abelfarkass.com",
            type: "Website",
            description: "A fast-paced Pong game with unique power-ups and dynamic gameplay.",
            img: { url: `${process.env.PUBLIC_URL}/assets/images/images/Abel-screen-2.png`, alt: "Pong Game" },
            year: "2022",
        },
    ],      
};
  
  