import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import DrawerButton from '@/src/components/drawer/DrawerButton';
import DrawerContent from '@/src/components/drawer/DrawerContent';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={(props)=><DrawerContent {...props}/>} screenOptions={{ headerShown:false}}/>
    </GestureHandlerRootView>
  );
}
