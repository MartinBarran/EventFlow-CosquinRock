import StageBox from "../components/StageBox/StageBox";
import usableTime from "./getCurrentTime";
import coloredStagesObj from "./stagesGlobalStyles";





  
  const StageBoxRenderer = (obj) => {
    const time = usableTime();
    const currentTimeValue = time.replace(":", "");
    console.log(currentTimeValue)

    const stages = Object.keys(obj);
   
  
  
    return (
      <>
        {stages.map((element) => {
          const artistInStage = obj[element];
          const previousArtists = (artistInStage.filter((artist) => artist.timeValue < currentTimeValue) ? artistInStage.filter((artist) => artist.timeValue < currentTimeValue) : [])
          console.log("ARTISTAS PREVIOS:",previousArtists)

          const artistAtTime = previousArtists[0];
           
          const nextArtist = artistInStage.reverse()[previousArtists.length] ? artistInStage[previousArtists.length] :artistInStage[0];
          const color = coloredStagesObj[element]
          
          console.log("AT time: ",artistAtTime)
          console.log("Next: ",nextArtist)

          return (
            <StageBox
              key={element}
              title={nextArtist.stage}
              prinArtist={(artistAtTime? `${artistAtTime.artist} ${artistAtTime.time}` : "¡AGUANTÁ LA MANIJA!")}
              secArtist={`${nextArtist.artist} ${nextArtist.time}`}
              artistInStage={artistInStage}
              color={color}
              
            />
          );
        })}
      </>
    );
  };
  
  export default StageBoxRenderer;
  