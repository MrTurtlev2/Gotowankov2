import MainPage from "../pages/MainPage";
import SettingsPage from "../pages/SettingsPage";
import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import styled from "styled-components";
import {Image, Text, View} from "react-native";
import CookingIcon from '../images/cookingIcon.png';
import HeartIcon from '../images/heartIcon.png';
import SettingsIcon from '../images/settingsIcon.png';
import FavouritePage from "../pages/Favourite";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

function TabNavigation() {
    return (
            <Tab.Navigator
                tabBarPosition="bottom"
                tabBarOptions={{
                    showIcon: true,
                    showLabel: false,
                    labelStyle: { fontSize: 12 },
                    tabStyle: { zIndex: 9999, },
                    activeTintColor: 'blue',
                    inactiveTintColor: 'grey',
                    iconStyle: {height: 25, width: 25,},
                    style: {  backgroundColor: 'powderblue'},
                }}
            >
                <Tab.Screen name="MainPage" component={MainPage}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <NavItemWrapper>
                                <NavImage
                                    source={require('../images/cookingIcon.png')}
                                    style={{
                                        tintColor: focused ? 'black' : 'grey',
                                    }}
                                />
                                {/*<Text>Home</Text>*/}
                            </NavItemWrapper>
                        )
                    }}
                />
                <Tab.Screen name="FavouritePage" component={FavouritePage}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <NavItemWrapper>
                                <NavImage
                                    source={require('../images/heartIcon.png')}
                                    style={{
                                        tintColor: focused ? 'black' : 'grey',
                                    }}
                                />
                                {/*<Text>Home</Text>*/}
                            </NavItemWrapper>
                        )
                    }}
                />
                <Tab.Screen name="SettingsPage" component={SettingsPage}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <NavItemWrapper>
                                <NavImage
                                    source={require('../images/settingsIcon.png')}
                                    style={{
                                        tintColor: focused ? 'black' : 'grey',
                                    }}
                                />
                                {/*<Text>Home</Text>*/}
                            </NavItemWrapper>
                        )
                    }}
                />

        </Tab.Navigator>
    );
}
export default TabNavigation;

const NavItemWrapper = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const NavImage = styled(Image)`
  height: 25px;
  width: 25px;
`;