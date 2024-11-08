import React from 'react'
import { Dimensions, Text, TouchableWithoutFeedback, View, Image } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native'

const data = [
  { id: '1', title: 'Movie 1' },
  { id: '2', title: 'Movie 2' },
  { id: '3', title: 'Movie 3' },

];

var {width, height} = Dimensions.get('window')
export default function TrendingMovies() {
 const navigation = useNavigation();
 const handleClick = (item) => {
  navigation.navigate('Movie', item)


 }
  return (
    <View className="mb-8">
    <Text className="text-white text-xl mx-4 mb-5">Trending Moviews</Text>
    <Carousel
        data={data}
        renderItem={({item}) => <MovieCard item={item} handleClick={handleClick}/>}
        firstItem={1}
        inactiveSlideOpacity={0.60}
        sliderWidth={width}
        itemWidth={width*0.62}
        slideStyle={{display: 'flex', alignItems: 'center'}}

    />
    </View>
  )
}
const MovieCard = ({item, handleClick}) => {
    return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
    <Image
      source={require('../assets/images/moviePoster1.jpeg')}
      style={{
        width: width*0.6,
        height: height*0.4
      }}
      className="rounded-3xl"

      />
    </TouchableWithoutFeedback>
    )
}

