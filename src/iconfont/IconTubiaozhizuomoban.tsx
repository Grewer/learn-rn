/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

const IconTubiaozhizuomoban: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M604.8 642.3L830 417.1 604.8 192 383.2 417.1l221.6 225.2z m0-348.3L728 417.1 604.8 540.2 481.7 420.6 604.8 294z"
        fill={getIconColor(color, 0, '#DC2F2F')}
      />
      <Path
        d="M235.5 593h211v211h-211V593z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M332.9 417.1l138.3-140.5v-0.2H200.3v281.4h270.9v-0.2L332.9 417.1z m271.9 275.4l-98-99.5h-25.1v246.3h281.4V593h-58.8l-99.5 99.5z"
        fill={getIconColor(color, 2, '#DC2F2F')}
      />
    </Svg>
  );
};

IconTubiaozhizuomoban.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconTubiaozhizuomoban) : IconTubiaozhizuomoban;
