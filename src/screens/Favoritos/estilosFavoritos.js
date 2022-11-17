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
    backgroundColor: "#F5F3F5",
    marginVertical: 8,
    borderRadius: 4,
    alignItems: "center",
  },

  botaoExcluir: {
    backgroundColor: "#FF1B1C",
    padding: 12,
    borderRadius: 4,
  },
});
export default estilos;
