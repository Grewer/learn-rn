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

const IconXiangyou: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M75.160871 940.647531l433.293591-437.39144c0.647029-0.647029 0.862705-1.509734 1.401896-2.156763 0.107838-0.107838 0.431353-0.215676 0.539191-0.323514 15.420852-15.52869 15.313014-40.654974-0.215676-56.075826L72.89627 11.442344c-15.52869-15.420852-40.547135-15.313014-55.967987 0.215676-7.584615 7.692453-11.430841 17.865183-11.430841 27.930075 0 10.17273 3.954065 20.417352 11.754356 28.145751L426.713162 473.420876 18.869369 884.89522c-7.584615 7.692453-11.430841 17.757345-11.430841 27.930075 0 10.280568 3.954065 20.417352 11.754356 28.145751C34.57779 956.355951 59.740019 956.140275 75.160871 940.647531L75.160871 940.647531z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconXiangyou.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconXiangyou) : IconXiangyou;
