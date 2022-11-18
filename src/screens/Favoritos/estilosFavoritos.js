import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 8,
  },

  itemFilme: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#EFE9F4",
    marginVertical: 8,
    borderRadius: 4,
    alignItems: "center",
  },

  botaoExcluir: {
    backgroundColor: "#FF1B1C",
    padding: 12,
    borderRadius: 4,
  },

  cabecalho: {
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  botaoExcluirTudo: {
    borderBottomColor: "#FF3C38",
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
  },

  textoExcluirTdo: {
    color: "red",
  },

  titulo: {
    flex: 1,
  },
});
export default estilos;
