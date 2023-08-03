import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import  {writeNFCS} from './write';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  LogBox,
  Button,
} from 'react-native';


function NfcDropDown() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Shirts', value: 'BLACK'},
    {label: 'Pants', value: 'banana'},
    {labelcool: "cool", value: "cool"}
  ]);





  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      //default is setopen but by changing it to writeNFCS u will make it do the write function
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onOpen={writeNFCS}
     

    />

    
  );
}
export default NfcDropDown;