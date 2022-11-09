import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  Button,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import estilos from "./estiloBusca";
import { useState } from "react";

const FormBusca = () => {
  /* 
    Captura em tempo real do que é digitado no TextInput atráves do evento inChangeText

    const filmeDigitado = (valorDigitado) => {
      setFilme(valorDigitado)
    };

    // Hook useState para monitorar/armazenar o filme que será buscado a partir do formulario
    const [text, setFilme] useState();

    // função chamada toda vez que o botão for pressionado (usamos a prop onPress do Burron)
    // Se filme (gerenciado pelo useState) estiver vazio/undefined/salsy 
    const buscarFilmes = () => {
      if(!filme){
        console.log("Opa! digite um filme")
      }
    };
   */

  const [text, onChangeText] = useState(null);

  // const [procurar, setProcurar] = useState(false);

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
          value={text}
          placeholder="Filme"
        />
      </View>

      <Button
        title="Procurar"
        color="#5154a6"
        onPress={() => Alert.alert(text)}
        /* onPress={buscarFilmes} */
      />
    </SafeAreaView>
  );
};

export default FormBusca;
