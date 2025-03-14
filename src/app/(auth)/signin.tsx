import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getApp } from "@react-native-firebase/app";
import { getAuth , signInWithEmailAndPassword} from "@react-native-firebase/auth";
import { Link } from "expo-router";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const auth = getAuth(getApp())
      await signInWithEmailAndPassword(auth,email, password);
    } catch (error) {
      console.error("Firebase Auth Error:", error);
    }
  };

  return (
      <View className="p-5 pt-10 flex-1" >

        <Text className="text-2xl mb-4 text-center">Login</Text>
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

        <Button title="Login" onPress={handleLogin} />
        <Link href={"/(auth)/signup"} replace  className=" mt-4">
        Not registered? Sign up.
        </Link>

      </View>
  );
}
