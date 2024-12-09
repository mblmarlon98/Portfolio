import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from './pages/Portfolio/Portfolio';
import GamePortfolio from "./pages/Portfolio/GamePortfolio/GamePortfolio";
import { gameProjects } from "./data/gameProjects";
import ProjectDetailComponent from "./components/ProjectDetailComponent/ProjectDetailComponent";
import { ProjectDetail } from './types/Project';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';

class Router extends React.Component {
  render() {
    return (
      <div>
         {/* <ParticlesBackground /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/game" element={<GamePortfolio />} />
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
