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
import DOMPurify from 'dompurify';


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
      <div className="features">
        <h5 className="mb-4">Features</h5>
        {features?.map((feature, index) => (
            <Dropdown key={`feature-${index + 1}`} title={feature.title}>
                {feature.featureDetails && feature.featureDetails.length > 0 && feature.featureDetails.map((featureDetail, i) => {
                    const safeDescriptionHTML = DOMPurify.sanitize(featureDetail.description as string);

                    return (
                        <div className="feature-details grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 p-4">
                            <div>
                                <h4>{featureDetail.name}</h4>
                                {featureDetail.screenshots && featureDetail.screenshots.length > 0 && featureDetail.screenshots.map((screenshot, idx) => {
                                    return (
                                        <div key={`feature-${i}-screenshot-${idx}`}>
                                            <img src={screenshot.url} alt={screenshot.alt} />
                                        </div>
                                    )
                                })}
                                <p
                                    className="description"
                                    dangerouslySetInnerHTML={{
                                        __html: safeDescriptionHTML,
                                    }}
                                ></p>
                            </div>
                            <div>
                                <h4>Code:</h4>
                                {featureDetail.codeScreenshots && featureDetail.codeScreenshots.length > 0 && featureDetail.codeScreenshots.map((code, idx) => {
                                    const safeHTML = DOMPurify.sanitize(code.description as string);
                                    return (
                                        <div key={`feature-${i}-codeScreenshot-${idx}`} className={`${idx > 0 ? ("mt-6" + " ") : ""} code-item flex flex-col`}>
                                            <img src={code.url} alt={code.alt} />
                                            <p
                                                className="description"
                                                dangerouslySetInnerHTML={{
                                                    __html: safeHTML,
                                                }}
                                            ></p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}

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
            <Dropdown key={`challenge-${index + 1}`} title={challenge.title}>
              {challenge.featureDetails && challenge.featureDetails.length > 0 && challenge.featureDetails.map((featureDetail, i) => {
                    const safeDescriptionHTML = DOMPurify.sanitize(featureDetail.description as string);

                    return (
                        <div className="feature-details grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 p-4">
                            <div>
                                <h4>{featureDetail.name}</h4>
                                {featureDetail.screenshots && featureDetail.screenshots.length > 0 && featureDetail.screenshots.map((screenshot, idx) => {
                                    return (
                                        <div key={`feature-${i}-screenshot-${idx}`}>
                                            <img src={screenshot.url} alt={screenshot.alt} />
                                        </div>
                                    )
                                })}
                                <p
                                    className="description"
                                    dangerouslySetInnerHTML={{
                                        __html: safeDescriptionHTML,
                                    }}
                                ></p>
                            </div>
                            <div>
                                <h4>Code:</h4>
                                {featureDetail.codeScreenshots && featureDetail.codeScreenshots.length > 0 && featureDetail.codeScreenshots.map((code, idx) => {
                                    const safeHTML = DOMPurify.sanitize(code.description as string);
                                    return (
                                        <div key={`feature-${i}-codeScreenshot-${idx}`} className={`${idx > 0 ? ("mt-6" + " ") : ""} code-item flex flex-col`}>
                                            <img src={code.url} alt={code.alt} />
                                            <p
                                                className="description"
                                                dangerouslySetInnerHTML={{
                                                    __html: safeHTML,
                                                }}
                                            ></p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </Dropdown>
        ))}
      </div>
    );
  };

  render() {
    const { projectDetail } = this.props;
    const { progress } = this.state;
    const safeRulesHTML = DOMPurify.sanitize(projectDetail.rules as string);

    return (
      <div className="project-detail xl:w-2/3 mx-auto">
        <header className="project-header text-center mb-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <h1 className="">{projectDetail.title}</h1>
                    <p className="lg:ml-4">{` - ` + projectDetail.type}</p>
                </div>
                {/* <div>
                    <Link to="" className="btn btn-play">Play</Link>
                </div> */}
            </div>
        </header>

        {/* Section With basic information  */}
        <section>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-4 order-2 lg:col-span-3 lg:order-1">

                    <div className="h-full flex flex-col justify-between">
                        <div>
                            <b>Intro:</b>
                            <p>{projectDetail.description}</p>
                        </div>

                        <div className="mt-6">
                            <LightBox>
                                <div>
                                    <b>Rules:</b>
                                    <p
                                        className="description"
                                        dangerouslySetInnerHTML={{
                                            __html: safeRulesHTML,
                                        }}
                                    ></p>
                                </div>
                            </LightBox>
                        </div>
                    </div>


                </div>
                <div className="col-span-4 lg:col-span-1 lg:border-l lg:pl-4 order-1 lg:order-2">
                    <div className="block md:grid md:grid-cols-2 lg:grid-cols-1 gap-4">
                        <div>
                            <LightBox>
                                <div className="flex justify-between items-center">
                                    <b>Year:</b> 
                                    <StickerBox>
                                        {projectDetail.year}
                                    </StickerBox>
                                </div>
                            </LightBox>
                        </div>
                        {projectDetail.roles && projectDetail.roles.length > 0 && (
                            <div>
                                <LightBox>
                                    <div className="flex justify-between items-center">
                                        <b>Role:</b> 
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
                            <div>
                                <LightBox>
                                    <div className="flex justify-between items-center">
                                        <b>Tools:</b> 
                                        <div className="flex flex-row w-full justify-end">
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
                            <div>
                                <LightBox>
                                    <div className="w-full flex justify-center items-center">
                                        <b className="mr-4">Progress:</b>
                                        <div className="w-full">
                                            <Progressbar progress={progress}/>
                                        </div>
                                    </div>
                                </LightBox>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>



        {/* Screenshots */}
        {projectDetail.screenshots && projectDetail.screenshots.length > 0 && (
            <ScreenshotSection screenshots={projectDetail.screenshots} />
        )}
  

        <section>
            <h3 className="border-b mb-6">Technical Details</h3>
            {this.renderFeatures()}
            {this.renderChallenges()}
        </section>

        <div className="hidden md:block">
            <GameWrapper folderName={projectDetail.folderName} />
        </div>

        {projectDetail.resources && projectDetail.resources.length > 0 && (
        <section>
            <h3 className="border-b mb-6">
                References
            </h3>
            <div className="grid rid-cols-1 lg:grid-cols-2 lg:gap-4">
                <Dropdown title="References">
                    {projectDetail.resources.map((resource, idx) => {
                        return (
                            <div key={`resource${idx + 1}`} className={`${idx >= 1 ? "mt-6 " : ""} flex justify-between flex-col`}>
                                <small>
                                    {resource.title}
                                </small>
                                <div>
                                    <a href={resource.url} target="_blank" className="generic-link"><small>{resource.url}</small></a>
                                </div>
                            </div>
                        )
                    })}
                </Dropdown>
            </div>
        </section>

        )}

        <section>
            <div className="border-b flex justify-between items-center mb-6">
                <h3 className="text-3xl">More Porjects</h3>
                <Link to="/my-portfolio/game/projects">
                    View all
                </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4">
                {gameProjects.projectList && gameProjects.projectList.length > 0 && gameProjects.projectList.map((project, index) => {
                    return (
                        <LightBox>
                            <div key={`project-${index + 1}`} className="h-full">
                                <div className="flex justify-center items-center">
                                    <img src={project.img.url} alt={project.img.alt} className="h-[50px] md:h-[150px]"/>
                                </div>
                                <div>
                                    <div>
                                        <small>{project.type}</small>
                                    </div>
                                    <b>{project.title}</b>
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
