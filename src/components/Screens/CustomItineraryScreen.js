import { Text, View, Pressable, StyleSheet, ScrollView } from "react-native"
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
            <Text>{title}</Text>
        </Pressable>
    )
}

const CustomItineraryScreen = ({ route }) => {
    const { day } = route.params;
    const { itinerary, deleteFromItinerary } = useItinerary();

    const artistsOfDay = itinerary[day] || [];

    return (
        <View>
            <Text>TU ITINERARIO DE ROCK {day}</Text>
            <ScrollView 
                style={styles.scrollView} 
                contentContainerStyle={styles.contentContainer}
            >
                {artistsOfDay.map((element, index) => {
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
                })}
            </ScrollView>
        </View>
    );
}

export default CustomItineraryScreen

const styles = StyleSheet.create({
    itineraryBtn: {
      margin:20,
      borderRadius:20,
      height:50,
      textAlign: "center",
      alignItems:"center", 
      justifyContent:"center",
      width: 350 
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
