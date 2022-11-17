import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from "react-native";

import estilos from "./estilosFavoritos";

const Favoritos = () => {
  const [listaFavoritos, setlistaFavoritos] = useState([]);

  useEffect(() => {
    async function carregarFavoritos() {
      try {
        const dados = await AsyncStorage.getItem("@favoritos");
        const filmes = JSON.parse(dados);

        if (dados != null) {
          setlistaFavoritos(filmes);
        }
      } catch (error) {
        console.log("Deu ruim no carregamento: " + error.message);
      }
    }

    carregarFavoritos();
  }, []);

  console.log(listaFavoritos);

  const excluirFavoritos = async () => {
    await AsyncStorage.removeItem("@favoritos");
    setlistaFavoritos([]);
    Alert.alert("Favaritos apagados");
  };

  return (
    <SafeAreaView style={estilos.safeContainer}>
      <View style={estilos.container}>
        <Text>Quantidade:{listaFavoritos.length} </Text>

        <Button title="Excluir favoritos" onPress={excluirFavoritos} />

        <View>
          {listaFavoritos.map((filmesFavorito) => {
            return (
              <Pressable key={filmesFavorito.id} style={estilos.itemFilme}>
                <Text>{filmesFavorito.title}</Text>

                <Pressable style={estilos.botaoExcluir}>
                  <Ionicons name="trash" size={24} color="white" />
                </Pressable>
              </Pressable>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Favoritos;
