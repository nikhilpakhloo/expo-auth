import { View, TextInput } from 'react-native'
import React from 'react'
import DrawerButton from '../drawer/DrawerButton'

type HomeSearchBarProps = {
  isShowSearchBar: boolean
}

export default function HomeSearchBar({ isShowSearchBar }: HomeSearchBarProps) {
  return (
    <View className='flex-row items-center gap-2'>
      <DrawerButton />
      {isShowSearchBar && (
        <TextInput
          placeholder='Explore'
          className='border-2 border-gray-300 rounded-lg w-3/4 h-10 pl-5'
        />
      )}
    </View>
  )
}
