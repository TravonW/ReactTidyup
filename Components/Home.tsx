// @ts-nocheck
import { Pressable, StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ActivityIndicator, } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "../assets/images/search.png"
import Profile from "../assets/images/profile.png"
import Logo from "../assets/images/logo.png"
import styles from "../assets/styles/styles";
import useClothesFlatList from "../hooks/useClothes";
import { useState, useEffect } from "react";




/// functions //
const filterOptions = () => {
    console.log('hello')
}

export default function Tracking() {

    // object destructuring
    const { clothesFlatList } = useClothesFlatList()

    const clothesOrganize = [...clothesFlatList].sort((a, b) => a.counter - b.counter)
    
    const [isLoading, setisLoading] = useState(true);

    const 

    
    renderLeastUsedFlatList = ({item, index,}) =>{
        console.log(index)
        return(
            // Where list is rendered
            <TouchableOpacity
            style={[styles.item,
            {
                marginTop: 11,
                height: 220,
                width:200,
                backgroundColor: "white",
                margin: 5,
                
            
            
            }
            ]}
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
        )
    }
    renderShirtsFlatList = ({item, index,}) =>{
        console.log(index)
        return(
            // Where list is rendered
            <View>
                {item.category==="shirts"?
                           <TouchableOpacity
                           style={[styles.item,
                           {
                               marginTop: 11,
                               height: 150,
                               backgroundColor: "white",
                               margin: 5,
                           
                           
                           }
                           ]}
                           >
                               
                               <Image
                               style={styles.image}
                               source={{uri: item.src}}
                               resizeMode="contain"
                               />
                               <Text style={styles.listCounter}> {item.counter} </Text>
               
                           </TouchableOpacity>:null}
 
         </View>       
        )
    }
    renderPantsFlatList = ({item, index,}) =>{
        console.log(index)
        return(
            // Where list is rendered
            <View>
                {item.category==="pants"?
                           <TouchableOpacity
                           style={[styles.item,
                           {
                               marginTop: 11,
                               height: 150,
                               backgroundColor: "white",
                               margin: 5,
                           
                           
                           }
                           ]}
                           >
                               
                               <Image
                               style={styles.image}
                               source={{uri: item.src}}
                               resizeMode="contain"
                               />
                               <Text style={styles.listCounter}> {item.counter} </Text>
               
                           </TouchableOpacity>:null}
 
         </View>       
        )
    }


    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={Logo} style={styles.logo} />
                <Image source={Search} style={styles.search} />
                <Image source={Profile} style={styles.profile} />
            </View>

            <View style={styles.leastUseList}>
                <Text style={styles.leastused}> Least Used </Text>
                {!isLoading ? <ActivityIndicator /> : (
                    <FlatList style={styles.leastUseBorder}
                    data={clothesOrganize}
                    renderItem={renderLeastUsedFlatList}
                    keyExtractor={item => `key-${item.id}`}   
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  />
                )}

                   
            </View>
            {/* move this correctly */}
            <Text style={styles.shirts}> Shirts </Text>
            <View style={styles.shirtsList}>
                
                {!isLoading ? <ActivityIndicator /> : (
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
                {!isLoading ? <ActivityIndicator /> : (
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