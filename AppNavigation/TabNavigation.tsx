import Home from '../Components/Home';
import Map from '../Components/Map';
import Camera from '../Components/CameraPage';
import NfcReader from '../Components/NfcReader';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tabs = createBottomTabNavigator();

export default function TabNaviagtion(): JSX.Element {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Icon name="home" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen name="Camera" component={Camera} options={{
        tabBarLabel: 'Camera',
        tabBarIcon: ({color}) => (
          <Icon name='camera' size={30} color={color}/>
        )
      }} />
      <Tabs.Screen name="Map" component={Map} options={{
        tabBarLabel: 'Map',
        tabBarIcon: ({color}) => (
          <Icon name='map-marker' size={30} color={color}/>
        )
      }} />
       <Tabs.Screen name="NFC" component={NfcReader} options={{
        tabBarLabel: 'NFC',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name='nfc' size={30} color={color}/>
        )
      }} />

    </Tabs.Navigator>
  );
}
