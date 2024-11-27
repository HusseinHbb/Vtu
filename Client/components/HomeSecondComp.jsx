import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { bgSecColor } from './objects'

const HomeSecondComp = () => {
    return (
        <View className="flex-row flex-wrap justify-center w-screen  py-1 items-center">
            {[
                { name: 'Internet', icon: 'accessible' },
                { name: 'Electricity', icon: 'accessible' },
                { name: 'Airtime', icon: 'accessible' },
                { name: 'TV', icon: 'accessible' },
                { name: 'Betting', icon: 'accessible' },
                { name: 'E-sim', icon: 'accessible' },
                { name: 'Gift card', icon: 'accessible' },
                { name: 'Invest', icon: 'accessible' },
            ].map((item, index) => (
                <Pressable key={index} className="w-1/5 mx-2.5  my-3">
                    <View className="items-center  space-y-1 justify-center rounded-full">
                        <View className="p-2 rounded-full bg-[#6e47b117]">
                            <MaterialIcons name={item.icon} size={26} color={bgSecColor} />
                        </View>
                        <Text className={`text-[#e3e2e2] font-semibold text-xs`}>{item.name}</Text>
                    </View>
                </Pressable>
            ))}
        </View>

    )
}

export default HomeSecondComp