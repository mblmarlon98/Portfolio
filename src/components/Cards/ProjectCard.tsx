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
    url?: string;
}

export default class ProjectCard extends React.Component<ProjectCardProps> {

    resolveUrl(url: string): string {
        let resolvedUrl = "";
        if (url.toLowerCase().includes("web")) {
            resolvedUrl = "/my-portfolio/web/";
        } else if (url.toLowerCase().includes("game")) {
            resolvedUrl = "/my-portfolio/game/projects/" +encodeURIComponent(this.props.title.toLowerCase().replace(/\s+/g, "-"));
        }
        return resolvedUrl
    }
  public render() {
    const idx = this.props.index || 1;
    return (
        <Link to={this.resolveUrl(this.props.url ? this.props.url : this.props.type || "")} key={`project-card-${idx + 1}`} className="project-card animate__animated project-card--hidden">
            {this.props.type && (
                <div className='type'>
                    <small>
                        {"# " + this.props.type}
                    </small>
                </div>
            )}
            {this.props.year && (
                <div className='year'>
                    {this.props.year}
                </div>
            )}
            <div>
                <div className="img-wrapper shadow-lg">
                    <img src={this.props.img.url} alt={this.props.img.alt}/>
                </div>
                <div className='content-text'>
                    <div>
                        <h4 className="font-bold truncate">{this.props.title}</h4>
                        <p className="mt-2 text-gray-600 hidden sm:inline">{this.props.description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
  }
}
