import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer'
import TabNavigator from "./TabNavigator";
import Home from "../screens/Home"

const Drawer = createDrawerNavigator()
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home}></Drawer.Screen>
            <Drawer.Screen name="Tabs" component={TabNavigator}></Drawer.Screen>
        </Drawer.Navigator>
    )
}
export default DrawerNavigator