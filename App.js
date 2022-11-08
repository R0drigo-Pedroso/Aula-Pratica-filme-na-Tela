import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home/Home";
import Sobre from "./src/screens/Sobre/Sobre";
import Privacidade from "./src/screens/Privacidade/Privacidade";
import Favoritos from "./src/screens/Favoritos/Favoritos";
import FormBusca from "./src/screens/Busca/FormBusca";

const App = () => {
  /* Inicializando atráves de uma constante o gerenciador de navegação Stack (Pilha de telas) */
  const stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar barStyle="default" />
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name="Home" component={Home} />
          <stack.Screen name="Sobre" component={Sobre} />
          <stack.Screen name="Privacidade" component={Privacidade} />
          <stack.Screen name="Favoritos" component={Favoritos} />
          <stack.Screen name="Busca" component={FormBusca} />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
