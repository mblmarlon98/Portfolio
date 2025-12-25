import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Tooltip from '../../../components/Tooltip/Tooltip';
import BookSlider from '../../../components/Slider/BookSlider/BookSlider';
import './WebPortfolio.scss';

class WebPortfolio extends Component {
    state = {
        i: 0,
        txt: "Hello World! I'm Marlon, nice to meet you :)",
        speed: 40,
        typingText: "",
        distanceScrolled: 0,
        changeColor: true,
        scrollPosition: 0
    };

    componentDidMount() {
        this.typeWriter();
        const scrollContainer = document.getElementById('scroll_snap_container');
        const navbar = document.getElementById('navbar');

        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', this.updateScroll);
        }

        if(navbar) {
            navbar.classList.add('bg-dark');
        }
    }

    componentWillUnmount() {
        const scrollContainer = document.getElementById('scroll_snap_container');
        if (scrollContainer) {
            scrollContainer.removeEventListener('scroll', this.updateScroll);
        }
    }

    typeWriter = () => {
        const {i, txt, speed, typingText} = this.state as any;
        if (i < txt.length) {
            // @ts-ignore
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

    updateScroll = () => {
        const sections = document.querySelectorAll('section');
        sections.forEach((section) => {
            const animatedDivs = section.querySelectorAll('div.animate__animated');
            if (this.isPartiallyInViewport(section, 80)) {
                // Animate skill icons sequentially
                const skillIcons = section.querySelectorAll('.skill-icon.animate__animated');
                if (skillIcons.length > 0) {
                    skillIcons.forEach((icon) => {
                        if (icon.classList.contains("skill-icon--hidden")) {
                            icon.classList.remove("skill-icon--hidden");
                            icon.classList.add("animate__fadeInUp");
                        } else if (icon.classList.contains("animate__fadeOutDown")) {
                            icon.classList.remove("animate__fadeOutDown");
                            icon.classList.add("animate__fadeInUp");
                        }
                    });
                }

                // Handle other animated elements immediately
                animatedDivs.forEach(animatedDiv => {
                    if (!animatedDiv.classList.contains('skill-icon')) {
                        if (animatedDiv.classList.contains("animate__fadeOutUp")) {
                            animatedDiv.classList.remove("animate__fadeOutUp");
                            animatedDiv.classList.add("animate__fadeInDown");
                        } else if (animatedDiv.classList.contains("animate__fadeInLeft")) {
                            animatedDiv.classList.remove("animate__fadeInLeft");
                            animatedDiv.classList.add("animate__fadeOutLeft");
                        }
                    }
                })
            } else {
              animatedDivs.forEach(animatedDiv => {
                if (animatedDiv.classList.contains("skill-icon")) {
                    // Fade out skill icons when leaving viewport
                    if (animatedDiv.classList.contains("animate__fadeInUp")) {
                        animatedDiv.classList.remove("animate__fadeInUp");
                        animatedDiv.classList.add("animate__fadeOutDown");
                    }
                } else {
                    if (animatedDiv.classList.contains("animate__fadeInUp")) {
                      animatedDiv.classList.remove("animate__fadeInUp");
                      animatedDiv.classList.add("animate__fadeOutDown");
                    } else if (animatedDiv.classList.contains("animate__fadeInDown")) {
                      animatedDiv.classList.remove("animate__fadeInDown");
                      animatedDiv.classList.add("animate__fadeOutUp");
                    } else if (animatedDiv.classList.contains("animate__fadeOutLeft")) {
                      animatedDiv.classList.remove("animate__fadeOutLeft");
                      animatedDiv.classList.add("animate__fadeInLeft");
                    }
                }
              })
            }
        });
    };

    render() {
        return (
            <div id="scroll_snap_container" className='web-portfolio bg-dark'>
                <section className="flex flex-col section-bookslider">
                    <div className="bg-gradient"/>
                    <div className=" w-full">
                        <BookSlider/>
                    </div>
                </section>
                <section className="flex-col justify-around md:justify-center">
                    <div className="animate__animated animate__fadeOutUp animate__delay-0s w-full md:w-2/3 xl:w-1/2 text-center md:mb-4">
                        <h2>Skills & Experience</h2>
                        <div className="md:mt-5">
                            <p>My specialization lies in front-end development, creating engaging web applications using HTML, CSS, and JavaScript.</p>
                            <br/>
                            <p>
                                Proficiency includes building small to medium-sized applications with Vue and React, incorporating custom
                                features, animations, and interactive layouts. There is also experience as a full-stack developer, having worked
                                with CMS and backend technologies like Node.js.
                            </p>
                        </div>
                    </div>
                    <div className="md:mt-4 w-full flex justify-center">
                        <div className="icon-container">
                            <Tooltip tooltipText="6+ years">
                                <div className="text-center skill-icon animate__animated skill-icon--hidden">
                                    <img src="/assets/icons/html5.svg" alt="HTML5" />
                                    <p className="mt-1 md:mt-2">HTML5</p>
                                </div>
                            </Tooltip>
                            <Tooltip tooltipText="6+ years">
                                <div className="text-center skill-icon animate__animated skill-icon--hidden">
                                    <img src="/assets/icons/css3.svg" alt="CSS3" />
                                    <p className="mt-1 md:mt-2">CSS3</p>
                                </div>
                            </Tooltip>
                            <Tooltip tooltipText="4+ years">
                                <div className="text-center skill-icon animate__animated skill-icon--hidden">
                                    <img src="/assets/icons/sass.svg" alt="SASS" />
                                    <p className="mt-1 md:mt-2">SASS</p>
                                </div>
                            </Tooltip>
                            <Tooltip tooltipText="4+ years">
                                <div className="text-center skill-icon animate__animated skill-icon--hidden">
                                    <img src="/assets/icons/javascript.svg" alt="JavaScript" />
                                    <p className="mt-1 md:mt-2">JavaScript</p>
                                </div>
                            </Tooltip>
                            <Tooltip tooltipText="3+ years">
                                <div className="text-center skill-icon animate__animated skill-icon--hidden">
                                    <img src="/assets/icons/typescript.svg" alt="TypeScript" />
                                    <p className="mt-1 md:mt-2">TypeScript</p>
                                </div>
                            </Tooltip>
                            <Tooltip tooltipText="3+ years">
                                <div className="text-center skill-icon animate__animated skill-icon--hidden">
                                    <img src="/assets/icons/react.svg" alt="React" />
                                    <p className="mt-1 lg:mt-2">React</p>
                                </div>
                            </Tooltip>
                            <Tooltip tooltipText="1+ year">
                                <div className="text-center skill-icon animate__animated skill-icon--hidden">
                                    <img src="/assets/icons/vue.svg" alt="Vue" />
                                    <p className="mt-1 md:mt-2">Vue</p>
                                </div>
                            </Tooltip>
                            <Tooltip tooltipText="1 year">
                                <div className="text-center skill-icon animate__animated skill-icon--hidden">
                                    <img src="/assets/icons/ruby-on-rails.svg" alt="Ruby on Rails" />
                                    <p className="mt-1 md:mt-2">Ruby on Rails</p>
                                </div>
                            </Tooltip>
                            <Tooltip tooltipText="2+ years">
                                <div className="text-center skill-icon animate__animated skill-icon--hidden">
                                    <img src="/assets/icons/bootstrap.svg" alt="Bootstrap" />
                                    <p className="mt-1 md:mt-2">Bootstrap</p>
                                </div>
                            </Tooltip>
                            <Tooltip tooltipText="2+ years">
                                <div className="text-center skill-icon animate__animated skill-icon--hidden">
                                    <img src="/assets/icons/tailwind.svg" alt="Tailwind" />
                                    <p className="mt-1 md:mt-2">Tailwind</p>
                                </div>
                            </Tooltip>
                            <Tooltip tooltipText="1< year">
                                <div className="text-center skill-icon animate__animated skill-icon--hidden">
                                    <img src="/assets/icons/strapi.svg" alt="Strapi" />
                                    <p className="mt-1 md:mt-2">Strapi</p>
                                </div>
                            </Tooltip>
                            <Tooltip tooltipText="1< year">
                                <div className="text-center skill-icon animate__animated skill-icon--hidden">
                                    <img src="/assets/icons/node.svg" alt="Node" />
                                    <p className="mt-1 md:mt-2">Node</p>
                                </div>
                            </Tooltip>
                            <Tooltip tooltipText="1< year">
                                <div className="text-center skill-icon animate__animated skill-icon--hidden">
                                    <img src="/assets/icons/express.svg" alt="Express" />
                                    <p className="mt-1 md:mt-2">Express</p>
                                </div>
                            </Tooltip>
                            <Tooltip tooltipText="2+ years">
                                <div className="text-center skill-icon animate__animated skill-icon--hidden">
                                    <img src="/assets/icons/mysql.svg" alt="MySql" />
                                    <p className="mt-1 md:mt-2">MySql</p>
                                </div>
                            </Tooltip>
                            <Tooltip tooltipText="2+ years">
                                <div className="text-center skill-icon animate__animated skill-icon--hidden">
                                    <img src="/assets/icons/mongodb.svg" alt="MongoDB" />
                                    <p className="mt-2">MongoDB</p>
                                </div>
                            </Tooltip>
                            <Tooltip tooltipText="6+ years">
                                <div className="text-center skill-icon animate__animated skill-icon--hidden">
                                    <img src="/assets/icons/git.svg" alt="Git" />
                                    <p className="mt-1 lg:mt-2">Git</p>
                                </div>
                            </Tooltip>
                            <Tooltip tooltipText="6+ years">
                                <div className="text-center skill-icon animate__animated skill-icon--hidden">
                                    <img src="/assets/icons/visual-studio.svg" alt="Visual Studio" />
                                    <p className="mt-2">Visual Studio</p>
                                </div>
                            </Tooltip>
                            <Tooltip tooltipText="6+ years">
                                <div className="text-center skill-icon animate__animated skill-icon--hidden">
                                    <img src="/assets/icons/blender.svg" alt="Blender" />
                                    <p className="mt-2">Blender</p>
                                </div>
                            </Tooltip>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default WebPortfolio;
