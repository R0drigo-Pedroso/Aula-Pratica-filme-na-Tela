import { StatusBar } from "react-native";
import FormBusca from "./src/screens/Busca/FormBusca";
import Favoritos from "./src/screens/Favoritos/Favoritos";
import Home from "./src/screens/Home/Home";
import Privacidade from "./src/screens/Privacidade/Privacidade";
import Sobre from "./src/screens/Sobre/Sobre";

const App = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <Home />
    </>
  );
};

export default App;
