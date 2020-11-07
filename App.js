import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './src/screens/Menu';
import Story from './src/screens/Story';
import Settings from './src/screens/Settings';
import Achievements from './src/screens/Achievements';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen 
          name="Menu"
          component={Menu}
        />
        <Stack.Screen 
          name="New Story"
          component={Story}
        />
        <Stack.Screen 
          name="Continue Story"
          component={Story}
        />
        <Stack.Screen 
          name="Achievements"
          component={Achievements}
        />
        <Stack.Screen 
          name="Settings"
          component={Settings}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    //   <Menu />
    // </View>
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
