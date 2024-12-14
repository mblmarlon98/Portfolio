import * as React from 'react';
import { gameProjects } from '../../../data/gameProjects';
import { Link } from 'react-router-dom';

export interface GameProjectsProps {
}

export default class GameProjects extends React.Component<GameProjectsProps> {
  public render() {
    return (
      <section className='pt-[8rem] xl:w-2/3 mx-auto'>
        <h1 className='border-b text-6xl font-bold'>
          Projects
        </h1>
          {gameProjects.projectList && gameProjects.projectList.length > 0 ? (
            <div>
              {gameProjects.projectList.map((project, idx) => {
                return (
                  <div>
                    {(idx + 1) % 2 ? (
                      <div className='grid grid-cols-3 gap-4 mt-8'>
                        <div><img src={project.img.url} alt={project.img.alt} className='w-full'/></div>
                        <div className='col-span-2'>
                          <div className='flex justify-between flex-col h-full items-end'>
                            <div>
                              <h3 className='text-right'>{project.title}</h3>
                              <p>{project.description}</p>
                            </div>
                            <Link to={`/portfolio/game/projects/${encodeURIComponent(project.title.toLowerCase().replace(/\s+/g, "-"))}`} className='w-full btn btn-white flex justify-center'>View Project</Link>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className='grid grid-cols-3 gap-4 mt-8'>
                        <div className='col-span-2'>
                          <div className='flex justify-between flex-col h-full items-start'>
                            <div>
                              <h3>{project.title}</h3>
                              <p>{project.description}</p>
                            </div>
                            <Link to={`/portfolio/game/projects/${encodeURIComponent(project.title.toLowerCase().replace(/\s+/g, "-"))}`} className='w-full btn btn-white flex justify-center'>View Project</Link>
                          </div>
                        </div>
                        <div><img src={project.img.url} alt={project.img.alt} className='w-full'/></div>
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
      </section>
    );
  }
}
