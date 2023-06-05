import { Button, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.homeContainer}>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: "#eeeeee",
    height: "100%",
    padding: 50,
    gap: 10,
  },
});
