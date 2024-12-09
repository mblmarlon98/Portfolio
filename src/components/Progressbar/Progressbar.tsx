import * as React from 'react';
import "./Progressbar.scss";

export interface ProgressbarProps {
    progress: number;
}

export default class Progressbar extends React.Component <ProgressbarProps> {
    public render() {
        const {progress} = this.props;
        return (
            <div className="progress-bar">
                <div className="relative h-4 rounded-full bg-gray-200">
                    <div
                        className="absolute top-0 left-0 h-full rounded-full transition-all"
                        style={{
                        width: `${progress}%`,
                        backgroundColor: `hsl(${progress}, 70%, 50%)`
                    }}></div>
                </div>
            </div>
        );
    }
}
