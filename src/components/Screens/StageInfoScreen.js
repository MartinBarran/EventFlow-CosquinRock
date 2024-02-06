import { Pressable, ScrollView, Text, View, StyleSheet } from "react-native"
import { useItinerary } from "../../utils/itineraryContext"
import coloredStagesObj from "../../utils/stagesGlobalStyles";
import eventSchedule from "../../data/processedExampleData";

const findArtistDay = (artistInfo) => {
    const days = Object.keys(eventSchedule);
    let artistDay = null;

    days.forEach(day => {
        const stages = eventSchedule[day];
        Object.keys(stages).forEach(stage => {
            const artists = stages[stage];
            artists.forEach(artist => {
                if (artist.stage === artistInfo.stage && artist.artist === artistInfo.artist && artist.time === artistInfo.time) {
                    artistDay = day;
                }
            });
        });
    });

    return artistDay;
};


const handleClick = (artistInfo, addToItinerary, itinerary, deleteFromItinerary, artistDay) => {
    // Verifica si el día está presente en el itinerario
    if (itinerary.hasOwnProperty(artistDay)) {
        const dayItinerary = itinerary[artistDay];
        // Verifica si el artista está presente en el itinerario del día correspondiente
        const isArtistInDay = dayItinerary.some(item => (
            item.stage === artistInfo.stage &&
            item.artist === artistInfo.artist &&
            item.time === artistInfo.time
        ));
        
        if (isArtistInDay) {
            deleteFromItinerary(artistInfo, artistDay);
            alert("Artista eliminado del itinerario");
        } else {
            addToItinerary(artistInfo, artistDay);
            alert("Agregado a tu recorrido");
        }
    } else {
        addToItinerary(artistInfo, artistDay);
        alert("Agregado a tu recorrido");
    }
};

const ArtistButton = ({ title, artistInfo, addToItinerary, itinerary, deleteFromItinerary, color, height, fontW, fontS, artistDay }) => {
    //console.log(color)
    return (
        <Pressable
            style={[styles.artistBtn, {backgroundColor:color, height:height}]}
            onPress={() => {
                handleClick(artistInfo, addToItinerary, itinerary, deleteFromItinerary, artistDay);
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
    const selectedArtistFontW = "900";

    return (
        <>
            {arr.map((element, index) => {
                const artistAndTime = `${element.artist} - ${element.time}`;
                const color = coloredStagesObj[element.stage];
                const artistDay = findArtistDay(element);

                return (
                    <ArtistButton
                        key={index}
                        title={artistAndTime}
                        artistInfo={element}
                        addToItinerary={addToItinerary}
                        deleteFromItinerary={deleteFromItinerary}
                        itinerary={itinerary}
                        color={itinerary[artistDay] && itinerary[artistDay].includes(element) ? selectedArtistColor : color}
                        height={itinerary[artistDay] && itinerary[artistDay].includes(element) ? selectedArtistHeight : 70}
                        fontW={itinerary[artistDay] && itinerary[artistDay].includes(element) ? selectedArtistFontW : "normal"}
                        fontS={itinerary[artistDay] && itinerary[artistDay].includes(element) ? 20 : 15}
                        artistDay={artistDay}
                    />
                );
            })}
            {console.log("Itinerario actual:", itinerary)}
        </>
    );
};

const StageInfoScreen = ({ route }) => {
    const { title, artistGrid } = route.params;
    return (
        <View style={{backgroundColor:"#000000"}}>
            <Text>{JSON.stringify(title)}</Text>
                <ScrollView 
                    style={styles.scrollView} 
                    contentContainerStyle={styles.contentContainer}
                >
                    <ArtistButtonRenderer arr={artistGrid} />
                </ScrollView>

        </View>
    )
}

export default StageInfoScreen



const styles = StyleSheet.create({
    artistBtn: {
      margin:4,
      borderRadius:20,
      height:70,
      textAlign: "center",
      alignItems:"center", 
      justifyContent:"center",  
      width: 350

    },
    text:{
        color:"white",
        textAlign: "center",
        padding:5,
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
      }});