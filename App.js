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
        <stack.Navigator
          initialRouteName="Home"
          /* Estilização padrão para todos */
          screenOptions={{
            headerStyle: {
              backgroundColor: "#5451a6",
            },
            headerTintColor: "white",
          }}
          /* Finalização Estilização  */
        >
          <stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />

          <stack.Screen name="Sobre" component={Sobre} />
          <stack.Screen name="Privacidade" component={Privacidade} />
          <stack.Screen
            name="Favoritos"
            component={Favoritos}
            options={{ title: "Filmes Favoritos" }}
          />

          <stack.Screen
            name="FormBusca"
            component={FormBusca}
            options={{ title: "Buscar Filmes" }}
          />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
