import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthGuard from "../../components/shared/AuthGuard";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-gray-900">
      <AuthGuard>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: colorScheme === "dark" ? "#3b82f6" : "#3b82f6",
            headerShown: false,
            tabBarStyle: {
              backgroundColor: colorScheme === "dark" ? "#1f2937" : "#ffffff",
              borderTopColor: colorScheme === "dark" ? "#374151" : "#e5e7eb",
              height: 70,
              paddingBottom: 10,
              paddingTop: 10,
              elevation: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: -2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
            },
            tabBarItemStyle: {
              paddingBottom: 5,
            }
          }}
        >
          <Tabs.Screen
            name="home"
            options={{
              title: "Home",
              tabBarIcon: ({ color, size, focused }) => (
                <MaterialIcons 
                  name="home" 
                  color={focused ? color : color + "80"} 
                  size={size} 
                />
              ),
            }}
          />
          <Tabs.Screen
            name="settings"
            options={{
              title: "Settings",
              tabBarIcon: ({ color, size, focused }) => (
                <MaterialIcons 
                  name="settings" 
                  color={focused ? color : color + "80"} 
                  size={size} 
                />
              ),
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              title: "Profile",
              tabBarIcon: ({ color, size, focused }) => (
                <MaterialIcons 
                  name="person" 
                  color={focused ? color : color + "80"} 
                  size={size} 
                />
              ),
            }}
          />
        </Tabs>
      </AuthGuard>
    </SafeAreaView>
  );
}