import { ActivityIndicator, StyleSheet, View } from "react-native";
import React from "react";

const Loading = () => {
  return (
    <View style={[estilos.container, estilos.horizontal]}>
      <ActivityIndicator size="large" color="#5156a6" />
    </View>
  );
};

export default Loading;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
