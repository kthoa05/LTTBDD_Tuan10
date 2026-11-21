import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "./navigation";
// TODO BT10.8c: import Provider từ "react-redux" và store từ "./store"

export default function App() {
  // TODO BT10.8c: bọc thêm <Provider store={store}> ở ngoài cùng
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
