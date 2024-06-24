import { Text, View, TouchableOpacity, Image, FlatList, Animated } from 'react-native'
import React, { useState } from 'react';
import { constants, COLORS, SIZES, FONTS } from "../constants";
import Svg, { Path } from 'react-native-svg';
import { TextButton } from '../components';
import { router } from 'expo-router';


const index = () => {

  // Next make sure he text button changes from next to Get started when we reach the last screen

  const [isLastItem, setIsLastItem] = useState(false)

  // SVG 
  const controlX = SIZES.width / 2 // Control center point's x coordinate

  // FlatList
  const currentIndex = React.useRef(0)
  const screenFlatListRef = React.useRef()
  const titleFlatListRef = React.useRef()

  const handleNextPress = () => {
    if (currentIndex.current < 
      constants.onboarding_screens.length -1) {
        currentIndex.current +=1
        const nextIndex = currentIndex.current
        const offset = nextIndex * SIZES.width

        screenFlatListRef?.current?.scrollToOffset({
          offset,
          animated: true
        })
        titleFlatListRef?.current?.scrollToOffset({
          offset,
          animated:true
        })

        // check if it is the last screen
        if(currentIndex.current === constants.onboarding_screens.length -1) {
          setIsLastItem(true)
        }
      }
  }

  
  return (
    <View 
    style={{ flex: 1}} >

    {/* Screenshot list */} 
    <View 
    style={{ 
      flex: 2, 
      backgroundColor: COLORS.primary50 
      }}>
        <FlatList
        ref={screenFlatListRef}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        snapToAlignment='center'
        snapToInterval={SIZES.width}
        decelerationRate="fast"
        data={constants.onboarding_screens}
        keyExtractor={item => `onBoarding_screens_phone-${item.id}` }
        renderItem={({item, index}) => {
          return (
            <View 
            style={{
              width: SIZES.width,
              alignItems:'center',
            }}>
              <Image
              source={item.image}
              resizeMode='contain'
              style={{
                marginTop: SIZES.padding * 3,
                width: SIZES.width * 0.8,
                height: SIZES.height * 0.8
              }}
              />

            </View>
          )
        }}
        />
     
    </View>

    {/* Title & Description */}

    <View style={{
       flex: 1, 
       backgroundColor: COLORS.gray900
       }}>
        {/* Curve */}
        {/* calculating the center point so that it works on all screens */}

      <Svg style={{
        position: 'absolute',
        top: -100
      }}
      width={SIZES.width}
      height={100}
      >
        <Path
        d={`M 0 20 Q ${controlX} 130 ${SIZES.width} 20 L ${SIZES.width} 100 L 0 100 Z`}
        fill={COLORS.gray900}
        />
      </Svg>

      {/* Title and Description */}
      <FlatList
      ref={titleFlatListRef}
      horizontal
      pagingEnabled
      scrollEnabled={false}
      snapToAlignment='center'
      snapToInterval={SIZES.width}
      showsHorizontalScrollIndicator={false}
      data={constants.onboarding_screens}
      keyExtractor={item => `onboarding_screens_title-${item.id}`}
      renderItem={({ item, index}) => {
        return (
          <View
          
          style={{
            paddingHorizontal: SIZES.radius,
            width: SIZES.width,
            alignItems:'center'
          }}>

            {/* Title */}
            <Text style={{
              ...FONTS.h1,
              textAlign: 'center',
              color: COLORS.primary100
            }}>
              {item.title}
            </Text>

            {/* Description */}
            <Text style={{
              ...FONTS.pr2,
              marginTop: SIZES.radius,
              textAlign: 'center',
              color: COLORS.primary100
            }}
            
            >
              {item.desc}
            </Text>
          </View>
        )
      }}
      />

   {/* Custom button */}

   <TextButton 
   label={isLastItem ? 'Get Started' : 'Next'}
   contentContainerStyle={{
    marginHorizontal: SIZES.padding,
    marginBottom: SIZES.padding
   }}

   // the onPress functionality that controls the two FlatLists
   onPress={ isLastItem ? () => router.push('/home') : handleNextPress }
   />

    </View>

    </View>
  
      
  
    
  
  ) 
}

export default index