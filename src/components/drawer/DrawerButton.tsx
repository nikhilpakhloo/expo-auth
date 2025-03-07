import {  Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerActions, useNavigation } from '@react-navigation/native'


export default function DrawerButton() {
    const navigation = useNavigation()
    const handleToggle = () => {
        navigation.dispatch(DrawerActions.toggleDrawer)
    }
    return (
        <TouchableOpacity onPress={handleToggle} style={{margin:8, padding: 10, backgroundColor:"grey" , borderRadius:"50%"}}>
            <Image source={require('../../../assets/images/react-logo.png')} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
    )
}