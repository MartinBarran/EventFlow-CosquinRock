import eventSchedule from "../data/processedExampleData.js";

const stagesColors = [
    '#dc2e51',
    '#a8d403',
    '#23b3d3',
    '#e6c858',
    '#FAB2EA',
    'orange',
    'pink',
    'brown',
    'cyan',
    'lime',
  ];

const getStages = (eventSchedule) =>{
  const eventDays = Object.keys(eventSchedule)
  let stages = []
  
  for (let i=0; i< eventDays.length; i++){
    const dayStages = Object.keys(eventSchedule[eventDays[i]]);
    stages = [...stages, ...dayStages]
  }
return [...new Set(stages)]
}

const uniquesValuesStages = getStages(eventSchedule);

const coloredStagesObj = {};

uniquesValuesStages.forEach((stages, index) => {
  const colorIndex = index % stagesColors.length;
  const color = stagesColors[colorIndex];
  coloredStagesObj[stages] = color;
});

//console.log(coloredStagesObj);

export default coloredStagesObj
