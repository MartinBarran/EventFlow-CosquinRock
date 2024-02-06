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
    'Dia 1': {
    'Escenario Norte': [
        {stage: 'Escenario Norte', artist: 'Balir', time: '14:30' },
        { stage: 'Escenario Norte', artist: 'Natalie Pérez', time: '15:20' },
        { stage: 'Escenario Norte', artist: 'Silvestre y la Naranja', time: '16:10' },
        { stage: 'Escenario Norte', artist: 'Nafta', time: '17:10' },
        { stage: 'Escenario Norte', artist: 'Los Pericos y Amigos', time: '18:30' },
        { stage: 'Escenario Norte', artist: 'Dillom', time: '20:00' },
        { stage: 'Escenario Norte', artist: 'Babasónicos', time: '21:20' },
        { stage: 'Escenario Norte', artist: 'Conociendo Rusia', time: '22:50' },
        { stage: 'Escenario Norte', artist: 'Los Auténticos Decadentes(0.20)', time: '23:59' }
    ],
    'Escenario Sur': [
        { stage: 'Escenario Sur', artist: 'Winona Riders', time: '14:30' },
        { stage: 'Escenario Sur', artist: 'La Chancha Viuda', time: '15:00' },
        { stage: 'Escenario Sur', artist: 'La Mississipi', time: '15:50' },
        { stage: 'Escenario Sur', artist: 'Sueño de Pescado', time: '17:00' },
        { stage: 'Escenario Sur', artist: 'Airbag', time: '18:30' },
        { stage: 'Escenario Sur', artist: 'Divididos', time: '20:00' },
        { stage: 'Escenario Sur', artist: 'Skay y los Favores', time: '22:10' },
        { stage: 'Escenario Sur', artist: 'La Vela Puerca', time: '23:40' },
        { stage: 'Escenario Sur', artist: 'Caras Extrañas(1.10)', time: '23:59' }
    ],
    'Escenario Boomerang': [
        { stage: 'Escenario Boomerang', artist: 'Martín Gusta', time: '15:00' },
          { stage: 'Escenario Boomerang', artist: 'Pedro Pastor', time: '15:50' },
          { stage: 'Escenario Boomerang', artist: 'Veintiuno', time: '16:40' },
          { stage: 'Escenario Boomerang', artist: 'Melanie Williams', time: '17:30' },
          { stage: 'Escenario Boomerang', artist: 'Broke Carrey', time: '18:30' },
          { stage: 'Escenario Boomerang', artist: 'Dante Spinetta', time: '19:40' },
          { stage: 'Escenario Boomerang', artist: 'Alan Sutton', time: '20:40' },
          { stage: 'Escenario Boomerang', artist: 'Isla de Caras', time: '21:50' },
          { stage: 'Escenario Boomerang', artist: '1915', time: '22:50' },
          { stage: 'Escenario Boomerang', artist: 'León Cordero(00.00)', time: '23:58' },//00:0
          { stage: 'Escenario Boomerang', artist: 'Polenta(1.10)', time: '23:59' }
    ],
    'Escenario Montaña': [
        { stage: 'Escenario Montaña', artist: 'Shinova', time: '16:10' },
        { stage: 'Escenario Montaña', artist: 'Arde Bogotá', time: '17:10' },
        { stage: 'Escenario Montaña', artist: 'Bandalos Chinos', time: '18:10' },
        { stage: 'Escenario Montaña', artist: 'Miranda!', time: '19:30' },
        { stage: 'Escenario Montaña', artist: 'Tiago PZK', time: '22:30' },      
        { stage: 'Escenario Montaña', artist: 'LALI', time: '21:00' },
        { stage: 'Escenario Montaña', artist: 'Victoria Engel', time: '23:45' },
        { stage: 'Escenario Montaña', artist: 'Gordo(0.50)', time: '23:58' },//0.50
        { stage: 'Escenario Montaña', artist: 'Claptone(2.10)', time: '23:59' }
    ]
  }
,
'Dia 2':{
  'Escenario Carajo': [
      {stage: 'Escenario Carajo', artist: 'Balir', time: '14:30' },
      { stage: 'Escenario Carajo', artist: 'Natalie Pérez', time: '15:20' },
      { stage: 'Escenario Carajo', artist: 'Silvestre y la Naranja', time: '16:10' },
      { stage: 'Escenario Carajo', artist: 'Nafta', time: '17:10' },
      { stage: 'Escenario Carajo', artist: 'Los Pericos y Amigos', time: '18:30' },
      { stage: 'Escenario Carajo', artist: 'Dillom', time: '20:00' },
      { stage: 'Escenario Carajo', artist: 'Babasónicos', time: '21:20' },
      { stage: 'Escenario Carajo', artist: 'Conociendo Rusia', time: '22:50' },
      { stage: 'Escenario Carajo', artist: 'Los Auténticos Decadentes(0.20)', time: '23:59' }
  ],
  'Escenario RompeMuelas': [
      { stage: 'Escenario RompeMuelas', artist: 'Winona Riders', time: '14:30' },
      { stage: 'Escenario RompeMuelas', artist: 'La Chancha Viuda', time: '15:00' },
      { stage: 'Escenario RompeMuelas', artist: 'La Mississipi', time: '15:50' },
      { stage: 'Escenario RompeMuelas', artist: 'Sueño de Pescado', time: '17:00' },
      { stage: 'Escenario RompeMuelas', artist: 'Airbag', time: '18:30' },
      { stage: 'Escenario RompeMuelas', artist: 'Divididos', time: '20:00' },
      { stage: 'Escenario RompeMuelas', artist: 'Skay y los Favores', time: '22:10' },
      { stage: 'Escenario RompeMuelas', artist: 'La Vela Puerca', time: '23:40' },
      { stage: 'Escenario RompeMuelas', artist: 'Caras Extrañas(1.10)', time: '23:59' }
  ],
  'Escenario DelCaño': [
      { stage: 'Escenario DelCaño', artist: 'Martín Gusta', time: '15:00' },
        { stage: 'Escenario DelCaño', artist: 'Pedro Pastor', time: '15:50' },
        { stage: 'Escenario DelCaño', artist: 'Veintiuno', time: '16:40' },
        { stage: 'Escenario DelCaño', artist: 'Melanie Williams', time: '17:30' },
        { stage: 'Escenario DelCaño', artist: 'Broke Carrey', time: '18:30' },
        { stage: 'Escenario DelCaño', artist: 'Dante Spinetta', time: '19:40' },
        { stage: 'Escenario DelCaño', artist: 'Alan Sutton', time: '20:40' },
        { stage: 'Escenario DelCaño', artist: 'Isla de Caras', time: '21:50' },
        { stage: 'Escenario DelCaño', artist: '1915', time: '22:50' },
        { stage: 'Escenario DelCaño', artist: 'León Cordero(00.00)', time: '23:58' },//00:0
        { stage: 'Escenario DelCaño', artist: 'Polenta(1.10)', time: '23:59' }
  ],
  'Escenario GordoChanta': [
      { stage: 'Escenario GordoChanta', artist: 'Shinova', time: '16:10' },
      { stage: 'Escenario GordoChanta', artist: 'Arde Bogotá', time: '17:10' },
      { stage: 'Escenario GordoChanta', artist: 'Bandalos Chinos', time: '18:10' },
      { stage: 'Escenario GordoChanta', artist: 'Miranda!', time: '19:30' },
      { stage: 'Escenario GordoChanta', artist: 'Tiago PZK', time: '22:30' },      
      { stage: 'Escenario GordoChanta', artist: 'LALI', time: '21:00' },
      { stage: 'Escenario GordoChanta', artist: 'Victoria Engel', time: '23:45' },
      { stage: 'Escenario GordoChanta', artist: 'Gordo(0.50)', time: '23:58' },//0.50
      { stage: 'Escenario GordoChanta', artist: 'Claptone(2.10)', time: '23:59' }
  ]
}
,}


//const eventSchedule = setArtistToStages(exampleEventData, stages)


export default eventSchedule