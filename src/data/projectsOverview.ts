import { projectsOverview } from "../types/Project";

export const projectsOverviewData: projectsOverview = {
    projectList: [
        {
            title: "Planet Civilisation",
            type: "Game",
            description: "Turn-based 4X space strategy where you colonise planets, manage resources, and conquer the galaxy.",
            img: { url: `${process.env.PUBLIC_URL}/assets/images/games/PlanetCivilisation/cover.png`, alt: "Planet Civilisation" },
            year: "2026",
        },{
            title: "In Too Deep",
            type: "Game",
            description: "Deep-sea diving adventure with oxygen management, an operator dialogue system, and dangerous sea creatures.",
            img: { url: `${process.env.PUBLIC_URL}/assets/images/games/InTooDeep/thumbnail.png`, alt: "In Too Deep" },
            year: "2025",
        },{
            title: "VietVaders",
            type: "Game",
            description: "Classic shoot 'em up game ",
            img: { url: `${process.env.PUBLIC_URL}/assets/images/games/VietVaders/game-screenshot.png`, alt: "VietVaders" },
            year: "2024",
        },{
            title: "Messi vs Ronaldo",
            type: "Game",
            description: "A fast-paced Pong game with unique power-ups and dynamic gameplay.",
            img: { url: `${process.env.PUBLIC_URL}/assets/images/games/Pong/TitleScreen.png`, alt: "Messi vs Ronaldo" },
            year: "2024",
        },{
            title: "Ho-Ho-Holiday",
            type: "Game",
            description: "Festive platformer where Santa hops through icy levels to deliver presents.",
            img: { url: `${process.env.PUBLIC_URL}/assets/images/games/HoHoHoliday/game-screenshot.png`, alt: "Ho-Ho-Holiday" },
            year: "2024",
        },{
            title: "PartyPass",
            type: "Website",
            description: "Event platform for discovering and managing parties, tickets, and guest lists.",
            img: { url: `${process.env.PUBLIC_URL}/assets/images/images/partyPass.jpg`, alt: "PartyPass" },
            year: "2023",
        },{
            title: "Abelfarkass.com",
            type: "Website",
            description: "Personal portfolio site for actor and creative Abel Farkass.",
            img: { url: `${process.env.PUBLIC_URL}/assets/images/images/Abel-screen-2.png`, alt: "Abelfarkass.com" },
            year: "2022",
        },
    ],
};
  
  