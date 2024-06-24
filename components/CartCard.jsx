import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const CartCard = ({ item, deleteFromCart }) => {
   const imageUrl = 'https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/cwlk21f74nd9iamrlzkh.png';

  return (
    < View style={styles.container} >
        <Image 
        source={{uri: item.image }}
        style={styles.coverImage}
        />
        <View style={styles.cardContent} >
            <Text style={styles.title}>
                {item.title}
                </Text>
            <Text style={styles.price}>
                ${item.price}
                </Text>     
        <View style={styles.circleSizeContainer} >
            <View style={[styles.circle, { backgroundColor: item.color }]} />   
            <View style={styles.sizeCircle}>
                <Text style={styles.sizeText} > {item.size} </Text>
            </View>
        </View>
        </View>

        <TouchableOpacity onPress={() => deleteFromCart(item)}>
            <FontAwesome5 
            name={"trash"} 
            color={"#F68CB5"}
            size={22}
            />
        </TouchableOpacity>
        

       
        
      
    </View>
  )
}

export default CartCard

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flexDirection: 'row'
    },

    coverImage: {
        width: '18%',
        height: 125,
        borderRadius: 20,
    },
    cardContent: {
        flex: 1
    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        color: "#444444",
    },
    price: {
        fontSize: 18,
        fontWeight: "500",
        color: "#797979",
        marginVertical: 10
    },
    circleSizeContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10
    },
    circle: {
        height: 32,
        width: 32,
        borderRadius: 18,
        
    },
    sizeCircle: {
        backgroundColor: "white",
        height: 32,
        width: 32,
        borderRadius: 16, 
        alignItems: "center",
        justifyContent:"center",
        marginLeft: 10,
    },
    sizeText: {
        fontSize: 18,
        fontWeight: "500",
        color: "#444444",
    }
})