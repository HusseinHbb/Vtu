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
  SplashScreen,
} from "./screens";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./context/store";
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
              name="Onboard"
              component={OnboardingScreen}
              options={{
                animation: "ios",
              }}
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                animation: "ios",
              }}
            />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="SignupOtpScreen" component={SignupOtpScreen} />
            <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
          </Stack.Navigator>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
