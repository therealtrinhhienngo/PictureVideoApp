
import React, { useCallback, useState } from 'react'
import { FlatList, PermissionsAndroid, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import tailwind from 'twrnc';
import list_images_item from './components/list_images_item';
import DocumentPicker from 'react-native-document-picker';
import list_sound_item from './components/list_sound_item';

const App = () => {
  const [images, setImages] = useState([]);
  const handleMusicList = [];
  const [music, setMusic] = useState([]);

  const pickImage = async () => {
    const result = await launchImageLibrary();

    if (!result.cancelled) {
      setImages(prevImages => [...prevImages, ...result.assets])
    }
  };

  const pickDocument = useCallback(async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: DocumentPicker.types.audio,
      });
      console.log(res);
      handleMusicList.push(res.name);
      setMusic(handleMusicList);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, no action needed
        console.log('User cancelled the picker');
      } else {
        // Something went wrong while picking the file
        console.log('Error picking file: ', err);
      }
    }
  }, []);

  const deleteImage = (pos) => {
    const updatedImages = images.slice().filter((_, index) => index !== pos)
    setImages(updatedImages);
  }

  return (
    <View>
      {/* Display pictures screen */}
      <View style={tailwind`bg-blue-200 h-80 justify-center`}>
        <Text style={tailwind`self-center`}>
          Display Images
        </Text>
      </View>

      <View style={tailwind`bg-yellow-300 h-12 justify-center`}>
        <Text style={tailwind`self-center`}>
          Play Module
        </Text>
      </View>

      {/* Add pictures module */}
      <View style={tailwind `p-3`}>
        <View style={tailwind`flex-row items-center mt-10`}>
          <ScrollView horizontal>
            <TouchableOpacity
              onPress={() => {
                console.log('Click');
                pickImage();
              }}
              style={tailwind`p-3 rounded-md bg-slate-300 w-25 h-25 justify-center`}
            >
              <Text style={tailwind`self-center`}>Add Images</Text>
            </TouchableOpacity>

            {
              images != undefined
                ? <FlatList
                  style={tailwind`h-25`}
                  data={images}
                  renderItem={list_images_item}
                  horizontal
                />
                : <></>
            }
          </ScrollView>
        </View>

        <View style={tailwind `flex-row mt-10`}>
          <TouchableOpacity
            onPress={pickDocument}
            style={tailwind`p-3 bg-purple-300 rounded-md w-25 h-25 justify-center`}
          >
            <Text style={tailwind`self-center`}>Add Sound</Text>
          </TouchableOpacity>

          <FlatList
            style={tailwind `ml-3`}
            data={music}
            renderItem={list_sound_item}
            horizontal
          />
        </View>
      </View>

      {/* Duration setting */}

      {/* Save */}
      <TouchableOpacity style={tailwind`p-3 bg-slate-300 w-50 h-15 justify-center mt-10 self-center rounded-md shadow-md`}>
        <Text style={tailwind`self-center`}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App