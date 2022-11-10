import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  Button,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import estilos from "./estilosBusca";
import { useState } from "react";

const FormBusca = ({ navigation }) => {
  const [filme, onChangeText] = useState(null);
  // const [procurar, setProcurar] = useState(false);

  const buscaFilme = () => {
    if (!filme) {
      return Alert.alert("Opa", "digite um filme");
    }

    /* Usamos a props navigation (que vem do React Navigation pragramado no App) para acessar uma nova tela (no caso, resultados). Para esta tela, passamos como objetivo os dados digitados no formulario (neste caso, filme) */
    navigation.navigate("Resultados", { filme });
  };

  return (
    <SafeAreaView style={estilos.container}>
      <Text style={estilos.titulo}>Encontre seu filme aqui!</Text>
      <Text style={estilos.subtitulos}>
        Localize um filme que você viu ou gostaria de ver!
      </Text>

      <View style={estilos.busca}>
        <Ionicons
          style={estilos.icons}
          name="film-outline"
          size={48}
          color="black"
        />
        <TextInput
          style={estilos.input}
          onChangeText={onChangeText}
          value={filme}
          placeholder="Filme"
        />
      </View>

      <Button
        title="Procurar"
        color="#5154a6"
        onPress={buscaFilme}
        /* onPress={buscarFilmes} */
      />
    </SafeAreaView>
  );
};

export default FormBusca;
