import { Text, View, Pressable, StyleSheet } from "react-native"
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

const ItineraryButtonsRenderer = () =>{
    const { itinerary, deleteFromItinerary } = useItinerary();
    return (
        itinerary.map((element, index)=>{
            const artistData = `${element.stage} - ${element.artist} - ${element.time}`
            return(
            <View key={index} style={styles.btn}>
                <ItineraryButton 
                    style={styles.btn}
                    title={artistData}
                    deleteFromItinerary={deleteFromItinerary}
                    artist={element}
                    stage={element.stage}
                />
            </View>
        )})
    )
}


const CustomItineraryScreen = () =>{
    
    return (
        <View>
            <Text>TU ITINERARIO DE ROCK</Text>
            <ItineraryButtonsRenderer></ItineraryButtonsRenderer>
        </View>
    )
}

export default CustomItineraryScreen

const styles = StyleSheet.create({
    itineraryBtn: {
      margin:20,
      borderRadius:20,
      height:50,
      textAlign: "center",
      alignItems:"center", 
      justifyContent:"center"     
    }});