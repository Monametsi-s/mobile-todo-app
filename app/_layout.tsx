import { Stack } from 'expo-router';
// import IonIcons from '@expo/vector-icons/Ionicons';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ title: "Home"}}/>
    </Stack>
  )
}