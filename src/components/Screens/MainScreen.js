import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Pressable, ImageBackground } from 'react-native';
import eventSchedule from '../../data/processedExampleData.js';
import StageBoxRenderer from '../../utils/StageBoxRenderer.js';



const MainScreen=({navigation, route})=>{
    const { day } = route.params;
   // const data = eventSchedule
   
    const dayData = eventSchedule[day]

  return (
    <View style={styles.container}>
      <ImageBackground  
                source={require("../../assets/bg2.png")} 
                resizeMode="cover" 
                style={styles.image}
      >
        <View style={styles.subContainer}>
          <Text style={styles.title}>¡ESTOS SON LOS ESCENARIOS DEL {day}!</Text>
          <View style={styles.scrollViewContainer} >
            <ScrollView 
              style={styles.scrollView} 
              contentContainerStyle={styles.contentContainer}
            > 
              <StageBoxRenderer {...dayData}></StageBoxRenderer>  
            </ScrollView>
          </View> 
          <Pressable          
            style={styles.btn}
            onPress={() => navigation.navigate('CustomItinerary', {day:day})}
          >
            <Text style={styles.btnText}>MI RECORRIDO</Text>          
          </Pressable>
          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    heigth: "100%",
  },
  subContainer:{
    alignItems: "center"
  },  
  title:{
    marginTop:50,
    color:"white",
    textAlign:"center",
    fontSize: 25,
    fontWeight:"900",
    textShadowColor: 'rgba(0, 0, 0, 0.75)', // Sombra negra
    textShadowOffset: { width: 1, height: 1 }, // Offset de la sombra
    textShadowRadius: 2, // Radio de la sombra
    padding:20
},
  scrollViewContainer: {
    height:"74%",
    width: "100%", 
    alignItems: 'center',
  },
  scrollView: {
    width: '100%',
    margin: 5,
    alignSelf: 'center',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  btn: {
    backgroundColor: '#2c3e50', // Color de fondo
    borderRadius: 10, // Borde redondeado
    paddingVertical: 12, // Espacio vertical interno
    paddingHorizontal: 0, // Espacio horizontal interno
    borderWidth: 2, // Ancho del borde
    borderColor: '#23b3d3', // Color del borde
    marginBottom: 20, // Margen inferior
    width: 130,
    alignItems:"center",
    margin:5,
},
btnText:{
  color:"white",
  fontWeight: "bold",
  fontSize:17,
}
});

export default MainScreen;