import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',  
        tabBarInactiveTintColor: 'Black',  
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="briefcase" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="info-circle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="phone" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
