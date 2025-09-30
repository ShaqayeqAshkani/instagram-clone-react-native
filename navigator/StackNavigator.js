import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import TabNavigator from '../navigator/TabNavigator';

const StackNavigator = () => {
const Stack = createStackNavigator();
 return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Application" component={TabNavigator} />

    </Stack.Navigator>
  );
};

export default StackNavigator ;

