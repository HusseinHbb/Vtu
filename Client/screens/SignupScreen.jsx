import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ArrowBack, TextSnippet } from '@mui/icons-material';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';

const SignupScreen = () => {
    const Navigation = useNavigation()
    return (
        <View className="py-11 px-2 h-full bg-[#333333]">
            <TouchableOpacity onPress={() => Navigation.goBack()}>
                <MaterialIcons name={'chevron-left'} size={36} color={'#ffffff'} />
            </TouchableOpacity>
            <View>
                <View className="py-3 px-4 ">
                    <Text className="font-extrabold text-3xl text-white ">
                        Welcome to Paypulse
                    </Text>
                    <View className="py-6">
                        <View>
                            <Text className="font-bold text-gray-400 text-lg">Enter your email</Text>
                        </View>
                        <View className=" bg-[#444444] rounded-xl px-4 py-3.5 flex-row items-center justify-between space-x-4 my-0.5">
                            <TextInput
                                className="flex-1 text-base text-[#E5E7EB] font-semibold -mt-1"
                            // placeholder='Enter email'
                            // placeholderTextColor={"#CBD5E0"}
                            />
                        </View>
                        {/* <View className="py-2 ">
                            <Text className="text-lg text-white">
                                By creating an account, I agree to paypulse's
                                <TouchableOpacity onPress={() => Linking.openURL('http://www.facebook.com')}>
                                    <Text className="text-lg text-white text-decoration-line">Terms and Conditions</Text>
                                </TouchableOpacity>
                            </Text>
                        </View> */}
                    </View>
                </View>
            </View>


        </View>
    );
};

export default SignupScreen;