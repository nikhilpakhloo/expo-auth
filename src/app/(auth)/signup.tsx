import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native'
import { Link } from 'expo-router'
import { getAuth , createUserWithEmailAndPassword} from "@react-native-firebase/auth";
import { getApp } from '@react-native-firebase/app';


export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


  const handleSignup =  async() => {
    try {
      const auth = getAuth(getApp())
    await createUserWithEmailAndPassword(auth,email, password);
      
    } catch (error) {
      if ((error as any).code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if ((error as any).code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.error(error);
      
    }
    
  }
  return (
  <View className="p-5 pt-10 flex-1" >
 
         <Text className="text-2xl mb-4 text-center">SignUp</Text>
         <Text>Email:</Text>
         <TextInput
           className="border mb-4 p-2"
           placeholder="Enter your email"
           autoCapitalize="none"
           keyboardType="email-address"
           value={email}
           onChangeText={setEmail}
         />
         
         <Text>Password:</Text>
         <TextInput
           className="border mb-4 p-2"
           placeholder="Enter your password"
           secureTextEntry
           value={password}
           onChangeText={setPassword}
         />
 
         <Button title="SignUp" onPress={handleSignup} />
         <Link href={"/(auth)/signin"} replace className=" mt-4">
         Already have an account? Sign in
         </Link>
 
       </View>
  )
}