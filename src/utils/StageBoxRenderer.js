import StageBox from "../components/StageBox/StageBox";
import usableTime from "./getCurrentTime";
import coloredStagesObj from "./stagesGlobalStyles";





  
  const StageBoxRenderer = (obj) => {
    const time = usableTime();
    console.log(time)
    const stages = Object.keys(obj);
   
  
  
    return (
      <>
        {stages.map((element) => {
          const artistInStage = obj[element];
          const previousArtists = artistInStage.filter((artist) => artist.time < time)
          const artistAtTime = previousArtists[previousArtists.length - 1];
          const nextArtist = artistInStage[previousArtists.length]
          const color = coloredStagesObj[element]
          //console.log(color);
          //console.log(element)

          return (
            <StageBox
              key={element}
              title={artistAtTime.stage}
              prinArtist={`${artistAtTime.artist} ${artistAtTime.time}`}
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
  