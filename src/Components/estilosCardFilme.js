import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  cards: {
    marginVertical: 4,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "black",

    justifyContent: "space-between",
    alignItems: "center",
  },

  imagem: {
    flex: 1,
    width: 100,
    height: 180,
  },

  corpo: {
    flex: 2,
  },

  titulo: {
    backgroundColor: "#5451a6",
    color: "white",
    fontSize: 16,
    paddingVertical: 8,
    textAlign: "center",
  },

  botoes: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 8,
  },

  botao: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: "#5154a6",
  },

  botaoTexto: {
    color: "white",
    fontSize: 12,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default estilos;
