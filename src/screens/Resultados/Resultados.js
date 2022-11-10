import { useEffect, useState } from "react";
import { AppRegistry, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import estilos from "./estilosResultados";
import Api from "../../services/Api";

const Resultados = ({ route }) => {
  /* Usamos a prop route (do React navigation) para acessar os parâmetros desta rota de navegação e extrair os dados
  (neste caso, filme) enviandos para esta tela Resultados*/
  const { filme } = route.params;

  const [resultados, setReseultados] = useState([]);

  useEffect(() => {
    async function buscarFilmes() {
      try {
        const resposta = await Api.get("/search/movie", {
          params: {
            api_key: "40d644606c5295c88bb477c4130e5e80",
            language: "pt-BR",
            query: filme,
            include_adult: false,
          },
        });

        setReseultados(resposta.data.results);
      } catch (error) {
        console.log("Api não funfo" + error.message);
      }
    }
    buscarFilmes();
  }, []);

  console.log(resultados);

  return (
    <SafeAreaView style={estilos.container}>
      <Text>você buscou por : {filme} </Text>

      <View style={estilos.viewFilmes}>
        {resultados.map((resultado) => {
          return <Text key={resultado.id}>{resultado.title}</Text>;
        })}
      </View>
    </SafeAreaView>
  );
};

export default Resultados;
