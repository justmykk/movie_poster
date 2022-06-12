import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieList from './src/screens/MovieList';
import {AppContextProvider} from './src/AppContext';
import LikedMovies from './src/screens/LikedMovies';
import {Button} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Movies"
            component={MovieList}
            options={({navigation}) => ({
              headerTitle: 'Movie List',
              headerLargeTitle: true,
              headerLargeTitleShadowVisible: false,
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate('LikedMovies')}
                  title="Favorites"
                />
              ),
            })}
          />
          <Stack.Screen
            name="LikedMovies"
            component={LikedMovies}
            options={{headerTitle: 'Liked Movies'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
};

export default App;
