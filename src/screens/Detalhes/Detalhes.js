import { ImageBackground, ScrollView, Text, View } from "react-native";
import React from "react";

import estilos from "./estilosDetalhes";
import { SafeAreaView } from "react-native-safe-area-context";

import fundo from "../../../assets/image/sem-imagem.jpg";

/* Props de route para acesso aos dados trafegados entre a navegação entre as telas/rotas */
const Detalhes = ({ route }) => {
  // console.log(route);
  /* Extraindo parametrodos da rotas */
  const { filme } = route.params;

  return (
    /* safeContainer - é para IOS */
    <SafeAreaView style={estilos.safeContainer}>
      <View style={estilos.container}>
        <ImageBackground
          style={estilos.imagem}
          source={
            filme.backdrop_path
              ? {
                  uri: `https://image.tmdb.org/t/p/original/${filme.backdrop_path}`,
                }
              : fundo
          }
        >
          <Text style={estilos.titulo}>{filme.title}</Text>
        </ImageBackground>

        <View style={estilos.conteudo}>
          <View style={estilos.info}>
            <Text>Avaliação: {filme.vote_average}</Text>
            <Text>Ano de Lançamento: {filme.release_date}</Text>
            <Text>Linguagem: {filme.original_language}</Text>
          </View>

          <View>
            <ScrollView>
              <Text style={estilos.descricao}>
                {filme.overview || "Sem descrição"}
              </Text>
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Detalhes;
