// @ts-nocheck
import Tracking from '../Components/Tracking';
import Donate from '../Components/Donate';
import AddClothing from '../Components/AddClothing';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DonateLogo from "../assets/images/donateLogo.png";
import {
  Text,
  View,
  TouchableOpacity,
  Image,

} from 'react-native';

const Tabs = createBottomTabNavigator();

export default function TabNaviagtion(): JSX.Element {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Home"
        component={Tracking}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" size={30} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="AddClothing"
        component={AddClothing}
        options={{
          // Make a onpress to make it call the function like line 76 in NfcReader component
          headerShown: false,
          tabBarLabel: 'NFC',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="plus-circle" size={30} color={color} />
          ),
        }}
        listeners={({navigation}) => ({
          tabPress: event =>{
            event.preventDefault()
            navigation.navigate('NFC')
          }
        })}
      />
      <Tabs.Screen
        name="Donate"
        component={Donate}
        options={{
          tabBarLabel: 'Donate',
          tabBarIcon: ({color}) => (
            <Image source={DonateLogo} style={{width: 30, height:30, color: "black", 
            }} />
          ),
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
}
