import { Button, Text, Touchable, TouchableOpacity, View } from "react-native";
import * as LocalAuthentication from 'expo-local-authentication';

export default function Index() {

  const btnAuth = async () => {
    console.log(1);
    let results = await LocalAuthentication.authenticateAsync();
    console.log(results.success);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text> this screen.</Text>
      <Button title="Auth" />
      <TouchableOpacity onPress={btnAuth}>
        <Text style={{
          borderRadius: 5,
          borderColor: 'black',
          borderWidth: 2, margin: 20, padding: 10, backgroundColor: 'gray'
        }} >Auth</Text>

      </TouchableOpacity>
    </View>
  );
}
