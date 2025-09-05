import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from "../../features/auth/hooks/useAuth";

export default function HomeScreen() {
  const { user } = useAuth();

  return (
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-gray-900">
      <ScrollView className="flex-1" contentContainerStyle={{flex: 1, padding: 16}}>
        <View className="flex-1">
          {/* Header */}
          <View className="items-center mb-8 mt-4">
            <View className="w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900 items-center justify-center mb-4">
              <MaterialIcons name="home" size={48} color="#3b82f6" />
            </View>
            <Text className="text-3xl font-bold text-center text-gray-800 dark:text-white">
              Welcome{user ? `, ${user.name}` : ''}!
            </Text>
            <Text className="text-gray-600 dark:text-gray-300 text-center mt-2">
              You're successfully logged in
            </Text>
          </View>

          {/* Main Content Card */}
          <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-6">
            <View className="items-center mb-6">
              <MaterialIcons name="dashboard" size={40} color="#3b82f6" />
              <Text className="text-xl font-bold mt-2 text-gray-800 dark:text-white">
                Dashboard
              </Text>
            </View>
            
            <Text className="text-gray-600 dark:text-gray-300 text-center mb-6">
              This is your main dashboard where you can access all features of the app.
            </Text>
            
            <View className="flex-row justify-center">
              <View className="bg-green-100 dark:bg-green-900 rounded-full p-3">
                <Text className="text-green-800 dark:text-green-200 font-bold">
                  🚀 Ready to go!
                </Text>
              </View>
            </View>
          </View>

          {/* Quick Actions */}
          <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-6">
            <Text className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Quick Actions
            </Text>
            
            <View className="flex-row justify-between mb-4">
              <View className="bg-blue-100 dark:bg-blue-900 rounded-xl p-4 flex-1 mr-2 items-center">
                <MaterialIcons name="person" size={24} color="#3b82f6" />
                <Text className="text-blue-800 dark:text-blue-200 text-center mt-2 font-medium">
                  Profile
                </Text>
              </View>
              <View className="bg-purple-100 dark:bg-purple-900 rounded-xl p-4 flex-1 ml-2 items-center">
                <MaterialIcons name="settings" size={24} color="#8b5cf6" />
                <Text className="text-purple-800 dark:text-purple-200 text-center mt-2 font-medium">
                  Settings
                </Text>
              </View>
            </View>
            
            <View className="bg-amber-100 dark:bg-amber-900 rounded-xl p-4 mt-4 items-center">
              <MaterialIcons name="explore" size={24} color="#f59e0b" />
              <Text className="text-amber-800 dark:text-amber-200 text-center mt-2 font-medium">
                Explore Features
              </Text>
            </View>
          </View>

          {/* Stats Section */}
          <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <Text className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Your Stats
            </Text>
            
            <View className="flex-row justify-between">
              <View className="items-center">
                <View className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900 items-center justify-center mb-2">
                  <Text className="text-red-500 dark:text-red-300 font-bold">5</Text>
                </View>
                <Text className="text-gray-600 dark:text-gray-300 text-sm">Tasks</Text>
              </View>
              
              <View className="items-center">
                <View className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 items-center justify-center mb-2">
                  <Text className="text-green-500 dark:text-green-300 font-bold">12</Text>
                </View>
                <Text className="text-gray-600 dark:text-gray-300 text-sm">Projects</Text>
              </View>
              
              <View className="items-center">
                <View className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 items-center justify-center mb-2">
                  <Text className="text-blue-500 dark:text-blue-300 font-bold">8</Text>
                </View>
                <Text className="text-gray-600 dark:text-gray-300 text-sm">Achievements</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}