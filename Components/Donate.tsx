// @ts-nocheck
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from '../assets/styles/styles';
import useClothesFlatList from '../hooks/useClothes';
import ItemModal from './ItemModal';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';


export default function Tracking({ navigation }) {
  // object destructuring
  const { donateClothes, donateVisible, setDonateVisible, clothesFlatList } = useClothesFlatList();
  const [modalVisibilities, setModalVisibilities] = useState(clothesFlatList.map(() => false));

  console.log(donateVisible)

  const toggleModal = (index) => {
    const newModalVisibilities = [...modalVisibilities];
    newModalVisibilities[index] = !newModalVisibilities[index];
    setModalVisibilities(newModalVisibilities);
  };



  if (donateVisible) {

    return (
      <View>
        <View style={styles.donateContainer}>
          <View style={styles.logoContainer}>
            <Text style={styles.donateHeader} > Donation List </Text>
          </View>
        </View>

        <View>
          {donateClothes.map((item, index) => (
            <View style={{ margin: 12, width: 137, }} key={index}>

              <TouchableOpacity onPress={() => {
                // setModalVisible(!modalVisible)
                toggleModal(index)
              }}>
                <Image
                  style={styles.imageLeastUse}
                  source={{ uri: item.src }}
                  resizeMode="contain"
                />
                <Text style={styles.listCounter}> {item.counter} </Text>
                <View style={{ backgroundColor: '#8BD5FF', height: 35, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.clothesName}> {item.Name} </Text>
                    <Text style={styles.clothesID}> {item.id} </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <ItemModal
                modalVisible={modalVisibilities[index]}
                setModalVisible={() => toggleModal(index)}
                item={item}
                name={item.Name}
                navigation={navigation}
                donate={true}
                setDonateVisible={setDonateVisible}
              />

            </View>
          ))}
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => {
              setDonateVisible(!donateVisible)
            }} style={{ width: 343, height: 58, borderRadius: 16, backgroundColor: '#8BD5FF', top: 434, justifyContent: 'center', alignSelf: 'center' }}>
              <Text style={{ textAlign: 'center', color: 'white', fontSize: 16, fontWeight: '400' }}> Clear List </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View>
      <View style={styles.donateContainer}>
        <View style={styles.logoContainer}>
          <Text style={styles.donateHeader} > Donation List </Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => {
          setDonateVisible(!donateVisible)
        }} style={{ width: 343, height: 58, borderRadius: 16, backgroundColor: '#8BD5FF', top: 619, justifyContent: 'center', alignSelf: 'center' }}>
          <Text style={{ textAlign: 'center', color: 'white', fontSize: 16, fontWeight: '400' }}> Clear List </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
