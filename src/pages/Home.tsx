import React, {Component} from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';
import Tooltip from '../components/Tooltip/Tooltip';
import { projectsOverviewData } from '../data/projectsOverview';
import FactsSection from '../components/Sections/FactsSection/FactsSection';
import ProjectCard from '../components/Cards/ProjectCard';

class Home extends Component {
    state = {
        i: 0,
        txt: "Hello World! I'm Marlon, nice to meet you :)",
        speed: 40,
        typingText: "",
        distanceScrolled: 0,
        changeColor: true,
        scrollPosition: 0,
        portfolioActiveSide: "none"
    };

    componentDidMount() {
        this.typeWriter();
        const scrollContainer = document.getElementById('scroll_snap_container');
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', this.updateScroll);
        }
    }

    componentWillUnmount() {
        const scrollContainer = document.getElementById('scroll_snap_container');
        if (scrollContainer) {
            scrollContainer.removeEventListener('scroll', this.updateScroll);
        }
    }

    typeWriter = () => {
        const {i, txt, speed, typingText} = this.state;
        if (i < txt.length) {
            this.setState({
                typingText: typingText + txt.charAt(i),
                i: i + 1
            });
            setTimeout(this.typeWriter, speed);
        }
    };

    isPartiallyInViewport = (el : any, percentVisible : any) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        return (!(Math.floor(100 - (((rect.top >= 0
            ? 0
            : rect.top) / -rect.height) * 100)) < percentVisible || Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible));
    };

    handlePortfolioMouseEnter = (side: string) => {
        this.setState({ portfolioActiveSide: side });
    };

    handlePortfolioMouseLeave = () => {
        this.setState({ portfolioActiveSide: "none" });
    };

    updateScroll = () => {
        const scrollContainer = document.getElementById('scroll_snap_container');
        const navbar = document.getElementById('navbar');

        if (scrollContainer && navbar) {
            this.setState({scrollPosition: scrollContainer.scrollTop});

            if (scrollContainer.scrollTop > 500) {
                scrollContainer
                    .classList
                    .add('bg-dark');
                navbar
                    .classList
                    .add('bg-dark');
            } else {
                scrollContainer
                    .classList
                    .remove('bg-dark');
                navbar
                    .classList
                    .remove('bg-dark');
            }
        }

        const sections = document.querySelectorAll('section');
        sections.forEach((section) => {
            const animatedDivs = section.querySelectorAll('div.animate__animated');
            const animatedCards = section.querySelectorAll('.project-card.animate__animated');

            if (this.isPartiallyInViewport(section, 80)) {
                animatedDivs.forEach(animatedDiv => {
                  if (animatedDiv.classList.contains("animate__fadeOutDown")) {
                    animatedDiv.classList.remove("animate__fadeOutDown");
                    animatedDiv.classList.add("animate__fadeInUp");
                  } else if (animatedDiv.classList.contains("animate__fadeOutDownBig")) {
                    animatedDiv.classList.remove("animate__fadeOutDownBig");
                    animatedDiv.classList.add("animate__fadeInUpBig");
                  } else if (animatedDiv.classList.contains("animate__fadeOutUp")) {
                    animatedDiv.classList.remove("animate__fadeOutUp");
                    animatedDiv.classList.add("animate__fadeInDown");
                  } else if (animatedDiv.classList.contains("animate__fadeOutLeft")) {
                    animatedDiv.classList.remove("animate__fadeOutLeft");
                    animatedDiv.classList.add("animate__fadeInLeft");
                  }
                })

                animatedCards.forEach(card => {
                  if (card.classList.contains("project-card--hidden")) {
                    card.classList.remove("project-card--hidden");
                    card.classList.add("animate__fadeInUp");
                  } else if (card.classList.contains("animate__fadeOutDown")) {
                    card.classList.remove("animate__fadeOutDown");
                    card.classList.add("animate__fadeInUp");
                  }
                })

            } else {
              animatedDivs.forEach(animatedDiv => {
                if (animatedDiv.classList.contains("animate__fadeInUp")) {
                  animatedDiv.classList.remove("animate__fadeInUp");
                  animatedDiv.classList.add("animate__fadeOutDown");
                } else if (animatedDiv.classList.contains("animate__fadeInUpBig")) {
                  animatedDiv.classList.remove("animate__fadeInUpBig");
                  animatedDiv.classList.add("animate__fadeOutDownBig");
                } else if (animatedDiv.classList.contains("animate__fadeInDown")) {
                  animatedDiv.classList.remove("animate__fadeInDown");
                  animatedDiv.classList.add("animate__fadeOutUp");
                } else if (animatedDiv.classList.contains("animate__fadeInLeft")) {
                  animatedDiv.classList.remove("animate__fadeInLeft");
                  animatedDiv.classList.add("animate__fadeOutLeft");
                }
              })

              animatedCards.forEach(card => {
                if (card.classList.contains("animate__fadeInUp")) {
                  card.classList.remove("animate__fadeInUp");
                  card.classList.add("animate__fadeOutDown");
                }
              })
            }
        });
    };

    render() {
        return (
            <div id="scroll_snap_container" className='home'>
                <section className="flex-row justify-center items-center">
                    <div className="bg-gradient"/>
                    <div className="w-full flex flex-row justify-between">
                        <div className="w-full xl:w-2/3 flex flex-col flex-start justify-center">
                            <div className="animate__animated">
                                <b id="typing">{this.state.typingText}</b>
                            </div>
                            <div className="animate__animated animate__fadeInLeftBig animate__delay-3s">
                                <h1>Front-End Software & Game Developer</h1>
                            </div>
                            <div className="animate__animated animate__fadeInLeftBig animate__delay-4s">
                                <p>Transforming ideas into interactive experiences through code and creativity</p>
                            </div>
                            <div className="animate__animated animate__fadeInLeftBig animate__delay-5s mt-6 flex gap-4">
                                <Link
                                    to="my-portfolio"
                                    className="btn btn-black font-medium">View Portfolio</Link>
                                <Link
                                    to="about-me"
                                    className="btn btn-white font-medium">About Me</Link>
                            </div>
                        </div>
                        <div className="hidden xl:flex xl:w-1/3 justify-center items-center">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/images/Computer.svg`} alt="Computer illustration"/>
                        </div>
                    </div>
                </section>

                <section className="featured-projects">
                    <div className="bg-gradient"/>
                    <div className="container mx-auto h-full w-full flex flex-col justify-evenly items-center">
                        <div className='animate__animated animate__fadeOutDown'>
                            <h2 className="font-bold text-center">Recent Projects</h2>
                            <p className="text-center text-gray-600 lg:mt-4 hidden md:block">Explore some of my most recent projects.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:mt-8">
                            {projectsOverviewData.projectList && projectsOverviewData.projectList.length > 0 && projectsOverviewData.projectList.map((project, idx) => {
                                return (
                                    <ProjectCard
                                        title={project.title}
                                        description={project.description}
                                        index={idx}
                                        img={project.img}
                                        type={project.type}
                                        year={project.year}
                                    />
                                )
                            })}
                        </div>
                        <div className='animate__animated animate__fadeOutDownBig text-center'>
                            <Link to="/my-portfolio" className='btn btn-white'>View All Projects</Link>
                        </div>
                    </div>
                </section>

                <div className="portfolio-wrapper">
                    <div className="portfolio-section" onMouseLeave={this.handlePortfolioMouseLeave}>
                        <h1 className="portfolio-main-title">Portfolio</h1>
                        <Link
                            to="/my-portfolio/web"
                            className={`side web ${this.state.portfolioActiveSide === "web" ? "active" : ""}`}
                            onMouseEnter={() => this.handlePortfolioMouseEnter("web")}
                        >
                            <h1 className="title">Web Development</h1>
                        </Link>
                        <div className={`controller ${this.state.portfolioActiveSide}`}>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/images/icons/Controller.svg`}
                                alt="Controller"
                                className="controller-image"
                            />
                        </div>
                        <Link
                            to="/my-portfolio/game"
                            className={`side game ${this.state.portfolioActiveSide === "game" ? "active" : ""}`}
                            onMouseEnter={() => this.handlePortfolioMouseEnter("game")}
                        >
                            <h1 className="title">Game Development</h1>
                        </Link>
                        <div className="friendly-indicator">
                            <p>Pick your interest: Web wizardry or game magic? 🧙🎮</p>
                        </div>
                    </div>
                </div>

                <FactsSection
                    title="What I Do"
                    description="Services and specializations I offer."
                    facts={[
                        "Web Development",
                        "Game Development",
                        "React Applications",
                        "E-commerce Solutions",
                        "Interactive Experiences",
                        "Custom Animations",
                        "Responsive Design",
                        "API Development"
                    ]}
                    img=""
                />


                <section>
                    <div
                        className="animate__animated animate__fadeOutDown flex flex-col justify-center items-center w-full">
                        <div className="w-full md:w-1/2 text-center">
                            <h1 className="mb-5">Get in touch!</h1>
                            <p className="mb-5">What would you do if you had a developer at hand? Click the
                                button bellow and let me know.</p>
                            <div className="mt-5">
                                <a
                                    href="mailto:berdefymarlon@gmail.com?subject=Project%20Inquiry%20from%20mbl.com&body=Hi%20Marlon,%0D%0A%0D%0AI%20am%20reaching%20out%20regarding%20a%20potential%20project.%20I've%20had%20the%20chance%20to%20explore%20your%20work%20on%20your%20website,%20and%20I%20would%20like%20to%20discuss%20a%20specific%20project%20in%20more%20detail.%0D%0A%0D%0ACould%20you%20please%20provide%20additional%20information%20on%20your%20availability,%20rates,%20and%20the%20next%20steps%20for%20starting%20a%20collaboration?%0D%0A%0D%0AThank%20you,%0D%0A[Sender's%20Name]"
                                    className="btn btn-white font-medium">
                                    Hire Me!
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
} 


export default Home;
