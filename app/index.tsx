import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from "../features/auth/hooks/useAuth";

export default function Index() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <ScrollView className="flex-1" contentContainerStyle={{flex: 1, padding: 16, justifyContent: 'center', alignItems: 'center'}}>
        <View className="flex-1 p-4 justify-center items-center">
          <View className="w-full max-w-md self-center">
            {/* Header */}
            <View className="justify-center items-center mb-12 mt-8">
              <View className="w-24 h-24 rounded-full bg-white dark:bg-gray-800 items-center justify-center mb-6 shadow-lg">
                <MaterialIcons name="rocket-launch" size={48} color="#3b82f6" />
              </View>
              <Text className="text-4xl font-bold text-center text-gray-800 dark:text-white">
                Welcome
              </Text>
              <Text className="text-xl text-gray-600 dark:text-gray-300 text-center mt-2">
                Your amazing app awaits
              </Text>
            </View>
            
            {/* Main Card */}
            <View className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8">
              <Text className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
                Get Started
              </Text>
              
              <View className="gap-4 mb-8">
                <TouchableOpacity 
                  className="bg-blue-500 py-4 rounded-xl flex-row items-center justify-center"
                  onPress={() => router.push('/(tabs)/home')}
                >
                  <MaterialIcons name="home" size={24} color="white" />
                  <Text className="text-white font-bold text-center text-lg ml-2">Go to Home (Demo)</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  className="bg-blue-500 py-4 rounded-xl flex-row items-center justify-center"
                  onPress={() => router.push('/auth/login')}
                >
                  <MaterialIcons name="login" size={24} color="white" />
                  <Text className="text-white font-bold text-center text-lg ml-2">Sign In</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  className="bg-gray-200 dark:bg-gray-700 py-4 rounded-xl flex-row items-center justify-center"
                  onPress={() => router.push('/auth/register')}
                >
                  <MaterialIcons name="person-add" size={24} color="#374151" />
                  <Text className="text-gray-800 dark:text-white font-bold text-center text-lg ml-2">Create Account</Text>
                </TouchableOpacity>
              </View>
              
              <View className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <Text className="text-gray-500 dark:text-gray-400 text-center">
                  By continuing, you agree to our Terms and Privacy Policy
                </Text>
              </View>
            </View>
            
            {/* Footer */}
            <View className="items-center">
              <Text className="text-gray-500 dark:text-gray-400 text-center">
                © 2025 Your App. All rights reserved.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}