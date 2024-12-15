import * as React from 'react';
import "./StickerBox.scss";

export interface StickerBoxProps {
    children: React.ReactNode;
}

export default class StickerBox extends React.Component<StickerBoxProps> {
  public render() {
    return (
      <div className='box-sticker'>
        <small>
          {this.props.children}
        </small>
      </div>
    );
  }
}
