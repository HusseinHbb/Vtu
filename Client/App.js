import { View, Text, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AssetsScreen,
  HomeScreen,
  InvestScreen,
  LoginScreen,
  MoreScreen,
  OnboardingScreen,
  PayScreen,
  PinScreen,
  SignupOtpScreen,
  SignupScreen,
  SplashScreen,
} from "./screens";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./context/store";
import CreateAccountScreen from "./screens/CreateAccountscreen";
import { Bottomtab } from "./components";
const Stack = createNativeStackNavigator();
const transitionConfig = {
  animation: "slide",
  config: {
    duration: 500,
  },
};

const Mycomponent = ({ setActiveScreen }) => {
  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = navigation.addListener("state", () => {
      const currentScreen = navigation.getCurrentRoute()?.name;
      setActiveScreen(currentScreen);
      console.log("Active Screen: ", currentScreen);
    });
    return unsubscribe;
  }, [navigation]);
};
const App = () => {
  const [activeScreen, setActiveScreen] = useState("");

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#333333" />
      <NavigationContainer>
        <Mycomponent setActiveScreen={setActiveScreen} />
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
                animation: "ios",
                gestureEnabled: true,
              }}
            >
              <Stack.Screen name="SplashScreen" component={SplashScreen} />
              <Stack.Screen
                name="OnboardingScreen"
                component={OnboardingScreen}
                options={{
                  animation: "ios",
                }}
              />
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                  animation: "fade",
                  animationDuration: 150,
                }}
              />
              <Stack.Screen
                name="PayScreen"
                component={PayScreen}
                options={{
                  animation: "none",
                  animationDuration: 100,
                }}
              />
              <Stack.Screen
                name="AssetsScreen"
                component={AssetsScreen}
                options={{
                  animation: "none",
                  animationDuration: 100,
                }}
              />
              <Stack.Screen
                name="InvestScreen"
                component={InvestScreen}
                options={{
                  animation: "none",
                  animationDuration: 100,
                }}
              />
              <Stack.Screen
                name="MoreScreen"
                component={MoreScreen}
                options={{
                  animation: "none",
                  animationDuration: 100,
                }}
              />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="Signup" component={SignupScreen} />
              <Stack.Screen
                name="SignupOtpScreen"
                component={SignupOtpScreen}
              />
              <Stack.Screen name="PinScreen" component={PinScreen} />
              <Stack.Screen
                name="CreateAccountScreen"
                component={CreateAccountScreen}
              />
            </Stack.Navigator>
          </PersistGate>
        </Provider>
        {(activeScreen == "HomeScreen" ||
          activeScreen == "PayScreen" ||
          activeScreen == "InvestScreen" ||
          activeScreen == "AssetsScreen" ||
          activeScreen == "AssetsScreen" ||
          activeScreen == "MoreScreen") && (
          <Bottomtab activeScreen={activeScreen} />
        )}
      </NavigationContainer>
    </>
  );
};

export default App;
