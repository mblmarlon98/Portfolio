import React, { Component } from "react";
import "./ProjectDetailComponent.scss";
import { ProjectDetail } from "../../types/Project";
import GameWrapper from "../GameWrapper/GameWrapper";
import Progressbar from '../Progressbar/Progressbar';
import Dropdown from "../Dropdown/Dropdown";
import ScreenshotSection from "./Sections/Screenshots";

type ProjectDetailProps = {
  projectDetail: ProjectDetail;
};

type ProjectDetailState = {
  progress: number;
};

class ProjectDetailComponent extends Component<ProjectDetailProps, ProjectDetailState> {
  constructor(props: ProjectDetailProps) {
    super(props);
    this.state = {
      progress: 0,
    };
  }

  componentDidMount() {
    this.animateProgressBar();
  }

  animateProgressBar = () => {
    const { progress } = this.props.projectDetail;
    let currentProgress = 0;

    const interval = setInterval(() => {
      if (currentProgress >= progress) {
        clearInterval(interval);
      } else {
        currentProgress += (progress - currentProgress) / 10;
        this.setState({ progress: Math.ceil(currentProgress) });
      }
    }, 50);
  };


  renderFeatures = () => {
    const { features } = this.props.projectDetail;

    return (
      <section className="features">
        <h3 className="text-3xl">Features</h3>
        {features?.map((feature, index) => (
            <Dropdown title={feature.name}>
                <div className="feature-details grid grid-cols-2 gap-4">
                    <div>
                        <img src={feature.screenshots[0]?.url} alt={feature.screenshots[0]?.alt} />
                        <p>{feature.description}</p>
                        </div>
                        <div>
                        <h4>Code:</h4>
                        {feature.codeScreenshots.map((code, idx) => (
                            <div key={idx} className="code-item flex">
                                <img src={code.url} alt={code.alt} />
                                <p>Explanation of the code snippet above.</p>
                            </div>
                        ))}
                    </div>
                </div>

            </Dropdown>
        ))}
      </section>
    );
  };

  renderChallenges = () => {
    const { challenges } = this.props.projectDetail;

    return (
      <section className="challenges">
        <h3 className="text-3xl">Challenges and Solutions</h3>
        {challenges?.map((challenge, index) => (
            <Dropdown title={`Challenge ${index + 1}`}>
              <div className="challenge-details grid grid-cols-2 gap-4">
                <div>
                  <img src={challenge.screenshots[0]?.url} alt={challenge.screenshots[0]?.alt} />
                  <p>{challenge.description}</p>
                </div>
                <div>
                  <h4>Code:</h4>
                  {challenge.codeScreenshots.map((code, idx) => (
                    <div key={idx} className="code-item flex">
                      <img src={code.url} alt={code.alt} />
                      <p>Explanation of the code snippet above.</p>
                    </div>
                  ))}
                </div>
                </div>
            </Dropdown>
        ))}
      </section>
    );
  };

  render() {
    const { projectDetail } = this.props;
    const { progress } = this.state;

    return (
      <div className="project-detail max-w-5xl mx-auto">
        <header className="project-header text-center mb-4">
            <div className="flex items-center justify-between">
                <h1>{projectDetail.title}</h1>
            </div>
        </header>

        {/* Section With basic information  */}
        <section className="mb-6">
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    <p>{projectDetail.description}</p>
                </div>
                <div className="border-l pl-4">
                    <div>
                        <strong>Year:</strong> {projectDetail.year}
                    </div>
                    <div>
                        <strong>Role:</strong> {projectDetail.role}
                    </div>
                    <div>
                        <strong>Tools:</strong> XXX
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <strong className="mr-4">Progress:</strong>
                        <div className="w-full">
                            <Progressbar progress={progress}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        {/* Screenshots */}
        {projectDetail.screenshots && projectDetail.screenshots.length > 0 && (
            <ScreenshotSection screenshots={projectDetail.screenshots} />
        )}
  
        <GameWrapper folderName={projectDetail.folderName} />
        {this.renderFeatures()}
        {this.renderChallenges()}
      </div>
    );
  }
}

export default ProjectDetailComponent;
