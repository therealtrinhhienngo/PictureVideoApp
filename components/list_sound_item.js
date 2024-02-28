import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import tailwind from 'twrnc'

const list_sound_item = ({ item }) => {
    return (
        <View style={tailwind `flex-row items-center bg-green-300 rounded-md p-3`}>
            <TouchableOpacity style={tailwind``}>
                <Image
                    source={require('../assets/cancle.png')}
                    style={tailwind`w-5 h-5 mr-3`}
                />
            </TouchableOpacity>
            <Text>{item}</Text>
        </View>
    )
}

export default list_sound_item