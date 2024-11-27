import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, Platform, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { setAuthToken, setTokenNull } from '../context/actions/tokenAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { favicon } from "../assets"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { bgcolor } from '../components/objects';
import { HomeFirstComp, HomeSecondComp } from '../components';
import HomeThirdComp from '../components/HomeThirdComp';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Platform.OS === 'android' ? '100%' : 'auto',
    },
    scrollView: {
        flex: 1,
        backgroundColor: '#fff', // optional
    },
});


const HomeScreen = () => {
    const dispatch = useDispatch()
    const Navigation = useNavigation()
    const userData = useSelector((state) => state.validatedToken)
    console.log(userData)
    const userFirstname = userData?.token?.data?.firstName
    const pic = require('../assets/index')
    const [refreshing, setRefreshing] = useState(false);
    const HandleLogout = () => {
        dispatch(setTokenNull())
        Navigation.replace("OnboardingScreen")

    }
    return (
        <SafeAreaView className={`pt-1 px-3  w-full flex flex-col justify-between bg-[#111111] h-full`}>
            <View className="flex flex-row  justify-between">
                <View className="flex flex-row space-x-2 items-center">
                    <View>
                        <Image source={pic.harbest} className="w-11 h-11 rounded-full" resizeMode='cover' />
                    </View>
                    <View>
                        <Text className="text-white text-lg font-bold">Hi, {userFirstname}</Text>
                    </View>
                </View>
                <View className="flex flex-row space-x-2 items-center">
                    <TouchableOpacity>
                        <MaterialIcons name={'chat'} size={26} color={'#ffffff'} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View className="relative">
                            <MaterialIcons name={'notifications'} size={26} color={'#ffffff'} />
                            <View
                                className="absolute top-[-2px] right-[-2px] bg-red-500 w-3 h-3 rounded-full"

                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView className="pt-3"
                refreshControl={
                    <RefreshControl
                        tintColor={"#fbfbfb"}
                        refreshing={refreshing}
                        onRefresh={() => {
                            setRefreshing(true);
                            // Your refresh logic here
                            setTimeout(() => setRefreshing(false), 2000);
                        }}
                    />

                }
            >

                <View className="">
                    <HomeFirstComp />
                </View>
                <View className="">
                    <View className="rounded-2xl justify-center items-center bg-[#151515] " >

                        <HomeSecondComp />
                    </View>

                </View>

                <HomeThirdComp />

            </ScrollView>


            {/*
            <View className="flex-1 justify-center items-center">
                <Text className="text-xl text-blue-500">Home</Text>
                <TouchableOpacity>
                    <Text className="text-xl font-extrabold text-red-500" onPress={HandleLogout}>Logout</Text>
                </TouchableOpacity>
            </View> */}
        </SafeAreaView>


    )
}

export default HomeScreen