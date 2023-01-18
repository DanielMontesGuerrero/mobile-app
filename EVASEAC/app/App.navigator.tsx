import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const { Navigator, Screen } = createNativeStackNavigator();

import HomeScreen from "./screens/HomeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";
import Protocol1Screen from "./screens/protocol1/Protocol1Screen";
import Protocol2MainScreen from "./screens/protocol2/Protocol2MainScreen";
import Pt2ConditionsScreen from "./screens/protocol2/Pt2ConditionsScreen";
import SitesScreen from "./screens/sites/SitesScreen";
import CreateSitesScreen from "./screens/sites/CreateSitesScreen";
import Protocol3Screen from "./screens/protocol3/Protocol3Screen";
import Protocol4Screen from "./screens/protocol4/Protocol4Screen";

const AppNavigator = () => (
    <NavigationContainer>
        <Navigator 
            screenOptions={{
                headerShown : false
            }} initialRouteName="login"
        >
            <Screen name="signup" component={SignUpScreen}></Screen>
            <Screen name="home" component={HomeScreen}></Screen>
            <Screen name="login" component={LoginScreen}></Screen>
            <Screen name="Protocol1" component={Protocol1Screen}></Screen>
            <Screen name="Protocol2" component={Protocol2MainScreen}></Screen>
            <Screen name="Protocol3" component={Protocol3Screen}></Screen>
            <Screen name="Protocol4" component={Protocol4Screen}></Screen>
            <Screen name="pt2-climate-conditions" component={Pt2ConditionsScreen}></Screen>
            <Screen name="sitios" component={SitesScreen}></Screen>
            <Screen name="create-site" component={CreateSitesScreen}></Screen>
        </Navigator>
    </NavigationContainer>
);

export default AppNavigator;