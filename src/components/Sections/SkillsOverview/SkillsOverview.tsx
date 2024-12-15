import React, { Component, createRef } from "react";
import { Link } from "react-router-dom";

interface LineCoords {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

class SkillsOverview extends Component {
  redRef = createRef<HTMLDivElement>();
  blueRefs = Array.from({ length: 3 }, () => createRef<HTMLDivElement>());
  greenRefs = Array.from({ length: 3 }, () => createRef<HTMLDivElement>());

  state: {
    lines: LineCoords[];
  } = {
    lines: [], // Initialize with an empty array
  };

  updateLineCoords = () => {
    const redElement = this.redRef.current?.getBoundingClientRect();
    if (!redElement) return;

    const lines: LineCoords[] = []; // Use proper type here

    this.blueRefs.forEach((ref) => {
      const blueElement = ref.current?.getBoundingClientRect();
      if (blueElement) {
        lines.push({
          x1: blueElement.left + blueElement.width / 2,
          y1: blueElement.top + blueElement.height / 2,
          x2: redElement.left + redElement.width / 2,
          y2: redElement.top + redElement.height / 2,
        });
      }
    });

    this.greenRefs.forEach((ref) => {
      const greenElement = ref.current?.getBoundingClientRect();
      if (greenElement) {
        lines.push({
          x1: greenElement.left + greenElement.width / 2,
          y1: greenElement.top + greenElement.height / 2,
          x2: redElement.left + redElement.width / 2,
          y2: redElement.top + redElement.height / 2,
        });
      }
    });

    this.setState({ lines });
  };

  componentDidMount() {
    this.updateLineCoords();
    const scrollContainer = document.getElementById("scroll_snap_container");
    scrollContainer?.addEventListener("scroll", this.updateLineCoords);
    window.addEventListener("resize", this.updateLineCoords);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateLineCoords);
  }

  render() {
    const { lines } = this.state;

    return (
      <section className="relative w-full h-screen bg-gray-800 text-white p-8">
        {/* Column 1: Blue Elements */}
        <div className="grid grid-cols-3 gap-4 w-full">

            <div>
                {this.blueRefs.map((ref, index) => (
                <div
                    ref={ref}
                    key={`blue-${index}`}
                    className="bg-blue-500 text-white p-4 rounded-full flex items-center justify-center mt-6"
                >
                    Blue {index + 1}
                </div>
                ))}
            </div>

            {/* Column 2: Red Element */}
            <div
            ref={this.redRef}
            className="bg-red-500 text-white p-4 rounded-full flex items-center justify-center"
            >
            Red Element
            </div>

            {/* Column 3: Green Elements */}
            <div>
                {this.greenRefs.map((ref, index) => (
                <div
                    ref={ref}
                    key={`green-${index}`}
                    className="bg-green-500 text-white p-4 rounded-full flex items-center justify-center mt-6"
                >
                    Green {index + 1}
                </div>
                ))}
                <Link to={"/my-portfolio/game"} className="btn btn-white">More</Link>
            </div>

        </div>
            {/* Lines */}
            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {lines.map((line, index) => (
                <line
                key={index}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="white"
                strokeWidth="2"
                strokeDasharray="4"
                />
            ))}
            </svg>
      </section>
    );
  }
}

export default SkillsOverview;
