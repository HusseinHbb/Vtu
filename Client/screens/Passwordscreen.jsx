import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { SvgXml } from 'react-native-svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createuser, validateUserJWTToken } from '../api';

const Passwordscreen = () => {

    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation()
    const route = useRoute()
    const email = route.params.email;

    const HandlePassword = (text) => {
        setPassword(text);
    };

    const handleFirstName = (text) => {
        setFirstName(text)
    }
    const handleLastName = (text) => {
        setlastName(text)
    }
    const HandleOnsubmit = async () => {
        try {
            const res = await createuser(email, password, firstName, lastName)
            console.log("clicked");

            const token = res.token
            console.log("token", token);
            const userCred = await validateUserJWTToken(token)
            console.log("userCred", userCred)

            navigation.navigate('HomeScreen')
        } catch (err) {
            return null
        }


    }
    return (
        <View className="py-10 px-2 h-full bg-[#333333]">
            <TouchableOpacity onPress={() => Navigation.goBack()}>
                <MaterialIcons name={'chevron-left'} size={36} color={'#ffffff'} />
            </TouchableOpacity>
            <View>
                <View className="py-3 px-4 ">
                    <Text className="font-extrabold text-3xl text-white ">
                        Create a password
                    </Text>

                    <View className="py-5 flex flex-row space-x-4  ">
                        <View className="flex-1 ">
                            <Text className="font-bold text-gray-400 text-lg">First Name</Text>
                            <View className="bg-[#444444] rounded-xl px-4 py-3 flex-row items-center justify-between">
                                <TextInput
                                    className="flex-1 text-base text-[#E5E7EB] font-semibold -mt-1"
                                    value={firstName}
                                    onChangeText={handleFirstName}
                                />
                            </View>
                        </View>
                        <View className="flex-1 ">
                            <Text className="font-bold text-gray-400 text-lg">Last Name</Text>
                            <View className="bg-[#444444] rounded-xl px-4 py-3 flex-row items-center justify-between">
                                <TextInput
                                    className="flex-1 text-base text-[#E5E7EB] font-semibold -mt-1"
                                    value={lastName}
                                    onChangeText={handleLastName}
                                />
                            </View>
                        </View>
                    </View>
                    <View className=" ">
                        <View>
                            <Text className="font-bold text-gray-400 text-lg">Password</Text>
                        </View>
                        <View className="bg-[#444444] rounded-xl px-4 py-3 flex-row items-center justify-between space-x-4 my-0.5">
                            <TextInput
                                className="flex-1 text-base text-[#E5E7EB] font-semibold -mt-1"
                                value={password}
                                onChangeText={HandlePassword}
                                secureTextEntry={showPassword ? true : false}

                            />

                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <MaterialIcons
                                    name={showPassword ? 'visibility-off' : 'visibility'}
                                    size={24}
                                    color={'#9ca3af'}
                                />
                            </TouchableOpacity>
                        </View>
                        {password.length < 8 && password !== "" && (
                            <Text className="text-sm text-red-400">Password must be at least 8 characters</Text>)}






                    </View>
                    <View className="py-5">
                        <TouchableOpacity onPress={HandleOnsubmit} className="w-full  py-3 rounded-lg bg-[#7E57C2]  flex items-center justify-center">

                            <Text className=" text-white text-lg font-bold">Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View >
    )
}

export default Passwordscreen;