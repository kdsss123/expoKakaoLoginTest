import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';


import Splash from "./screens/splash";
import KaKaoLogin from "./screens/kakaoLogin";
import Signin from "./screens/signin";
import Signup from "./screens/signup";
import Home from "./screens/home";

import Screen1 from "./screens/screen1";
import Screen2 from "./screens/screen2";
import Screen3 from "./screens/screen3";
import Screen4 from "./screens/screen4";
import Screen5 from "./screens/screen5";
import Screen6 from "./screens/screen6";

const Stack = createStackNavigator();

function StackScreen() {
    return (
        <Stack.Navigator
        initialRouteName="Splash"
        >
            <Stack.Screen name = "Splash" component={Splash} options={{headerShown: false}} />
            <Stack.Screen name = "Signin" component={Signin} options={{headerShown: false}} />
            <Stack.Screen name = "KaKaoLogin" component={KaKaoLogin} options={{headerShown: false}} />
            <Stack.Screen name = "Signup" component={Signup} options={{headerShown: false}} />
            <Stack.Screen name = "Home" component={BottomStack} options={{headerShown: false}} />
        </Stack.Navigator>
    );
}

const TopTab = createMaterialTopTabNavigator();

function Top1() {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name = "Top1 Screen1" component={Screen1} />
            <TopTab.Screen name = "Top1 Screen2" component={Screen2} />
        </TopTab.Navigator>
    );
}

// function Top2() {
//     return (
//         <TopTab.Navigator>
//             <TopTab.Screen name = "Top2 Screen4" component={Screen4} />
//             <TopTab.Screen name = "Top2 Screen5" component={Screen5} />
//             <TopTab.Screen name = "Top2 Screen6" component={Screen6} />
//         </TopTab.Navigator>
//     );
// }

function SettingScreen() {
    return (
        <Stack.Navigator initialRouteName="Screen4">
            <Stack.Screen name = "Screen4" component={Screen4} options={{headerShown: false}} />
            <Stack.Screen name = "Screen5" component={Screen5} options={{headerShown: false}} />
            <Stack.Screen name = "Screen6" component={Screen6} options={{headerShown: false}} />
        </Stack.Navigator>
    );
}

const BottomTab = createBottomTabNavigator();

function BottomStack() {
    return(
        <BottomTab.Navigator>
            <BottomTab.Screen name = "Top1" component={Top1} options={{
                headerShown:false,
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name = "home" color={color} size = {30} />
                ),
            }} />
            <BottomTab.Screen name = "Bottom" component={Screen3} options={{
                headerShown:false,
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name = "chat-alert" color={color} size = {30} />
                ),
            }} />
            <BottomTab.Screen name = "SettingScreen" component={SettingScreen} options={{
                headerShown:false,
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name = "brightness-5" color={color} size = {30} />
                ),
            }} />
        </BottomTab.Navigator>
    );
}

function Navigation() {
    return (
        <NavigationContainer>
            <StackScreen>
                <BottomStack />
            </StackScreen>
        </NavigationContainer>
    );
}

export default Navigation;