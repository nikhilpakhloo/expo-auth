import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Toptabs() {
    const [activeTab, setActiveTab] = useState('Public');

    const tabs = ["Public", "Private", "Protect"];

    const renderContent = () => {
        switch (activeTab) {
            case 'Public':
                return  <View className='h-screen  bg-orange-400'/>;
            case 'Private':
                return <View className='h-screen  bg-white'/>;
            case 'Protect':
                return <View className='h-screen  bg-green-700'/>;
            default:
                return null;
        }
    };

    return (
        <View>
            <View className='flex flex-row justify-around mb-4'>
                {tabs.map((tab, index) => (
                    <TouchableOpacity
                        key={index}
                        className={`border-2 rounded-lg px-4 py-2 ${activeTab === tab ? 'border-blue-500 bg-blue-100' : 'border-gray-300'}`}
                        onPress={() => setActiveTab(tab)}
                    >
                        <Text className={`text-lg ${activeTab === tab ? 'text-blue-500' : 'text-black'}`}>
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View className='border-t-2 border-gray-200'>
                {renderContent()}
            </View>
        </View>
    )
}
