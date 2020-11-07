import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import MenuButton from '../components/MenuButton';

const Menu = (props) => {
  return ( 
    <View style={styles.menuContainer}>
      <Text>CHOOSE</Text>
      <MenuButton
        onPress={() => props.navigation.navigate('New Story')}
        title="New Story"
      />
      <MenuButton
        onPress={() => props.navigation.navigate('Continue Story')}
        title="Continue Story"
      />
      <MenuButton 
        onPress={() => props.navigation.navigate('Settings')}
        title="Settings"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {

  }
})

export default Menu;