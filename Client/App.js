import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomeScreen,
  LoginScreen,
  OnboardingScreen,
  SignupOtpScreen,
  SignupScreen,
  PasswordScreen,
} from "./screens";

const Stack = createNativeStackNavigator();
const transitionConfig = {
  animation: "slide",
  config: {
    duration: 500,
  },
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "ios",
          gestureEnabled: true,
        }}
      >
        <Stack.Screen name="Onboard" component={OnboardingScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="SignupOtpScreen" component={SignupOtpScreen} />
        <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
