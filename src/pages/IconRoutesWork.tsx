/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps, SvgXml } from 'react-native-svg';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

const xml = `
<svg width="44px" height="49px" viewBox="0 0 44 49" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    
    
    
    <defs>
        <linearGradient x1="35.0482526%" y1="31.5223153%" x2="50%" y2="62.2032051%" id="linearGradient-1">
            <stop stop-color="#EEEEEE" offset="0%"></stop>
            <stop stop-color="#D8D8D8" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="页面1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="工作灰" transform="translate(0.000000, 2.000000)">
            <g id="Group-52-Copy-2复制">
                <g id="Group-4-Copy-4">
                    <path d="M6.28571429,27.3255814 L36.1878782,27.3255814 C38.816702,27.3255814 40.9965655,29.3612533 41.1761922,31.983933 L41.6852391,39.4163861 L41.6852391,39.4163861 C41.4696878,42.4572014 38.9399612,44.8139535 35.8915156,44.8139535 L12.2857143,44.8139535 C8.97200579,44.8139535 6.28571429,42.127662 6.28571429,38.8139535 L6.28571429,27.3255814 Z" id="矩形" fill="url(#linearGradient-1)" transform="translate(23.985477, 36.069767) scale(1, -1) translate(-23.985477, -36.069767) "></path>
                    <rect id="矩形" stroke="#333333" stroke-width="3" x="1.5" y="9.52439024" width="41" height="35.9428571" rx="10"></rect>
                    <path d="M18.3023256,0 L25.6976744,0 C28.4590982,-5.07265313e-16 30.6976744,2.23857625 30.6976744,5 L30.6976744,9.1850319 L13.3023256,9.1850319 L13.3023256,5 C13.3023256,2.23857625 15.5409018,5.07265313e-16 18.3023256,0 Z" id="矩形" stroke="#333333" stroke-width="3"></path>
                </g>
            </g>
            <path d="M1.55865273,23.5 L41.6852391,23.5" id="直线-9" stroke="#333333" stroke-width="3" stroke-linecap="square"></path>
            <rect id="矩形" stroke="#333333" stroke-width="3" fill="#FFFFFF" x="16.7619048" y="19.4878049" width="11.5238095" height="8.02439024" rx="3.67073171"></rect>
        </g>
    </g>
</svg>
`

const IconRoutesWork: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

IconRoutesWork.defaultProps = {
  size: 20,
};

export default React.memo ? React.memo(IconRoutesWork) : IconRoutesWork;
