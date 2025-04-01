import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen/>
      <Text>Bienvenue sur la page d'accueil</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
