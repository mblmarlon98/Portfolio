import React, {Component, createRef} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from './pages/Portfolio/Portfolio';
import GamePortfolio from "./pages/Portfolio/GamePortfolio/GamePortfolio";
import {gameProjects} from "./data/gameProjects";
import ProjectDetailComponent from "./components/ProjectDetailComponent/ProjectDetailComponent";
import {ProjectDetail} from './types/Project';
import "./globalStyles.scss";
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import 'animate.css';
import WebPortfolio from "./pages/Portfolio/WebPortfolio.tsx/WebPortfolio";
import GameProjects from './pages/Projects/GameProjects/GameProjects';
import AboutMe from "./pages/AboutMe/AboutMe";

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

                navbar
                    .classList
                    .add('bg-dark');
            } else {
                navbar
                    .classList
                    .remove('bg-dark');
            }
        }
    }

    render() {
        return (
            <div>
                {/* <ParticlesBackground /> */}
                <BrowserRouter>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={< Home />}/>
                        <Route path="/about-me" element={< AboutMe />}/>

                        <Route path="/portfolio" element={< Portfolio />}/>
                        <Route path="/portfolio/game" element={< GamePortfolio />}/>
                        <Route path="/portfolio/game/projects" element={< GameProjects />}/>

                        <Route path="/portfolio/web" element={< WebPortfolio />}/> {/* Dynamically Generate Routes for Each Project */}
                        {gameProjects
                            .projectList
                            .map((project : ProjectDetail) => (
                                <Route
                                    key={project.title}
                                    path={`/portfolio/game/projects/${encodeURIComponent(project.title.toLowerCase().replace(/\s+/g, "-"))}`}
                                    element={< ProjectDetailComponent projectDetail = {
                                    project
                                } />}/>
                            ))}
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default Router;
