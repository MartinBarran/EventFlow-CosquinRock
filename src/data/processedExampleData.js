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

const eventSchedule = setArtistToStages(exampleEventData, stages)


export default eventSchedule