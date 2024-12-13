import React, { Component } from "react";
import "./ProjectDetailComponent.scss";
import { ProjectDetail } from "../../types/Project";
import GameWrapper from "../GameWrapper/GameWrapper";
import Progressbar from '../Progressbar/Progressbar';
import Dropdown from "../Dropdown/Dropdown";
import ScreenshotSection from "./Sections/Screenshots";
import { gameProjects } from "../../data/gameProjects";
import { Link } from "react-router-dom";
import LightBox from "../Box/LightBox/LightBox";
import StickerBox from "../Box/StickerBox/StickerBox";
import Footer from "../Footer/Footer";

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
        window.addEventListener('scroll', this.updateScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateScroll);
    }


    isPartiallyInViewport = (el : any, percentVisible : any) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        return (!(Math.floor(100 - (((rect.top >= 0
            ? 0
            : rect.top) / -rect.height) * 100)) < percentVisible || Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible));
    };

    updateScroll = () => {
        const navbar = document.getElementById('navbar');

        if (navbar) {

            if (window.scrollY > 0) {
       
                navbar
                    .classList
                    .add('bg-dark');
            } else {
                navbar
                    .classList
                    .remove('bg-dark');
            }
        }
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
      <div className="features">
        <h5 className="mb-4">Features</h5>
        {features?.map((feature, index) => (
            <Dropdown key={`feature-${index + 1}`} title={feature.name}>
                <div className="feature-details grid grid-cols-2 gap-4">
                    <div>
                        <h4>{feature.name}</h4>
                        <img src={feature.screenshots[0]?.url} alt={feature.screenshots[0]?.alt} />
                        <p>{feature.description}</p>
                    </div>
                    <div>
                        <h4>Code:</h4>
                        {feature.codeScreenshots.map((code, idx) => (
                            <div key={idx} className={`${idx > 0 ? ("mt-6" + " ") : ""} code-item flex`}>
                                <img src={code.url} alt={code.alt} />
                                <p>Explanation of the code snippet above.</p>
                            </div>
                        ))}
                    </div>
                </div>

            </Dropdown>
        ))}
      </div>
    );
  };

  renderChallenges = () => {
    const { challenges } = this.props.projectDetail;

    return (
      <div className="challenges">
        <h5 className="mb-4 mt-6">Challenges and Solutions</h5>
        {challenges?.map((challenge, index) => (
            <Dropdown key={`challenge-${index + 1}`} title={`Challenge ${index + 1}`}>
              <div className="challenge-details grid grid-cols-2 gap-4">
                <div>
                  <h4>Code:</h4>
                  <img src={challenge.screenshots[0]?.url} alt={challenge.screenshots[0]?.alt} />
                  <p>{challenge.description}</p>
                </div>
                <div>
                  <h4>Code:</h4>
                  {challenge.codeScreenshots.map((code, idx) => (
                    <div key={idx} className={`${idx > 0 ? ("mt-6" + " ") : ""} code-item flex`}>
                      <img src={code.url} alt={code.alt} />
                      <p>Explanation of the code snippet above.</p>
                    </div>
                  ))}
                </div>
                </div>
            </Dropdown>
        ))}
      </div>
    );
  };

  render() {
    const { projectDetail } = this.props;
    const { progress } = this.state;

    return (
      <div className="project-detail max-w-5xl mx-auto">
        <header className="project-header text-center mb-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <h1 className="text-6xl">{projectDetail.title}</h1>
                    <p className="ml-4">{` - ` + projectDetail.type}</p>
                </div>
                <div>
                    <Link to="" className="btn btn-play">Play</Link>
                </div>
            </div>
        </header>

        {/* Section With basic information  */}
        <section>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-3">

                    <div className="h-full flex flex-col justify-between">
                        <div>
                            <strong>Intro:</strong>
                            <p>{projectDetail.description}</p>
                        </div>

                        <div className="mt-6">
                            <LightBox>
                                <div>
                                    <strong>Rules:</strong>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quod officia iure unde ab vel tenetur mollitia cumque veritatis. Obcaecati autem quibusdam, quidem a possimus veniam quo natus nulla molestias!</p>
                                </div>
                            </LightBox>
                        </div>
                    </div>


                </div>
                <div className="border-l pl-4">
                    <div>
                        <LightBox>
                            <div className="flex justify-between items-center">
                                <strong>Year:</strong> 
                                <StickerBox>
                                    {projectDetail.year}
                                </StickerBox>
                            </div>
                        </LightBox>
                    </div>
                    {projectDetail.roles && projectDetail.roles.length > 0 && (
                        <div className="mt-3">
                            <LightBox>
                                <div className="flex justify-between items-center">
                                    <strong>Role:</strong> 
                                    <div className="flex flex-row">
                                        { projectDetail.roles.map((role, idx) => {
                                            return (
                                                <div className="ml-3">
                                                    <StickerBox key={`role-${idx + 1}`}>
                                                        {role}
                                                    </StickerBox>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </LightBox>
                        </div>
                    )}
                   {projectDetail.tools && projectDetail.tools.length > 0 && (
                        <div className="mt-3">
                            <LightBox>
                                <div className="flex justify-between items-center">
                                    <strong>Tools:</strong> 
                                    <div className="flex flex-row w-full overflow-scroll">
                                        { projectDetail.tools.map((tool, idx) => {
                                            return (
                                                <div className="ml-3">
                                                    <StickerBox key={`role-${idx + 1}`}>
                                                        {tool}
                                                    </StickerBox>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </LightBox>
                        </div>
                    )}
                    {progress && (
                        <div className="mt-3">
                            <LightBox>
                                <div className="w-full flex justify-center items-center">
                                    <strong className="mr-4">Progress:</strong>
                                    <div className="w-full">
                                        <Progressbar progress={progress}/>
                                    </div>
                                </div>
                            </LightBox>
                        </div>
                    )}
                </div>
            </div>
        </section>



        {/* Screenshots */}
        {projectDetail.screenshots && projectDetail.screenshots.length > 0 && (
            <ScreenshotSection screenshots={projectDetail.screenshots} />
        )}
  

        <section>
            <h3 className="text-3xl border-b mb-6">Technical Details</h3>
            {this.renderFeatures()}
            {this.renderChallenges()}
        </section>

        <GameWrapper folderName={projectDetail.folderName} />

        {projectDetail.resources && projectDetail.resources.length > 0 && (
        <section>
            <h3 className="text-3xl border-b mb-6">
                References
            </h3>
            <div className="grid grid-cols-2 gap-4">
                {projectDetail.resources.map((resource, idx) => {
                    return (
                        <div key={`resource${idx + 1}`} className={`${idx > 1 ? "mt-6 " : ""} flex justify-between flex-col`}>
                            <small>
                                {resource.title}
                            </small>
                            <div>
                                <a href={resource.url} target="_blank" className="generic-link"><small>{resource.url}</small></a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>

        )}

        <section>
            <div className="border-b flex justify-between items-center mb-6">
                <h3 className="text-3xl">More Porjects</h3>
                <Link to="">
                    View all
                </Link>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {gameProjects.projectList && gameProjects.projectList.length > 0 && gameProjects.projectList.map((project, index) => {
                    return (
                        <LightBox>
                            <div key={`project-${index + 1}`} className="h-full">
                                <div>
                                    <img src={project.img.url} alt={project.img.alt} />
                                </div>
                                <div>
                                    <div>
                                        <small>{project.type}</small>
                                    </div>
                                    <strong>{project.title}</strong>
                                    <div className="flex justify-center items-center">
                                        <Link className="w-full text-center btn btn-light" to={""}>View Project</Link>
                                    </div>
                                </div>
                            </div>
                        </LightBox>
                    )
                })}
            </div>
        </section>

        <Footer/>
      </div>
    );
  }
}

export default ProjectDetailComponent;
