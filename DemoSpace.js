import React, { useEffect, useState } from 'react'
import { Button, View } from 'react-native'
import TrackPlayer from 'react-native-track-player';
import Video from 'react-native-video';

const DemoSpace = () => {
    const [videoUri, setVideoUri] = useState(null);
    const [audioUri, setAudioUri] = useState(null);
  
    const mergeVideoWithAudio = async () => {
      // Implement video and audio merging logic here
      // You can use react-native-video-processing library for this purpose

      if (videoUri && audioUri) {
        const outputPath = `${RNFS.DocumentDirectoryPath}/merged.mp4`;
        try {
          const result = await mergeVideoWithAudio(media.videoUri, media.audioUri, outputPath);
          console.log('Merge result:', result);
        } catch (error) {
          console.error('Error merging video and audio:', error);
        }
      }
    };
  
    const selectVideo = () => {
      // Implement logic to select video from device storage
    };
  
    const selectAudio = () => {
      // Implement logic to select audio from device storage
    };
  
    const playVideoWithAudio = async () => {
      if (videoUri && audioUri) {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.add({
          id: 'track',
          url: audioUri,
          title: 'Selected Music',
        });
        await TrackPlayer.play();
      }
    };

    useEffect(() => {
        async function setupPlayer() {
          try {
            await TrackPlayer.setupPlayer();
            await TrackPlayer.updateOptions({
              capabilities: [
                TrackPlayer.CAPABILITY_PLAY,
                TrackPlayer.CAPABILITY_PAUSE,
                TrackPlayer.CAPABILITY_STOP,
              ],
            });
          } catch (error) {
            console.error('Error setting up TrackPlayer:', error);
          }
        }
    
        setupPlayer();
      }, []);
  
    return (
      <View>
        {videoUri && <Video source={{ uri: videoUri }} />}
        <Button title="Select Video" onPress={selectVideo} />
        <Button title="Select Audio" onPress={selectAudio} />
        <Button title="Merge Video with Audio" onPress={mergeVideoWithAudio} />
        <Button title="Play Video with Audio" onPress={playVideoWithAudio} />
      </View>
    );
}

export default DemoSpace