import React, { Component } from 'react';
import "./Tooltip.scss"

type TooltipProps = {
  tooltipText?: string;
  position?: string;
  children?: React.ReactNode;
};

type TooltipState = {};

class Tooltip extends Component<TooltipProps, TooltipState> {
  static defaultProps = {
    tooltipText: 'Tooltip text',
    position: 'top',
  };

  render() {
    const { tooltipText, position, children } = this.props;

    return (
      <span className={`tooltip tooltip-${position}`} data-tooltip={tooltipText}>
        {children}
      </span>
    );
  }
}

export default Tooltip;
