import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/FontAwesome"
import { LinearGradient } from 'expo-linear-gradient';
import { Category, Header, ProductCard } from '../../components';
import Fontisto from "react-native-vector-icons/Fontisto";
import data from "../../data/data.json";



const categories = ['Trending Now','All','New','Men','Women']

const home = () => {

  const [selectedCategory, setSelectedCategory] = useState(null);


  const [product, setProduct] = useState(data.products);

  const handleLiked = (item) => {
    const newProducts = product.map((prod) => {
      if (prod.id === item.id) {
        return {
           ...prod,
        isLiked: true,
        }
      };
      return prod;
    });
    setProduct(newProducts);
  }

  return (
    // For the background of the home page
<LinearGradient 
colors={['#FDF0F3','#FFFBFC']}
 style={styles.container}
 >

  <Header/>
  
       {/* product list */}

       <FlatList
       data={product}
       numColumns={2}
       showsVerticalScrollIndicator={false}
       contentContainerStyle={{
        paddingBottom: 150
       }}
       ListHeaderComponent={
        <>
              <Text style={styles.matchText}>
            Match Your Style
              </Text>

            {/* input category */}
          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <Fontisto name={"search"} size={26} color={"#C0C0C0"} />  
            </View>

            <TextInput style={styles.textInput} placeholder='Search' />
          </View>
            
              {/* category section */}
            <FlatList
            data={categories}
            keyExtractor={(item) => item}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <Category 
              cat={item} 
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              />
            
            )}
            />
        </>
       }
       renderItem={({item,index}) =>( 
        <ProductCard item={item} handleLiked={handleLiked} />
       )}
       keyExtractor={(item) => item.id}
       
      
       />
       
       

      
</LinearGradient>
  )
}

export default home

const styles = StyleSheet.create({
  container: { 
    padding: 20,
  },
  matchText: {
     fontSize: 28,
     color: "#000000", 
     marginTop: 25
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection:"row",
    marginVertical: 10
  },
  iconContainer: {
    marginHorizontal: 15
  },
  textInput: {
    flex: 1,
  }
})