import { Text, View, Image, Pressable } from "react-native";
import React from "react";

import estilos from "./estilosCardFilme";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CardFilme = ({ filme }) => {
  const { title, poster_path } = filme;

  /* Acessar recursos do React Navigation (sem props!) */
  const navigation = useNavigation();
  const leiaMais = () => {
    navigation.navigate("Detalhes", { filme });
  };

  return (
    <View style={estilos.cards}>
      <Image
        style={estilos.imagem}
        resizeMode="cover"
        source={{
          uri: `https://image.tmdb.org/t/p/original/${poster_path}`,
        }}
      />

      <View style={estilos.corpo}>
        <Text style={estilos.titulo}>{title}</Text>

        <View style={estilos.botoes}>
          <Pressable style={estilos.botao} onPress={leiaMais}>
            <Text style={estilos.botaoTexto}>
              <Ionicons name="reader" size={20} color="white" />
              Leia Mais
            </Text>
          </Pressable>

          <Pressable style={estilos.botao}>
            <Text style={estilos.botaoTexto}>
              <Ionicons name="add-circle" size={20} color="white" /> Salvar
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CardFilme;
