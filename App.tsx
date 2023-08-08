/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import TabNaviagtion from './AppNavigation/TabNavigation';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NfcReader from './Components/NfcReader';

const RootStack = createNativeStackNavigator()

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name='main' component={TabNaviagtion} />      
        <RootStack.Screen name="NFC" component={NfcReader} options={{ animation: 'slide_from_bottom' }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
