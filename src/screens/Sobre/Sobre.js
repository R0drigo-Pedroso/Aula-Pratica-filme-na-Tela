import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import estilos from "./estilosSobre";

const Sobre = () => {
  return (
    <SafeAreaView style={estilos.container}>
      <Text style={estilos.titulo}>Sobre o app NOME DO SEU APP</Text>

      <Text style={estilos.texto}>
        O <Text style={estilos.nomeApp}> Filme na Tela </Text> é um aplicativo
        com a finalidade de permitir a busca por informações sobre filmes
        existentes na base de dados pública disponibilizada pelo site The Movie
        Database (TMDb).
      </Text>

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

      <Text style={estilos.texto}>NOME DO SEU APP &copy; 2022 */</Text>
    </SafeAreaView>
  );
};

export default Sobre;

/* Sobre o app NOME DO SEU APP

O NOME DO SEU APP é um aplicativo com a finalidade de permitir a busca por informações sobre filmes existentes na base de dados pública disponibilizada pelo site The Movie Database (TMDb).

Ao localizar um filme, o usuário pode visualizar informações como título, data de lançamento, nota média de avaliação e uma breve descrição sobre o filme e, caso queira, salvar estas informações em uma lista no próprio aplicativo para visualização posterior.

O aplicativo poderá receber novos recursos conforme o feedback e demanda dos usuários.

NOME DO SEU APP &copy; 2022 */
