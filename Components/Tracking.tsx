// @ts-nocheck
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
import Ionicons from '@expo/vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import Search from '../assets/images/search.png';
import Profile from '../assets/images/profile.png';
import Logo from '../assets/images/logo.png';
import Exit from '../assets/images/Exit.png';
import styles from '../assets/styles/styles';
import useClothesFlatList from '../hooks/useClothes';
import {useState, useEffect} from 'react';
import {AddList} from './TrackingButton';
// ignores all warnings
LogBox.ignoreLogs(['Warning']);

/// functions //
const filterOptions = () => {
  console.log('hello');
};

export default function Tracking() {
  // object destructuring
  const {clothesFlatList} = useClothesFlatList();

  const clothesOrganize = [...clothesFlatList].sort(
    (a, b) => a.counter - b.counter,
  );

  const [isLoading, setisLoading] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);

  const [selectedItem, setSelectedItem] = useState({
    src: '',
    counter: 1,
    category: '',
    Name: '',
  });

  console.log('hello');

  renderLeastUsedFlatList = ({item, index}) => {
    return (
      // Where list is rendered
      <View>
        <TouchableOpacity
          style={[
            styles.item,
            {
              marginTop: 11,
              height: 220,
              width: 200,
              backgroundColor: 'white',
              margin: 5,
            },
          ]}
          onPress={() => {
            setModalVisible(true);
            setSelectedItem(item);
          }}
          // parenthesis whjen calling function
          //curly brackets when calling object/ defining object
        >
          <Image
            style={styles.imageLeastUse}
            source={{uri: item.src}}
            resizeMode="contain"
          />

          <Text style={styles.listCounter}> {item.counter} </Text>
        </TouchableOpacity>

        <View>
          <Modal
            animationType="slide"
            visible={modalVisible}
            transparent={true}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.donateModalContainer}>
              <Pressable
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Image source={Exit} style={styles.donateModalExit} />
               
              </Pressable>
              <Image
                style={styles.modalClothesImage}
                source={{uri: selectedItem.src}}
                resizeMode="contain"
              />
              <View style={styles.modalContents}>
                <Text style={styles.modalCountText}> Number of Wears:</Text>
                <Text style={styles.modalCount}> {selectedItem.counter}</Text>
                <Text style={styles.modalCategory}>
                  {selectedItem.category}
                </Text>
                <Text style={styles.modalName}> {selectedItem.Name}</Text>

                <AddList style={styles.modalDonateButton} />
                
                
                {/*  Need to make pressable right here for add to donation list */}
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  };
  renderShirtsFlatList = ({item, index}) => {
    console.log(index);
    return (
      // Where list is rendered
      <View>
        {item.category === 'Shirts' ? (
          <TouchableOpacity
            style={[
              styles.item,
              {
                marginTop: 11,
                height: 150,
                backgroundColor: 'white',
                margin: 5,
              },
            ]}
            onPress={() => {
              setModalVisible(true);
              setSelectedItem(item);
            }}>
            <Image
              style={styles.image}
              source={{uri: item.src}}
              resizeMode="contain"
            />
            <Text style={styles.listCounter}> {item.counter} </Text>
          </TouchableOpacity>
        ) : null}

        <View>
          <View>
            <Modal
              animationType="slide"
              visible={modalVisible}
              transparent={true}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.donateModalContainer}>
                <Pressable
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <Image source={Exit} style={styles.donateModalExit} />
                </Pressable>
                <Image
                  style={styles.modalClothesImage}
                  source={{uri: selectedItem.src}}
                  resizeMode="contain"
                />
                <View style={styles.modalContents}>
                  <Text style={styles.modalCountText}> Number of Wears:</Text>
                  <Text style={styles.modalCount}> {selectedItem.counter}</Text>
                  <Text style={styles.modalCategory}>
                    {' '}
                    {selectedItem.category}
                  </Text>
                  <Text style={styles.modalName}> {selectedItem.Name}</Text>
                  {/*  Need to make pressable right here for add to donation list */}
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </View>
    );
  };
  renderPantsFlatList = ({item, index}) => {
    console.log(index);
    return (
      // Where list is rendered
      <View>
        {item.category === 'Pants' ? (
          <TouchableOpacity
            style={[
              styles.item,
              {
                marginTop: 11,
                height: 150,
                backgroundColor: 'white',
                margin: 5,
              },
            ]}
            onPress={() => {
              setModalVisible(true);
              setSelectedItem(item);
            }}>
            <Image
              style={styles.image}
              source={{uri: item.src}}
              resizeMode="contain"
            />
            <Text style={styles.listCounter}> {item.counter} </Text>
          </TouchableOpacity>
        ) : null}

        <View>
          <View>
            <Modal
              animationType="slide"
              visible={modalVisible}
              transparent={true}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.donateModalContainer}>
              <FlatList

            />
                <Pressable
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <Image source={Exit} style={styles.donateModalExit} />
                </Pressable>
                <Image
                  style={styles.modalClothesImage}
                  source={{uri: selectedItem.src}}
                  resizeMode="contain"
                />
                <View style={styles.modalContents}>
                  <Text style={styles.modalCountText}> Number of Wears:</Text>
                  <Text style={styles.modalCount}> {selectedItem.counter}</Text>
                  <Text style={styles.modalCategory}>
                    {' '}
                    {selectedItem.category}
                  </Text>
                  <Text style={styles.modalName}> {selectedItem.Name}</Text>
                  {/*  Need to make pressable right here for add to donation list */}
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
        <Image source={Search} style={styles.search} />
        <Image source={Profile} style={styles.profile} />
      </View>

      <View style={styles.leastUseList}>
        <Text style={styles.leastused}> Least Used</Text>
        {!isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            style={styles.leastUseBorder}
            data={clothesOrganize}
            renderItem={renderLeastUsedFlatList}
            keyExtractor={item => `key-${item.id}`}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
      {/* move this correctly */}
      <Text style={styles.shirts}> Shirts</Text>
      <View style={styles.shirtsList}>
        {!isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={clothesFlatList}
            renderItem={renderShirtsFlatList}
            keyExtractor={item => `key-${item.id}`}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
      <View>
        <Text style={styles.pants}> Pants </Text>
        <View style={styles.pantsList}>
          {!isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={clothesFlatList}
              renderItem={renderPantsFlatList}
              keyExtractor={item => `key-${item.id}`}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          )}
        </View>
      </View>
    </View>
  );
}
