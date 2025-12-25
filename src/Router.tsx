import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from './pages/Portfolio/Portfolio';
import GamePortfolio from "./pages/Portfolio/GamePortfolio/GamePortfolio";
import { gameProjects } from "./data/gameProjects";
import ProjectDetailComponent from "./components/ProjectDetailComponent/ProjectDetailComponent";
import { ProjectDetail } from './types/Project';
import "./globalStyles.scss";
import Navbar from "./components/Navbar/Navbar";
import WebPortfolio from "./pages/Portfolio/WebPortfolio/WebPortfolio";
import GameProjects from './pages/Projects/GameProjects/GameProjects';
import AboutMe from "./pages/AboutMe/AboutMe";
import NotFound from "./pages/NotFound";

class Router extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.updateScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateScroll);
    }

    updateScroll = () => {
        const navbar = document.getElementById('navbar');

        if (navbar) {
            if (window.scrollY > 0) {
                navbar.classList.add('bg-dark');
            } else {
                navbar.classList.remove('bg-dark');
            }
        }
    };

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        {/* Home */}
                        <Route path="/" element={<Home />} />

                        {/* About Me */}
                        <Route path="/about-me" element={<AboutMe />} />

                        {/* Portfolio */}
                        <Route path="/my-portfolio" element={<Portfolio />} />
                        <Route path="/my-portfolio/game" element={<GamePortfolio />} />
                        <Route path="/my-portfolio/game/projects" element={<GameProjects />} />
                        <Route path="/my-portfolio/web" element={<WebPortfolio />} />

                        {/* Dynamically Generated Game Project Routes */}
                        {gameProjects.projectList.map((project: ProjectDetail) => (
                            <Route
                                key={project.title}
                                path={`/my-portfolio/game/projects/${encodeURIComponent(
                                    project.title.toLowerCase().replace(/\s+/g, "-")
                                )}`}
                                element={<ProjectDetailComponent projectDetail={project} />}
                            />
                        ))}

                        {/* Fallback */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default Router;
