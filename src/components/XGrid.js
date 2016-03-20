import React from 'react';
import _ from 'lodash';

import XLine from 'components/XLine';
import {getScaleTicks} from 'utils/Scale';

class XGrid extends React.Component {
  static propTypes = {
    scale: React.PropTypes.func.isRequired
  };
  static defaultProps = {
    height: 250,
    width: 400,
    tickCount: 10,
    ticks: null,
    lineClassName: '',
    lineStyle: {}
  };

  render() {
    const {scale, height, tickCount, lineClassName, lineStyle} = this.props;
    const ticks = this.props.ticks || getScaleTicks(scale, null, tickCount);
    const gridLineClassName = `chart-grid-line chart-grid-line-x ${lineClassName}`;

    return <g className="chart-grid-x">
      {ticks.map((tick, i) => {
        return <XLine {...{
          scale, height, lineStyle,
          lineClassName: gridLineClassName,
          value: tick,
          key: `grid-line-${i}`
        }} />;
      })}
    </g>;
  }
}

export default XGrid;