import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.viewLogo}>
        <Text>Filme na Tela</Text>
      </View>

      <View style={estilos.viewBotoes}>
        <Button title="Buscar filmes" />
        <Button title="Filmes Favoritos" />
      </View>

      <View style={estilos.viewRodape}>
        <Button title="Privacidade" />
        <Button title="Sobre" />
      </View>
    </SafeAreaView>
  );
};

export default App;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  viewLogo: {
    flex: 3,
    width: "80%",
    textAlign: "center",
    backgroundColor: "green",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  viewBotoes: {
    flex: 2,
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "orange",
    width: "80%",
  },
  viewRodape: {
    flex: 0.4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "red",
    width: "80%",
  },
});
