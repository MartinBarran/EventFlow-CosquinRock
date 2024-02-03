import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './src/components/Screens/MainScreen.js';
import StageInfoScreen from './src/components/Screens/StageInfoScreen.js';
import CustomItineraryScreen from './src/components/Screens/CustomItineraryScreen.js';
import { ItineraryProvider } from './src/utils/itineraryContext.js';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ItineraryProvider>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen 
            name="Main" 
            component={MainScreen}
            options={{ title: 'EVENTFLOW - COSQUÍN ROCK 2024' }} 
          />
          <Stack.Screen name="StageInfo" component={StageInfoScreen} />
          <Stack.Screen name="CustomItinerary" component={CustomItineraryScreen} />
        </Stack.Navigator>
      </ItineraryProvider>
    </NavigationContainer>
  );
}
//<MainScreen />
//
