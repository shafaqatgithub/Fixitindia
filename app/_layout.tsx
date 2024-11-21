import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './(tabs)/_layout';
import Login from './Login';
import { NavigationContainer } from '@react-navigation/native';
import Signup from './Signup';

const Stack = createNativeStackNavigator();

const AppLayout = () => {
  return (
    
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }} 
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }} 
      />
      <Stack.Screen
        name="MainTabs"
        component={Tabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>


  );
};

export default AppLayout;