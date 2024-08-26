import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen.test';

export type RootStackParamList = {
  WelcomeScreen: undefined; // or other params if any
  RegisterScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
