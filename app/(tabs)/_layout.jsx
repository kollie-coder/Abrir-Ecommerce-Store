import { View, Text, Image, StyleSheet } from 'react-native'
import { Tabs } from 'expo-router';
import React, { useContext } from 'react';
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons//MaterialCommunityIcons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { icons } from "../../constants";
import { CartContext, CartProvider } from '@/context/CartContext';


{/*
const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View style={styles.container}>
           <Image
           source={icon}
           resizeMode='contain'
           tintColor={color}
           style={styles.image}

    />

           <Text style={styles.text}>
             {name} 
          </Text>
        </View>
    )
}
*/}

const _layout = () => {
  return (

    
       <Tabs 
    screenOptions={{
    tabBarShowLabel: false,
    tabBarActiveTintColor: '#E96E6E',
    tabBarInactiveTintColor: '#CDCDE0',
    tabBarStyle: {
        backgroundColor: '#fffff',
        borderTopWidth: 0.4,
        borderColor: '#FFFFFF',
        height: 90
        
    }
    
    }}
    >
    <Tabs.Screen
    name='home'
    options={{
        title: 'Home',
        headerShown: false,
        tabBarIcon: ({ size, color, focused }) => {
            return <Entypo name={"home"} size={size} color={color} />
        }
    }}
    />

    <Tabs.Screen
    name='re-order'
    options={{
        title: 'ReOrder',
        headerShown: false,
        tabBarIcon: ({ size, color, focused }) => {
            return <MaterialIcons name={"reorder"} size={size} color={color} />
        }
    }}
    />

    <Tabs.Screen
    name='cart'
    options={{
        title: 'Cart',
        headerShown: false,
        tabBarIcon: ({ size, color, focused }) => {
            const { cartItems } = useContext(CartContext);

            console.log("Cart length:", cartItems.length); // Log the cart length
            return (
                
                <View style={{ position: "relative" }}>
                    <MaterialCommunityIcons 
                    name={"cart"}
                    size={size}
                    color={color}
               />
               <View style={{
                height:14,
                width:14,
                borderRadius: 7,
                backgroundColor: color,
                justifyContent: 'center',
                alignItems: 'center',
                position: "absolute",
                top: -10,
                right: -5
               }}>
                <Text style={{
                    fontSize: 10,
                    color:"white",
                    fontWeight: "500"
                }} > 
                   {cartItems.length}
                    </Text>
               </View>
                </View>
                
           
        );
        },
    }}
    />

    <Tabs.Screen
    name='profile'
    options={{
        title: 'Profile',
        headerShown: false,
        tabBarIcon: ({ size, color, focused }) => {
            return <FontAwesome6 name={"user"} size={size} color={color} />
        }
    }}
    
    />

<Tabs.Screen
        name='ProductDetailScreen'
        options={{
          title: 'Product Details',
          headerShown: true,
          tabBarButton: () => null, // Hides the tab bar button
        }}
      />

</Tabs> 

    
    
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2
    },

    image: {
        width: 30,
        height: 30
    },

    text: {

    },

})

export default _layout