import { View, Text, Image } from 'react-native'
import React from 'react'
import { bgSecColor } from './objects'
import { MaterialIcons } from '@expo/vector-icons'

const HomeThirdComp = () => {
    const pic = require('./../assets/index')
    return (
        // <View className="h-36 w-full p-3 rounded-2xl bg-[#151515] mt-4 ">
        <View className="bg-[#191919] relative p-3 rounded-2xl w-80 h-30 space-x-3 mt-4 flex-row ">
            <View>
                <Image source={pic.gigphoto} className="h-24 w-24 rounded-2xl" resizeMode='cover' />
            </View>
            <View className="py-1 flex-col justify-">
                <Text className="text-white font-extrabold text-sm">
                    Real Estate Property
                </Text>

            </View>
            {/* bg-[#6e47b117] */}
            <View className=" items-center flex-row  justify-center absolute top-2 p-1 right-2 rounded-full">
                <MaterialIcons name='star' size={12} color={"#e3e2e2"} />
                <Text className="text-[#e3e2e2] text-xs font-extrabold" > 5.0 </Text>
                <Text className="text-[#e3e2e2] text-xs font-extrabold" > 5.0 </Text>
                <Text className="text-[#e3e2e2] text-xs font-extrabold" > 5.0 </Text>
                <Text className="text-[#e3e2e2] text-xs font-extrabold" > 5.0 </Text>
                <Text className="text-[#e3e2e2] text-xs font-extrabold" > 5.0 </Text>
                <Text className="text-[#e3e2e2] text-xs font-extrabold" > 5.0 </Text>
                <Text className="text-[#e3e2e2] text-xs font-extrabold" > 5.0 </Text>
                <Text className="text-[#e3e2e2] text-xs font-extrabold" > 5.0 </Text>
                <Text className="text-[#e3e2e2] text-xs font-extrabold" > 5.0 </Text>
                <Text className="text-[#e3e2e2] text-xs font-extrabold" > 5.0 </Text>
                <Text className="text-[#e3e2e2] text-xs font-extrabold" > 5.0 </Text>
                <Text className="text-[#e3e2e2] text-xs font-extrabold" > 5.0 </Text>
                <Text className="text-[#e3e2e2] text-xs font-extrabold" > 5.0 </Text>
                <Text className="text-[#e3e2e2] text-xs font-extrabold" > 5.0 </Text>
                <Text className="text-[#e3e2e2] text-xs font-extrabold" > 5.0 </Text>
                <Text className="text-[#e3e2e2] text-xs font-extrabold" > 5.0 </Text>


                {/* <Text className="text-white text-xs  font-bold text-right" style={{ fontSize: "10px" }}>
                        ROI
                    </Text> */}

            </View>
            <View className=" items-center  justify-center bg-[#6e47b1] absolute bottom-2 p-1  right-2 rounded-full">

                <Text className="text-[#e3e2e2] text-xs font-bold " >Subscribe +</Text>
            </View>
        </View>
        // </View>
    )
}

export default HomeThirdComp