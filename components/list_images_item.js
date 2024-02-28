import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import tailwind from 'twrnc';

const list_images_item = ({ item }) => {
  return (
    <View style={tailwind ``}>
      <TouchableOpacity style={tailwind ``}>
        <Image
          source={require('../assets/cancle.png')}
          style={tailwind `w-5 h-5 mr-3`}
        />
      </TouchableOpacity>
      <Image
        source={{ uri: item.uri }}
        style={tailwind`w-25 h-25 rounded-md mr-3`}
      />
    </View>
  );
}

export default list_images_item;