  import StageBox from "../components/StageBox/StageBox";


  
  const StageBoxRenderer = (obj) => {
    console.log(obj)
    console.log(obj["Escenario Este"])
    const time = '1:00 PM';
    const stages = Object.keys(obj);
  
  
    return (
      <>
        {stages.map((element) => {
          const artistInStage = obj[element];
          const artistAtTime = artistInStage.find((artist) => artist.time === time);
          return (
            <StageBox
              key={element}
              title={artistAtTime.stage}
              prinArtist={artistAtTime.artist}
              secArtist="Babas"
            />
          );
        })}
      </>
    );
  };
  
  export default StageBoxRenderer;
  