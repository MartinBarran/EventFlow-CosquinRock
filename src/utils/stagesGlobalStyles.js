import eventSchedule from "../data/processedExampleData.js";

const stagesColors = [
    '#dc2e51',
    '#a8d403',
    '#23b3d3',
    '#e6c858',
    '#0a0047',
    'orange',
    'pink',
    'brown',
    'cyan',
    'lime',
  ];

const stages = Object.keys(eventSchedule)

const coloredStagesObj = {};

stages.forEach((stages, index) => {
  const colorIndex = index % stagesColors.length;
  const color = stagesColors[colorIndex];
  coloredStagesObj[stages] = color;
});

console.log(coloredStagesObj);

export default coloredStagesObj
