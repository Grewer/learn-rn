/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { View, ViewProps } from 'react-native'
import { GProps, SvgXml } from 'react-native-svg'


interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

const IconStyle: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={`<svg  viewBox="0 0 120 120">
   <circle cx="40" cy="40" r="24" style="stroke: #000000; fill:#00ff00;"/>
</svg>`}  width={size} height={size} {...rest} />
  );
};

IconStyle.defaultProps = {
  size: 20,
};

export default React.memo ? React.memo(IconStyle) : IconStyle;
