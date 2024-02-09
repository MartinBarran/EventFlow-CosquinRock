import { Text, View, Pressable, StyleSheet, ScrollView, ImageBackground } from "react-native"
import { useItinerary } from "../../utils/itineraryContext"
import coloredStagesObj from "../../utils/stagesGlobalStyles"

const ItineraryButton = ({title, deleteFromItinerary, artist, stage}) =>{
    const color = coloredStagesObj[stage]
    return(
        <Pressable  
            style={[styles.itineraryBtn, { backgroundColor: color }]}          
            title={title}
            onPress={() => {
                deleteFromItinerary(artist);
        }}
        >
            <Text style={styles.itineraryBtnText}>{title}</Text>
        </Pressable>
    )
}

const CustomItineraryScreen = ({ route }) => {
    const { day } = route.params;
    const { itinerary, deleteFromItinerary } = useItinerary();
    const artistsOfDay = itinerary[day].reverse() || [];

    return (
        <View style={styles.container}>
            <ImageBackground 
                source={require("../../assets/bg2.png")} 
                resizeMode="cover" 
                style={styles.image}
            >
                <Text style={styles.title}>TU ITINERARIO DE ROCK: {day}</Text>
                <ScrollView 
                    style={styles.scrollView} 
                    contentContainerStyle={styles.contentContainer}
                >
                       
                    {artistsOfDay.length === 0 ? (
                    <Text style={styles.auxText}>¡No hay artistas agregados!</Text>
                ) : (
                    artistsOfDay.map((element, index) => {
                        const artistData = `${element.stage} - ${element.artist} - ${element.time}`;
                        return (
                            <View key={index} style={styles.btn}>
                                <ItineraryButton 
                                    title={artistData}
                                    deleteFromItinerary={() => deleteFromItinerary(element, day)}
                                    artist={element}
                                    stage={element.stage}
                                />
                            </View>
                        );
                    })
                )}
                </ScrollView>
            </ImageBackground>
        </View>
    );
}

export default CustomItineraryScreen

const styles = StyleSheet.create({
    container:{
        height:"100%",
    },
    auxText:{
        color:"#e6c858",
        fontSize:30,
        width:"70%",
        textAlign:"center",
        margin:40,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
      },
      title:{
        marginTop:50,
        color:"white",
        textAlign:"center",
        fontSize: 40,
        fontWeight:"900",
        textShadowColor: 'rgba(0, 0, 0, 0.75)', // Sombra negra
        textShadowOffset: { width: 1, height: 1 }, // Offset de la sombra
        textShadowRadius: 2, // Radio de la sombra
    },
    itineraryBtn: {
      margin:5,
      borderRadius:20,
      height:80,
      textAlign: "center",
      alignItems:"center", 
      justifyContent:"center",
      width: 350,
      borderWidth: 2,
      borderColor: '#ffffff',
    },
    itineraryBtnText:{
        fontSize: 18,
        color:"white",
        textShadowColor: 'rgba(0, 0, 0, 0.75)', // Sombra negra
        textShadowOffset: { width: 1, height: 1 }, // Offset de la sombra
        textShadowRadius: 2, // Radio de la sombra
        padding:10,
        textAlign:"center",
    },
    scrollView: {
        width: '100%',
        margin: 20,
        alignSelf: 'center',
      },
      contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',  
      }
});
