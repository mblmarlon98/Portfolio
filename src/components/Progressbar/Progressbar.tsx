import React from "react";
import "./Progressbar.scss";

export interface ProgressbarProps {
  progress: number; // Represents the percentage of progress (0-100)
}

export default class Progressbar extends React.Component<ProgressbarProps> {
  public render() {
    const { progress } = this.props;

    // Calculate the color dynamically based on progress
    const progressColor = `hsl(${progress}, 70%, 50%)`;

    return (
      <div className="progress-bar">
        <div className="relative h-6 rounded-full bg-gray-200">
          <div
            className="absolute top-0 left-0 h-full rounded-full transition-all"
            style={{
              width: `${progress}%`,
              backgroundColor: progressColor,
            }}
          >
            <span className="progress-label">{progress}%</span>
          </div>
        </div>
      </div>
    );
  }
}
