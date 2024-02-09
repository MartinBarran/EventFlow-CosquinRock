import { Pressable, ScrollView, Text, View, StyleSheet, ImageBackground } from "react-native"
import { useItinerary } from "../../utils/itineraryContext"
import coloredStagesObj from "../../utils/stagesGlobalStyles";
import eventSchedule from "../../data/processedExampleData";
import { useState } from "react";
import Popup from "../PopUp";

const findArtistDay = (artistInfo) => {
    const days = Object.keys(eventSchedule);
    //console.log("Dias: ", days)
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




const ArtistButton = ({ title, artistInfo, addToItinerary, itinerary, deleteFromItinerary, color, height, fontW, fontS, artistDay, handleClick }) => {
    //console.log(color)
    return (
        <Pressable
            style={[styles.artistBtn, {backgroundColor:color, height:height}]}
            onPress={() => {
                handleClick(artistInfo, addToItinerary, itinerary, deleteFromItinerary, artistDay, setIsPopupActive);
                console.log("ATENCION: ", artistDay)
            }}
        >
            <Text style={[styles.text,{fontWeight:fontW, fontSize:fontS}]}>
                {title}
            </Text>
        </Pressable>
    )
}

const ArtistButtonRenderer = ({ arr, setIsPopupActive, handleClick }) => {
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
                        setIsPopupActive={setIsPopupActive}
                        handleClick={handleClick}
                    />
                );
            })}
            {console.log("Itinerario actual:", itinerary)}
        </>
    );
};

const StageInfoScreen = ({ route }) => {
    const { title, artistGrid } = route.params;
    [isPopupActive,setIsPopupActive] = useState(false);
    [popupMessage, setPopupMessage] = useState();
    [popupColor, setPopupColor] = useState("#23b3d3");

    const handleClick = (artistInfo, addToItinerary, itinerary, deleteFromItinerary, artistDay, setIsPopupActive) => {
        // Verifica si el día está presente en el itinerario
        if (itinerary.hasOwnProperty(artistDay)) {
            const dayItinerary = itinerary[artistDay];
            // Verifica si el artista está presente en el itinerario del día correspondiente
            const isArtistInDayItinerary = dayItinerary.some(item => (
                item.stage === artistInfo.stage &&
                item.artist === artistInfo.artist &&
                item.time === artistInfo.time
            ));
            
            if (isArtistInDayItinerary) {
                deleteFromItinerary(artistInfo, artistDay);
                setPopupMessage("Artista eliminado del itinerario");
                setPopupColor("#dc2e51")
            } else {
                addToItinerary(artistInfo, artistDay);
                setPopupMessage("Artista agregado a tu recorrido");
                setPopupColor("#23b3d3")
            }
        } else {
            addToItinerary(artistInfo, artistDay);
            setPopupMessage("Agregado a tu recorrido");
        }
        setIsPopupActive(true)
        setTimeout(()=>setIsPopupActive(false), 2000)
    };
    

    return (
        <View style={{backgroundColor:"#000000", height:"100%"}}>
            <ImageBackground  
                source={require("../../assets/bg2.png")} 
                resizeMode="cover" 
                style={styles.image}
            >
                <Text
                    style={styles.title}
                >
                    {JSON.stringify(title).replaceAll('"', "")}
                </Text>
                <View style={styles.scrollViewContainer} >
                    <ScrollView 
                        style={styles.scrollView} 
                        contentContainerStyle={styles.contentContainer}
                    >
                        <ArtistButtonRenderer arr={artistGrid} setIsPopupActive={setIsPopupActive} handleClick={handleClick}/>
                    </ScrollView>
                </View>
                { isPopupActive && 
                    <Popup message={popupMessage} color={popupColor}></Popup> 
                }    
            </ImageBackground>
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
      width: 350,
      borderWidth: 2,
      borderColor:"#0a0047",
    },
    text:{
        color:"white",
        textAlign: "center",
        padding:5,
        textShadowColor: 'rgba(0, 0, 0, 0.75)', // Sombra negra
        textShadowOffset: { width: 1, height: 1 }, // Offset de la sombra
        textShadowRadius: 2, // Radio de la sombra
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
    scrollView: {
        width: '100%',
        margin: 20,
        alignSelf: 'center', 
      },
      scrollViewContainer:{
        height:"85%",
      },    
      contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',  
      }});