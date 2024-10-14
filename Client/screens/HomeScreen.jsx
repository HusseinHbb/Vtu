import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { setAuthToken, setTokenNull } from '../context/actions/tokenAction';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {
    const dispatch = useDispatch()
    const Navigation = useNavigation()

    const HandleLogout = () => {
        dispatch(setTokenNull())
        Navigation.replace("Onboard")

    }
    return (

        <View className="flex-1 justify-center items-center">
            <Text className="text-xl text-blue-500">Home</Text>
            <TouchableOpacity>
                <Text className="text-xl font-extrabold text-red-500" onPress={HandleLogout}>Logout</Text>
            </TouchableOpacity>
        </View>

    )
}

export default HomeScreen