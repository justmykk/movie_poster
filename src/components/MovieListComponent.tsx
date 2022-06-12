import React, {FC} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {IMovie} from '../ApiService';
import {appStyles} from '../AppStyles';
import {MoviePoster} from '../components/MoviePoster';

type MovieListComponentProps = {
  movies: IMovie[];
};

export const MovieListComponent: FC<MovieListComponentProps> = ({movies}) => {
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
