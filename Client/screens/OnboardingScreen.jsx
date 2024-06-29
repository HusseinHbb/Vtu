import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import { useNavigation } from '@react-navigation/native'
const OnboardingScreen = () => {
    const Navigation = useNavigation()
    return (
        <View className="flex h-full bg-[#9c8dd9] justify-between">
            <Swiper autoplay={true} autoplayTimeout={7}>
                <Screen1 />
                <Screen2 />
                <Screen3 />
            </Swiper>
            <View className="flex-col px-6 w-full space-y-3 py-8 justify-evenly">
                <View>
                    <TouchableOpacity onPress={() => Navigation.navigate('Signup')} className="w-full   shadow-sm py-3 rounded-lg bg-[#f3f2f6]  flex items-center justify-center">
                        <Text className=" text-black text-lg font-semibold">Open a new account</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity className="w-full  shadow-sm py-3 rounded-lg bg-[#000000]   flex items-center justify-center">
                        <Text className="text-[#ffffff] text-lg font-semibold">Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export const Screen1 = () => {
    return (
        <View className="flex-col py-20 px-6 justify-between  ">
            <View className="border-1 border-black shadow-2xl w-full h-96">
                <View className="flex-1 justify-center items-center">
                    <Text className="text-3xl font-bold" >Pay pulse</Text>
                </View>
            </View>
            <View className="flex items-center justify-center mt-5 ">
                <Text className="text-lg text-center font-bold ">Pay your Bills with ease with pay pulse and enjoy free bonuses</Text>
            </View>

        </View>

    )
}

export const Screen2 = () => {
    return (
        <View className="flex-col py-20 px-6 justify-between  ">
            <View className="border-1 border-black shadow-2xl w-full h-96">
                <View className="flex-1 justify-center items-center">
                    <Text className="text-3xl font-bold" >Pay pulse</Text>
                </View>
            </View>
            <View className="flex items-center justify-center mt-5 ">
                <Text className="text-lg text-center font-bold">Pay your Bills with ease with pay pulse and enjoy free bonuses</Text>
            </View>

        </View>

    )
}

export const Screen3 = () => {
    return (
        <View className="flex-col py-20 px-6 justify-between  ">
            <View className="border-1 border-black shadow-2xl w-full h-96">
                <View className="flex-1 justify-center items-center">
                    <Text className="text-3xl font-bold" >Pay pulse</Text>
                </View>
            </View>
            <View className="flex items-center justify-center mt-5 ">
                <Text className="text-lg text-center font-bold">Pay your Bills with ease with pay pulse and enjoy free bonuses</Text>
            </View>

        </View>

    )
}
export default OnboardingScreen