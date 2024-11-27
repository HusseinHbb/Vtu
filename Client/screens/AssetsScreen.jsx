import { View, Text } from 'react-native'
import React from 'react'
import { bgcolor } from '../components/objects'
import { SafeAreaView } from 'react-native-safe-area-context'

const AssetsScreen = () => {
    return (
        <SafeAreaView className={`pt-1 relative w-full flex flex-col justify-between bg-[${bgcolor}] h-full`}>
            <View className="flex-1 justify-center items-center">
                <Text className="text-white font-extrabold text-3xl">Assets</Text>
            </View>
        </SafeAreaView>
    )
}

export default AssetsScreen