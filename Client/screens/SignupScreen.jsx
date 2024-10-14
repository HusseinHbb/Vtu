import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SvgXml } from 'react-native-svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';
import { sendemail } from '../api';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignupScreen = () => {
    const [email, setEmail] = useState("")
    const [isValidEmail, setisValidEmail] = useState(false)
    const [isLoading, setisLoading] = useState(false)

    const googleIcon = `
   <?xml version="1.0" ?><svg enable-background="new 0 0 24 24" id="Layer_1" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M12,5c1.6167603,0,3.1012573,0.5535278,4.2863159,1.4740601l3.637146-3.4699707   C17.8087769,1.1399536,15.0406494,0,12,0C7.392395,0,3.3966675,2.5999146,1.3858032,6.4098511l4.0444336,3.1929321   C6.4099731,6.9193726,8.977478,5,12,5z" fill="#F44336"/><path d="M23.8960571,13.5018311C23.9585571,13.0101929,24,12.508667,24,12   c0-0.8578491-0.093689-1.6931763-0.2647705-2.5H12v5h6.4862061c-0.5247192,1.3637695-1.4589844,2.5177612-2.6481934,3.319458   l4.0594482,3.204834C22.0493774,19.135437,23.5219727,16.4903564,23.8960571,13.5018311z" fill="#2196F3"/><path d="M5,12c0-0.8434448,0.1568604-1.6483765,0.4302368-2.3972168L1.3858032,6.4098511   C0.5043335,8.0800171,0,9.9801636,0,12c0,1.9972534,0.4950562,3.8763428,1.3582153,5.532959l4.0495605-3.1970215   C5.1484375,13.6044312,5,12.8204346,5,12z" fill="#FFC107"/><path d="M12,19c-3.0455322,0-5.6295776-1.9484863-6.5922241-4.6640625L1.3582153,17.532959   C3.3592529,21.3734741,7.369812,24,12,24c3.027771,0,5.7887573-1.1248169,7.8974609-2.975708l-4.0594482-3.204834   C14.7412109,18.5588989,13.4284058,19,12,19z" fill="#00B060"/><path d="M12,23.75c-3.5316772,0-6.7072754-1.4571533-8.9524536-3.7786865C5.2453613,22.4378052,8.4364624,24,12,24   c3.5305786,0,6.6952515-1.5313721,8.8881226-3.9592285C18.6495972,22.324646,15.4981079,23.75,12,23.75z" opacity="0.1"/><polygon opacity="0.1" points="12,14.25 12,14.5 18.4862061,14.5 18.587492,14.25  "/><path d="M23.9944458,12.1470337C23.9952393,12.0977783,24,12.0493774,24,12   c0-0.0139771-0.0021973-0.0274658-0.0022583-0.0414429C23.9970703,12.0215454,23.9938965,12.0838013,23.9944458,12.1470337z" fill="#E6E6E6"/><path d="M12,9.5v0.25h11.7855721c-0.0157471-0.0825195-0.0329475-0.1680908-0.0503426-0.25H12z" fill="#FFFFFF" opacity="0.2"/><linearGradient gradientUnits="userSpaceOnUse" id="SVGID_1_" x1="0" x2="24" y1="12" y2="12"><stop offset="0" style="stop-color:#FFFFFF;stop-opacity:0.2"/><stop offset="1" style="stop-color:#FFFFFF;stop-opacity:0"/></linearGradient><path d="M23.7352295,9.5H12v5h6.4862061C17.4775391,17.121582,14.9771729,19,12,19   c-3.8659668,0-7-3.1340332-7-7c0-3.8660278,3.1340332-7,7-7c1.4018555,0,2.6939087,0.4306641,3.7885132,1.140686   c0.1675415,0.1088867,0.3403931,0.2111206,0.4978027,0.333374l3.637146-3.4699707L19.8414307,2.940979   C17.7369385,1.1170654,15.00354,0,12,0C5.3725586,0,0,5.3725586,0,12c0,6.6273804,5.3725586,12,12,12   c6.1176758,0,11.1554565-4.5812378,11.8960571-10.4981689C23.9585571,13.0101929,24,12.508667,24,12   C24,11.1421509,23.906311,10.3068237,23.7352295,9.5z" fill="url(#SVGID_1_)"/><path d="M15.7885132,5.890686C14.6939087,5.1806641,13.4018555,4.75,12,4.75c-3.8659668,0-7,3.1339722-7,7   c0,0.0421753,0.0005674,0.0751343,0.0012999,0.1171875C5.0687437,8.0595093,8.1762085,5,12,5   c1.4018555,0,2.6939087,0.4306641,3.7885132,1.140686c0.1675415,0.1088867,0.3403931,0.2111206,0.4978027,0.333374   l3.637146-3.4699707l-3.637146,3.2199707C16.1289062,6.1018066,15.9560547,5.9995728,15.7885132,5.890686z" opacity="0.1"/><path d="M12,0.25c2.9750366,0,5.6829224,1.0983887,7.7792969,2.8916016l0.144165-0.1375122   l-0.110014-0.0958166C17.7089558,1.0843592,15.00354,0,12,0C5.3725586,0,0,5.3725586,0,12   c0,0.0421753,0.0058594,0.0828857,0.0062866,0.125C0.0740356,5.5558472,5.4147339,0.25,12,0.25z" fill="#FFFFFF" opacity="0.2"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>
  `;
    const Navigation = useNavigation();
    const HandleOnsubmit = async () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const status = emailRegex.test(email);
        setisValidEmail(status)
        if (isValidEmail) {
            setisLoading(true)
            // sendemail(email).then((res) => {
            //     console.log(res)
            // })
            try {
                const res = await sendemail(email);
                console.log(res)
                setisLoading(false)
                Navigation.navigate("SignupOtpScreen", { email: email });
            } catch (err) {
                console.log(err)
                setisLoading(false)

            }

        } else {
            return;
            // console.log("Invalid email address");
        }
    };

    const HandleEmail = (text) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const status = emailRegex.test(text);
        setEmail(text);
        setisValidEmail(status);
    };
    return (
        <SafeAreaView className=" bg-[#333333] h-full" >
            <View className="">
                <TouchableOpacity onPress={() => Navigation.goBack()}>
                    <MaterialIcons name={'chevron-left'} size={36} color={'#ffffff'} />
                </TouchableOpacity>
                <View>
                    <View className="py-3 px-4 ">
                        <Text className="font-extrabold text-3xl text-white ">
                            Welcome to Paypulse
                        </Text>
                        <View className="py-6 ">
                            <View>
                                <Text className="font-bold text-gray-400 text-lg">Enter your email</Text>
                            </View>
                            <View className={`bg-[#444444] rounded-xl px-4 py-3 flex-row items-center justify-between space-x-4 my-0.5 ${!isValidEmail && email !== "" ? 'border-[0.5px] border-red-400' : 'border-none'}`}>
                                <TextInput
                                    className="flex-1 text-base text-[#E5E7EB] font-semibold -mt-1"
                                    value={email}
                                    onChangeText={HandleEmail}
                                />
                            </View>
                            {!isValidEmail && email !== "" && (
                                <Text className="text-sm text-red-400">Invalid email address</Text>)}

                            <View className="py-2 ">
                                <Text className="text-md text-white">
                                    By creating an account, I agree to paypulse's
                                    <Text onPress={() => Linking.openURL('(link unavailable)')}>
                                        <Text className="text-md text-white underline"> Terms </Text>
                                    </Text>
                                    <Text className="text-md text-white "> and </Text>
                                    <TouchableOpacity onPress={() => Linking.openURL('(link unavailable)')}>
                                        <Text className="text-md text-white underline">Condition </Text>
                                    </TouchableOpacity>
                                </Text>
                            </View>
                            <TouchableOpacity onPress={HandleOnsubmit} className="w-full  py-3 rounded-lg bg-[#7E57C2] my-3 flex items-center justify-center">
                                {isLoading ? (<Text className=" text-white text-lg font-bold">Sending email...</Text>) : (
                                    <Text className=" text-white text-lg font-bold">Continue</Text>)}
                            </TouchableOpacity>
                            <View className="flex flex-row items-center justify-center py-2">
                                <View className="border-b border-white w-1/3" />
                                <Text className="text-white text-sm font-bold px-2">Or via social</Text>
                                <View className="border-b border-white w-1/3" />
                            </View>
                            <View className="flex flex-row  my-3 justify-between" >
                                <View className="flex-1 py-3 rounded-lg bg-[#444444] space-x-2  flex-row flex items-center justify-center mr-2">
                                    <SvgXml xml={googleIcon} width={24} height={24} fill={'#ffffff'} />
                                    <Text className="text-white text-lg font-bold">Google</Text>
                                </View>
                                <View className="flex-1 py-3 rounded-lg bg-[#444444] flex flex-row items-center space-x-2 justify-center ml-2">
                                    <MaterialIcons name={'facebook'} size={24} color={'#ffffff'} />
                                    <Text className="text-white text-lg font-bold">Facebook</Text>
                                </View>
                            </View>
                            <View className="w-full  py-1 flex-row  items-center justify-center space-x-2">
                                <Text className="text-white text-base">Have an account !</Text>
                                <TouchableOpacity onPress={() => Navigation.navigate("LoginScreen")}>
                                    <Text Text className="text-base font-bold text-white" > Log in here </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View >
        </SafeAreaView>

    );
};

export default SignupScreen;