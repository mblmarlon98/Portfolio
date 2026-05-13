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
        recentFilter: "Website" as "Game" | "Website",
        pillsHinted: false,
    };

    bannerAutoScrollDone = false;

    componentDidMount() {
        this.typeWriter();
        const scrollContainer = document.getElementById('scroll_snap_container');
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', this.updateScroll);
            scrollContainer.addEventListener('scroll', this.handleBannerAutoScroll, { passive: true });
        }
    }

    componentWillUnmount() {
        const scrollContainer = document.getElementById('scroll_snap_container');
        if (scrollContainer) {
            scrollContainer.removeEventListener('scroll', this.updateScroll);
            scrollContainer.removeEventListener('scroll', this.handleBannerAutoScroll);
        }
    }

    handleBannerAutoScroll = () => {
        const container = document.getElementById('scroll_snap_container');
        if (!container || this.bannerAutoScrollDone) return;
        if (container.scrollTop <= 0 || container.scrollTop >= window.innerHeight * 0.5) return;
        this.bannerAutoScrollDone = true;
        const target = container.querySelector('.featured-projects') as HTMLElement | null;
        if (target) {
            const navHeight = document.getElementById('navbar')?.offsetHeight ?? 0;
            container.scrollTo({ top: target.offsetTop - navHeight, behavior: 'smooth' });
        }
    };

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

    setRecentFilter = (filter: "Game" | "Website") => {
        this.setState({ recentFilter: filter }, () => {
            // New cards mount hidden; trigger the visibility check immediately
            // so they fade in without requiring a scroll event.
            requestAnimationFrame(() => this.updateScroll());
        });
    };

    updateScroll = () => {
        const scrollContainer = document.getElementById('scroll_snap_container');
        const navbar = document.getElementById('navbar');

        if (!this.state.pillsHinted) {
            const featured = document.querySelector('.featured-projects');
            if (featured && this.isPartiallyInViewport(featured, 40)) {
                this.setState({ pillsHinted: true });
            }
        }

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

            if (this.isPartiallyInViewport(section, 40)) {
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
                        <div className="flex justify-center w-full mt-6 lg:mt-8">
                            <div className={`filter-pills ${this.state.pillsHinted ? "is-hinting" : ""}`} role="tablist" aria-label="Recent projects filter">
                                <button
                                    type="button"
                                    role="tab"
                                    aria-selected={this.state.recentFilter === "Game"}
                                    className={`filter-pill ${this.state.recentFilter === "Game" ? "is-active" : ""}`}
                                    onClick={() => this.setRecentFilter("Game")}
                                >
                                    <svg className="filter-pill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M6 11h4M8 9v4"/>
                                        <circle cx="15.5" cy="11.5" r="0.6" fill="currentColor"/>
                                        <circle cx="17.5" cy="13.5" r="0.6" fill="currentColor"/>
                                        <path d="M17.32 6H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 10.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258A4 4 0 0 0 17.32 6Z"/>
                                    </svg>
                                    Games
                                </button>
                                <button
                                    type="button"
                                    role="tab"
                                    aria-selected={this.state.recentFilter === "Website"}
                                    className={`filter-pill ${this.state.recentFilter === "Website" ? "is-active" : ""}`}
                                    onClick={() => this.setRecentFilter("Website")}
                                >
                                    <svg className="filter-pill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <rect x="2.5" y="4" width="19" height="13" rx="2"/>
                                        <line x1="8.5" y1="21" x2="15.5" y2="21"/>
                                        <line x1="12" y1="17" x2="12" y2="21"/>
                                    </svg>
                                    Websites
                                </button>
                            </div>
                        </div>
                        {this.state.recentFilter === "Website" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 lg:mt-8 w-full">
                                <a href="https://kaboona.com/" target="_blank" rel="noopener noreferrer" className="block rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/images/kaboona-og.png`} alt="Kaboona FC" className="w-full h-auto" />
                                </a>
                                <a href="https://www.worldwideaudioguide.com/" target="_blank" rel="noopener noreferrer" className="block rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/images/audioguide-og.jpg`} alt="World Wide AudioGuide" className="w-full h-auto" />
                                </a>
                            </div>
                        )}
                        <div className="recent-projects-grid grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 mt-8 lg:mt-14 w-full">
                            {projectsOverviewData.projectList
                                .filter((project) => project.type === this.state.recentFilter)
                                .map((project, idx) => (
                                    <ProjectCard
                                        key={`${this.state.recentFilter}-${project.title}`}
                                        title={project.title}
                                        description={project.description}
                                        index={idx}
                                        img={project.img}
                                        type={project.type}
                                        year={project.year}
                                    />
                                ))}
                        </div>
                        <div className='animate__animated animate__fadeOutDownBig text-center mt-16'>
                            <Link to={this.state.recentFilter === "Game" ? "/my-portfolio/game" : "/my-portfolio/web"} className='btn btn-white'>
                                View All {this.state.recentFilter === "Game" ? "Games" : "Websites"}
                            </Link>
                        </div>
                    </div>
                </section>

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


                <section className="contact-section">
                    <div
                        className="animate__animated animate__fadeOutDown flex flex-col justify-center items-center w-full">
                        <div className="w-full md:w-3/4 lg:w-2/3 text-center contact-card">
                            <span className="contact-eyebrow">Let's collaborate</span>
                            <h1 className="contact-title">Get in touch!</h1>
                            <p className="contact-subtitle">
                                Have a project in mind, a half-baked idea, or just a question? Drop me a line. I usually get back within a day.
                            </p>
                            <div className="contact-actions">
                                <a
                                    href="mailto:berdefymarlon@gmail.com?subject=Project%20Inquiry%20from%20mbl.com&body=Hi%20Marlon,%0D%0A%0D%0AI%20am%20reaching%20out%20regarding%20a%20potential%20project.%20I've%20had%20the%20chance%20to%20explore%20your%20work%20on%20your%20website,%20and%20I%20would%20like%20to%20discuss%20a%20specific%20project%20in%20more%20detail.%0D%0A%0D%0ACould%20you%20please%20provide%20additional%20information%20on%20your%20availability,%20rates,%20and%20the%20next%20steps%20for%20starting%20a%20collaboration?%0D%0A%0D%0AThank%20you,%0D%0A[Sender's%20Name]"
                                    className="contact-cta">
                                    <svg className="contact-cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <rect x="3" y="5" width="18" height="14" rx="2"/>
                                        <path d="M3 7l9 6 9-6"/>
                                    </svg>
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
