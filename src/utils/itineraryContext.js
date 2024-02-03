import { createContext, useContext, useState } from 'react';

const ItineraryContext = createContext();

export const useItinerary = () => useContext(ItineraryContext);

export const ItineraryProvider = ({ children }) => {
  const [itinerary, setItinerary] = useState([]);

  const addToItinerary = (artist) => {
    setItinerary((prevItinerary) => [...prevItinerary, artist]);
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
