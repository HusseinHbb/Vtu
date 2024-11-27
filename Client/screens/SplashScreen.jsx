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
                    console.log("token expired");
                    return false


                }
            };
        }
        console.log(isValidToken())

        const checkTokenValidity = () => {
            if (!validatedToken || !validatedToken.token || !validatedToken.token.data) {
                console.log("Token not found", validatedToken);
                Navigation.replace("OnboardingScreen");
            } else {
                const tokenIsValid = isValidToken();
                console.log("Token validity:", tokenIsValid);

                if (tokenIsValid) {
                    console.log("Navigating to HomeScreen");
                    Navigation.replace("HomeScreen");
                } else {
                    console.log("Navigating to LoginScreen");
                    Navigation.reset({
                        index: 0,
                        routes: [{ name: "LoginScreen" }]
                    });
                }
            }
        }

        setTimeout(checkTokenValidity, 350);
    }, [validatedToken, Navigation]);
    return (
        <View className="flex-1 items-center justify-center bg-[#9c8dd9]">
            <Text className="text-2xl font-extrabold text-white">MITT</Text>
        </View>
    )
}


export default SplashScreen;