import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function UserCell() {
    return (
        <View style={styles.container}>
            <Image source={{ uri: "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" }} width={50} height={50} borderRadius={50} />
            <View style={styles.author}>
                <Text style={styles.text} >Hello</Text>
                <Text style={styles.text}>Nikhil Pakhloo</Text>
            </View>

        </View>
    )
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
    }
})