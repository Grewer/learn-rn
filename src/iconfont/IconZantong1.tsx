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

const IconZantong1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M928.0161259999999 127.97849799999977c17.717453-5.329070518200751e-15 31.994624999999996 14.277170999999987 31.994625000000003 31.994624999999985L960.010751 608.0698809999998c5.329070518200751e-15 17.717453-14.277170999999987 31.994624999999996-31.994624999999985 31.994625000000003s-31.994624999999996-14.277170999999987-31.994625000000003-31.994624999999985l-1.1368683772161603e-13-447.9247439999999C896.0215019999998 142.25566899999995 910.2986729999999 127.97849799999989 928.0161259999999 127.97849799999977z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M159.80110900000017 640.064505L349.1886440000001 640.064505c-13.761128999999995 31.994625000000003-29.58642699999995 114.733412-20.469678999999942 190.07559199999997C335.9435580000002 890.0010080000002 371.2064510000001 935.9287750000001 422.466655 953.4742150000001c38.015118 12.901057999999981 78.26641999999998 6.536535999999963 99.94019799999998-15.481270000000016 25.802116999999992-26.31815900000001 37.84310399999998-75.85822300000001 50.74416299999996-128.32252600000004 8.42869099999999-34.230808 17.02939699999998-69.837729 27.86628599999998-88.24323900000002 31.13455399999999-52.98034600000001 96.32790199999997-77.06232200000004 109.40097399999996-81.36267400000003l89.79136599999998-2.1316282072803006e-14c17.717453-5.329070518200751e-15 31.994624999999996-14.277171000000012 31.994624999999985-31.994625000000003l-1.1368683772161603e-13-447.9247439999999c-5.329070518200751e-15-17.717453-14.277171000000012-31.994624999999996-31.994625000000003-31.994624999999985l-86.523098 2.842170943040401e-14c-26.83420100000001-14.449184999999993-126.43037100000002-63.989248999999965-241.85183900000004-63.98924899999989l-215.87770899999998 7.105427357601002e-14c-35.606921 7.105427357601002e-15-96.843944 13.761129000000047-119.72182099999999 51.77624700000004-23.049890999999985 38.531161000000004-71.90189799999993 388.75189-71.9018979999999 427.455065C64.16126299999996 596.7169490000002 116.45355300000006 640.0645050000002 159.80110900000017 640.064505zM190.76364899999987 148.79220600000008c4.816394999999997-8.084663000000003 36.46699099999999-20.64169300000001 64.84932-20.641693000000018L471.6626909999999 128.15051200000005c114.21736899999999-4.263256414560601e-14 215.18965199999997 63.989248999999944 216.221737 63.9892489999999l0 0c4.816395-1.7763568394002505e-15 10.148833-3.552713678800501e-15 16.169326-3.552713678800501e-15l63.989249-1.7763568394002505e-14L768.043004 576.075256l-63.989249 1.7763568394002505e-14c-2.580212 8.881784197001252e-16-4.988408999999999 0.8600710000000014-7.396606999999998 1.5481270000000027-0.5160419999999999 0.17201400000000014-1.032085 2.220446049250313e-16-1.548127 0.17201400000000056-0.17201399999999992 0.17201400000000006-0.8600709999999998 0.3440280000000002-1.720141 0.5160420000000002-0.8600709999999998 0.3440280000000002-1.720141 0.34402800000000056-2.5802119999999995 0.8600710000000008-19.437593999999997 6.364522000000005-102.52040999999997 37.32706200000003-145.17990899999995 109.91701700000003-15.481269999999988 26.318159000000005-24.942045999999987 64.84932-34.74684999999997 105.44465-9.116747999999987 37.843104-20.641692999999968 84.974971-34.05879399999996 98.564085-3.096253999999999 2.580212000000001-18.061482 6.020494000000009-36.81102-1.3761129999999895-15.309256000000001-6.020493999999995-41.971443-23.049890999999988-47.64790900000003-69.66571499999998-12.557030000000033-102.52041 31.47858199999996-200.052411 31.822609999999926-201.084495 4.644380999999997-9.976818 3.7843099999999943-21.157736-2.064169000000012-30.274482999999996-5.848480000000005-9.116747999999998-15.997312-14.449184999999995-26.83420100000001-14.449184999999993l-235.31530299999997 8.526512829121202e-14c-8.77272 2.6645352591003757e-15-31.650596000000004-14.965227999999994-31.650596000000014-32.85469499999999C128.15051200000005 500.561062 177.51856199999997 179.06668900000017 190.76364899999987 148.79220600000008z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconZantong1.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconZantong1) : IconZantong1;