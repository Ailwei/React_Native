import React from 'react';
import { TouchableOpacity, View, Text, ScrollView, Image } from 'react-native';

export default function Cast({ cast, navigation }) {
  let personName =" Vin dissel"
  let characterName ="Toreto"

  return (
    <View className="my-6">
      <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {
          cast && cast.map((person, index) => {
            return (
              <TouchableOpacity 
              key={index} 
              className="mr-4 items-center"
              onPress={() => navigation.navigate('Person', person)}
              >
              <View
              className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500"
              >
              <Image
                className="rounded-2xl h-24 w-20"
                source={require('../assets/images/castImage1.jpeg')}
              />
              </View>
                <Text className="text-white text-xs mt-1">
                  {
                    characterName.length >10? characterName.slice(0,10)+'...': characterName
                  }
                </Text>
                <Text className="text-neutral-400 text-xs mt-1">
                  {
                    personName.length >10? personName.slice(0,10)+'...': personName
                  }
                </Text>
              </TouchableOpacity>
            );
          })
        }
      </ScrollView>
    </View>
  );
}
