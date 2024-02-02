  import StageBox from "../components/StageBox/StageBox";
import usableTime from "./getCurrentTime";





  
  const StageBoxRenderer = (obj) => {
    console.log(obj)
    console.log(obj["Escenario Este"])
    const time = usableTime();
    const stages = Object.keys(obj);
  
  
    return (
      <>
        {stages.map((element) => {
          const artistInStage = obj[element];
          const previousArtists = artistInStage.filter((artist) => artist.time < time)
          const artistAtTime = previousArtists[previousArtists.length - 1];
          const nextArtist = artistInStage[previousArtists.length]
                  

          return (
            <StageBox
              key={element}
              title={artistAtTime.stage}
              prinArtist={`${artistAtTime.artist} ${artistAtTime.time}`}
              secArtist={`${nextArtist.artist} ${nextArtist.time}`}
              
            />
          );
        })}
      </>
    );
  };
  
  export default StageBoxRenderer;
  