import { useFonts } from "expo-font";
import { Image, Pressable, SafeAreaView, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

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
        <Pressable style={estilos.botaoInicial}>
          <Text style={estilos.textBotao}>
            <Ionicons name="search-circle-outline" size={19} color="white" /> Buscar filmes
          </Text>
        </Pressable>

        <Pressable style={estilos.botaoInicial}>
          <Text style={estilos.textBotao}>
            <Ionicons name="ios-star-outline" size={16} color="gold" /> Filme
            Favoritos
          </Text>
        </Pressable>
      </View>

      <View style={estilos.viewRodape}>
        <Pressable style={estilos.botaoRodape}>
          <Text style={estilos.textBotao}>
            <Ionicons name="lock-closed-outline" size={16} color="white" />{" "}
            Privacidade
          </Text>
        </Pressable>

        <Pressable style={estilos.botaoRodape}>
          <Text style={estilos.textBotao}>
            <Ionicons name="bookmark-outline" size={16} color="white" /> Sobre
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;
