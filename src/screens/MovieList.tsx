import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useAppContext} from '../AppContext';
import {appStyles} from '../AppStyles';
import {MoviePoster} from '../components/MoviePoster';

const MovieList = () => {
  const {movies} = useAppContext();

  return (
    <SafeAreaView style={appStyles.main}>
      <FlatList
        data={movies}
        numColumns={2}
        renderItem={({item}) => <MoviePoster movie={item} />}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={appStyles.flatList}
        contentInsetAdjustmentBehavior="automatic"
      />
    </SafeAreaView>
  );
};

export default MovieList;
