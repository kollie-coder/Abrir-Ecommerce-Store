import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Category = ({cat, selectedCategory, setSelectedCategory}) => {
  return (
    <TouchableOpacity onPress={() => setSelectedCategory(cat)}>
        <Text 
      style={[styles.categoryText,
       selectedCategory===cat && 
       {color: "#FFFFFF",
        backgroundColor: "#E96E6E"} ]}>
         {cat}
        </Text>
    </TouchableOpacity>
      
  )
}

export default Category

const styles = StyleSheet.create({
    categoryText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#938F8F",
        backgroundColor: "#DFDCDC",
        textAlign: "center",
        borderRadius: 16,
        marginHorizontal: 10,
        paddingHorizontal: 20,
        paddingVertical: 10

    }
})