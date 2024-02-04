import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import eventSchedule from '../../data/processedExampleData.js';
import StageBoxRenderer from '../../utils/StageBoxRenderer.js';



const MainScreen=({navigation})=>{
    const data = eventSchedule

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Estos son los escenarios del COSQUÍN ROCK!</Text>
      <View style={styles.scrollViewContainer} >
        <ScrollView 
          style={styles.scrollView} 
          contentContainerStyle={styles.contentContainer}
        > 
          <StageBoxRenderer {...data}></StageBoxRenderer>  
        </ScrollView>
      </View> 
      <Button
        title="Mi Recorrido"
        onPress={() => navigation.navigate('CustomItinerary')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign:"center",
    color: "#fefefe"
  },
  scrollViewContainer: {
    height:"80%",
    width: "100%",
  },
  scrollView: {
    width: '100%',
    margin: 20,
    alignSelf: 'center',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',    
  }

});

export default MainScreen;