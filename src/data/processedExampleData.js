import exampleEventData from "./rawExampleEventData.js"



const filterStages = (arr) =>{
    const stages  = {};
    arr.forEach(element => {
        if (!stages.hasOwnProperty(element.stage)) {
            stages[element.stage] = [];
        }
    });
    return stages ;
}

const stages = filterStages(exampleEventData)

const setArtistToStages = (artistArray, stagesObject) =>{
    artistArray.forEach(artist=>{
        const artistStage = artist.stage;            
        switch (stagesObject.hasOwnProperty(artistStage)){
            case true:
                stagesObject[artistStage].push(artist)
                break;
            default:
                break;
            }
        })
    return stages
}


const eventSchedule = {
    'DÍA 1': {
    'ESCENARIO NORTE': [
        {stage: "ESCENARIO NORTE", artist: "LOS AUTÉNTICOS DECADENTES", time: "0:20", timeValue: "2420"},
{stage: "ESCENARIO NORTE", artist: "CONOCIENDO RUSIA", time: "22:50", timeValue: "2250"},
{stage: "ESCENARIO NORTE", artist: "BABASÓNICOS ", time: "21:20", timeValue: "2120"},
{stage: "ESCENARIO NORTE", artist: "DILLOM", time: "20:00", timeValue: "2000"},
{stage: "ESCENARIO NORTE", artist: "LOS PERICOS Y AMIGOS", time: "18:30", timeValue: "1830"},
{stage: "ESCENARIO NORTE", artist: "NAFTA", time: "17:10", timeValue: "1710"},
{stage: "ESCENARIO NORTE", artist: "SILVESTRE Y LA NARANJA", time: "16:10", timeValue: "1610"},
{stage: "ESCENARIO NORTE", artist: "NATALIE PÉREZ", time: "15:20", timeValue: "1520"},
{stage: "ESCENARIO NORTE", artist: "BLAIR", time: "14:30", timeValue: "1430"},
    ],
    'ESCENARIO SUR': [
        {stage: "ESCENARIO SUR", artist: "CARAS EXTRAÑAS", time: "1:10", timeValue: "2510"},
{stage: "ESCENARIO SUR", artist: "LA VELA PUERCA", time: "23:40", timeValue: "2340"},
{stage: "ESCENARIO SUR", artist: "SKAY Y LOS FAKIRES", time: "22:10", timeValue: "2210"},
{stage: "ESCENARIO SUR", artist: "DIVIDIDOS", time: "20:00", timeValue: "2000"},
{stage: "ESCENARIO SUR", artist: "AIRBAG", time: "18:30", timeValue: "1830"},
{stage: "ESCENARIO SUR", artist: "SUEÑO DE PESCADO", time: "17:00", timeValue: "1700"},
{stage: "ESCENARIO SUR", artist: "LA MISSISSIPI", time: "15:50", timeValue: "1550"},
{stage: "ESCENARIO SUR", artist: "LA CHANCHA VIUDA", time: "15:00", timeValue: "1500"},
{stage: "ESCENARIO SUR", artist: "WINONA RIDERS", time: "14:30", timeValue: "1430"},
    ],
    'ESCENARIO BOOMERANG': [
        {stage: "ESCENARIO BOOMERANG", artist: "POLENTA", time: "1:10", timeValue: "2510"},
{stage: "ESCENARIO BOOMERANG", artist: "LEÓN CORDERO", time: "0:00", timeValue: "2400"},
{stage: "ESCENARIO BOOMERANG", artist: "1915", time: "22:50", timeValue: "2250"},
{stage: "ESCENARIO BOOMERANG", artist: "ISLA DE CARAS", time: "21:50", timeValue: "2150"},
{stage: "ESCENARIO BOOMERANG", artist: "ALAN SUTTON", time: "20:40", timeValue: "2040"},
{stage: "ESCENARIO BOOMERANG", artist: "DANTE SPINETTA", time: "19:40", timeValue: "1940"},
{stage: "ESCENARIO BOOMERANG", artist: "BROKE CARREY", time: "18:30", timeValue: "1830"},
{stage: "ESCENARIO BOOMERANG", artist: "MELANIE WILLIAMS", time: "17:30", timeValue: "1730"},
{stage: "ESCENARIO BOOMERANG", artist: "VEINTIUNO", time: "16:40", timeValue: "1640"},
{stage: "ESCENARIO BOOMERANG", artist: "PEDRO PASTOR", time: "15:50", timeValue: "1550"},
{stage: "ESCENARIO BOOMERANG", artist: "MARTÍN GUSTA", time: "15:00", timeValue: "1500"},
    ],
    'ESCENARIO MONTAÑA': [
        {stage: "ESCENARIO MONTAÑA", artist: "CLAPTONE", time: "2:15", timeValue: "2615"},
{stage: "ESCENARIO MONTAÑA", artist: "GORDO", time: "0:50", timeValue: "2450"},
{stage: "ESCENARIO MONTAÑA", artist: "VICTORIA ENGEL", time: "23:45", timeValue: "2345"},
{stage: "ESCENARIO MONTAÑA", artist: "TIAGO PZK", time: "22:30", timeValue: "2230"},
{stage: "ESCENARIO MONTAÑA", artist: "LALI", time: "21:00", timeValue: "2100"},
{stage: "ESCENARIO MONTAÑA", artist: "MIRANDA!", time: "19:30", timeValue: "1930"},
{stage: "ESCENARIO MONTAÑA", artist: "BANDALOS CHINOS", time: "18:10", timeValue: "1810"},
{stage: "ESCENARIO MONTAÑA", artist: "ARDE BOGOTÁ", time: "17:10", timeValue: "1710"},
{stage: "ESCENARIO MONTAÑA", artist: "SHINOVA", time: "16:10", timeValue: "1610"},
    ],
    'ESCENARIO PARAGUAY': [
        {stage: "ESCENARIO PARAGUAY ", artist: "FIESTA SABOR", time: "0:40", timeValue: "2440"},
        {stage: "ESCENARIO PARAGUAY ", artist: "SABOR CANELA", time: "23:50", timeValue: "2350"},
        {stage: "ESCENARIO PARAGUAY ", artist: "SARA HEBE", time: "22:10", timeValue: "2210"},
        {stage: "ESCENARIO PARAGUAY ", artist: "KE PERSONAJES", time: "20:50", timeValue: "2050"},
        {stage: "ESCENARIO PARAGUAY ", artist: "LA DELIO VALDEZ", time: "19:40", timeValue: "1940"},
        {stage: "ESCENARIO PARAGUAY ", artist: "LOS TABLEROS", time: "18:30", timeValue: "1830"},
        {stage: "ESCENARIO PARAGUAY ", artist: "LOS PEÑALOZA", time: "17:30", timeValue: "1730"},
        {stage: "ESCENARIO PARAGUAY ", artist: "LUANA", time: "16:30", timeValue: "1630"},
        {stage: "ESCENARIO PARAGUAY ", artist: "KAMADA", time: "15:30", timeValue: "1530"},
    ],
    'LA CASITA DEL BLUES': [
        {stage: "LA CASITA DEL BLUES", artist: "JULIETA LASO", time: "22:45", timeValue: "2245"},
        {stage: "LA CASITA DEL BLUES", artist: "ESCALANDRUM", time: "21:40", timeValue: "2140"},
        {stage: "LA CASITA DEL BLUES", artist: "IVÁN SINGH", time: "20:35", timeValue: "2035"},
        {stage: "LA CASITA DEL BLUES", artist: "CUATRO AL HILO", time: "19:40", timeValue: "1940"},
        {stage: "LA CASITA DEL BLUES", artist: "WAYRA IGLESIAS", time: "18:45", timeValue: "1845"},
        {stage: "LA CASITA DEL BLUES", artist: "MIAU TRÍO ", time: "17:50", timeValue: "1750"},
        {stage: "LA CASITA DEL BLUES", artist: "MARLENE", time: "16:55", timeValue: "1655"},
        {stage: "LA CASITA DEL BLUES", artist: "THE ROCKMEN", time: "16:00", timeValue: "1600"},
    ]
  }
,
'DÍA 2':{
    'ESCENARIO NORTE': [
        {stage: "ESCENARIO NORTE", artist: "DAMAS GRATIS", time: "0:30", timeValue: "2430"},
{stage: "ESCENARIO NORTE", artist: "DUKI", time: "22:50", timeValue: "2250"},
{stage: "ESCENARIO NORTE", artist: "YSY A", time: "21:00", timeValue: "2100"},
{stage: "ESCENARIO NORTE", artist: "LOS CALIGARIS", time: "19:20", timeValue: "1920"},
{stage: "ESCENARIO NORTE", artist: "SNOW THA PRODUCT", time: "18:10", timeValue: "1810"},
{stage: "ESCENARIO NORTE", artist: "MILO J", time: "17:00", timeValue: "1700"},
{stage: "ESCENARIO NORTE", artist: "NEO PISTEA", time: "16:10", timeValue: "1610"},
{stage: "ESCENARIO NORTE", artist: "YAMI SAFDIE", time: "15:10", timeValue: "1510"},
{stage: "ESCENARIO NORTE", artist: "ROSA PROFUNDA ", time: "14:30", timeValue: "1430"},
    ],
    'ESCENARIO SUR': [
        {stage: "ESCENARIO SUR", artist: "BRESH", time: "2:10", timeValue: "2610"},
{stage: "ESCENARIO SUR", artist: "MOLOTOV", time: "0:55", timeValue: "2455"},
{stage: "ESCENARIO SUR", artist: "LAS PELOTAS", time: "23:25", timeValue: "2325"},
{stage: "ESCENARIO SUR", artist: "SLASH", time: "21:30", timeValue: "2130"},
{stage: "ESCENARIO SUR", artist: "CIRO Y LOS PERSAS", time: "19:20", timeValue: "1920"},
{stage: "ESCENARIO SUR", artist: "LAS PASTILLAS DEL ABUELO", time: "17:30", timeValue: "1730"},
{stage: "ESCENARIO SUR", artist: "CRUZANDO EL CHARCO", time: "16:00", timeValue: "1600"},
{stage: "ESCENARIO SUR", artist: "EL BORDO", time: "15:10", timeValue: "1510"},
{stage: "ESCENARIO SUR", artist: "NENAGENIX", time: "14:30", timeValue: "1430"},
    ],
    'ESCENARIO BOOMERANG': [
        {stage: "ESCENARIO BOOMERANG ", artist: "KOINO YOKAN", time: "23:35", timeValue: "2335"},
{stage: "ESCENARIO BOOMERANG ", artist: "EL ZAR", time: "22:25", timeValue: "2225"},
{stage: "ESCENARIO BOOMERANG ", artist: "LOS TIPITOS", time: "21:25", timeValue: "2125"},
{stage: "ESCENARIO BOOMERANG ", artist: "BEN YART", time: "20:25", timeValue: "2025"},
{stage: "ESCENARIO BOOMERANG ", artist: "MUERE JOVEN", time: "19:35", timeValue: "1935"},
{stage: "ESCENARIO BOOMERANG ", artist: "SANTI MIL", time: "18:45", timeValue: "1845"},
{stage: "ESCENARIO BOOMERANG ", artist: "PAZ CARRARA", time: "18:00", timeValue: "1800"},
{stage: "ESCENARIO BOOMERANG ", artist: "ODD MAMI", time: "17:10", timeValue: "1710"},
{stage: "ESCENARIO BOOMERANG ", artist: "SIMONA", time: "16:20", timeValue: "1620"},
{stage: "ESCENARIO BOOMERANG ", artist: "ILL QUENTIN", time: "15:40", timeValue: "1540"},
{stage: "ESCENARIO BOOMERANG ", artist: "CAMILÚ", time: "15:00", timeValue: "1500"},
    ],
    'ESCENARIO MONTAÑA': [
        {stage: "ESCENARIO MONTAÑA ", artist: "ANITA B. QUEEN", time: "1:20", timeValue: "2520"},
{stage: "ESCENARIO MONTAÑA ", artist: "STEVE AOKI", time: "23:40", timeValue: "2340"},
{stage: "ESCENARIO MONTAÑA ", artist: "PECES RAROS", time: "22:10", timeValue: "2210"},
{stage: "ESCENARIO MONTAÑA ", artist: "USTED SEÑALAMELO", time: "20:40", timeValue: "2040"},
{stage: "ESCENARIO MONTAÑA ", artist: "CATUPECU MACHU", time: "19:10", timeValue: "1910"},
{stage: "ESCENARIO MONTAÑA ", artist: "EL CUELGUE", time: "18:00", timeValue: "1800"},
{stage: "ESCENARIO MONTAÑA ", artist: "ESTELARES", time: "17:00", timeValue: "1700"},
{stage: "ESCENARIO MONTAÑA ", artist: "LEO RIZZI", time: "16:00", timeValue: "1600"},
    ],
    'ESCENARIO PARAGUAY': [
        {stage: "ESCENARIO PARAGUAY", artist: "ALBOROISE", time: "23:20", timeValue: "2320"},
{stage: "ESCENARIO PARAGUAY", artist: "DON CARLOS", time: "21:40", timeValue: "2140"},
{stage: "ESCENARIO PARAGUAY", artist: "DANCING MOOD", time: "20:00", timeValue: "2000"},
{stage: "ESCENARIO PARAGUAY", artist: "MIMI MAURA", time: "18:40", timeValue: "1840"},
{stage: "ESCENARIO PARAGUAY", artist: "STAILOK", time: "17:20", timeValue: "1720"},
{stage: "ESCENARIO PARAGUAY", artist: "ALIKA", time: "16:00", timeValue: "1600"},
{stage: "ESCENARIO PARAGUAY", artist: "PANAL", time: "15:00", timeValue: "1500"},
    ],
    'LA CASITA DEL BLUES': [
        {stage: "LA CASITA DEL BLUES", artist: "LARETHA WEATHERSBY", time: "22:40", timeValue: "2240"},
{stage: "LA CASITA DEL BLUES", artist: "BOURBON SWEETHEARTS", time: "21:35", timeValue: "2135"},
{stage: "LA CASITA DEL BLUES", artist: "RIEL", time: "20:30", timeValue: "2030"},
{stage: "LA CASITA DEL BLUES", artist: "TOYO", time: "19:25", timeValue: "1925"},
{stage: "LA CASITA DEL BLUES", artist: "THE LAST TRAIN", time: "18:30", timeValue: "1830"},
{stage: "LA CASITA DEL BLUES", artist: "SO", time: "17:25", timeValue: "1725"},
{stage: "LA CASITA DEL BLUES", artist: "ALAPAR", time: "16:20", timeValue: "1620"},
{stage: "LA CASITA DEL BLUES", artist: "LA GOLO'S BANDA", time: "15:25", timeValue: "1525"},
{stage: "LA CASITA DEL BLUES", artist: "PAX AND THE BABY BOYS", time: "14:30", timeValue: "1430"},
    ]
  }
,}



export default eventSchedule