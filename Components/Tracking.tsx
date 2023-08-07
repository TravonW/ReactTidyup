// @ts-nocheck
import {
  Text,
  View,
  TouchableOpacity,
  Image,

} from 'react-native';
import styles from '../assets/styles/styles';
import useClothesFlatList from '../hooks/useClothes';
import ClothingCard from './ClothingCard';
import See from '../assets/images/view.png'

export default function Tracking({ navigation }) {
  // object destructuring
  const { clothesFlatList, setClothesFlatList, donateVisible, setDonateVisible } = useClothesFlatList();


  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.header} > Welcome! </Text>
      </View>

      <View style={styles.leastUseList}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={styles.leastused}> Least Used</Text>
          <TouchableOpacity>
            <Image source={See} style={{ width: 123, height: 25, left: 130, top: -10 }} />
          </TouchableOpacity>
        </View>

        <ClothingCard
          setClothesFlatList={setClothesFlatList}
          clothesFlatList={clothesFlatList}
          navigation={navigation}
          donateVisible={donateVisible}
          setDonateVisible={setDonateVisible}
          category='Least'
        />
      </View>
      {/* move this correctly */}
      <Text style={styles.shirts}> Shirts</Text>
      <View style={styles.shirtsList}>
        <ClothingCard
          setClothesFlatList={setClothesFlatList}
          clothesFlatList={clothesFlatList}
          navigation={navigation}
          donateVisible={donateVisible}
          setDonateVisible={setDonateVisible}
          category='Shirt'
        />
      </View>
      <View>
        <Text style={styles.pants}> Sweaters </Text>
        <View style={styles.pantsList}>
          <ClothingCard
            setClothesFlatList={setClothesFlatList}
            clothesFlatList={clothesFlatList}
            navigation={navigation}
            donateVisible={donateVisible}
            setDonateVisible={setDonateVisible}
            category='Sweater'
          />
        </View>
      </View>
    </View>
  );
}
