import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Header, TextButton } from '../../components';
import { useRoute } from '@react-navigation/native';
import { CartContext } from '../../context/CartContext';
import { useNavigation } from 'expo-router';

const ProductDetailScreen = () => {

    const navigation = useNavigation();
    const { addToCart } = useContext(CartContext);

    const route = useRoute();
    const item = route.params.item;
   

    const imageUrl = 'https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/cwlk21f74nd9iamrlzkh.png';

    const sizes = ['S','M','L','XL'];
    const [selectedSize, setSelectedSize] = useState(null);

    const colors = [
        '#91A1B0',
        '#B11D1DD4',
        '#1F44A3C2',
        '#9F632AD4',
        '#1D752BDB',
        '#000000C9'];

    const [selectedColor, setSelectedColor] = useState(null);

    const handleAddToCart = () => {
        if (selectedSize && selectedColor) {
          const newItem = { ...item, size: selectedSize, color: selectedColor };
          addToCart(newItem); 
          navigation.navigate('cart');
        } else {
          alert('Please select a size and color');
        }
      };

  return (
    <LinearGradient
    colors={['#FDF0F3','#FFFBFC']}
    style={styles.container}
    >
    <View style={styles.headerContainer} >
        <Header/>
    </View>

    <Image source={{ uri: item.image }} style={styles.coverImage} />

    <View style={styles.contentContainer} >
        <Text style={styles.title} > {item.title} </Text>
        <Text style={styles.price} >${item.price} </Text>
    </View>

    {/* size container */}
    <Text style={[styles.title, styles.sizeText]}>Size</Text>

    <View style={styles.sizeContainer}>
        {
            sizes.map((size, index) => {
                return (
                    <TouchableOpacity 
                    key={index}
                    style={styles.sizeValueContainer}
                    onPress={() => setSelectedSize(size)}
                    >
                    <Text style={[styles.sizeValue, 
                    selectedSize === size && { color:'#E55B5B'},
                     ]}> 
                        {size} 
                        </Text> 
                    </TouchableOpacity>
                )
            })
        }
    </View>

    {/* color container */}
    <Text style={[styles.title, styles.colorText]}>
        Color
    </Text>
    <View style={styles.colorContainer} >
        {
            colors.map((color, index) => {
                return (
                    <TouchableOpacity
                    key={index} 
                    onPress={() => {
                        setSelectedColor(color);
                    }}
                    style={[styles.circleBorder,
                     selectedColor === color && {
                         borderColor: color,
                         borderWidth: 2,
                          },
                          ]} >

                        <View 
                        style={[styles.circle, 
                        {backgroundColor: color}]} />

                    </TouchableOpacity>
                )
            })
        }
    </View>

    {/* button container */}

    <TextButton 
    label="Add to Cart" 
    contentContainerStyle={{
        margin: 10,    
    }}
    labelStyle={{   
    }}
    onPress={() =>{ 
        handleAddToCart(item);
    }}/>

  </LinearGradient>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        padding: 20,
    },
    coverImage: {
        width: '100%',
        height: 420,
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        color: "#444444",
    },
    price: {
        fontSize: 20,
        fontWeight:'600',
        color: "#4D4C4C",
    },
    
    sizeText: {
        marginHorizontal: 20,    
    },
    sizeContainer: {
        flexDirection:'row',
        marginHorizontal: 20,
        
    },
    sizeValueContainer: {
        height: 36,
        width: 36,
        backgroundColor:"#FFFFFF",
        borderRadius: 18,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal: 10
    },
    sizeValue: {
        fontSize: 18,
        fontWeight:"500"
    },
    colorText: {
        color: "#444444",
        marginHorizontal: 20,
        marginTop: 10,
    },
    colorContainer: {
        flexDirection: "row",
        marginHorizontal: 20
        
    },
    circleBorder: {
        
        marginHorizontal: 5,
        height: 48,
        width: 48,
        borderRadius: 20,
        alignItems:'center',
        justifyContent:'center'
    },
    circle: {
        height: 36,
        width: 36,
        borderRadius: 20,
       
    }

})