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

const IconXiangzuo: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M452.374351 11.765125 19.107766 449.09336c-0.646988 0.646988-0.862651 1.50964-1.401808 2.156628-0.107831 0.107831-0.431326 0.215663-0.539157 0.323494-15.419891 15.527722-15.31206 40.65244 0.215663 56.072331l437.256347 433.266585c15.527722 15.419891 40.544608 15.31206 55.964499-0.215663 7.584142-7.691974 11.430129-17.864069 11.430129-27.928334 0-10.172096-3.953818-20.416079-11.753623-28.143997L100.951803 478.962659l407.602711-411.448697c7.584142-7.691974 11.430129-17.756238 11.430129-27.928334 0-10.279927-3.953818-20.416079-11.753623-28.143997C492.91896-3.97826 467.794242-3.762597 452.374351 11.765125L452.374351 11.765125z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconXiangzuo.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconXiangzuo) : IconXiangzuo;
