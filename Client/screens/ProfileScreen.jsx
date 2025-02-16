import { View, Text } from 'react-native'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Pressable } from 'react-native'
import { Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthToken, setTokenNull } from '../context/actions/tokenAction'
import { createusername, getusername } from '../api'
import { useState } from 'react'
import { TextInput } from 'react-native'
import { setUserName, setUsernameNull } from '../context/actions/usenameAction'

const ProfileScreen = () => {
    const Navigation = useNavigation();
    const pic = require('../assets/index')
    const dispatch = useDispatch();
    const UserData = useSelector((state) => state.validatedToken)
    const Usernamedata = useSelector((state) => state.username)
    console.log("usernamedata", Usernamedata);

    const [userNameInput, setUserNameInput] = useState(true)
    const AccountFirstName = UserData?.token?.data?.firstName
    const AccountLastName = UserData?.token?.data?.lastName
    const AccountEmail = UserData?.token?.data?.email
    const AccountUsername = Usernamedata?.username
    const uid = UserData?.token?.data?.uid
    const [username, setUsername] = useState("")
    const usernameText = "set usernames"
    const [isEditing, setIsEditing] = useState(true);
    const inputRef = useRef(null);


    const HandleLogout = () => {
        dispatch(setTokenNull())
        dispatch(setUsernameNull())
        Navigation.replace("OnboardingScreen")

    }

    const editusername = () => {
        console.log("just ignore");
        setIsEditing(true);
        if (isEditing) {
            setTimeout(() => {
                inputRef.current.focus();
            }, 100);
        }


    }
    const sendusername = async () => {
        console.log("send");


        try {
            console.log("pressed");
            const res = await createusername(username, uid)
            console.log(res);
            console.log(res);

            // AccountUsername = username
            const updatedusername = res
            console.log(updatedusername);



            dispatch(setUserName(updatedusername))

        } catch (error) {
            console.error("Error updating username:", error);

        }
    }


    // Get username
    useEffect(() => {
        const fetchUsername = async () => {
            try {
                const res = await getusername(uid);
                console.log(res);
                dispatch(setUserName(res))
            } catch (error) {
                console.error(error);
            }
        };
        fetchUsername();
    }, []);
    return (
        <SafeAreaView className={`pt-1 relative  jbe  flex flex-col  bg-[#101010] h-full`}>
            <View className="items-center justify-between  border-b-0.5 flex flex-row  border-b-[#444444] ">
                <Pressable onPress={() => Navigation.goBack()} className=" ">

                    <MaterialIcons name={'chevron-left'} size={36} color={'#ffffff'} />
                </Pressable>
                <View className="p-4 ">
                    <Text className="text-white font-extrabold text-lg ">My Profile</Text>
                </View>
                <View className="p-4 ">
                </View>
            </View>
            <View className="items-center pt-6">
                <View>
                    <Image source={pic.gigphoto} className="w-20 h-20 rounded-full" resizeMode='cover' />
                </View>
                <View className="pt-2">
                    <Text className="text-white text-lg font-extrabold" >{AccountFirstName} </Text>
                </View>
            </View>
            <View className="px-3.5 pt-3">
                <View className="bg-[#191919] h-14 relative rounded-sm flex flex-col justify-evenly">
                    <View className="space-y-1 left-5">
                        <View className="">
                            <Text className="text-gray-300 font-bold" style={{ fontSize: 11 }}>Account Name</Text>
                        </View>
                        <View className="">
                            <Text className="text-white font-bold">{AccountEmail}</Text>
                        </View>

                    </View>
                </View>
            </View >
            <View className="px-3.5 pt-1.5">
                <View className="bg-[#191919] h-14 relative rounded-sm flex flex-col justify-evenly">
                    <View className="space-y-1 left-5">
                        <View className="">
                            <Text className="text-gray-300 font-bold" style={{ fontSize: 11 }}>Username</Text>
                        </View>
                        {AccountUsername ? (<View className="">
                            <Text className="text-white font-bold">{AccountUsername}</Text>
                        </View>) : (

                            <View className="flex flex-row pr-9 justify-between ">
                                <View>
                                    {userNameInput ? (
                                        <Text className="text-white font-bold">{usernameText}</Text>
                                    ) : (
                                        (isEditing && (
                                            <TextInput
                                                className="text-white font-bold"
                                                value={username}
                                                ref={inputRef}
                                                onChangeText={(text) => setUsername(text)}
                                                placeholderTextColor={"#ffffff"}
                                            />
                                        ))
                                    )}
                                </View>
                                <Pressable onPress={() => {
                                    (userNameInput ? editusername : sendusername)();
                                    setUserNameInput(!userNameInput)
                                }}>
                                    <MaterialIcons name={userNameInput ? "edit" : "send"} color="#ffffff" size={20} />
                                </Pressable>
                            </View>)}

                    </View>
                </View>
            </View >



            <View className="absolute bottom-8 left-0 right-0  justify-center items-center">

                <Pressable>
                    <Text className="text-xl font-extrabold text-red-500" onPress={HandleLogout}>Logout</Text>
                </Pressable>
            </View>
        </SafeAreaView >
    )
}

export default ProfileScreen