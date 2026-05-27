import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import { View, Text } from 'react-native';

import { useContext } from "react";
import { HobbyContext } from "./HobbyContextProvider";
import { TouchableOpacity } from 'react-native';


export default function About(props) {
  const { hobbies, RemoveHobby } = useContext(HobbyContext);

  let hobbiesStr = hobbies.map(hob =>
    <View key={hob.id}><Text> id={hob.id} -- name={hob.name} -- times={hob.times}
      <TouchableOpacity onPress={() => RemoveHobby(hob.id)}>
        <Text
          style={{ color: 'red', marginLeft: 10, cursor: 'pointer' }}
        >X</Text>
      </TouchableOpacity>
    </Text></View>);

  useFocusEffect(
    // Callback should be wrapped in `React.useCallback` to avoid running the effect too often.
    useCallback(() => {
      // Invoked whenever the route is focused.
      console.log('Hello, I am focused!');

      // Return function is invoked whenever the route gets out of focus.
      return () => {
        console.log('This route is now unfocused.');
      };
    }, [])
  );

  return (
    <View>
      <Text>about</Text>
      <Text> Hobbies List:      {hobbiesStr}
      </Text>
    </View>
  )
}