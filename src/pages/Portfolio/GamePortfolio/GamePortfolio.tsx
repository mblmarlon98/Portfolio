import React from "react";
import "./GamePortfolio.scss";
import { Link } from "react-router-dom";
import { gameProjects } from '../../../data/gameProjects';
import { ProjectDetail } from "../../../types/Project";
import Tooltip from "../../../components/Tooltip/Tooltip";

type GamePortfolioState = {
  currentSlide: number;
  isHovered: boolean;
};

class GamePortfolio extends React.Component<{}, GamePortfolioState> {
  sliderInterval: NodeJS.Timeout | null = null;

  constructor(props: {}) {
    super(props);
    this.state = {
      currentSlide: 0,
      isHovered: false,
    };
  }

  componentDidMount() {
    this.startSlider();
  }

  componentWillUnmount() {
    this.stopSlider();
  }

  startSlider = () => {
    this.sliderInterval = setInterval(() => {
      if (!this.state.isHovered) {
        this.setState((prevState) => ({
          currentSlide: (prevState.currentSlide + 1) % gameProjects.projectList.length,
        }));
      }
    }, 4000);
  };

  stopSlider = () => {
    if (this.sliderInterval) clearInterval(this.sliderInterval);
  };

  navigateToSlide = (index: number) => {
    this.setState({ currentSlide: index });
  };

  handleHover = (hovered: boolean) => {
    this.setState({ isHovered: hovered });
  };

  render() {
    const { currentSlide } = this.state;

    return (
      <div className="game-portfolio max-w-screen-xl mx-auto">
        <h2>Overview</h2>
        {/* Grid Layout */}
        <div className="grid grid-cols-3 lg:grid-cols-3 gap-2 lg:gap-4">
          {/* Column 1: All Projects */}
          <Link 
            to={"/my-portfolio/game/projects"} 
            className="menu-item order-1 lg:order-1 row-span-2 lg:row-span-1 col-span-3 lg:col-span-1 btn btn-white"
          >
            All Projects
          </Link>

          {/* Column 2: Slider */}
          <div
            className="slider col-span-3 lg:col-span-2 row-span-3 order-3 lg:order-2"
            onMouseEnter={() => this.handleHover(true)}
            onMouseLeave={() => this.handleHover(false)}
          >
            {/* Overlay */}
            <div className="slider-overlay"></div>

            {/* Slider Track */}
            <div
              className="slider-track"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {gameProjects.projectList.map((project: ProjectDetail) => (
                <div key={project.title} className="slide">
                  <Link
                    to={`/my-portfolio/game/projects/${encodeURIComponent(
                      project.title.toLowerCase().replace(/\s+/g, "-")
                    )}`}
                  >
                    <img src={project.img.url} alt={project.img.alt} />
                  </Link>
                </div>
              ))}
            </div>

            {/* Description Overlay */}
            <div className="description-overlay">
              <h2>{gameProjects.projectList[currentSlide].title}</h2>
              <p>{gameProjects.projectList[currentSlide].description}</p>
            </div>

            {/* Slider Indicator */}
            <div className="slider-indicator">
              {gameProjects.projectList.map((_: any, index: number) => (
                <div
                  key={index}
                  className={`dot ${index === currentSlide ? "active" : ""}`}
                  onClick={() => this.navigateToSlide(index)}
                ></div>
              ))}
            </div>
          </div>

          {/* Column 3: Skills Unlocked */}
          <div 
            className="menu-item menu-item-skills row-span-2 col-span-3 order-2 lg:order-3 lg:col-span-1"
          >
            <Tooltip tooltipText="1< year">
              <div className="text-center skill-icon">
                <svg 
                  fill="#fff" 
                  width="800px" 
                  height="800px" 
                  viewBox="0 0 24 24" 
                  role="img" 
                  xmlns="http://www.w3.org/2000/svg">
                    <title>Stencyl icon</title>
                    <path d="M14.36,2.675c-0.959,0.12-1.901,0.366-2.783,0.759L9.389,1.622l0.433,2.835 c-0.758,0.567-1.41,1.25-1.935,2.038L4.982,6l1.951,2.352c-0.31,0.817-0.502,1.677-0.589,2.548L3.374,12l2.952,1.099 c0.083,0.883,0.258,1.763,0.565,2.597l-1.894,2.283l2.819-0.426c0.541,0.811,1.229,1.518,2.025,2.08l-0.47,2.751l2.247-1.806 c0.864,0.333,1.78,0.523,2.705,0.597L15.372,24l1.059-2.846c1.418-0.144,2.841-0.46,4.103-1.144 c-0.229-1.019-0.468-2.035-0.692-3.055c-2.042,1.044-4.605,1.442-6.736,0.403c-1.763-0.896-2.773-2.842-2.911-4.785 c-0.152-2.15,0.502-4.51,2.314-5.801c1.724-1.192,4.024-1.208,5.964-0.586c0.428,0.149,0.836,0.353,1.224,0.603 c0.306-1.052,0.616-2.104,0.93-3.154c-1.32-0.674-2.811-0.98-4.291-1.044L15.372,0L14.36,2.675z"/>
                </svg>
                <p className="mt-1 lg:mt-2">Stencyl</p>
              </div>
            </Tooltip>
            <div className="menu-item-overlay">
              <span>
                Skills Unlocked
              </span>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default GamePortfolio;
