import { createContext, useContext, useState } from 'react';

const ItineraryContext = createContext();

export const useItinerary = () => useContext(ItineraryContext);

export const ItineraryProvider = ({ children }) => {
  const [itinerary, setItinerary] = useState([]);

  const addToItinerary = (artist) => {
    setItinerary((prevItinerary) => {
      const updatedItinerary = [...prevItinerary, artist];
      // Ordenar la lista por el atributo 'time'
      updatedItinerary.sort((a, b) => compareTimes(a.time, b.time));
      return updatedItinerary;
    });
  };

  const compareTimes = (timeA, timeB) => {
    const [hoursA, minutesA] = timeA.split(':').map(Number);
    const [hoursB, minutesB] = timeB.split(':').map(Number);

    if (hoursA === hoursB) {
      return minutesA - minutesB;
    }

    return hoursA - hoursB;
  };

  const deleteFromItinerary = (artist) =>{
    const artistIndex = itinerary.indexOf(artist);
    const newItinerary = [...itinerary];
    newItinerary.splice(artistIndex, 1);

    setItinerary(newItinerary);
  }
  

  return (
    <ItineraryContext.Provider value={{ itinerary, addToItinerary, deleteFromItinerary }}>
      {children}
    </ItineraryContext.Provider>
  );
};
