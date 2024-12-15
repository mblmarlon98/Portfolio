import * as React from 'react';
import { gameProjects } from '../../../data/gameProjects';
import { Link } from 'react-router-dom';
import "./GameProjects.scss";
import Footer from '../../../components/Footer/Footer';

export interface GameProjectsProps {
}

export default class GameProjects extends React.Component<GameProjectsProps> {
  public render() {
    return (
      <div>
        <div className='game-projects xl:w-2/3 mx-auto'>
          <h1 className='border-b text-6xl font-bold'>
            Projects
          </h1>
            {gameProjects.projectList && gameProjects.projectList.length > 0 ? (
              <div>
                {gameProjects.projectList.map((project, idx) => {
                  return (
                    <div>
                      {(idx + 1) % 2 ? (
                        <div className={`flex justify-center items-center flex-col md:grid grid-cols-1 md:grid-cols-3 gap-4 ${idx + 1 > 1 ? 'mt-8' : ''}`}>
                          <div><img src={project.img.url} alt={project.img.alt} className='w-full'/></div>
                          <div className='col-span-2 h-full'>
                            <div className='flex justify-between flex-col h-full items-end'>
                              <div>
                                <h3 className='text-center md:text-right'>{project.title}</h3>
                                <p className='text-center md:text-right'>{project.description}</p>
                              </div>
                              <Link to={`/my-portfolio/game/projects/${encodeURIComponent(project.title.toLowerCase().replace(/\s+/g, "-"))}`} className='w-full btn btn-white flex justify-center mt-2'>View Project</Link>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className='flex justify-center items-center flex-col md:grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'>
                          <div className='col-span-2 order-2 md:order-1 h-full'>
                            <div className='flex justify-between flex-col h-full items-start'>
                              <div>
                                <h3 className='text-center md:text-left'>{project.title}</h3>
                                <p className='text-center md:text-left'>{project.description}</p>
                              </div>
                              <Link to={`/my-portfolio/game/projects/${encodeURIComponent(project.title.toLowerCase().replace(/\s+/g, "-"))}`} className='w-full btn btn-white flex justify-center mt-2'>View Project</Link>
                            </div>
                          </div>
                          <div className='order-1 md:order-2'><img src={project.img.url} alt={project.img.alt} className='w-full'/></div>
                        </div>
                      )}
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
}
