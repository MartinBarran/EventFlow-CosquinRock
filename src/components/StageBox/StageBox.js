import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';


const StageBox = ({ title, prinArtist, secArtist, artistInStage, color}) => {
  const navigation = useNavigation()
  return (
    <Pressable 
      style={[styles.container, { backgroundColor: color }]}
      onPress={() => navigation.navigate('StageInfo', {title: title, artistGrid:artistInStage.reverse()})}
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
    height: 250,
    width: "60%",
    borderWidth: 2,
    borderColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
    color:"white",
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Sombra negra
    textShadowOffset: { width: 1, height: 1 }, // Offset de la sombra
    textShadowRadius: 2, // Radio de la sombra
    textAlign:"center",
  },
  prinArtist: {
    fontSize: 20,
    color:"white",
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Sombra negra
    textShadowOffset: { width: 1, height: 1 }, // Offset de la sombra
    textShadowRadius: 2, // Radio de la sombra
    textAlign:"center",

  },
  secArtist: {
    fontSize: 14,
    color:"white",
    textShadowColor: 'rgba(0, 0, 0, 0.50)', // Sombra negra
    textShadowOffset: { width: 1, height: 1 }, // Offset de la sombra
    textShadowRadius: 1, // Radio de la sombra
    textAlign:"center",

  }
});

export default StageBox;
