import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import ListingEditScreen from './app/screens/ListingEditScreen';
import Screen from './app/components/Screen';
import { Button, Image, Text } from 'react-native';

export default function App() {
  const [imageUri, setImageUri] = useState('');
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert('You need to enable permission to access the library.');
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (result.assets) {
        console.log(result.assets);
        setImageUri(result.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Screen>
      <Button title="Select image" onPress={selectImage} />
      {imageUri && (
        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      )}
    </Screen>
  );
}
