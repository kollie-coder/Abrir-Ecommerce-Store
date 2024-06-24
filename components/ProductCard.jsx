import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { images } from "../constants"
import AntDesign from "react-native-vector-icons/AntDesign";

import { useNavigation } from 'expo-router';

const ProductCard = ({ item, handleLiked }) => {
 const navigation = useNavigation();
  return (
    <TouchableOpacity 
    style={styles.container}
    onPress={() => navigation.navigate("ProductDetailScreen", { item })}
    >
      <Image 
      source={{uri: item.image }}
      style={styles.coverImage}
      />

      <View style={styles.content}>
         <Text style={styles.title}>
        {item.title}
        </Text>
        <Text style={styles.price} > ${item.price} </Text>
      </View>
      
      <TouchableOpacity 
      style={styles.likeContainer} 
      onPress={() => handleLiked(item) }>

        {item?.isLiked ?( 
        <AntDesign 
        name={"heart"} size={20} color={"#E55B5B"} 
        />) : 
        <AntDesign name={"hearto"} size={20} color={"#E55B5B"} />
        }
      </TouchableOpacity>
     
    </TouchableOpacity>
  )
}

export default ProductCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:"relative",
    marginTop: 20,
    //borderWidth:1,
    //borderColor: "black"
  },
  coverImage: {
    height: 265, 
    width: "90%",
    borderRadius: 20,
    marginVertical: 10,
    marginLeft: 10,
   
  },
  content: {
    paddingLeft: 15,
  },
  title: {
    fontSize: 18,
    color: "#444444",
    fontWeight: "500"
  },
  price: {
    fontSize:18,
    fontWeight:"500",
    color:"#9C9C9C"
  },
  likeContainer: {
    height: 34,
    width: 34,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 17,
    position:"absolute",
    top: 20,
    right: 20,
  }
})