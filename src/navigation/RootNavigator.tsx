import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomScreen from '../screens/WelcomeScreen/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen.test';
const Stack = createNativeStackNavigator();

function RootNavigator(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomScreen" component={WelcomScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
