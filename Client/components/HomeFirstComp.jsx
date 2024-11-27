import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Vibration } from 'react-native';
import { bgcolor, bgPryColor, bgSecColor, textColor } from './objects'
import { Dimensions, PixelRatio } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

const HomeFirstComp = () => {
    const screenHeight = Dimensions.get('window').height;
    const quarterScreenHeight = PixelRatio.roundToNearestPixel(screenHeight / 6.5);
    const [showPassword, setShowPassword] = useState(false)


    const vibrate = () => {
        Vibration.vibrate(200);
    }

    return (
        <View className={`  rounded-md py-2 `}>
            <View className="flex-row justify-between items-center">
                <View className=" flex-col justify-between  ">
                    <View className="flex-row space-x-2">
                        <View>
                            <Text className={`text-${textColor}`} >Total balance</Text>
                        </View>

                        <View>
                            <Pressable onPress={() => setShowPassword(!showPassword)}>
                                <MaterialIcons
                                    name={showPassword ? 'visibility' : 'visibility-off'}
                                    size={19}
                                    color={'#9ca3af'}
                                />
                            </Pressable>
                        </View>
                    </View>
                    <View className=" justify-between  flex-row">
                        <Pressable onPress={() => setShowPassword(!showPassword)}>
                            {showPassword ?
                                (
                                    <Text className={`text-${textColor} text-3xl font-extrabold `}>$20000</Text>) : (
                                    <View className="text-sm"><Text className={`text-[#e3e2e2] text-3xl font-extrabold `}>****</Text></View>)
                            }
                        </Pressable>

                    </View>
                    {/* <View>
                    <View className="flex flex-row  justify-between" >
                        <View style={{
                            shadowColor: 'black',
                            shadowOpacity: 0.1,
                            shadowRadius: 2,
                            shadowOffset: { width: 0, height: 2.5 },
                            elevation: 2,
                        }} className={`flex-1 py-2  rounded-lg bg-[${bgcolor}] space-x-2  flex-row flex items-center justify-center mr-2`}>
                            <FontAwesome name='plus' color={"white"} />
                            <Text className="text-white text-lg font-bold">Withdraw</Text>
                        </View>
                        <View style={{
                            shadowColor: 'black',
                            shadowOpacity: 0.1,
                            shadowRadius: 2,
                            shadowOffset: { width: 0, height: 2.5 },
                            elevation: 3,
                        }} className={`flex-1 py-2  rounded-lg bg-[${bgcolor}] flex flex-row items-center space-x-2 justify-center ml-2`}>

                            <Text className="text-white text-lg font-bold">Deposit</Text>
                        </View>
                    </View>
                </View> */}

                </View>
                <Pressable onPress={vibrate} className={`h-9  px-5  rounded-full bg-[${bgSecColor}]    items-center justify-center `}>
                    <Text className="text-[#e3e2e2] font-extrabold">Deposit</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default HomeFirstComp