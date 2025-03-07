import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from "react";
import * as Font from 'expo-font';
import Entypo from '@expo/vector-icons/Entypo';


SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});



export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font);
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
  
    prepare();
  }, []);
  if (appIsReady) {
    SplashScreen.hideAsync();
  }

  
  return(
  
        <Stack   >
          <Stack.Screen name="(drawer)" options={{headerShown:false}}/>  
          <Stack.Screen name="notifications" options={{title:"Notifications"}}/>
          
        </Stack>
        
        )
}
