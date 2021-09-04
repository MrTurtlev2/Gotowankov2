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

const Tab = createBottomTabNavigator();

function TabNavigation() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    backgroundColor: '#50C878',
                    height: 90,
                }
            }}
        >
            <Tab.Screen name='MainPage' component={MainPage}
                options={{
                    tabBarIcon: ({focused}) => (
                        <NavItemWrapper>
                            <NavImage source={CookingIcon}
                                style= {{
                                    tintColor: focused ? 'red' : 'grey'
                                }}
                            />
                            <Text>przepisy</Text>
                        </NavItemWrapper>
                    )
                }}
            />
            <Tab.Screen name='FavouritePage' component={FavouritePage}
                options={{
                    tabBarIcon: ({focused}) => (
                        <NavItemWrapper>
                            <NavImage source={HeartIcon}
                                      style= {{
                                          tintColor: focused ? 'red' : 'grey'
                                      }}
                            />
                            <Text>ulubione</Text>
                        </NavItemWrapper>
                    )
                }}
            />
            <Tab.Screen name='SettingsPage' component={SettingsPage}
                options={{
                    tabBarIcon: ({focused}) => (
                        <NavItemWrapper>
                            <NavImage source={SettingsIcon}
                                      style= {{
                                          tintColor: focused ? '#71797E' : 'white'
                                      }}
                            />
                            <Text>ustawienia</Text>
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