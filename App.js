import { useFonts } from "expo-font";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

const App = () => {
  /* Inserindo fontes e carrega-lá */
  const [fonteCarregada] = useFonts({
    monoton: require("./assets/fonts/Monoton-Regular.ttf"),
  });

  /* A condicional abaixo serve apenas para dar um pequeno tempo suficiente para o carregamento do arquivo de fonte antes do return componente */
  if (!fonteCarregada) {
    return <Text>Fonte fonte Carregada!!!</Text>;
  }
  /* Final inserir fontes */

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.viewLogo}>
        <Text style={estilos.tituloApp}>Filme na Tela</Text>
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
  },
  viewLogo: {
    flex: 3,
    width: "80%",
    textAlign: "center",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  tituloApp: {
    fontFamily: "monoton",
    textTransform: "uppercase",
    fontSize: 36,
    color: "#5451a6",
  },

  viewBotoes: {
    flex: 2,
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "80%",
  },
  viewRodape: {
    flex: 0.4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
  },
});
