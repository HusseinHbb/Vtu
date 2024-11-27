import { View, Text, Image } from 'react-native'
import React from 'react'

const HomeThirdComp = () => {
    const pic = require('./../assets/index')
    return (
        <View className="h-36 w-full p-3 rounded-2xl bg-[#151515] mt-4 ">
            <View className="bg-[#191919]  p-3 rounded-2xl w-full h-full space-x-3 flex-row ">
                <View>
                    <Image source={pic.gigphoto} className="h-full w-32 rounded-2xl" resizeMode='cover' />
                </View>
                <View className="py-1 flex-col justify-">
                    <Text className="text-white font-extrabold text-base">
                        Real Estate Property
                    </Text>
                    <Text className="text-white text-sm">
                        ROI:<Text className="text-green-500 font-extrabold" > 25%</Text>
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default HomeThirdComp