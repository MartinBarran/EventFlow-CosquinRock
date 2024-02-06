import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';


const StageBox = ({ title, prinArtist, secArtist, artistInStage, color}) => {
  const navigation = useNavigation()
  return (
    <Pressable 
      style={[styles.container, { backgroundColor: color }]}
      onPress={() => navigation.navigate('StageInfo', {title: title, artistGrid:artistInStage})}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.prinArtist}>{prinArtist}</Text>
      <Text style={styles.secArtist}>{secArtist}</Text>
    </Pressable>
  );
};

 



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 8,
    margin: 16,
    alignItems: "center",
    justifyContent: "space-between",
    height: 200,
    width: "60%",
    
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
    color:"white"
  },
  prinArtist: {
    fontSize: 20,
    color:"white"
  },
  secArtist: {
    fontSize: 14,
    color:"white"
  }
});

export default StageBox;
