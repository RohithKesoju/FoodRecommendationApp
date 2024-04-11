const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import A from "./screens/A";
import AFilterModel from "./screens/AFilterModel";
import Line from "./components/Line";
import B from "./screens/B";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="A"
              component={A}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AFilterModel"
              component={AFilterModel}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="B"
              component={B}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
