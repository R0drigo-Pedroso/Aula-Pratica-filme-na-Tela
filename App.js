import { useFonts } from "expo-font";
import { Button, Image, SafeAreaView, Text, View } from "react-native";

import estilos from "./Estilos";

import logo from "./assets/image/logo.png";

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
        <Image style={estilos.logo} source={logo} />
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
