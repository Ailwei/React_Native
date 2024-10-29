import React from 'react'
import { Image,Dimensions,ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { View,Text } from 'react-native'
import {styles} from '../theme'

var {width, height} = Dimensions.get('window')
export default function MovieList({ title, data }) {

  let MovieName = "The Dark Knight Rises"
  return (
    <View className="mb-8 space-y-4">
 <View className="mx-4 flex-row justify-between items-center">
    <Text className="text-white text-xl">{title}</Text>
    <TouchableOpacity>
        <Text style={styles.text} className="text-lg">See All</Text>
    </TouchableOpacity>
 </View>
 <ScrollView
 horizontal
 showsHorizontalScrollIndicator
 contentContainerStyle={{paddingHorizontal: 15}}
 >
 {
  data.map((item, index) => {
    return (
      <TouchableWithoutFeedback
      key ={index}
      onPress={() => navigation.navigate('Movie', item)}
      >
      <View className="space-y-1 mr-4">
<Image
      source={require('../assets/images/moviePoster2.jpeg')}
      className="rounded-3xl"
       style ={{ width: width*0.33, height: height*0.22}}
 

 /> 
 <Text className="text-neutral-300 ml-1"> 
 {
  MovieName.length>14? MovieName.slice(0, 14)+'...': MovieName
  }
 </Text>
      </View>
       
      </TouchableWithoutFeedback>
    )

})
 }

 </ScrollView>
    </View>
   
  )
}
