import React, { Component, createRef } from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from './pages/Portfolio/Portfolio';
import GamePortfolio from "./pages/Portfolio/GamePortfolio/GamePortfolio";
import { gameProjects } from "./data/gameProjects";
import ProjectDetailComponent from "./components/ProjectDetailComponent/ProjectDetailComponent";
import { ProjectDetail } from './types/Project';
import "./globalStyles.scss";
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import 'animate.css';
import WebPortfolio from "./pages/Portfolio/WebPortfolio.tsx/WebPortfolio";

class Router extends Component {
  // scrollContainerRef: React.RefObject<HTMLDivElement>;
  // constructor(props: any) {
  //   super(props);
  //   this.state = {
  //     scrollPosition: 0,
  //     changeColor: true,
  //   };
  //   this.scrollContainerRef = createRef();
  // }

  // componentDidMount() {
  //   // AOS.init();
  //   const scrollContainer = this.scrollContainerRef.current;
  //   console.log(scrollContainer);
    
  //   if (scrollContainer) {
  //     console.log("TRUE");
      
  //     scrollContainer.addEventListener('scroll', this.updateScroll);
  //   }

  //   this.typeWriter();
  // }

  // componentWillUnmount() {
  //   const scrollContainer = this.scrollContainerRef.current;
  //   if (scrollContainer) {
  //     scrollContainer.removeEventListener('scroll', this.updateScroll);
  //   }
  // }

  // updateScroll = () => {
  //   const scrollContainer = this.scrollContainerRef.current;
  //   const navbar = document.getElementById('navbar');
    

  //   if (scrollContainer) {
  //     const position = scrollContainer.scrollTop;
  //     this.setState({ scrollPosition: position });

  //     if (position > 500) {
  //       scrollContainer.classList.add('bg-dark');
  //       if (navbar) navbar.classList.add('bg-dark');
  //     } else {
  //       scrollContainer.classList.remove('bg-dark');
  //       if (navbar) navbar.classList.remove('bg-dark');
  //     }
  //   }
  // };

  // isPartiallyInViewport = (el: any, percentVisible: any) => {
  //   const rect = el.getBoundingClientRect();
  //   const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  //   return !(
  //     Math.floor(100 - ((rect.top >= 0 ? 0 : rect.top) / -rect.height) * 100) < percentVisible ||
  //     Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
  //   );
  // };

  // typeWriter = () => {
  //   const txt = "Hello World! I'm Marlon, nice to meet you :)";
  //   const speed = 40;
  //   let i = 0;

  //   const typingElement = document.getElementById('typing');
  //   const type = () => {
  //     if (typingElement && i < txt.length) {
  //       typingElement.innerHTML += txt.charAt(i);
  //       i++;
  //       setTimeout(type, speed);
  //     }
  //   };

  //   type();
  // };
  
  render() {
    return (
      <div>
         {/* <ParticlesBackground /> */}
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/game" element={<GamePortfolio />} />
            <Route path="/portfolio/web" element={<WebPortfolio />} />
            {/* Dynamically Generate Routes for Each Project */}
            {gameProjects.projectList.map((project: ProjectDetail) => (
              <Route
                key={project.title}
                path={`/portfolio/game/projects/${encodeURIComponent(
                  project.title.toLowerCase().replace(/\s+/g, "-")
                )}`}
                element={
                  <ProjectDetailComponent
                    projectDetail={project}
                  />
                }
              />
            ))}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default Router;
