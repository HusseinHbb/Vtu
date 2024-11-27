import { View, Text, Pressable } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { bgSecColor } from './objects';

const Bottomtab = ({ activeScreen }) => {
    const Navigation = useNavigation()
    return (
        <View className="p-4 px-8 bottom-0 w-full  border border-t-0.5 absolute bg-transparent  border-t-[#444444] ">
            <View className="flex flex-row space-x-2 pb-5  justify-between">
                <Pressable onPress={() => Navigation.navigate("HomeScreen")}>
                    <View className="justify-center items-center ">
                        <View >
                            <MaterialIcons name={'home'} size={24} color={activeScreen == "HomeScreen" ? `${bgSecColor}` : "#9ca3af"} />
                        </View>
                        <View className="mt-[]">
                            <Text className={`${activeScreen === "HomeScreen" ? "text-[#6e47b1]" : "text-[#9ca3af]"} text-xs  font-bold`}>Home</Text>
                        </View>
                    </View>
                </Pressable>
                <Pressable onPress={() => Navigation.navigate("PayScreen")}>
                    <View className="justify-center items-center ">
                        <View>
                            <MaterialIcons name={'send'} size={24} color={activeScreen == "PayScreen" ? `${bgSecColor}` : "#9ca3af"} />
                        </View>
                        <View className="mt-[]">
                            <Text className={`${activeScreen === "PayScreen" ? "text-[#6e47b1]" : "text-[#9ca3af]"} text-xs  font-bold`}>Pay</Text>
                        </View>
                    </View>

                </Pressable>

                <Pressable onPress={() => Navigation.navigate("InvestScreen")}>
                    <View className="justify-center items-center ">
                        <View>
                            <FontAwesome name='bar-chart' size={24} color={activeScreen == "InvestScreen" ? `${bgSecColor}` : "#9ca3af"} />
                        </View>
                        <View className="mt-[]">
                            <Text className={`${activeScreen === "InvestScreen" ? "text-[#6e47b1]" : "text-[#9ca3af]"} text-xs  font-bold`}>Invest</Text>
                        </View>
                    </View>
                </Pressable>

                <Pressable onPress={() => Navigation.navigate("AssetsScreen")} >
                    <View className="justify-center items-center ">
                        <View>

                            <MaterialIcons name={'wallet'} size={24} color={activeScreen == "AssetsScreen" ? `${bgSecColor}` : "#9ca3af"} />

                        </View>
                        <View className="mt-[]">
                            <Text className={`${activeScreen === "AssetsScreen" ? "text-[#6e47b1]" : "text-[#9ca3af]"} text-xs  font-bold`}>Assets</Text>
                        </View>
                    </View>
                </Pressable>

                <Pressable onPress={() => Navigation.navigate("MoreScreen")} >
                    <View className="justify-center items-center ">
                        <View>

                            <FontAwesome name={'cog'} size={24} color={activeScreen == "MoreScreen" ? `${bgSecColor}` : "#9ca3af"} />

                        </View>
                        <View className="mt-[]">
                            <Text className={`${activeScreen === "MoreScreen" ? "text-[#6e47b1]" : "text-[#9ca3af]"} text-xs  font-bold`}>Me</Text>
                        </View>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

export default Bottomtab