// @ts-nocheck
import React, { useState } from 'react'
import styles from '../assets/styles/styles'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import ItemModal from './ItemModal';
import { ScrollView } from 'react-native-gesture-handler';

function ClothingCard(props) {

    const [modalVisibilities, setModalVisibilities] = useState(props.clothesFlatList.map(() => false));

    const toggleModal = (index) => {
        const newModalVisibilities = [...modalVisibilities];
        newModalVisibilities[index] = !newModalVisibilities[index];
        setModalVisibilities(newModalVisibilities);
    };

    if (props.category === 'Least') {
        return (
            <ScrollView horizontal>
                {props.clothesFlatList.sort((a, b) => a.counter - b.counter).map((item, index) => (
                    <View style={{ margin: 12 }} key={index}>

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
                                <View style={{ flex: 1, flexDirection: 'column' }}>
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
                            navigation = {props.navigation}
                            donate={false}
                            setDonateVisible={props.setDonateVisible}
                        />

                    </View>
                ))}
            </ScrollView>
        )
    } else if (props.category === 'Shirt') {
        return (
            <ScrollView horizontal>
                {props.clothesFlatList.map((item, index) => (
                    <View>
                        {item.category === 'Shirts' ? <View style={{ margin: 12 }} key={index}>

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
                                    <View style={{ flex: 1, flexDirection: 'column' }}>
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
                                navigation = {props.navigation}
                                setDonateVisible = {props.setDonateVisible}
                                donate = {false}
                            />

                        </View> : null}
                    </View>
                ))}
            </ScrollView>
        )
    } else if (props.category === 'Sweater') {
        return (
            <ScrollView horizontal>
                {props.clothesFlatList.map((item, index) => (
                    <View>
                        {item.category === 'Sweater' ? <View style={{ margin: 12 }} key={index}>

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
                                    <View style={{ flex: 1, flexDirection: 'column' }}>
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
                                navigation = {props.navigation}
                                setDonateVisible = {props.setDonateVisible}
                                donate={false}
                            />

                        </View> : null}
                    </View>
                ))}
            </ScrollView>
        )
    }

    return null
}

export default ClothingCard