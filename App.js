import { StatusBar } from "react-native";
import FormBusca from "./src/screens/Busca/FormBusca";
import Favoritos from "./src/screens/Favoritos/Favoritos";
import Home from "./src/screens/Home/Home";
import Sobre from "./src/screens/Sobre/Sobre";

const App = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <Sobre />
    </>
  );
};

export default App;
