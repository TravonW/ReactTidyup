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
    ScrollView
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
      src:"", counter: 1, category: "", Name: ""
    })
  
    
  
    console.log('hello');
  
    renderLeastUsedFlatList = ({item, index}) => {
      
      return (
        // Where list is rendered
        <View>
          <TouchableOpacity
            style={[
              styles.donateImagesConatiner,
              {
                marginTop: 11,
                height: 125,
                width: 110,
                backgroundColor: 'white',
                margin: 5,
              },
            ]}
            onPress={() => {
              setModalVisible(true);
              setSelectedItem(item)
            }}
            // parenthesis whjen calling function
            //curly brackets when calling object/ defining object
          >
            <Image
              style={styles.donateImages}
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
                  <Pressable onPress={() => {
                      setModalVisible(!modalVisible)
                  }}>
                      <Image
              style={styles.donateModalClothesImage}
              source={{uri: selectedItem.src}}
              resizeMode="contain"
            />
                  <Text style={styles.donateModalCountText}> Number :</Text>
                  <Text style={styles.donateModalCount}> {selectedItem.counter}</Text>
                  <Text style={styles.donateModalCategory}> {selectedItem.category}</Text>
                  <Text style={styles.donateModalName}> {selectedItem.Name}</Text>
                  <Image source={Exit} style={styles.donateModalExit} />
                  </Pressable>
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
              ]}>
              <Image
                style={styles.image}
                source={{uri: item.src}}
                resizeMode="contain"
              />
              <Text style={styles.listCounter}> {item.counter} </Text>
            </TouchableOpacity>
          ) : null}
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
              ]}>
              <Image
                style={styles.image}
                source={{uri: item.src}}
                resizeMode="contain"
              />
              <Text style={styles.listCounter}> {item.counter}  </Text>
              <Text style={styles.donateListName}> {item.Name}  </Text>
            </TouchableOpacity>
          ) : null}
        </View>
      );
    };
  
    return (
      <View style={styles.donateContainer}>
        <View style={styles.donateLogoContainer}>
          <Image source={Logo} style={styles.donateLogo} />
          {/* <Image source={Search} style={styles.search} /> */}
          <Image source={Profile} style={styles.donateProfile} />
        </View>
  
        <View >
          <Text style={styles.textAboveDonationListL}> Donation List </Text>
         
          {!isLoading ? (
            <ActivityIndicator />
          ) : (
              
            // Put all the list in one scrollable and have them different catergories but all 3 scroll together 
            <FlatList
            // Add height to big scroll tag to make it long
              style={styles.leastUseDonateList}
              columnWrapperStyle={styles.donateClothesView}
              data={clothesOrganize}
              renderItem={renderLeastUsedFlatList}
              keyExtractor={item => `key-${item.id}`}
              vertical={true}
              numColumns={3}
              showsHorizontalScrollIndicator={true }
            />
          )}
        
        
        </View>
        {/*  Button for donate and favorite */}
        <View>
           
        </View>

        </View>
      
    );
  }
  