import { Button, ScrollView, Text, View } from "react-native"
import { useItinerary } from "../../utils/itineraryContext"


const handleClick = (title, addToItinerary, itinerary, deleteFromItinerary) => {
    if (itinerary.includes(title)) {
        deleteFromItinerary(title)
        alert("Artista eliminado del itinerario");
    } else {
        addToItinerary(title);
        alert("Agregado a tu recorrido");
    }
};

const ArtistButton = ({ title, addToItinerary, itinerary, deleteFromItinerary }) => {
    return (
        <Button
            title={title}
            onPress={() => {
                handleClick(title, addToItinerary, itinerary, deleteFromItinerary);
            }}
        />
    )
}

const ArtistButtonRenderer = ({ arr }) => {
    const { addToItinerary, itinerary, deleteFromItinerary } = useItinerary();

    return (
        <>
            {arr.map((element, index) => {
                const artistInfo = `${element.artist} ${element.time}`
                return (
                    <ArtistButton
                        key={index}
                        title={artistInfo}
                        addToItinerary={addToItinerary}
                        deleteFromItinerary={deleteFromItinerary}
                        itinerary={itinerary}
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
        <View>
            <Text>{JSON.stringify(title)}</Text>
            <ArtistButtonRenderer arr={artistGrid} />
        </View>
    )
}

export default StageInfoScreen
