import React from "react";
import "./Progressbar.scss";

export interface ProgressbarProps {
  progress: number; // Represents the percentage of progress (0-100)
}

export default class Progressbar extends React.Component<ProgressbarProps> {
  public render() {
    const { progress } = this.props;

    // Cyberpunk gradient based on progress
    const progressGradient = progress > 50
      ? `linear-gradient(90deg, #00ff88 0%, #00cc6a 100%)`
      : progress > 25
      ? `linear-gradient(90deg, #ffaa00 0%, #ff8800 100%)`
      : `linear-gradient(90deg, #ff0066 0%, #cc0044 100%)`;

    return (
      <div className="progress-bar">
        <div className="relative h-6 rounded-full bg-gray-200">
          <span className="progress-text">Progress</span>
          <div
            className="absolute top-0 left-0 h-full rounded-full transition-all"
            style={{
              width: `${progress}%`,
              background: progressGradient,
              boxShadow: `0 0 15px ${progress > 50 ? 'rgba(0, 255, 136, 0.6)' : progress > 25 ? 'rgba(255, 170, 0, 0.6)' : 'rgba(255, 0, 102, 0.6)'}`,
            }}
          >
            <span className="progress-label">{progress}%</span>
          </div>
        </div>
      </div>
    );
  }
}
