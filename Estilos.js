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
  viewRodape: {
    flex: 0.4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
  },
});

export default Estilos;
