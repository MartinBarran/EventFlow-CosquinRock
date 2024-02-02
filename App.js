import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import StageBoxRenderer from './src/utils/StageBoxRenderer.js';
import eventSchedule from './src/data/processedExampleData.js';

const data = eventSchedule

export default function App() {
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
      <StatusBar style="auto" />
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:"center",
  },
  scrollViewContainer: {
    height:"80%",
    width: "100%"
  },
  scrollView: {
    width: '100%',
    margin: 20,
    alignSelf: 'center',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    
  }

});
console.log(data)