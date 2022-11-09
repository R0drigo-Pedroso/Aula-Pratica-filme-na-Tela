import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },

  titulo: {
    fontSize: 16,
    margin: 8,
    textAlign: "center",
    textTransform: "uppercase",
  },

  subtitulos: {
    fontSize: 16,
    textAlign: "center",
    margin: 8,
  },

  busca: {
    flexDirection: "row",
  },

  icons: {
    margin: 5,
  },

  input: {
    width: "80%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default estilos;
