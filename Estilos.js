import { StyleSheet } from "react-native";

const Estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  viewLogo: {
    flex: 3,
    width: "80%",
    textAlign: "center",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 256,
    height: 256,
  },
  tituloApp: {
    fontFamily: "monoton",
    textTransform: "uppercase",
    fontSize: 36,
    color: "#5451a6",
  },

  viewBotoes: {
    flex: 2,
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "80%",
  },
  botaoInicial: {
    borderStyle: "solid",
    borderWidth: 2,
    padding: 16,
    backgroundColor: "#5451a6",
    borderRadius: 5,
  },
  textBotao: {
    color: "white",
  },

  viewRodape: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#5451a6",
  },
  botaoRodape: {
    padding: 16,
    margin: 5,
    backgroundColor: "#5451a6",
  },
  textBotao: {
    color: "white",
    textTransform: "uppercase",
  },
});

export default Estilos;
