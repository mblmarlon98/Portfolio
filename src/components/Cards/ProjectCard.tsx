import * as React from 'react';
import { Img } from '../../types/Image';
import StickerBox from '../Box/StickerBox/StickerBox';
import { Link } from 'react-router-dom';
import "./ProjectCard.scss";

export interface ProjectCardProps {
    img: Img;
    title: string;
    description: string;
    classNames?:string;
    type?: string;
    index?: number;
    year?: string;
}

export default class ProjectCard extends React.Component<ProjectCardProps> {
  public render() {
    const idx = this.props.index || 1;
    return (
        <div key={`project-card-${idx + 1}`} className={`${(idx + 1 ) % 2 ? "animate__animated animate__fadeOutDown" : "animate__animated animate__fadeOutDownBig"} project-card`}>
            {this.props.type && (
                <div className='type'>
                    <span>
                        {"# " + this.props.type}
                    </span>
                </div>
            )}
            <div>
                <div className="img-wrapper shadow-lg">
                    <img src={this.props.img.url} alt={this.props.img.alt}/>
                </div>
                <div className='content'>
                    <div>
                        <div className='flex justify-between items-end'>
                            <h4 className="mt-4 text-xl font-bold">{this.props.title}</h4>
                            <StickerBox>{this.props.year}</StickerBox>
                        </div>
                        <p className="mt-2 text-gray-600">{this.props.description}</p>
                    </div>
                </div>
            </div>
            <div className="content">
                <Link to="/my-portfolio/web/project-1" className="text-center block btn btn-white">View Project</Link>
            </div>
        </div>
    );
  }
}
