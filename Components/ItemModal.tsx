// @ts-nocheck
import React, { useState } from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Modal,
    Pressable,
} from 'react-native';
import Exit from '../assets/images/Exit.png';
import styles from '../assets/styles/styles';
import useClothesFlatList from '../hooks/useClothes';


function ItemModal(props) {
    const [counter, setCounter] = useState(props.item.counter)

    return (
        <Modal
            animationType="slide"
            visible={props.modalVisible}
            transparent={true}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                props.setModalVisible(!props.modalVisible);
            }}>
            <View style={styles.donateModalContainer}>

                <Image
                    style={styles.modalClothesImage}
                    source={{ uri: props.item.src }}
                    resizeMode="contain"
                />

                <Pressable
                    onPress={() => {
                        props.setModalVisible(!props.modalVisible);
                    }} style={{ position: 'absolute', top: 16, alignSelf: 'flex-end', right: 16 }}>
                    <Image source={Exit} style={styles.trackingModalExit} />
                </Pressable>

                <Text style={styles.selectedID}> {props.item.id} </Text>

                <View>
                    <Text style={styles.modalName}> {props.name} </Text>
                    <View style={{ flexDirection: 'row', left: 25, top: -15 }}>
                        <Text style={{ fontSize: 20, fontWeight: '400' }}> # of Uses: </Text>

                        {/* Decreasing element number */}
                        <TouchableOpacity onPress={() => {
                            if (props.item.counter < 0) {

                                let count = props.item.counter = 0

                                setCounter(count)

                            } else if (props.item.counter > 0) {
                                // Decrease the counter of the item

                                let count = props.item.counter -= 1

                                setCounter(count)
                            }
                        }}>
                            <Text style={{ fontSize: 20, fontWeight: '400', left: 180 }}> - </Text>
                        </TouchableOpacity>
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: '400',
                                color: 'white',
                                backgroundColor: '#8BD5FF',
                                borderRadius: 6,
                                padding: 2,
                                overflow: 'hidden',
                                left: 190
                            }}
                        > {props.item.counter} </Text>

                        {/* Increasing element number */}
                        <TouchableOpacity onPress={() => {
                            let count = props.item.counter += 1

                            setCounter(count)
                        }}>
                            <Text style={{ fontSize: 20, fontWeight: '400', left: 200 }}> + </Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{ alignSelf: 'center' }}>
                        <TouchableOpacity
                            onPress={() => {
                                if (props.donate) {
                                    props.setDonateVisible(false)
                                } else if (props.donate === false) {
                                    props.setDonateVisible(true)
                                }

                                props.setModalVisible(!props.modalVisible);
                            }}
                            style={{
                                width: 343,
                                height: 40,
                                backgroundColor: '#8BD5FF',
                                justifyContent: 'center',
                                borderRadius: 16,
                                top: -5
                            }}>
                            <Text style={{ textAlign: 'center', color: 'white' }}> {props.donate ? 'Remove From Donate List' : 'Add To Donate List'} </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </Modal>
    )
}

export default ItemModal