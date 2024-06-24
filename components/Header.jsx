import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { icons,images } from "../constants";
import Ionicons from "react-native-vector-icons/Ionicons";
import { router, useNavigation } from 'expo-router';


const Header = ({ isCart }) => {

    const navigation = useNavigation();

  return (
    <View style={styles.container} >

        <TouchableOpacity 
        onPress={() => router.replace("home") } 
         style={styles.appIconContainer}>

            {isCart ? 
             <Ionicons 
             name={"chevron-back"}
             color={"#E96E6E"}
             size={24}

             />

            :
            <Image 
            source={icons.vector}
            style={styles.appIcon}
            />
        }
            
          
        </TouchableOpacity>

        {
            isCart &&
            <Text style={styles.myCart} >
            My Cart
            </Text>
        }

    
        <Image 
        source={images.Ellipse2}
        style={styles.dp}
        />
    </View>
  )
}

export default Header


const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    appIconContainer: {
       backgroundColor: "#FFFFFF",
       height: 44,
       width: 44,
       borderRadius: 22,
       justifyContent: 'center',
       alignItems: "center"
    },

    appIcon: {
        height:28,
        width:28
    },

    dp: {
        height: 44,
        width: 44,
       borderRadius: 22 
    },
    myCart: {
        fontSize: 28,
        fontWeight: "400",
        color: "#000000",
    }

})