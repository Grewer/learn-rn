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

const IconXiangshang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M510.839002 2.321995C229.877551 2.321995 0 229.877551 0 513.160998c0 280.961451 227.555556 510.839002 510.839002 510.839002s510.839002-227.555556 510.839003-510.839002-227.555556-510.839002-510.839003-510.839003z m306.503402 687.310658c-13.931973 13.931973-34.829932 13.931973-48.761905 0l-255.419501-262.385487L255.419501 694.276644c-13.931973 13.931973-34.829932 13.931973-48.761905 0-13.931973-13.931973-13.931973-37.151927 0-51.0839l278.639456-287.927438 2.321996-2.321995 2.321995-2.321996c13.931973-13.931973 34.829932-13.931973 48.761905 0l278.639456 287.927438c11.609977 16.253968 11.609977 37.151927 0 51.0839z"
        fill={getIconColor(color, 0, '#018BE6')}
      />
    </Svg>
  );
};

IconXiangshang.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconXiangshang) : IconXiangshang;
