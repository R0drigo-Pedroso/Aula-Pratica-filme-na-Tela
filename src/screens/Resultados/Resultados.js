import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import estilos from "./estilosResultados";

const Resultados = ({ route }) => {
  /* Usamos a prop route (do React navigation) para acessar os parâmetros desta rota de navegação e extrair os dados
  (neste caso, filme) enviandos para esta tela Resultados*/
  const { filme } = route.params;

  return (
    <SafeAreaView style={estilos.container}>
      <Text>você buscou por : {filme} </Text>
    </SafeAreaView>
  );
};

export default Resultados;
