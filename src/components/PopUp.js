import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Popup = ({ message, color }) => {
    console.log(color)
  return (
    <View style={styles.popupContainer}>
      <Text style={[styles.popupText, {color:`${color}`}]}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  popupContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,

  },
  popupText: {
    //color: 'black',
    textAlign: 'center',
  },
});

export default Popup;
