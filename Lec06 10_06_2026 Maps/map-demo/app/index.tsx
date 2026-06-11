import { Text, View, Dimensions } from "react-native";
import MapView, { Marker } from 'react-native-maps';


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text> this screen.</Text>
      {/* <MapView style={{width:'90%', height:'80%'}} /> */}
      <MapView
        style={{ flex: 0.7, width: Dimensions.get('window').width - 40, }}
        region={{
          latitude: 32.157154,
          longitude: 34.843893,
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0121,
        }} >
        <Marker
          coordinate={{
            latitude: 32.15715,
            longitude: 34.8437893
          }}
          title='my place:)'
          description='here i am'
        //image={require('../assets/icon.png')}
        />
         <Marker
          coordinate={{
            latitude: 32.15715,
            longitude: 34.8477893
          }}
          title='my place:)2'
          description='here i am2'
        //image={require('../assets/icon.png')}
        />
      </MapView>
    </View>
  );
}
