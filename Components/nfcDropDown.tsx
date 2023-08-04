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
import { TextInput } from 'react-native-gesture-handler';



function NfcDropDown() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Tops', value: 'Shirt'},
    {label: 'Bottoms', value: 'Pants'},
    {labelcool: "cool", value: "cool"}
  ]);


console.log(value)


  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      //default is setopen but by changing it to writeNFCS u will make it do the write function
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      // onOpen={writeNFCS}
      // use this to put selected item in variable for pants or shirt
      onSelectItem= {(labelcool) => {
         if(labelcool.value === "cool"){writeNFCS()}
      }}
      style={{
        borderRadius: 10
      }}
      textStyle={{
        color: "#91C8FF"
      }}


      
      
     

    />

    
  );
}
export default NfcDropDown;



