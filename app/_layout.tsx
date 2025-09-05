import { Stack } from "expo-router";
import { AuthProvider } from '../features/auth/hooks/useAuth';
import '../styles/globals.css';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
}