import React from "react";
import "./GamePortfolio.scss";
import { Link } from "react-router-dom";
import { gameProjects } from '../../../data/gameProjects';
import { ProjectDetail } from "../../../types/Project";

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
      <div className="game-portfolio">
        {/* Grid Layout */}
        <div className="grid">
          {/* Three Menu Options */}
          <div className="menu-item">Projects</div>
          <div className="menu-item">Skills & Tools</div>
          <div className="menu-item">Menu Option 3</div>

          {/* Slider */}
          <div
            className="slider"
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
                    to={`/portfolio/game/projects/${encodeURIComponent(
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
        </div>
      </div>
    );
  }
}

export default GamePortfolio;
