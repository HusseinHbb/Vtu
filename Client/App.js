import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, OnboardingScreen, SignupScreen } from "./screens";
import { Easing } from "react-native";

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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
