import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import ScoreboardScreen from './src/screens/ScoreboardScreen';

import useFetchData from './src/screens/hooks/useFetchData';

const Stack = createStackNavigator();

export default function App() {
  const URL = 'https://gbfs.nextbike.net/maps/gbfs/v2/nextbike_na/gbfs.json';

  const { data, loading, error } = useFetchData(URL);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen initialRouteName="Landing" name="Landing" component={LandingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Scoreboard" component={ScoreboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


function LandingScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Landing Page!</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login', { data })}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
