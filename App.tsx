import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import type { RootStackParamList } from "./pages/types";

import Home from "./pages/Home";
import Search from "./pages/Search";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Accueil">
        <Stack.Screen name="Accueil" component={Home} />
        <Stack.Screen name="Recherche" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
