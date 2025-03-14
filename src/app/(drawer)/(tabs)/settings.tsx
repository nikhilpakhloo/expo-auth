import { View, Text } from 'react-native'
import React from 'react'
import HomeSearchBar from '@/src/components/searchui/HomeSearchBar'

export default function Settings() {
  return (
    <View>
      <HomeSearchBar isShowSearchBar={false}/>
    </View>
  )
}