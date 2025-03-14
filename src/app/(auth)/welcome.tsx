import { View, Text, Button } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function Welcome() {
  return (
    <View className='flex-1 bg-blue-400 justify-center items-center'>
        <Text className='text-white text-2xl'>Welcome to the app</Text>
        <View className='mt-4 gap-4'>
            <Button title='Login' onPress={() => { router.navigate("/(auth)/signin")}} />
                <Button title='Register' onPress={() => {router.navigate("/(auth)/signup")}} />
        </View>
    </View>
  )
}