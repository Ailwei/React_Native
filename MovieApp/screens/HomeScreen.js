import {View, Text,Platform,  StatusBar, ScrollView} from 'react-native'
import React, { useState } from 'react'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native';
import {styles} from '../theme'
import TrendingMovies from '../components/trendingMovies'
import MovieList from '../components/movieList'

const ios = Platform.OS == "ios"
export default function HomeScreen(){
    const [trending, setTrending] = useState([1,2,3])
    const [upcoming, setUpcoming] = useState([1,2,3])
    const [toprated, setToprated] = useState([1,2,3])
    console.log(styles);
    return (
        <View className="flex-1 bg-neutral-800">
            {/* Sreach bar and logo */}
            <SafeAreaView className={ios? '-mb-2': 'mb-3'}>
                <StatusBar barStyle="light"/>
                <View className="flex-row justify-between items-center mx-4">
                <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white"/>
                <Text className="text-white text-3xl font-bold"><Text style={styles.text}>M</Text>ovies</Text>
                <TouchableOpacity>
                    <MagnifyingGlassIcon size="30" strokeWidth={2} color="white"/>
                </TouchableOpacity>
                </View>
            </SafeAreaView>
            <ScrollView 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 10}}
            
            >
            {/* Trending movies carousel*/}
            <TrendingMovies data= {trending} />
            {/* upcoming movies row */}
            <MovieList title="Upcomig" data={upcoming}/>

            {/* Top rated Movies movies row */}
            <MovieList title="Top Rated " data={toprated}/>


            </ScrollView>
        </View>
    )
} 