import React, { useState } from 'react';
import { View, Text, Pressable, ToastAndroid, SafeAreaView } from 'react-native';

const NumericPad = () => {
    const [inputValue, setInputValue] = useState('');
    const [verifying, setVerifying] = useState(false);

    const handleButtonPress = (value) => {
        if (inputValue.length < 6) {
            setInputValue(inputValue + value);
        }
    };

    const handleClearPress = () => {
        setInputValue('');
    };

    const handleDeletePress = () => {
        setInputValue(inputValue.slice(0, -1));
    };

    React.useEffect(() => {
        if (inputValue.length === 6) {
            verifyOTP();
        }
    }, [inputValue]);

    const verifyOTP = async () => {
        setVerifying(true);
        try {
            // Replace with your API call to verify OTP
            const response = await fetch('https://example.com/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ otp: inputValue }),
            });

            const data = await response.json();

            if (data.success) {
                ToastAndroid.show('OTP verified successfully', ToastAndroid.SHORT);
            } else {
                // ToastAndroid.show('Invalid OTP', ToastAndroid.SHORT);
                setInputValue('');
            }
        } catch (error) {
            // ToastAndroid.show('Error verifying OTP', ToastAndroid.SHORT);
            setInputValue('');
        } finally {
            setVerifying(false);
        }
    };

    return (
        <SafeAreaView className="w-full h-full bg-black flex justify-center items-center">
            <View className="w-80 h-20 bg-gray-800 rounded-lg mb-4 flex flex-row justify-space-between items-center">
                <View className="w-12 h-12 bg-gray-900 rounded-lg flex justify-center items-center border border-gray-700">
                    <Text className="text-2xl font-bold text-white">{inputValue[0] || "*"}</Text>
                </View>
                <View className="w-12 h-12 bg-gray-900 rounded-lg flex justify-center items-center border border-gray-700">
                    <Text className="text-2xl font-bold text-white">{inputValue[1] || "*"}</Text>
                </View>
                <View className="w-12 h-12 bg-gray-900 rounded-lg flex justify-center items-center border border-gray-700">
                    <Text className="text-2xl font-bold text-white">{inputValue[2] || "*"}</Text>
                </View>
                <View className="w-12 h-12 bg-gray-900 rounded-lg flex justify-center items-center border border-gray-700">
                    <Text className="text-2xl font-bold text-white">{inputValue[3] || "*"}</Text>
                </View>
                <View className="w-12 h-12 bg-gray-900 rounded-lg flex justify-center items-center border border-gray-700">
                    <Text className="text-2xl font-bold text-white">{inputValue[4] || "*"}</Text>
                </View>
                <View className="w-12 h-12 bg-gray-900 rounded-lg flex justify-center items-center border border-gray-700">
                    <Text className="text-2xl font-bold text-white">{inputValue[5] || "*"}</Text>
                </View>
            </View>
            <View className="flex flex-col">
                <View className="flex flex-row justify-between mb-4">
                    <Pressable
                        className="w-24 h-24 bg-gray-700 rounded-lg flex justify-center items-center active:scale-90 active:bg-gray-600 transition duration-100"
                        onPress={() => handleButtonPress('1')}
                    >
                        <Text className="text-3xl font-bold text-white">1</Text>
                    </Pressable>
                    <Pressable
                        className="w-24 h-24 bg-gray-700 rounded-lg flex justify-center items-center active:scale-90 active:bg-gray-600 transition duration-100"
                        onPress={() => handleButtonPress('2')}
                    >
                        <Text className="text-3xl font-bold text-white">2</Text>
                    </Pressable>
                    <Pressable
                        className="w-24 h-24 bg-gray-700 rounded-lg flex justify-center items-center active:scale-90 active:bg-gray-600 transition duration-100"
                        onPress={() => handleButtonPress('3')}
                    >
                        <Text className="text-3xl font-bold text-white">3</Text>
                    </Pressable>
                </View>
                <View className="flex flex-row justify-between mb-4">
                    <Pressable
                        className="w-24 h-24 bg-gray-700 rounded-lg flex justify-center items-center active:scale-90 active:bg-gray-600 transition duration-100"
                        onPress={() => handleButtonPress('4')}
                    >
                        <Text className="text-3xl font-bold text-white">4</Text>
                    </Pressable>
                    <Pressable
                        className="w-24 h-24 bg-gray-700 rounded-lg flex justify-center items-center active:scale-90 active:bg-gray-600 transition duration-100"
                        onPress={() => handleButtonPress('5')}
                    >
                        <Text className="text-3xl font-bold text-white">5</Text>
                    </Pressable>
                    <Pressable
                        className="w-24 h-24 bg-gray-700 rounded-lg flex justify-center items-center active:scale-90 active:bg-gray-600 transition duration-100"
                        onPress={() => handleButtonPress('6')}
                    >
                        <Text className="text-3xl font-bold text-white">6</Text>
                    </Pressable>
                </View>
                <View className="flex flex-row justify-between mb-4">
                    <Pressable
                        className="w-24 h-24 bg-gray-700 rounded-lg flex justify-center items-center active:scale-90 active:bg-gray-600 transition duration-100"
                        onPress={() => handleButtonPress('7')}
                    >
                        <Text className="text-3xl font-bold text-white">7</Text>
                    </Pressable>
                    <Pressable
                        className="w-24 h-24 bg-gray-700 rounded-lg flex justify-center items-center active:scale-90 active:bg-gray-600 transition duration-100"
                        onPress={() => handleButtonPress('8')}
                    >
                        <Text className="text-3xl font-bold text-white">8</Text>
                    </Pressable>
                    <Pressable
                        className="w-24 h-24 bg-gray-700 rounded-lg flex justify-center items-center active:scale-90 active:bg-gray-600 transition duration-100"
                        onPress={() => handleButtonPress('9')}
                    >
                        <Text className="text-3xl font-bold text-white">9</Text>
                    </Pressable>
                </View>
                <View className="flex flex-row justify-between mb-4">
                    <Pressable
                        className="w-24 h-24 bg-gray-700 rounded-lg flex justify-center items-center active:scale-90 active:bg-gray-600 transition duration-100"
                        onPress={handleClearPress}
                    >
                        <Text className="text-xl font-bold text-white">Clear</Text>
                    </Pressable>
                    <Pressable
                        className="w-24 h-24 bg-gray-700 rounded-lg flex justify-center items-center active:scale-90 active:bg-gray-600 transition duration-100"
                        onPress={() => handleButtonPress('0r')}>
                        <Text className="text-3xl font-bold text-white">0</Text>
                    </Pressable>
                    <Pressable
                        className="w-24 h-24 bg-gray-700 rounded-lg flex justify-center items-center active:scale-90 active:bg-gray-600 transition duration-100"
                        onPress={handleDeletePress}
                    >
                        <Text className="text-xl font-bold text-white">Del</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default NumericPad;