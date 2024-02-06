import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import ScoreboardScreen from './ScoreboardScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={LandingScreen} />
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
        onPress={() => navigation.navigate('Login')}
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
