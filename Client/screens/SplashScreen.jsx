import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
    const validatedToken = useSelector((state) => state.validatedToken);
    const Navigation = useNavigation();



    useEffect(() => {
        const isValidToken = () => {
            if (validatedToken && validatedToken.token && validatedToken.token.data) {
                const token = validatedToken.token.data
                const expirationTime = token['exp'];
                const issuedAtTime = token['iat'];
                const currentTime = Math.floor(Date.now() / 1000);


                if (currentTime < expirationTime && currentTime > issuedAtTime) {
                    return true
                } else {
                    return false
                }
            };
        }


        const checkTokenValidity = () => {
            if (!isValidToken() || validatedToken.data === null) {
                console.log("Token not found", validatedToken);
                Navigation.replace("Onboard", {
                    animation: "none",
                });
            } else {
                Navigation.replace("HomeScreen", {
                    animation: "none",
                });
                console.log("This is a validated token");
            }
        };

        setTimeout(checkTokenValidity, 350);
    }, [validatedToken, Navigation]);
    return (
        <View className="flex-1 items-center justify-center bg-[#9c8dd9]">
            <Text className="text-2xl font-extrabold text-white">MITT</Text>
        </View>
    )
}


export default SplashScreen;