import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FloatButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Icon name="pencil-outline" size={30} color="red" />
      </TouchableOpacity>
    </View>
  );
}

export default FloatButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom:20,
    right: 20,
    backgroundColor: 'transparent', 
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 65,
    width: 65,
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 30, 
  }
});
