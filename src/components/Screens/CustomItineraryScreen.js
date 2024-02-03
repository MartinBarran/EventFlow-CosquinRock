import { Text, View, Button } from "react-native"
import { useItinerary } from "../../utils/itineraryContext"

const ItineraryButton = ({title, deleteFromItinerary}) =>{
    return(
        <Button
            title={title}
            onPress={() => {
                deleteFromItinerary(title);
        }}
        />
    )
}

const ItineraryButtonsRenderer = () =>{
    const { itinerary, deleteFromItinerary } = useItinerary();
    return (
        itinerary.map((element, index)=>{
            return(
            <>
                <ItineraryButton
                    key={index} 
                    title={element}
                    deleteFromItinerary={deleteFromItinerary}
                />
            </>
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