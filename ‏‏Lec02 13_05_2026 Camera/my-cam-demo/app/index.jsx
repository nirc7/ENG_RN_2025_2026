import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button as BtnMaterial } from '@rneui/themed';

export default function Index() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [camera, setCamera] = useState(null);
  const [imgSrc, setimgSrc] = useState('https://upload.wikimedia.org/wikipedia/commons/2/25/Coldplay_%282842037407%29.jpg');

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {

    debugger;
    let num = 7;
    if (num == 7) {
      console.log('seven');
    }

    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }


  const btnSnap = async () => {
    const photo = await camera.takePictureAsync({
      quality: 0.00001, // Adjust this value (0.0 - 1.0) for picture quality
      skipProcessing: true, // Set to true to skip processing
    });
    console.log(photo);
    console.log(photo.uri);
    setimgSrc(photo.uri);
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={ref => setCamera(ref)} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
          <Text style={styles.text}>Flip Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={btnSnap}>
          <Text style={styles.text}>Snap</Text>
        </TouchableOpacity>
        <BtnMaterial title="Outline" type="outline" onPress={}/>
      </View>

      {/* <Image source={require( '../assets/cp.jpg')}
        style={{ width: 300, height: 100, borderWidth: 1, borderColor: 'red', margin: 10 }} /> */}
      <Image source={require('./Imgs/cp2.jpg')}
        style={{ width: 300, height: 100, borderWidth: 1, borderColor: 'red', margin: 10 }} />
      <Image
        source={{ uri: imgSrc }}
        style={{ width: 300, height: 100, borderWidth: 1, borderColor: 'red', margin: 10 }} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 0.5,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 64,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: '100%',
    paddingHorizontal: 64,
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'purple',
  },
});
