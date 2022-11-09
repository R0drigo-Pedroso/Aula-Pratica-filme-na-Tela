import React, { useState } from "react";
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

const FormBusca = () => {
  const [text, onChangeText] = React.useState(null);

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
          size={50}
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
      />
    </SafeAreaView>
  );
};

export default FormBusca;
