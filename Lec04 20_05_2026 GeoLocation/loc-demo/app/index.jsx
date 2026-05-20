import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import * as Location from 'expo-location';

export default function Index() {
  const [count, setCount] = useState(0);
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState('');

  const btnAddOne = () => {
    setCount(prevS => prevS + 1);
  }

  const btnGetLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  }

  const btnGetAddress = async () => {
    if (location !== null) {

      let reverseGC = await Location.reverseGeocodeAsync(location.coords);
      setAddress(reverseGC);
    }
  }


  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        
        {/* <Button title="Add One" onPress={btnAddOne} />
        <Text style={{ margin: 10, fontSize: 30, color: 'green' }}>count = {count}</Text> */}
        <Button title="GetLocation" onPress={btnGetLocation} />
        <View>
          {location &&
            <Text>
              {/* {JSON.stringify(location)}  -- */}
              {("\n")} longitude =  {location.coords.longitude}
              {("\n")} latitude = {location.coords.latitude}
              {("\n")} altitude = {location.coords.altitude}
            </Text>
          }
        </View>
        <Button title="GetAddress" onPress={btnGetAddress} />
        {address !== '' &&
          <Text>address = {JSON.stringify( address)}</Text>}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});

