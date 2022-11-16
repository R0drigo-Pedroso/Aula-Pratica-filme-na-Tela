import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  /* SafeContainer - é para IOS */
  safeContainer: {
    flex: 1,
  },

  container: {
    flex: 1,
  },

  imagem: {
    height: 200,
    justifyContent: "center",
  },

  titulo: {
    backgroundColor: "rgba(0,0,0, 0.75)",
    color: "white",
    textAlign: "center",
    padding: 16,
  },

  conteudo: {
    flex: 1,
    padding: 8,
  },

  descricao: {
    fontSize: 16,
    lineHeight: 20,
    marginVertical: 8,
  },
});

export default estilos;
