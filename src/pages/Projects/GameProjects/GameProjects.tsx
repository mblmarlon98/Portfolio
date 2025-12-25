import * as React from 'react';
import { gameProjects } from '../../../data/gameProjects';
import { Link } from 'react-router-dom';
import "./GameProjects.scss";
import Footer from '../../../components/Footer/Footer';
import StickerBox from '../../../components/Box/StickerBox/StickerBox';
import Progressbar from '../../../components/Progressbar/Progressbar';

export interface GameProjectsProps {
}

export default class GameProjects extends React.Component<GameProjectsProps> {
  componentDidMount(): void {
    const navbar = document.getElementById('navbar');
    if (navbar && !navbar.classList.contains('bg-dark')) {
      navbar.classList.add('bg-dark');
    }
    window.addEventListener('mousemove', this.handleMouseMove as any);
  }
  componentWillUnmount(): void {
    window.removeEventListener('mousemove', this.handleMouseMove as any);
  }
  public render() {
    return (
      <div>
        <div className='game-projects xl:w-2/3 mx-auto'>
          <h1 className='border-b font-bold animate__animated animate__fadeInDown'>
            Projects
          </h1>
            {gameProjects.projectList && gameProjects.projectList.length > 0 ? (
              <div className='projects-grid'>
                {gameProjects.projectList.map((project, idx) => {
                  const slug = encodeURIComponent(project.title.toLowerCase().replace(/\s+/g, "-"));
                  return (
                    <div key={project.title} className="project-card animate__animated animate__fadeInUp" style={{ animationDelay: `${Math.min(idx * 0.08, 0.6)}s` }}>
                      <div className="media">
                        <img src={project.img.url} alt={project.img.alt} />
                        <div className="media-gradient" />
                      </div>
                      <div className="content">
                        <div className="content-main">
                          <div className="title-row">
                            <h3>{project.title}</h3>
                            {project.year && (
                              <StickerBox>{project.year}</StickerBox>
                            )}
                          </div>
                          <p className="desc">{project.description}</p>
                          {project.roles && project.roles.length > 0 && (
                            <div className="chips">
                              {project.roles.slice(0,3).map((role, rIdx) => (
                                <StickerBox key={`role-${rIdx}`}>{role}</StickerBox>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="content-footer">
                          {typeof project.progress === 'number' && (
                            <Progressbar progress={project.progress} />
                          )}
                          <div className="mt-2">
                            <Link to={`/my-portfolio/game/projects/${slug}`} className='btn btn-white w-full'>View Project</Link>
                          </div>
                        </div>
                      </div>
                      <div className="overlay">
                        <h4>{project.title}</h4>
                        <Link to={`/my-portfolio/game/projects/${slug}`} className='btn btn-black w-full'>Open</Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div>
                <p>No Projects Found</p>
              </div>
            )}
          </div>
          <Footer/>
      </div>
    );
  }

  handleMouseMove = (e: MouseEvent) => {
    const el = document.querySelector('.game-projects') as HTMLElement | null;
    if (!el) return;
    const dx = (e.clientX - window.innerWidth / 2) / window.innerWidth;
    const dy = (e.clientY - window.innerHeight / 2) / window.innerHeight;
    el.style.setProperty('--px', `${dx * 18}px`);
    el.style.setProperty('--py', `${dy * 18}px`);
  };
}
