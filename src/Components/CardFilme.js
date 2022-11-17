/* Importe o AsyncStorage de expo, Não use do react-native padrão */
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Text, View, Image, Pressable } from "react-native";
import React from "react";

import estilos from "./estilosCardFilme";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import fundo from "../../assets/image/sem-imagem.jpg";

const CardFilme = ({ filme }) => {
  const { title, poster_path } = filme;

  /* Acessar recursos do React Navigation (sem props!) */
  const navigation = useNavigation();
  const leiaMais = () => {
    navigation.navigate("Detalhes", { filme });
  };

  const salvar = async () => {
    // return Alert.alert("favoritos", "Salvando...");
    /* Etapas para uso do AsyncStorage */
    /* 1 - Carregamento do storage do aparelho (se houver, caso contrario retorno null) */
    const filmesFavoritos = await AsyncStorage.getItem("@favoritos");
    console.log(filmesFavoritos);

    /* 2 - Havendo storage prévio, transformamos os dados do filme em objetos e os guardando numa lista (array) */
    /* 3 - Se a lista não for indefinida, vamos iniciar-la vazia */
    /* 4 - Adicionamos os dados do filme na lista (array) */
    /* 5 - Finalmente, salvamos no storage do dispositivo */
  };

  return (
    <View style={estilos.cards}>
      <Image
        style={estilos.imagem}
        resizeMode="cover"
        source={
          filme.backdrop_path
            ? {
                uri: `https://image.tmdb.org/t/p/original/${poster_path}`,
              }
            : fundo
        }
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

          <Pressable style={estilos.botao} onPress={salvar}>
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
