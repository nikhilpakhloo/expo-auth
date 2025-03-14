import { Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerActions, useNavigation } from '@react-navigation/native'

export default function DrawerButton() {
    const navigation = useNavigation()
    
    const handleToggle = () => {
        navigation.dispatch(DrawerActions.toggleDrawer())
    }

    return (
        <TouchableOpacity 
            onPress={handleToggle} 
            style={{margin:10, backgroundColor: "grey", borderRadius: 10, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}
        >
            <Image 
                source={require('../../../assets/images/react-logo.png')} 
                style={{ width: 20, height: 20 }} 
            />
        </TouchableOpacity>
    )
}
