import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";

import estilos from "./estilosFavoritos";
import { useNavigation } from "@react-navigation/native";

const Favoritos = () => {
  const [listaFavoritos, setlistaFavoritos] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    async function carregarFavoritos() {
      try {
        /* Acessar o storage @favoritos e tentar carregar os dados existentes */
        const dados = await AsyncStorage.getItem("@favoritos");

        /* Havendo dados, transformanmos eles em array de objetos */
        const filmes = JSON.parse(dados);

        /* Se realmente tem dados (ou seja, não é null), atualizamos o componente */
        if (dados != null) {
          setlistaFavoritos(filmes); /* state de dados do componente */
        }
      } catch (error) {
        console.log("Deu ruim no carregamento: " + error.message);
      }
    }

    carregarFavoritos();
  }, []);

  const verDetalhes = (filmeSelecionado) => {
    navigation.navigate("Detalhes", { filme: filmeSelecionado });
  };

  console.log(listaFavoritos);

  const excluirFavoritos = async () => {
    Alert.alert("Excluir TODOS:", "Tem certeza que deseja excluir TUDO?", [
      {
        text: "Cancelar",
        onPress: () => {
          return false;
        },
        style: "cancel", //SOMENTE no IOS
      },
      {
        text: "Sim, Quero excluir",
        onPress: async () => {
          await AsyncStorage.removeItem("@favaritos");
          setlistaFavoritos([]);
        },
      },
    ]);
  };

  const excluirUmFavorito = async (indice) => {
    //Alert.alert(`Exclur filme no indice: ${indice}`);
    /* Etapas para exclusão do filme escolhido */
    /* 1 - conhecendo o indice, remover o elemento (filme do array listaFavaritos) / Splice: Indicamos o indice de referência (na prática, o indice do filme que queremos remover e, a partir deste indice, a quantidade de elementos que queremos remover. Como aqui queremos apagar somente o próprio filme escolhido, passamos o valor 1) */
    listaFavoritos.splice(indice, 1);
    /* 2 - Atualizar o storage com a lista atualizada (ou seja, sem o filme) / obs: É necessário transforma em string antes de gravar no Storage */
    await AsyncStorage.setItem("@favoritos", JSON.stringify(listaFavoritos));
    /* 3 -  Recarregar do storage a nova lista de favoritos / obs: É necessário transformar em array antes de manipular no aplicação*/
    const listaDeFilmes = JSON.parse(await AsyncStorage.getItem("@favoritos"));
    /* 4 - Atualizar o state para um novo render na tela com a lista de favoritos */
    setlistaFavoritos(listaDeFilmes);
  };

  return (
    <SafeAreaView style={estilos.safeContainer}>
      <View style={estilos.container}>
        <View style={estilos.cabecalho}>
          <Text>Quantidade:{listaFavoritos.length} </Text>

          <Pressable
            style={estilos.botaoExcluirTudo}
            onPress={excluirFavoritos}
          >
            <Text style={estilos.textoExcluirTdo}>
              <Ionicons name="trash" size={16} color="red" />
              excluir Favoritos
            </Text>
          </Pressable>
        </View>

        {/* Estilizando e programando lista de filmes - ou seja programando o batão de excluir um filme favorito */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {listaFavoritos.map((filmesFavorito, indice) => {
            return (
              <Pressable
                key={filmesFavorito.id}
                onPress={verDetalhes.bind(this, filmesFavorito)}
                style={estilos.itemFilme}
              >
                <Text style={estilos.titulo}>{filmesFavorito.title}</Text>

                <Pressable
                  style={estilos.botaoExcluir}
                  //onPress={excluirUmFavorito}
                  onPress={() => excluirUmFavorito(indice)}
                  //onPress={excluirUmFavorito.bind(this, indice)}
                >
                  <Ionicons name="trash" size={16} color="white" />
                </Pressable>
              </Pressable>
            );
          })}
        </ScrollView>
        {/* Final da lista */}
      </View>
    </SafeAreaView>
  );
};

export default Favoritos;
