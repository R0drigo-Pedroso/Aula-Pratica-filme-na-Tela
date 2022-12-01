import { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import estilos from "./estilosResultados";
import Api from "../../services/Api";
import apikey from "../../../apikey";
import Loading from "../../Components/Loading";
import CardFilme from "../../Components/CardFilme";
import ItemSeparador from "../../Components/ItemSeparador";
import ItemVazio from "../../Components/ItemVazio";

const Resultados = ({ route }) => {
  const { filme } = route.params;

  const [resultados, setReseultados] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    async function buscarFilmes() {
      try {
        const resposta = await Api.get("/search/movie", {
          params: {
            api_key: apikey,
            language: "pt-BR",
            query: filme,
            include_adult: false,
          },
        });

        setReseultados(resposta.data.results);

        setloading(false);
      } catch (error) {
        console.log("Api não funfo" + error.message);
      }
    }
    buscarFilmes();
  }, []);

  console.log(resultados);

  if (loading) return <Loading />;

  return (
    <SafeAreaView style={estilos.container}>
      <Text>você buscou por : {filme} </Text>

      {loading && <Loading />}

      <View style={estilos.viewFilmes}>
        {!loading && (
          <FlatList
            ItemSeparatorComponent={ItemSeparador}
            ListFooterComponent={ItemVazio}
            data={resultados}
            renderItem={({ item }) => {
              return <CardFilme filme={item} />;
            }}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Resultados;
