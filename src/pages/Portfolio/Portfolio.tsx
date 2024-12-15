import React from "react";
import { withRouter } from "../../utils/withRouter"; // Import the custom HOC
import "./Portfolio.scss";

class Portfolio extends React.Component<any> {
  state = {
    activeSide: "none", // Initial state: none
    showHint: false, // Show hint animation
  };

  inactivityTimer: NodeJS.Timeout | null = null;

  componentDidMount() {
    this.startHintCycle();
  }

  componentWillUnmount() {
    if (this.inactivityTimer) clearTimeout(this.inactivityTimer);
  }

  // Starts a cycle where the hint animation repeats every 5 seconds after it ends
  startHintCycle = () => {
    if (this.inactivityTimer) clearTimeout(this.inactivityTimer);
    this.inactivityTimer = setInterval(() => {
      if (this.state.activeSide === "none") {
        this.setState({ showHint: true });

        // Disable the hint after animation completes
        setTimeout(() => {
          this.setState({ showHint: false });
        }, 2000); // Hint animation duration
      }
    }, 7000); // 7 seconds = 2s animation + 5s wait
  };

  // Reset the hint cycle when the user interacts
  resetHintCycle = () => {
    this.setState({ showHint: false });
    if (this.inactivityTimer) clearInterval(this.inactivityTimer);
    this.startHintCycle();
  };

  // Handle keydown events for arrow keys and Enter
  handleKeyDown = (event: React.KeyboardEvent) => {
    if (window.innerWidth < 768) return; // Disable keyboard controls on mobile

    if (event.key === "ArrowLeft") this.setState({ activeSide: "web", showHint: false });
    if (event.key === "ArrowRight") this.setState({ activeSide: "game", showHint: false });
    if (event.key === "Enter") this.handleEnter();
    this.resetHintCycle();
  };

  // Handle navigation based on the active side
  handleEnter = () => {
    const { activeSide } = this.state;
    const { navigate } = this.props;

    if (activeSide === "web") navigate("/my-portfolio/web");
    if (activeSide === "game") navigate("/my-portfolio/game");
  };

  // Reset the controller to the center on mouse leave
  handleMouseLeave = () => {
    this.setState({ activeSide: "none", showHint: false });
    this.resetHintCycle();
  };

  // Handle mouse enter to reset inactivity
  handleMouseEnterSide = (side: "web" | "game") => {
    this.setState({ activeSide: side, showHint: false });
    this.resetHintCycle();
  };

  render() {
    const { activeSide, showHint } = this.state;

    return (
      <div
        className="portfolio"
        tabIndex={0}
        onKeyDown={this.handleKeyDown}
        onMouseLeave={this.handleMouseLeave} // Reset controller position on mouse leave
      >
        {/* Left Side: Web Development */}
        <div
          className={`side web ${activeSide === "web" ? "active" : ""}`}
          onMouseEnter={() => this.handleMouseEnterSide("web")}
          onClick={() => this.props.navigate("/my-portfolio/web")}
        >
          <h1 className="title">Web Development</h1>
        </div>

        {/* Controller */}
        <div className={`controller ${activeSide} ${showHint ? "hint" : ""}`}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/icons/Controller.svg`}
            alt="Controller"
            className="controller-image"
          />
        </div>

        {/* Right Side: Game Development */}
        <div
          className={`side game ${activeSide === "game" ? "active" : ""}`}
          onMouseEnter={() => this.handleMouseEnterSide("game")}
          onClick={() => this.props.navigate("/my-portfolio/game")}
        >
          <h1 className="title">Game Development</h1>
        </div>

        {/* Friendly Indicator */}
        <div className="friendly-indicator">
          <p>Pick your interest: Web wizardry or game magic? 🧙🎮</p>
        </div>
      </div>
    );
  }
}

export default Portfolio;
