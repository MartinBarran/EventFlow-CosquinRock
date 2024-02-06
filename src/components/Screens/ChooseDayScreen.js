import { Pressable, Text, View } from "react-native"
import { useNavigation } from '@react-navigation/native';

const ChooseDayScreen = () =>{
    const navigation = useNavigation()
    
    return(
        <View>
            <Pressable 
                onPress={() => navigation.navigate('Main', {day:"Dia 1"})}
            >
                <Text>DÍA 1</Text>
            </Pressable>
            <Pressable 
                onPress={() => navigation.navigate('Main', {day:"Dia 2"})}
            >
                <Text>DÍA 2</Text>
            </Pressable>
        </View>
    )
}

export default ChooseDayScreen