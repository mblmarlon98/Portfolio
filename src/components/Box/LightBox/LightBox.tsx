import * as React from 'react';
import "./Lightbox.scss";

export interface LightBoxProps {
    children: React.ReactNode;
}

export default class LightBox extends React.Component<LightBoxProps> {
  public render() {
    return (
      <div className='box-light'>
        {this.props.children}
      </div>
    );
  }
}
