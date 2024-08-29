import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import OtpTextInput from 'react-native-otp-textinput';
import { AsyncStorage } from 'react-native';


const SignupOtpScreen = () => {
    const Navigation = useNavigation();
    const route = useRoute();
    const [canResend, setCanResend] = useState(false);
    const [countdown, setCountdown] = useState(120); // 2 minutes
    const HandleOtpCode = () => {
        Navigation.goBack()
    }
    const email = route.params.email;

    useEffect(() => {
        const timerId = setInterval(() => {
            setCountdown(countdown - 1);
            if (countdown === 0) {
                setCanResend(true);
            }
        }, 1000);
        return () => clearInterval(timerId);
    }, [countdown]);
    return (
        <View className="py-11 px-2 h-full bg-[#333333]">
            <TouchableOpacity onPress={() => Navigation.goBack()}>
                <MaterialIcons name={'chevron-left'} size={36} color={'#ffffff'} />
            </TouchableOpacity>
            <View>
                <View className="py-3 px-4 ">
                    <Text className="font-extrabold text-3xl text-white ">
                        Verify your email
                    </Text>
                    <View>
                        <Text className="font-bold text-gray-400 text-sm">A 4-digit verification code has been sent to {email}. Please enter the code within 30 minutes to verify.</Text>
                    </View>
                    <View className="py-6 ">
                        <View>
                            <Text className="font-bold text-gray-100 text-sm">Verification Code</Text>
                        </View>
                        <View className=" rounded-xl px-4 py-2 flex-row items-center justify-between space-x-4 my-0.5">
                            <OtpTextInput
                                className="flex-1  self-center  mr-2 py-2 border-b border-gray-400 text-base text-center text-[#E5E7EB] font-semibold -mt-1"
                                inputCount={4}
                            />
                        </View>
                        <View className="flex flex-row justify-between ">
                            <View>
                            </View>
                            <TouchableOpacity disabled={!canResend} onPress={() => {
                                setCanResend(false);
                                setCountdown(120); // reset timer
                            }}>
                                <Text className={`font-bold text-white text-sm ${!canResend ? "text-gray-400" : ""}`}>{canResend ? 'Resend code' : countdown > 0 ? `Resend code in ${Math.floor(countdown / 60)}:${String(countdown % 60).padStart(2, '0')}` : 'Resend code'}</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={HandleOtpCode} className="w-full  py-3 rounded-lg bg-[#7E57C2] my-3 flex items-center justify-center">
                            <Text className=" text-white text-lg font-bold">Verify</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default SignupOtpScreen