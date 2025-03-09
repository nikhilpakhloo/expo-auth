import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from '@react-native-firebase/auth'

export default function UserCell() {
    const [user, setUser] = useState<ReturnType<typeof getAuth>["currentUser"]>(null);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (newUser) => {
            setUser(newUser);
        });

        return unsubscribe; 
    }, []);

    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: user?.photoURL || "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" }} 
                width={50} 
                height={50} 
                style={styles.avatar} 
            />
            <View style={styles.author}>
                <Text style={styles.text}>Hello</Text>
                <Text style={styles.text}>{user ? user.email : "Guest"}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        gap: 20,
        alignItems: 'center'
    },
    author: {
        flexDirection: 'column',
    },
    text: {
        fontWeight: 'bold'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25
    }
});
