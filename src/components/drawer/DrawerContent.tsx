import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import UserCell from '../commonui/UserCell'
import { DrawerItem ,  DrawerHeaderProps} from '@react-navigation/drawer'
import { router } from 'expo-router'

export default function DrawerContent(props:DrawerHeaderProps) {
  const gotonavigation = ()=>{
    router.navigate('/notifications')
    props.navigation.closeDrawer()
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