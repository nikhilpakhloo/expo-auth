import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import * as Font from "expo-font";
import Entypo from "@expo/vector-icons/Entypo";
import { View, ActivityIndicator } from "react-native";
import { getApp } from "@react-native-firebase/app";
import { getAuth } from "@react-native-firebase/auth";
import "./global.css"


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<ReturnType<typeof getAuth>["currentUser"]>(null);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        SplashScreen.hideAsync();
      }
    }
    prepare();
  }, []);

  useEffect(() => {
    const auth = getAuth(getApp());
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (initializing) setInitializing(false);
    });

    return unsubscribe; 
  }, []);

  useEffect(() => {
    if (appIsReady && !initializing) {
      if (user) {
        router.replace("/(drawer)/(tabs)");
      } else {
        router.replace("/(auth)/welcome");
      }
    }
  }, [user, initializing, appIsReady]);

  if (initializing || !appIsReady) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <Stack>
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="notifications" options={{ title: "Notifications" }} />
    </Stack>
  );
}
