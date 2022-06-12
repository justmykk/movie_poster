import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useAppContext} from '../AppContext';
import {appStyles} from '../AppStyles';
import {MoviePoster} from '../components/MoviePoster';

const LikedMovies = () => {
  const {likedMovies} = useAppContext();

  return (
    <SafeAreaView style={appStyles.main}>
      <FlatList
        data={likedMovies}
        numColumns={2}
        renderItem={({item}) => <MoviePoster movie={item} />}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={appStyles.flatList}
      />
    </SafeAreaView>
  );
};

export default LikedMovies;
