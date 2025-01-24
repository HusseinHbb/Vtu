import { View, Text, Image } from 'react-native'
import React from 'react'
import { bgSecColor } from './objects'
import { MaterialIcons } from '@expo/vector-icons'

const HomeThirdComp = () => {
    const pic = require('./../assets/index')
    return (
        // <View className="h-36 w-full p-3 rounded-2xl bg-[#151515] mt-4 ">
        <View className="bg-[#191919] relative p-3 rounded-2xl w-80 h-36 space-x-3 mr-3 flex-row ">


            <View>
                <Image source={pic.gigphoto} className="h-10 w-10 rounded-full" resizeMode='cover' />
            </View>
            <View className="py-1 flex-col ">
                <View>
                    <Text className="text-white font-extrabold text-sm">
                        Rex Hub <MaterialIcons name='verified' size={12} color={"#e3e2e2"} />
                    </Text>
                    <Text className="text-gray-300 font-light text-xs" style={{ fontSize: 11 }}>
                        @Rexie
                    </Text>
                </View>
                <View className="py-1.5">
                    <View >
                        <Text className="text-gray-300 " style={{ fontSize: 11.8 }} >About rexxie About rexxieAbout rexxieAbout rexxieAbout rexxie</Text>
                    </View>
                    <View className="py-1.5">
                        <Text className="text-gray-300 text-xs">$248k invested . $30K ROI </Text>
                    </View>
                </View >


            </View >
            {/* bg-[#6e47b117] */}
            < View className=" items-center flex-row justify-center absolute top-2 p-1 right-2 rounded-full" >
                {/* <MaterialIcons name='star' size={12} color={"#e3e2e2"} /> */}
                <Text Text className="text-gray-400  font-extrabold" style={{ fontSize: 10 }} > 97 Investments | 99% </Text >

            </View >
            <View className=" items-center justify-center bg-[#6e47b1] absolute bottom-2 p-1 right-2 rounded-full">

                <Text className="text-[#e3e2e2] text-xs font-bold " >Subscribe </Text>
            </View>
            <View className="absolute bottom-0 p-1 left-2">
                <Text className="text-gray-400 text-xs ">248 Subscribers </Text>
            </View>
        </View >
        // </View>


    )
}

export default HomeThirdComp