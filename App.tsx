import React from "react";
import { HomeScreen } from "./screens/HomeScreen"; // BT10.7c: bỏ import này khi đã dùng RootNavigator
import { SafeAreaProvider } from "react-native-safe-area-context";
// TODO BT10.7c: import NavigationContainer từ "@react-navigation/native" và RootNavigator từ "./navigation"
// TODO BT10.8c: import Provider từ "react-redux" và store từ "./store"

export default function App() {
  // Tạm thời hiển thị thẳng màn Home (chưa có điều hướng, chưa có store).
  // TODO BT10.7c: thay HomeScreen bằng <NavigationContainer><RootNavigator /></NavigationContainer>
  // TODO BT10.8c: bọc thêm <Provider store={store}> ở ngoài cùng
  return (
    <SafeAreaProvider>
      <HomeScreen {...({} as any)} />
    </SafeAreaProvider>
  );
}
