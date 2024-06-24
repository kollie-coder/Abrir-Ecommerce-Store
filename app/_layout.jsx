import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SplashScreen, Stack } from 'expo-router';
import { CartProvider } from '@/context/CartContext';

const _layout = () => {
  return (
    <CartProvider>
      <Stack initialRouteName='Home'>
        <Stack.Screen name='index' options={{ headerShown: false }}/>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }}  />
        <Stack.Screen name='ProductDetailScreen' options={{ headerShown: false }}/>
        <Stack.Screen name='CartScreen' options={{ headerShown: false }} />
    </Stack>
    </CartProvider>
    
  )
}

export default _layout

const styles = StyleSheet.create({})