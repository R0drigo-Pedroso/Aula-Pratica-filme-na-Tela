import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

import logoApi from "../../../assets/image/logo-tmdb.png";

import estilos from "./estilosSobre";

const Sobre = () => {
  return (
    <SafeAreaView style={estilos.container}>
      <Text style={estilos.titulo}>Sobre o app FILME NA TELA</Text>

      <Text style={estilos.texto}>
        O <Text style={estilos.nomeApp}> FILME NA TELA </Text> é um aplicativo
        com a finalidade de permitir a busca por informações sobre filmes
        existentes na base de dados pública disponibilizada pelo site The Movie
        Database (TMDb).
      </Text>

      <View style={estilos.logoApi}>
        <Image source={logoApi} />
      </View>

      <Text style={estilos.texto}>
        Ao localizar um filme, o usuário pode visualizar informações como
        título, data de lançamento, nota média de avaliação e uma breve
        descrição sobre o filme e, caso queira, salvar estas informações em uma
        lista no próprio aplicativo para visualização posterior.
      </Text>

      <Text style={estilos.texto}>
        O aplicativo poderá receber novos recursos conforme o feedback e demanda
        dos usuários.
      </Text>

      <Text style={estilos.texto}>FILME NA TELA &copy; 2022 */</Text>
    </SafeAreaView>
  );
};

export default Sobre;

/* Sobre o app NOME DO SEU APP

O NOME DO SEU APP é um aplicativo com a finalidade de permitir a busca por informações sobre filmes existentes na base de dados pública disponibilizada pelo site The Movie Database (TMDb).

Ao localizar um filme, o usuário pode visualizar informações como título, data de lançamento, nota média de avaliação e uma breve descrição sobre o filme e, caso queira, salvar estas informações em uma lista no próprio aplicativo para visualização posterior.

O aplicativo poderá receber novos recursos conforme o feedback e demanda dos usuários.

NOME DO SEU APP &copy; 2022 */
