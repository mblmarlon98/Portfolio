import React, {Component} from 'react';
// import Tooltip from '../../../components/Tooltip/Tooltip';
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
                  } else if (animatedDiv.classList.contains("animate__fadeInLeft")) {
                    animatedDiv.classList.remove("animate__fadeInLeft");
                    animatedDiv.classList.add("animate__fadeOutLeft");
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
                } else if (animatedDiv.classList.contains("animate__fadeOutLeft")) {
                  animatedDiv.classList.remove("animate__fadeOutLeft");
                  animatedDiv.classList.add("animate__fadeInLeft");
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
                    <div className="text-center">
                        <h2>Portfolio & Previous Projects</h2>
                    </div>
                    <div className=" w-full">
                        <BookSlider/>
                    </div>
                </section>
                <section className="flex-col justify-around md:justify-center">
                    <div className="animate__animated animate__fadeOutUp animate__delay-0s w-full md:w-2/3 xl:w-1/2 text-center md:mb-4">
                        <h2>Skills & Experience</h2>
                        <div className="md:mt-5 "></div>
                    </div>
                    {/* The rest of the content intentionally left as-is from original */}
                </section>
            </div>
        );
    }
}

export default WebPortfolio;
