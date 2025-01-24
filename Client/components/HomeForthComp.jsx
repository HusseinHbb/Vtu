import { View, Text, Image } from 'react-native'
import React from 'react'

const HomeForthComp = () => {
    const pic = require('./../assets/index')
    const aboutText = 'about real estate investment about jkds about real estate investment about jkds';

    return (
        <View className="bg-[#191919] relative mr-3  rounded-2xl w-44 h-60   flex-col ">

            <View className="h-[46%] w-full">
                <Image source={pic.gigimage} className="h-full w-full rounded-t-2xl " resizeMode='cover' />
            </View>
            <View className="p-1.5">
                <View>
                    <Text className="text-white font-extrabold text-sm">
                        Real estate Property
                    </Text>
                </View>
                <View className="py-1">
                    <Text className="text-white text-gray-300 " style={{ fontSize: 12 }}>
                        {aboutText.length > 40 ? `${aboutText.substring(0, 40)}...` : aboutText}
                    </Text>
                </View>


                <View className="flex-row justify-between py-1">
                    <View className="flex-col justify-center items-center ">
                        <View >
                            <Text className="text-white font-bold text-gray-300 " style={{ fontSize: 11 }}>
                                803
                            </Text>
                        </View>
                        <View >
                            <Text className="text-white font-bold text-gray-300 " style={{ fontSize: 12 }}>
                                Investor
                            </Text>
                        </View>

                    </View>
                    <View className="flex-col justify-center items-center ">
                        <View >
                            <Text className="text-white font-bold text-gray-300 " style={{ fontSize: 11 }}>
                                3 months
                            </Text>
                        </View>
                        <View >
                            <Text className="text-white font-bold text-gray-300 " style={{ fontSize: 12 }}>
                                Duratiion
                            </Text>
                        </View>

                    </View>
                    <View className="flex-col justify-center items-center ">
                        <View >
                            <Text className=" font-bold text-green-300 " style={{ fontSize: 11 }}>
                                20%
                            </Text>
                        </View>
                        <View >
                            <Text className="text-white font-bold text-gray-300 " style={{ fontSize: 12 }}>
                                Roi
                            </Text>
                        </View>

                    </View>
                </View>

            </View>
            <View>
                <View className=" items-center justify-center shadow-2xl bg-[#6e47b143] absolute bottom p-1 px-3 right-2 rounded-full">

                    <Text className="text-[#a571ff] text-xs  " style={{ fontWeight: "900" }}>Invest </Text>
                </View>
            </View>
        </View>
    )
}

export default HomeForthComp