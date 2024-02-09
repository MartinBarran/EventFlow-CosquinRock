import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';

const xml = `<svg width="800px" height="800px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_901_1464)">
<path d="M17 11.0009V21.0009C17 22.1049 17.896 23.0009 19 23.0009H21C22.104 23.0009 23 22.1049 23 21.0009V11.0009C23 9.89687 22.104 9.00087 21 9.00087H19C17.896 9.00087 17 9.89687 17 11.0009ZM17 11.0009C17 9.89687 16.104 9.00087 15 9.00087H13C11.896 9.00087 11 9.89687 11 11.0009V14.0009M9.6191 6.98137L8.8731 2.64637C8.6831 1.56237 7.6571 0.838368 6.5801 1.03037L4.6311 1.37637C3.5541 1.56737 2.8361 2.60137 3.0241 3.68437L5.3571 17.0014M24.3701 7.01457L25.1201 2.64657C25.3081 1.56257 26.3351 0.838568 27.4111 1.03057L29.3591 1.37557C30.4351 1.56757 31.1521 2.60157 30.9641 3.68457L28.0001 20.0006V27.0006C28.0001 29.3336 26.3331 31.0006 24.0001 31.0006H9.0001C4.0001 31.0006 1.0001 28.9586 1.0001 23.0006V18.0006C1.0001 17.4486 1.4471 17.0006 2.0001 17.0006H16.0001C16.5311 17.0006 17.0001 17.4386 17.0001 18.0006V19.0006C17.0001 21.3446 15.3441 23.0006 13.0001 23.0006H7.0001" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_901_1464">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>`;

const ChooseDayScreen = () =>{
    const navigation = useNavigation()
 
    return(
        <View style={styles.container}
            
        >
            <ImageBackground  
                source={require("../../assets/ChooseDayScreenBG.png")} 
                resizeMode="cover" 
                style={styles.image}
            >
                <View style={styles.btnContainer}>
                    <Pressable 
                        onPress={() => navigation.navigate('Main', {day:"DÍA 1"})}
                        style={styles.btn}
                    >
                        <View style={styles.innerContainer}>
                            <SvgXml xml={xml} width="25%" height="100%" />
                            <Text style={styles.text}>DÍA 1</Text>
                        </View>
                    </Pressable>
                    <Pressable 
                        onPress={() => navigation.navigate('Main', {day:"DÍA 2"})}
                        style={styles.btn}                          
                    >
                        <View style={styles.innerContainer}>
                            <SvgXml  xml={xml} width="25%" height="100%" />
                            <Text style={styles.text}>DÍA 2</Text>
                        </View>
                    </Pressable>
                </View>
             </ImageBackground>
        </View>
    )
}

export default ChooseDayScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    btnContainer: {
        alignItems:"center",
        height: 450,
        justifyContent:"flex-end",
        gap:80
    },
    btn: {
        backgroundColor: '#2c3e50', // Color de fondo
        borderRadius: 10, // Borde redondeado
        paddingVertical: 12, // Espacio vertical interno
        paddingHorizontal: 0, // Espacio horizontal interno
        borderWidth: 2, // Ancho del borde
        borderColor: '#23b3d3', // Color del borde
        marginBottom: 20, // Margen inferior
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap:25,
    },
    text: {
        color: '#ffffff', // Color del texto
        fontWeight: 'bold', // Texto en negrita
        fontSize: 35, // Tamaño de fuente
    },
    img: {
        width: 20, // Ajusta el tamaño de la imagen según sea necesario
        height: 20, // Ajusta el tamaño de la imagen según sea necesario
    },
});

//'#dc2e51',
//'#a8d403',
//'#23b3d3',
//'#e6c858',
//'#0a0047',
