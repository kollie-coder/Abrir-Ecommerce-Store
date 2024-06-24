import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { CartCard, Header, TextButton } from '../../components'
import { LinearGradient } from 'expo-linear-gradient'
import { CartContext } from '../../context/CartContext';

const cart = () => {
  const { cartItems, totalPrice, deleteItemFromCart  } = useContext(CartContext);
  return (
    <LinearGradient
    colors={['#FDF0F3','#FFFBFC']}
    style={styles.container}
    >
        <View style={styles.headerContainer} >
            <Header isCart={true} />
        </View>
    

      <FlatList 
      data={cartItems} 
      ListHeaderComponent={
        <>
        </>
      }
      renderItem={({ item }) => (
        <CartCard item={item} deleteFromCart={deleteItemFromCart} />
      )}

      ListFooterComponent={
        <>
        <View style={styles.priceContainer} >
        <View style={styles.priceAndContainer} >
          <Text style={styles.text} >Total:</Text>
           <Text style={styles.text} >${totalPrice} </Text>
        </View>

        <View style={styles.priceAndContainer} >
          <Text style={styles.text} >Shipping:</Text>
           <Text style={styles.text} >$0.0</Text>
        </View>

          
      </View>

      <View style={styles.divider} />

      <View style={styles.priceAndContainer} >
          <Text style={styles.text} >Grand Total:</Text>
           <Text style={[styles.text, {color:"#3C3C3C"}]} >${totalPrice} </Text>
        </View>
        </>
      }
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 60,
      }}
      
      />

      

        <TextButton 
        label={"Checkout"}
        contentContainerStyle={{
          marginVertical: 10,
        }}
        labelStyle={{
          fontSize: 24,
          fontWeight: "600",
          padding: 10,

        }}
        />
    

    </LinearGradient>
  )
}

export default cart

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding:15

  },
  headerContainer: {
      marginBottom: 20    
  },
  priceContainer: {

  },
  priceAndContainer: {
    flexDirection: 'row',
    justifyContent:"space-between",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    color: "#757575"
  },
  divider: {
    borderWidth: 1,
    color: "#C0C0C0",
    marginVertical: 10,
  }
})