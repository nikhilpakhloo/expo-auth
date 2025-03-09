import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import UserCell from '../commonui/UserCell'
import { DrawerItem , DrawerContentComponentProps} from '@react-navigation/drawer'
import { router } from 'expo-router'
import  { getAuth , signOut} from "@react-native-firebase/auth";
import { getApp } from '@react-native-firebase/app'


export default function DrawerContent(props:DrawerContentComponentProps) {
  const gotonavigation = ()=>{
    router.navigate('/notifications')
    props.navigation.closeDrawer()
  }
  const logout = async()=>{
    try {
      const auth = getAuth(getApp());
      await signOut(auth)
    } catch (error) {
      console.error("SignOut Error:", error);
    }
  }
    
  return (
    <SafeAreaView style={styles.container}>
      <UserCell />
      <View style={styles.topcol}>
      <DrawerItem
        label="Notification"
        labelStyle={{ color: 'black', fontWeight: "300" , padding: 10}}
        onPress={gotonavigation}
      />
   
      </View>
      <DrawerItem
        label="SIGN OUT"
        labelStyle={{ color: 'black', fontWeight: "300" , padding: 10}}
        onPress={logout}
      />

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue'
  },
  topcol:{
    flex:1,
  }
})