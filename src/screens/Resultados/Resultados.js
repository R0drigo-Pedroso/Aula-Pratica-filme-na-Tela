import { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import estilos from "./estilosResultados";
import Api from "../../services/Api";
import apikey from "../../../apiKey";
import Loading from "../../Components/Loading";

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
        {!loading &&
          resultados.map((resultado) => {
            return (
              <View key={resultado.id}>
                <Image
                  style={estilos.imagem}
                  source={{
                    uri: `https://image.tmdb.org/t/p/original/${resultado.poster_path}`,
                  }}
                />
                <Text>{resultado.title}</Text>
              </View>
            );
          })}
      </View>
    </SafeAreaView>
  );
};

export default Resultados;
