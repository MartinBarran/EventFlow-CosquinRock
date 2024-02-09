import { createContext, useContext, useState } from 'react';

const ItineraryContext = createContext();

export const useItinerary = () => useContext(ItineraryContext);

export const ItineraryProvider = ({ children }) => {
  const [itinerary, setItinerary] = useState({});

  const addToItinerary = (artist, day) => {
    console.log("DIAAAAA: ", day)
    setItinerary((prevItinerary) => {
      const updatedItinerary = { ...prevItinerary };
      if (!updatedItinerary[day]) {
        updatedItinerary[day] = [];
      }
      updatedItinerary[day] = [...updatedItinerary[day], artist];
      // Ordenar la lista por el atributo 'time'
      updatedItinerary[day].sort((a, b) => compareTimes(a.time, b.time));
      return updatedItinerary;
    });
  };

  const compareTimes = (timeA, timeB) => {
    let [hoursA, minutesA] = timeA.split(':').map(Number);
    let [hoursB, minutesB] = timeB.split(':').map(Number);
    if (hoursA<2){
      hoursA = hoursA+24;
    }
    if (hoursB<2){
      hoursB = hoursB+24;
    }

    if (hoursA === hoursB) {
      return minutesA - minutesB;
    }

    return hoursA - hoursB;
  };

  const deleteFromItinerary = (artist, day) =>{
    if (itinerary[day]) {
      const newItinerary = { ...itinerary };
      const artistIndex = newItinerary[day].findIndex(item => (
        item.stage === artist.stage &&
        item.artist === artist.artist &&
        item.time === artist.time
      ));
      if (artistIndex !== -1) {
        newItinerary[day] = [...newItinerary[day].slice(0, artistIndex), ...newItinerary[day].slice(artistIndex + 1)];
        setItinerary(newItinerary);
      }
    }
  };

  return (
    <ItineraryContext.Provider value={{ itinerary, addToItinerary, deleteFromItinerary }}>
      {children}
    </ItineraryContext.Provider>
  );
};
