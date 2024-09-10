import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import EmailRegisterScreen from '../screens/RegisterScreen/EmailRegisterScreen';
import LoginScreen from '../screens/RegisterScreen/LoginScreen';
import PersonalDetailsScreen from '../screens/RegisterScreen/PersonalDetailsScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import TabNavigator from './TabNavigator';

export type RootStackParamList = {
  WelcomeScreen: undefined; // or other params if any
  RegisterScreen: undefined;
  EmailRegisterScreen: undefined;
  LoginScreen: undefined;
  PersonalDetailsScreen: undefined;
  OnboardingScreen: undefined;
  TabNavigator: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen
          name="EmailRegisterScreen"
          component={EmailRegisterScreen}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="PersonalDetailsScreen"
          component={PersonalDetailsScreen}
        />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
