import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "index" }} />
      <Stack.Screen name="challenges" options={{ title: "challenges" }} />
      <Stack.Screen name="create" options={{ title: "create" }} />
      <Stack.Screen name="dashboard" options={{ title: "dashboard" }} />
      <Stack.Screen name="edit" options={{ title: "edit" }} />
      <Stack.Screen name="progress" options={{ title: "progress" }} />
      <Stack.Screen name="settings" options={{ title: "settings" }} />
      <Stack.Screen name="login" options={{ title: "login" }} />
    </Stack>
  );
}
