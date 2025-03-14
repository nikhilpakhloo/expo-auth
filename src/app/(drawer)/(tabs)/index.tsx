import { View, Text } from 'react-native'
import React from 'react'
import DrawerButton from '@/src/components/drawer/DrawerButton'
import HomeSearchBar from '@/src/components/searchui/HomeSearchBar'
import Toptabs from '@/src/components/toptabs/Toptabs'

export default function Home() {
  return (
    <View className=''>
      <HomeSearchBar isShowSearchBar={true}/>
      <Toptabs/>
    </View>
  )
}