import { useEffect, useState } from "react";
import { AppRegistry, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import estilos from "./estilosResultados";
import Api from "../../services/Api";

/* importação da chave de api */
import apikey from "../../../apiKey";

const Resultados = ({ route }) => {
  /* Usamos a prop route (do React navigation) para acessar os parâmetros desta rota de navegação e extrair os dados
  (neste caso, filme) enviandos para esta tela Resultados*/
  const { filme } = route.params;

  const [resultados, setReseultados] = useState([]);

  /* useEffect: hook do React que executa operações no momento em que o compomente (neste caso, Resultados) é renderizado */
  useEffect(() => {
    /* Asssim que entrarmos em Resultado, é executada a função async buncarFilmes que por sua vez através do axios executa a consulta á API baseda no filme que foi digitado */
    async function buscarFilmes() {
      try {
        /* Aguardamos a resposta da consulta get ao endpoint "/search/movie" de api. Observe que este endpoint precisa de parâmentros para a execução correa da consulta. Estes parâmetros DEVEM ter o mesmo nome indicado na documentação do endpoint/API. */
        const resposta = await Api.get("/search/movie", {
          params: {
            api_key: apikey,
            language: "pt-BR",
            query: filme,
            include_adult: false,
          },
        });

        /* data: refere á guarda dados, "results: é uma array diretamente da API" */
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
