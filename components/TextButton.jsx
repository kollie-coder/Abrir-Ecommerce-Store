import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FONTS, COLORS } from "../constants";

const TextButton = ({ contentContainerStyle, label, labelStyle, onPress}) => {
  return (
   <TouchableOpacity
    style={{
        alignItems:'center',
        justifyContent:'center',
        height:55,
        borderRadius: 20,
        backgroundColor: "#E96E6E",
        ...contentContainerStyle

    }}
    onPress={onPress}
   >
    <Text style={{
              ...FONTS.l2,
              color: "#FFFFFF",
              ...labelStyle
            }}
            
            >
              {label}
            </Text>

   </TouchableOpacity>
  )
}

export default TextButton