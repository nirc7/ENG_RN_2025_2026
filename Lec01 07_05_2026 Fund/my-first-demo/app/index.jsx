import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [count, setCount] = useState(0);

  const btnAddOne = () => {
    setCount(prevS => prevS + 1);
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
        <Text style={{ color: 'red', fontSize: 40, margin: 10 }}>Ruppin</Text>
        <Button title="Add One" onPress={btnAddOne} />
        <Text style={{ margin: 10, fontSize: 30, color: 'green' }}>count = {count}</Text>
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

