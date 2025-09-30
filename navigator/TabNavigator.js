import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  FontAwesome,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import { Color } from "react-native/types_generated/Libraries/Animated/AnimatedExports";
import { size } from "lodash-es";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Reels"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="video-collection" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Shopping"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-bag" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              style={{ width: 30, height: 30, borderRadius: 15 }}
              source={require("../assets/profile.jpg")}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
