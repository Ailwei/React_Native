import { View, Image, Text, ScrollView, Dimensions, Platform } from "react-native";
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { ChevronLeftIcon, HeartIcon } from "react-native-heroicons/solid";
import { styles, theme } from '../theme';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/Cast'
import MovieList from '../components/movieList'

const { width, height } = Dimensions.get('window');
const ios = Platform.OS === 'ios';
const topMargin = ios ? "" : 'mt-3';

export default function MovieScreen() {
    const navigation = useNavigation();
    const { params: item } = useRoute();
    const [isFavorite, toggleFavorite] = useState(false);
    const [cast,setCast] = useState([1,2,3,4,5])
    const [similarMovies,setSimilarMovies] = useState([1,2,3,4,5])
    
    const movieName = item?.title || "The Dark Knight Rises";

    useEffect(() => {
        if (item) {
            {/*console.log("Movie item received:", item);*/}
          
        }
    }, [item]);

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }} className="flex-1 bg-neutral-900">
            {/* Back button and movie poster */}
            <View className="w-full">
                <SafeAreaView className={"absolute top-20 w-full flex-row justify-between items px-4"}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background} className="rounded-xl p-1">
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => toggleFavorite(!isFavorite)}>
                        <HeartIcon size="35" color={isFavorite ? theme.background : "white"} />
                    </TouchableOpacity>
                </SafeAreaView>
                <View>
                    <Image
                        source={require('../assets/images/moviePoster2.jpeg')}
                        className="rounded-3xl"
                        style={{ width, height: height * 0.55 }}
                    />
                    <LinearGradient
                        colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
                        style={{ width, height: height * 0.40 }}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        className="absolute bottom-0"
                    />
                </View>
            </View>
            
            {/* Movie details */}
            <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
                {/* Movie title */}
                <Text className="text-white text-center text-3xl font-bold -tracking-wider">
                    {movieName}
                </Text>
                {/* status, release, runtime*/}
                <Text  className="text-neutral-400 font-semibold text-base text-center">
                Released . 2020 . 170 min
                </Text>
           
            {/* genres*/}
            <View className="flex-row justify-center mx-4 space-x-2">
            <Text className="text-neutral-400 font-semibold text-base text-center">
            Action .
            </Text>
            <Text className="text-neutral-400 font-semibold text-base text-center">
            Thrill .
            </Text>
            <Text className="text-neutral-400 font-semibold text-base text-center">
            Comedy 
            </Text>
            </View>
            <Text className="text-neutral-400 mx-4 tracking-wide">
            The Dark Knight Rises is the final film in Christopher Nolan’s Batman trilogy, released in 2012.
            The film follows Bruce Wayne (played by Christian Bale) as he comes out of retirement as Batman to save Gotham City from the ruthless terrorist Bane (Tom Hardy), who plans to destroy the city both physically and morally.
            </Text>

            </View>
            {/* Cast Members*/}
            <Cast navigation = 
            {navigation} cast={cast}/>

            <MovieList title="similar movies" hideSeeAll={true} data={similarMovies}/>

        </ScrollView>
    );
}
