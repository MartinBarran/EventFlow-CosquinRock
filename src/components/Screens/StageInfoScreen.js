import { Pressable, ScrollView, Text, View, StyleSheet } from "react-native"
import { useItinerary } from "../../utils/itineraryContext"
import coloredStagesObj from "../../utils/stagesGlobalStyles";


const handleClick = (artistInfo, addToItinerary, itinerary, deleteFromItinerary) => {
    if (itinerary.includes(artistInfo)) {
        deleteFromItinerary(artistInfo)
        alert("Artista eliminado del itinerario");
    } else {
        addToItinerary(artistInfo);
        alert("Agregado a tu recorrido");
    }
};

const ArtistButton = ({ title, artistInfo, addToItinerary, itinerary, deleteFromItinerary, color, height, fontW, fontS }) => {
    return (
        <Pressable
            style={[styles.artistBtn, {backgroundColor:color, height:height}]}
            onPress={() => {
                handleClick(artistInfo, addToItinerary, itinerary, deleteFromItinerary);
            }}
        >
            <Text style={[styles.text,{fontWeight:fontW, fontSize:fontS}]}>
                {title}
            </Text>
        </Pressable>
    )
}

const ArtistButtonRenderer = ({ arr }) => {
    const { addToItinerary, itinerary, deleteFromItinerary } = useItinerary();
    const selectedArtistColor = "#0a0047";
    const selectedArtistHeight= 85;
    const selectedArtistFontW = "900"


    return (
        <>
            {arr.map((element, index) => {
                const artistAndTime = `${element.artist} - ${element.time}`;
                const color = coloredStagesObj[element.stage];
                return (
                    <ArtistButton
                        key={index}
                        title={artistAndTime}
                        artistInfo={element}
                        addToItinerary={addToItinerary}
                        deleteFromItinerary={deleteFromItinerary}
                        itinerary={itinerary}
                        color={itinerary.includes(element) ? selectedArtistColor : color}
                        height={itinerary.includes(element) ? selectedArtistHeight : 70}
                        fontW={itinerary.includes(element) ? selectedArtistFontW : "normal"}
                        fontS={itinerary.includes(element) ? 20 : 15}


                    />
                )
            })}
            {console.log("Itinerario actual:", itinerary)}
        </>
    )
}

const StageInfoScreen = ({ route }) => {
    const { title, artistGrid } = route.params;
    return (
        <View style={{backgroundColor:"#000000"}}>
            <Text>{JSON.stringify(title)}</Text>
            <ArtistButtonRenderer arr={artistGrid} />
        </View>
    )
}

export default StageInfoScreen



const styles = StyleSheet.create({
    artistBtn: {
      margin:20,
      borderRadius:20,
      height:70,
      textAlign: "center",
      alignItems:"center", 
      justifyContent:"center",  

    },
    text:{
        color:"white",
        textAlign: "center",
        padding:5,
    }});