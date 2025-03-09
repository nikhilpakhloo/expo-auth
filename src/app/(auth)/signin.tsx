import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getApp } from "@react-native-firebase/app";
import { getAuth , signInWithEmailAndPassword} from "@react-native-firebase/auth";

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
    <SafeAreaView>
      <View style={{ padding: 20 }}>
        <Text>Email:</Text>
        <TextInput
          style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
          placeholder="Enter your email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        
        <Text>Password:</Text>
        <TextInput
          style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Button title="Login" onPress={handleLogin} />
      </View>
    </SafeAreaView>
  );
}
