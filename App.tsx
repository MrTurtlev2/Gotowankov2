import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import SettingsPage from "./src/pages/SettingsPage";
import {createDrawerNavigator} from "@react-navigation/drawer";
import TabNavigation from "./src/components/TabNavigation";
import FavouritePage from "./src/pages/Favourite";
import LeftPanel from "./src/components/LeftPanel";
import StackNavigator from "./src/components/navigation/StackNavigator";
import Provider from './src/redux/ReduxWrapper'

const DrawerNav = createDrawerNavigator();

export default function App() {


  return (
      <Provider>
          <NavigationContainer>
              <DrawerNav.Navigator drawerContent={props => (<LeftPanel {...props} />)}>
              <DrawerNav.Screen name='MainPage' component={TabNavigation} />
                  <DrawerNav.Screen name='StackNavigator'>
                      {props => <StackNavigator {...props} />}
                  </DrawerNav.Screen>

                  <DrawerNav.Screen name='FavouritePage' component={FavouritePage} />
                  <DrawerNav.Screen name='SettingsPage' component={SettingsPage} />
              </DrawerNav.Navigator>
          </NavigationContainer>
      </Provider>
  );
}