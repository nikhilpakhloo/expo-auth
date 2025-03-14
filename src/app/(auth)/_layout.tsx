import React from 'react'
import { Stack } from 'expo-router'

export default function AuthLayout() {
  return (
  <Stack >
    <Stack.Screen name='signin' options={{title:"Signin"}}  />
    <Stack.Screen name='signup' options={{title:"Signup"}}/> 
    <Stack.Screen name='welcome'  options={{headerShown:false}} />

  </Stack>
  )
}