/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconZantong from './IconZantong';
import IconShouye from './IconShouye';
import IconFenlei1 from './IconFenlei1';
import IconXiangyou from './IconXiangyou';
import IconXiangzuo from './IconXiangzuo';
import IconGuidangxiangmu from './IconGuidangxiangmu';
import IconZantongFill from './IconZantongFill';
import IconZantong1 from './IconZantong1';
import IconXiangshang from './IconXiangshang';
import IconMulu from './IconMulu';
import IconShijian from './IconShijian';
import IconTubiaozhizuomoban from './IconTubiaozhizuomoban';

export type IconNames = 'zantong' | 'shouye' | 'fenlei1' | 'xiangyou' | 'xiangzuo' | 'guidangxiangmu' | 'zantong-fill' | 'zantong1' | 'zantongfill' | 'xiangshang' | 'mulu' | 'shijian' | 'tubiaozhizuomoban';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'zantong':
      return <IconZantong key="1" {...rest} />;
    case 'shouye':
      return <IconShouye key="2" {...rest} />;
    case 'fenlei1':
      return <IconFenlei1 key="3" {...rest} />;
    case 'xiangyou':
      return <IconXiangyou key="4" {...rest} />;
    case 'xiangzuo':
      return <IconXiangzuo key="5" {...rest} />;
    case 'guidangxiangmu':
      return <IconGuidangxiangmu key="6" {...rest} />;
    case 'zantong-fill':
      return <IconZantongFill key="7" {...rest} />;
    case 'zantong1':
      return <IconZantong1 key="8" {...rest} />;
    case 'xiangshang':
      return <IconXiangshang key="10" {...rest} />;
    case 'mulu':
      return <IconMulu key="11" {...rest} />;
    case 'shijian':
      return <IconShijian key="12" {...rest} />;
    case 'tubiaozhizuomoban':
      return <IconTubiaozhizuomoban key="13" {...rest} />;
  }

  return null;
};

export default React.memo ? React.memo(IconFont) : IconFont;
