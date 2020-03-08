/**
 * @author lmy
 * @date 2019/08/04 下午12:37
 * @desc
 */

import React, {Component} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

import Util from '../utils/util'
import VideoData from "../mockdata/videodata";

export default class Hot extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
        for (let i = 0; i < 50; i++) {
            let item = {
                name: 'ing',
                data: i + '你好----' + i
            }
            item.key = "" + i;
            this.state.data.push(item);
        }
    }


    render() {

        let width = (Util.getWidth() - 2) / 3;
        let height = width;
        return (
            <ScrollView
                ref={"scrollView"}
                automaticallyAdjustContentInsets={false}
                horizontal={false}
                style={{flex: 1}}

            >
                <View style={{flexWrap: 'wrap', flexDirection: 'row', width: Util.getWidth()}}>


                    {this.state.data.map((item, i) => {
                        let picNum = Math.floor(Math.random() * 10);
                        if (picNum == 0 || picNum == 10) {
                            picNum = 1;
                        }
                        let imageHeight = width;
                        let imageWidth = height;
                        let whRate = VideoData[picNum].width / VideoData[picNum].height;
                        if (whRate > 1) {
                            imageWidth = imageWidth * whRate;
                        } else {
                            imageHeight = imageWidth / whRate;
                        }


                        return (
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('MukeVideo', {videoData: VideoData[picNum]})
                            }}
                                              key={i} style={{
                                marginBottom: 1,
                                width: width + (i % 3 == 1 ? 2 : 0),
                                backgroundColor: '#fff',
                                height: height,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <View style={{
                                    backgroundColor: '#fff',
                                    width: width,
                                    height: height,
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    overflow: 'hidden'
                                }}>

                                    <Text>testimage</Text>

                                </View>
                            </TouchableOpacity>)
                    })
                    }
                </View>
            </ScrollView>
        );
    }

    shouldComponentUpdate() {
    }

    componentDidMount() {
        const {navigation} = this.props;
        console.log("Hot didMount")
        console.log(JSON.stringify(navigation));
        console.log(navigation)
    }

    componentWillUnmount() {
    }

}
