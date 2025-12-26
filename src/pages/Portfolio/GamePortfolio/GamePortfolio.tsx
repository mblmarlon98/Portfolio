import React from "react";
import "./GamePortfolio.scss";
import { Link } from "react-router-dom";
import { gameProjects } from '../../../data/gameProjects';
import { ProjectDetail } from "../../../types/Project";
import Tooltip from "../../../components/Tooltip/Tooltip";

type GamePortfolioState = {
  currentSlide: number;
  isHovered: boolean;
  hp: number;
  score: number;
  showScoreIncrease: boolean;
  lastScoreIncrease: number;
  showMenu: boolean;
};

class GamePortfolio extends React.Component<{}, GamePortfolioState> {
  sliderInterval: NodeJS.Timeout | null = null;
  hpInterval: NodeJS.Timeout | null = null;
  scoreInterval: NodeJS.Timeout | null = null;

  constructor(props: {}) {
    super(props);
    this.state = {
      currentSlide: 0,
      isHovered: false,
      hp: 50,
      score: 999999,
      showScoreIncrease: false,
      lastScoreIncrease: 0,
      showMenu: false,
    };
  }

  componentDidMount() {
    this.startSlider();
    this.startHpAnimation();
    this.startScoreAnimation();
    const navbar = document.getElementById("navbar");
    if (navbar) {
      if(!navbar.classList.contains("bg-dark")) {
        navbar.classList.add("bg-dark");
      }
    }
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentDidUpdate() {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      if(!navbar.classList.contains("bg-dark")) {
        navbar.classList.add("bg-dark");
      }
    }
  }

  componentWillUnmount() {
    this.stopSlider();
    if (this.hpInterval) clearInterval(this.hpInterval);
    if (this.scoreInterval) clearInterval(this.scoreInterval);
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('keydown', this.handleKeyPress);
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

  startHpAnimation = () => {
    let time = 0;
    this.hpInterval = setInterval(() => {
      // Cosine wave animation: oscillates between 20 and 100
      const hp = 60 + 40 * Math.cos(time * 0.05);
      this.setState({ hp });
      time++;
    }, 100);
  };

  startScoreAnimation = () => {
    this.scoreInterval = setInterval(() => {
      // Randomly add points every 3-7 seconds
      const randomPoints = Math.floor(Math.random() * 500) + 100;
      this.setState(prevState => ({
        score: prevState.score + randomPoints,
        showScoreIncrease: true,
        lastScoreIncrease: randomPoints,
      }));

      // Hide the score increase indicator after 1.5 seconds
      setTimeout(() => {
        this.setState({ showScoreIncrease: false });
      }, 1500);
    }, Math.random() * 4000 + 3000);
  };

  navigateToSlide = (index: number) => {
    this.setState({ currentSlide: index });
  };

  handleHover = (hovered: boolean) => {
    this.setState({ isHovered: hovered });
  };

  handleMouseMove = (e: MouseEvent) => {
    const el = document.querySelector('.game-portfolio') as HTMLElement | null;
    if (!el) return;
    const dx = (e.clientX - window.innerWidth / 2) / window.innerWidth;
    const dy = (e.clientY - window.innerHeight / 2) / window.innerHeight;
    el.style.setProperty('--px', `${dx * 18}px`);
    el.style.setProperty('--py', `${dy * 18}px`);
  };

  getHpColor = (hp: number): string => {
    if (hp < 33) return '#ff0000'; // Red
    if (hp < 66) return '#ffff00'; // Yellow
    return '#00ff00'; // Green
  };

  handleKeyPress = (e: KeyboardEvent) => {
    // ESC - Toggle menu
    if (e.key === 'Escape') {
      this.setState(prevState => ({ showMenu: !prevState.showMenu }));
      return;
    }

    // Ignore keys if menu is open
    if (this.state.showMenu) return;

    // Arrow keys - Navigate slides
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      this.setState(prevState => ({
        currentSlide: prevState.currentSlide > 0
          ? prevState.currentSlide - 1
          : gameProjects.projectList.length - 1
      }));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      this.setState(prevState => ({
        currentSlide: (prevState.currentSlide + 1) % gameProjects.projectList.length
      }));
    }
    // Space or Enter - Navigate to current project
    else if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      const projectPath = `/my-portfolio/game/projects/${encodeURIComponent(
        gameProjects.projectList[this.state.currentSlide].title.toLowerCase().replace(/\s+/g, "-")
      )}`;
      window.location.href = projectPath;
    }
    // A key - Navigate to all projects
    else if (e.key === 'a' || e.key === 'A') {
      window.location.href = '/my-portfolio/game/projects';
    }
    // B key - Navigate to web portfolio
    else if (e.key === 'b' || e.key === 'B') {
      window.location.href = '/my-portfolio/web';
    }
  };

  render() {
    const { currentSlide, hp, score, showScoreIncrease, lastScoreIncrease, showMenu } = this.state;
    const hpColor = this.getHpColor(hp);

    return (
      <div className="game-portfolio max-w-screen-xl mx-auto">
        {/* Pause Menu */}
        {showMenu && (
          <div className="pause-menu">
            <div className="pause-menu-content">
              <h2 className="pause-title">GAME PAUSED</h2>
              <div className="pause-options">
                <button className="pause-option" onClick={() => this.setState({ showMenu: false })}>
                  <span className="option-key">[ESC]</span>
                  <span className="option-text">Resume</span>
                </button>
                <a href="/my-portfolio/game/projects" className="pause-option">
                  <span className="option-key">[A]</span>
                  <span className="option-text">All Projects</span>
                </a>
                <a href="/my-portfolio/web" className="pause-option">
                  <span className="option-key">[B]</span>
                  <span className="option-text">Web Portfolio</span>
                </a>
                <a href="/" className="pause-option">
                  <span className="option-key">[H]</span>
                  <span className="option-text">Home</span>
                </a>
              </div>
              <p className="pause-hint">Press ESC to resume</p>
            </div>
          </div>
        )}
        {/* Retro Gaming HUD */}
        <div className="game-hud">
          <div className="hud-container max-w-screen-xl mx-auto">
            <div className="hud-left">
              <div className="hud-item">
                <span className="hud-label">LVL</span>
                <span className="hud-value">99</span>
              </div>
              <div className="hud-item hp-bar">
                <span className="hud-label">HP</span>
                <div className="hp-container">
                  <div
                    className="hp-fill"
                    style={{
                      width: `${hp}%`,
                      background: `linear-gradient(to right, ${hpColor}, ${hpColor})`,
                      boxShadow: `0 0 10px ${hpColor}80`
                    }}
                  ></div>
                </div>
              </div>
              <div className="hud-item">
                <span className="hud-label">XP</span>
                <span className="hud-value">9999</span>
              </div>
            </div>
            <div className="hud-right">
              <div className="hud-item score-item">
                <span className="hud-label">SCORE</span>
                <span className="hud-value">{score.toLocaleString()}</span>
                {showScoreIncrease && <span className="score-increase">+{lastScoreIncrease}</span>}
              </div>
              <div className="hud-item">
                <span className="hud-label">COMBO</span>
                <span className="hud-value">x{currentSlide + 1}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scan-line overlay */}
        <div className="scanlines"></div>

        {/* Quest tracker - top right */}
        <div className="quest-tracker animate__animated animate__fadeInRight">
          <div className="quest-header">
            <span className="quest-icon">⚔</span>
            <span className="quest-title">MAIN QUEST</span>
          </div>
          <div className="quest-content">
            <p className="quest-name">Discover Game Projects</p>
            <div className="quest-objectives">
              <div className="objective completed">✓ View Featured Games</div>
              <div className="objective completed">✓ Check Skills</div>
              <div className="objective active">→ Browse All Projects</div>
            </div>
          </div>
        </div>

        {/* Controls hint - bottom right */}
        <div className="controls-hint animate__animated animate__fadeInUp">
          <div className="hint-header">CONTROLS</div>
          <div className="hint-item">
            <span className="hint-key">[←][→]</span>
            <span className="hint-action">Navigate</span>
          </div>
          <div className="hint-item">
            <span className="hint-key">[SPACE]</span>
            <span className="hint-action">Select</span>
          </div>
          <div className="hint-item">
            <span className="hint-key">[A]</span>
            <span className="hint-action">All Projects</span>
          </div>
          <div className="hint-item">
            <span className="hint-key">[ESC]</span>
            <span className="hint-action">Menu</span>
          </div>
        </div>

        {/* Mini stats - bottom left */}
        <div className="mini-stats animate__animated animate__fadeInLeft">
          <div className="stat-item">
            <span className="stat-icon">🎮</span>
            <span className="stat-label">Projects</span>
            <span className="stat-value">{gameProjects.projectList.length}</span>
          </div>
          <div className="stat-item">
            <span className="stat-icon">⭐</span>
            <span className="stat-label">Skills</span>
            <span className="stat-value">3</span>
          </div>
        </div>

        {/* Inventory Header */}
        <div className="inventory-header animate__animated animate__fadeInDown" style={{ animationDelay: '0.2s' }}>
          <div className="inventory-tabs">
            <div className="tab active">
              <span className="tab-icon">🎮</span>
              <span className="tab-name">PROJECTS</span>
            </div>
            <div className="tab disabled">
              <span className="tab-icon">⚔️</span>
              <span className="tab-name">WEAPONS</span>
            </div>
            <div className="tab disabled">
              <span className="tab-icon">🛡️</span>
              <span className="tab-name">ARMOR</span>
            </div>
          </div>
          <div className="inventory-info">
            <span className="inventory-weight">Weight: {gameProjects.projectList.length}/12</span>
          </div>
        </div>

        {/* Inventory Grid with 3 columns */}
        <div className="inventory-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto px-4 lg:px-8 animate__animated animate__fadeInUp" style={{ animationDelay: '0.3s' }}>

          {/* Featured Slider */}
          <div
            className="inventory-slot slider col-span-1 md:col-span-2 lg:col-span-2"
            onMouseEnter={() => this.handleHover(true)}
            onMouseLeave={() => this.handleHover(false)}
          >
            <div className="slot-corner top-left"></div>
            <div className="slot-corner top-right"></div>
            <div className="slot-corner bottom-left"></div>
            <div className="slot-corner bottom-right"></div>

            {/* Game-style label */}
            <div className="slider-label">
              <span className="label-text">⭐ FEATURED PROJECT</span>
            </div>

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
            <Link to={`/my-portfolio/game/projects/${encodeURIComponent(
                      gameProjects.projectList[currentSlide].title.toLowerCase().replace(/\s+/g, "-")
                    )}`} className="description-overlay">
              <h2>{gameProjects.projectList[currentSlide].title}</h2>
              <p>{gameProjects.projectList[currentSlide].description}</p>
            </Link>

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

            {/* Navigation button prompts */}
            <div className="slider-controls">
              <span className="control-prompt left">[←] PREV</span>
              <span className="control-prompt right">[→] NEXT</span>
            </div>
          </div>

          {/* All Projects Button */}
          <Link
            to={"/my-portfolio/game/projects"}
            className="inventory-slot menu-item all-projects-btn"
          >
            <div className="slot-corner top-left"></div>
            <div className="slot-corner top-right"></div>
            <div className="slot-corner bottom-left"></div>
            <div className="slot-corner bottom-right"></div>
            <div className="item-rarity">LEGENDARY</div>
            <div className="btn-content">
              <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 3H3V9H9V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 3H15V9H21V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 15H15V21H21V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 15H3V21H9V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>All Projects</span>
              <span className="arrow">→</span>
            </div>
            <span className="button-prompt">[A]</span>
          </Link>

          {/* Skills Slot */}
          <div className="inventory-slot menu-item menu-item-skills col-span-1 md:col-span-2 lg:col-span-3">
            <div className="slot-corner top-left"></div>
            <div className="slot-corner top-right"></div>
            <div className="slot-corner bottom-left"></div>
            <div className="slot-corner bottom-right"></div>
            <div className="item-rarity">RARE</div>
            <div className="flex-1 flex flex-wrap justify-center items-center gap-4">
              <Tooltip tooltipText="1< year">
                <div className="text-center skill-icon">
                  <svg fill="#fff" width="90px" height="90px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.36,2.675c-0.959,0.12-1.901,0.366-2.783,0.759L9.389,1.622l0.433,2.835 c-0.758,0.567-1.41,1.25-1.935,2.038L4.982,6l1.951,2.352c-0.31,0.817-0.502,1.677-0.589,2.548L3.374,12l2.952,1.099 c0.083,0.883,0.258,1.763,0.565,2.597l-1.894,2.283l2.819-0.426c0.541,0.811,1.229,1.518,2.025,2.08l-0.47,2.751l2.247-1.806 c0.864,0.333,1.78,0.523,2.705,0.597L15.372,24l1.059-2.846c1.418-0.144,2.841-0.46,4.103-1.144 c-0.229-1.019-0.468-2.035-0.692-3.055c-2.042,1.044-4.605,1.442-6.736,0.403c-1.763-0.896-2.773-2.842-2.911-4.785 c-0.152-2.15,0.502-4.51,2.314-5.801c1.724-1.192,4.024-1.208,5.964-0.586c0.428,0.149,0.836,0.353,1.224,0.603 c0.306-1.052,0.616-2.104,0.93-3.154c-1.32-0.674-2.811-0.98-4.291-1.044L15.372,0L14.36,2.675z"/>
                  </svg>
                  <p className="mt-1 lg:mt-2">Stencyl</p>
                </div>
              </Tooltip>

              <Tooltip tooltipText="3+ years">
                <div className="text-center skill-icon">
                  <svg width="90px" height="90px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <path d="M63.22 25.42L56.387 0 30.87 6.814l-3.775 6.637-7.647-.055L.78 32.005l18.67 18.604 7.658-.057 3.78 6.637 25.5 6.81 6.832-25.418L59.34 32zm-16-15.9L36.036 28.86H13.644l14.094-14.34zM36.036 35.145l11.196 19.338-19.507-5.012L13.63 35.15h22.392zm5.468-3.14L52.7 12.665l5.413 19.34L52.7 51.34z" fill="#fff"/>
                  </svg>
                  <p className="mt-1 lg:mt-2">Unity</p>
                </div>
              </Tooltip>

              <Tooltip tooltipText="2+ years">
                <div className="text-center skill-icon">
                  <svg width="90px" height="90px" viewBox="0 -144 512 512" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                    <path d="M83.962837,67.0712157 C84.1665793,66.9716564 84.3715417,66.8732943 84.5777239,66.7761299 C90.2759851,64.090034 96.9116957,62.7445007 104.482868,62.7445007 C112.051057,62.7445007 118.687265,64.090531 124.385029,66.7761299 C130.082793,69.4612317 134.849072,73.0609183 138.676908,77.5677339 C142.504744,82.0745495 145.378727,87.2558714 147.292397,93.105735 C149.206563,98.9551015 150.16638,105.044049 150.16638,111.372082 C150.16638,117.700114 149.206563,123.791547 147.292397,129.640914 C145.378727,135.490777 142.504744,140.671602 138.676908,145.179412 C134.849072,149.685731 130.082793,153.263547 124.385029,155.906399 C118.687265,158.546268 112.051057,159.870925 104.482868,159.870925 C96.9121927,159.870925 90.2759851,158.546765 84.5777239,155.906399 C83.3840106,155.352706 82.2311826,154.757976 81.1193039,154.122268 C110.811723,181.042475 167.976724,199.268158 233.622743,199.268158 C287.02058,199.268158 334.878717,188.459157 366.832025,169.469095 C331.863072,201.262351 269.488387,223.687573 198.269566,223.675644 C88.7584701,223.660732 -0.00944408255,173.571804 -2.84217094e-14,111.807007 C0.00944408255,50.0412156 88.7937612,-0.017392461 198.30436,4.53314169e-06 C269.807497,0.0109397866 332.344721,22.5077385 367.223209,54.5246695 C335.268907,35.4158111 287.216421,24.4064962 233.622743,24.4064962 C170.014198,24.4064962 114.368385,41.5183846 83.9628458,67.0712083 Z M73.3198804,125.266315 C74.5689846,129.821843 76.5303714,133.921071 79.2060291,137.564002 C81.8796986,141.208424 85.311877,144.136586 89.5040556,146.350478 C93.6927547,148.563376 98.6846979,149.667339 104.482868,149.667339 C110.278552,149.667339 115.269998,148.563376 119.462177,146.350478 C123.650876,144.136586 127.083551,141.208424 129.759706,137.564002 C132.432878,133.921071 134.393768,129.821843 135.642375,125.266315 C136.890982,120.710291 137.515783,116.090147 137.515783,111.405385 C137.515783,106.720623 136.890982,102.103957 135.642375,97.5479332 C134.393768,92.9919089 132.432381,88.8931771 129.759706,85.2472642 C127.083054,81.6048306 123.650876,78.6771651 119.462177,76.4637703 C115.269998,74.2503756 110.278055,73.1434297 104.482868,73.1434297 C98.6846979,73.1434297 93.6932518,74.2503756 89.5040556,76.4637703 C85.311877,78.6776621 81.8796986,81.6053277 79.2060291,85.2472642 C76.5298744,88.8931771 74.5689846,92.9919089 73.3198804,97.5479332 C72.0712733,102.10346 71.4499521,106.720623 71.4499521,111.405385 C71.4499521,116.090147 72.0712733,120.710291 73.3198804,125.266315 Z M168.984957,98.654879 L168.984957,106.674893 L169.185768,106.674893 C170.824068,103.391335 173.399817,101.002976 176.91401,99.5127994 C180.428203,98.0231196 184.290336,97.2780312 188.507367,97.2780312 C193.189147,97.2780312 197.267996,98.1180575 200.743916,99.7981101 C204.21735,101.478163 207.10376,103.747228 209.407122,106.607294 C211.709987,109.470839 213.445213,112.769806 214.618764,116.507674 C215.789333,120.247034 216.375861,124.21504 216.375861,128.411692 C216.375861,132.608841 215.807724,136.57635 214.677914,140.316704 C213.545121,144.056063 211.82928,147.318745 209.525918,150.102761 C207.223053,152.886777 204.333164,155.081781 200.85973,156.681807 C197.382816,158.282828 193.345223,159.085078 188.738996,159.085078 C187.254783,159.085078 185.59511,158.932481 183.762461,158.628283 C181.927327,158.31961 180.113566,157.826033 178.318693,157.1391 C176.524317,156.452167 174.823388,155.513227 173.223362,154.330728 C171.623336,153.147235 170.277305,151.678929 169.185271,149.91885 L168.98446,149.91885 L168.98446,180.47344 L158.943909,180.47344 L158.943909,98.654879 L168.984957,98.654879 Z M204.622451,119.69878 C203.881836,117.068355 202.756002,114.722743 201.237493,112.662442 C199.718487,110.602638 197.770521,108.96235 195.395086,107.742572 C193.016668,106.522297 190.234143,105.911911 187.043037,105.911911 C183.691879,105.911911 180.849707,106.562061 178.515031,107.858883 C176.177372,109.155705 174.270164,110.851166 172.788934,112.948249 C171.308202,115.045333 170.238038,117.430709 169.575958,120.101396 C168.913878,122.771089 168.584329,125.478559 168.584329,128.222313 C168.584329,131.122641 168.932269,133.925545 169.635605,136.63202 C170.334964,139.342969 171.445886,141.724369 172.964892,143.785167 C174.482904,145.845468 176.447274,147.504147 178.863468,148.761702 C181.279164,150.020747 184.200865,150.649524 187.626582,150.649524 C191.052796,150.649524 193.914353,150.002853 196.211253,148.706031 C198.508153,147.40921 200.359691,145.692872 201.761888,143.555527 C203.161601,141.421661 204.174603,138.981609 204.798906,136.234375 C205.420228,133.487141 205.733871,130.666342 205.733871,127.766512 C205.732877,125.020769 205.362569,122.332188 204.622451,119.69878 Z M267.58615,154.054364 C263.048516,157.408505 257.341805,159.085078 250.457069,159.085078 C245.60629,159.085078 241.398703,158.322593 237.840769,156.798616 C234.279356,155.272154 231.286576,153.134809 228.860938,150.387575 C226.435797,147.640838 224.616071,144.360759 223.404743,140.543859 C222.193912,136.728946 221.509962,132.568579 221.352892,128.068226 C221.352892,123.567375 222.055731,119.447269 223.467372,115.706419 C224.876032,111.966562 226.852827,108.722768 229.397759,105.975534 C231.942194,103.2283 234.957341,101.094932 238.44022,99.5679727 C241.923098,98.0415107 245.74149,97.2780312 249.892909,97.2780312 C255.295919,97.2780312 259.77639,98.3690713 263.340289,100.546181 C266.905182,102.725776 269.763259,105.497365 271.915516,108.86095 C274.06827,112.22702 275.558446,115.896791 276.380579,119.869768 C277.202711,123.846224 277.535242,127.629821 277.378669,131.223046 L231.995876,131.223046 C231.917341,133.813707 232.228002,136.269666 232.93084,138.593407 C233.633679,140.917148 234.763489,142.974467 236.325739,144.765364 C237.888486,146.555266 239.877708,147.980825 242.299867,149.047509 C244.719043,150.114691 247.568174,150.648033 250.846762,150.648033 C255.060314,150.648033 258.515357,149.695175 261.207417,147.784488 C263.899478,145.874298 265.674966,142.971485 266.534874,139.071576 L276.38704,139.071576 C275.056419,145.706292 272.123286,150.700224 267.58615,154.054364 Z M265.153553,116.07772 C264.257359,114.023384 263.049014,112.251376 261.530504,110.76766 C260.008516,109.283945 258.21414,108.103435 256.148869,107.226627 C254.081112,106.349818 251.800117,105.911414 249.305885,105.911414 C246.733118,105.911414 244.411365,106.349818 242.34659,107.226627 C240.278833,108.103435 238.506328,109.302337 237.025098,110.822834 C235.543869,112.346313 234.373797,114.118819 233.51687,116.135876 C232.657459,118.15343 232.151952,120.30519 231.995379,122.589167 L266.736182,122.589167 C266.578615,120.30519 266.051735,118.134542 265.153553,116.07772 Z M293.471386,98.654879 L293.471386,108.051741 L293.65977,108.051741 C297.81964,100.871256 304.418569,97.2780312 313.451585,97.2780312 C317.455379,97.2780312 320.792619,97.8143557 323.466289,98.8845194 C326.135982,99.954683 328.295197,101.444363 329.945427,103.35505 C331.595656,105.264743 332.753799,107.53679 333.421843,110.17318 C334.086905,112.810068 334.422916,115.732266 334.422916,118.941762 L334.422916,157.908544 L324.382862,157.908544 L324.382862,117.82239 C324.382862,114.158583 323.283869,111.258256 321.090854,109.118425 C318.894856,106.98108 315.879708,105.910917 312.041931,105.910917 C308.987019,105.910917 306.341185,106.371192 304.107411,107.287765 C301.873637,108.204835 300.012656,109.501159 298.525461,111.181212 C297.039261,112.861264 295.921877,114.826628 295.178279,117.076805 C294.4317,119.329964 294.060895,121.791887 294.060895,124.465557 L294.060895,157.907053 L284.020841,157.907053 L284.020841,98.654879 L293.471386,98.654879 Z M403.830461,157.264358 C399.296804,159.131801 394.718412,160.067263 390.100256,160.067263 C382.80843,160.067263 376.25374,158.82462 370.430717,156.347785 C364.606701,153.867968 359.697269,150.452689 355.696457,146.098967 C351.695646,141.748725 348.629798,136.635003 346.495933,130.760783 C344.363061,124.887061 343.296377,118.552567 343.296377,111.764757 C343.296377,104.805462 344.360576,98.3422302 346.487483,92.3795347 C348.615384,86.4193245 351.673775,81.2201085 355.664646,76.7803956 C359.65651,72.3406827 364.560474,68.8612839 370.380018,66.3347433 C376.200058,63.8116821 382.754748,62.5486603 390.046574,62.5486603 C394.934632,62.5486603 399.666615,63.2688959 404.243515,64.7073787 C408.821907,66.1478499 412.954439,68.2633243 416.64459,71.0533052 C420.333747,73.843286 423.377226,77.2829202 425.777018,81.3697227 C428.177803,85.4595075 429.646606,90.1502342 430.179451,95.4478674 L410.180861,95.4478674 C408.935236,90.2392074 406.534451,86.3298543 402.979499,83.7242816 C399.421565,81.1182119 395.111087,79.8154255 390.046077,79.8154255 C385.333977,79.8154255 381.333165,80.7071457 378.045133,82.4915803 C374.757101,84.2760148 372.089396,86.6708353 370.04351,89.6720654 C367.998121,92.6762777 366.510926,96.0915562 365.579938,99.9208832 C364.64398,103.75021 364.180226,107.708275 364.180226,111.79806 C364.180226,115.71636 364.646962,119.523816 365.581927,123.221423 C366.517885,126.918533 368.008062,130.24782 370.053451,133.206801 C372.098841,136.164787 374.769528,138.534754 378.063524,140.319189 C381.355533,142.103623 385.361315,142.995841 390.081368,142.995841 C397.021774,142.995841 402.380546,141.285965 406.163646,137.863727 C409.947741,134.442484 412.150698,129.481856 412.775001,122.982339 L391.709229,122.982339 L391.709229,107.677457 L431.651237,107.677457 L431.651237,157.979126 L418.360927,157.979126 L416.233027,147.426607 C412.499632,152.116836 408.364118,155.397412 403.830461,157.264358 Z M465.597743,64.9027221 L465.597743,140.641282 L512,140.641282 L512,157.90755 L444.713397,157.90755 L444.713397,64.9027221 L465.597743,64.9027221 Z" fill="#fff" fill-rule="nonzero"/>
                  </svg>
                  <p className="mt-1 lg:mt-2">OpenGL</p>
                </div>
              </Tooltip>
            </div>
            <Link to="/my-portfolio/web" className="web-dev-link">
              View Web Dev →
            </Link>
          </div>

        </div>
      </div>

    );
  }
}

export default GamePortfolio;
