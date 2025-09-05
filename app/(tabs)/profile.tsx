import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from "../../features/auth/hooks/useAuth";

export default function ProfileScreen() {
  const { user, logout } = useAuth();

  return (
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-gray-900">
      <ScrollView className="flex-1" contentContainerStyle={{flex: 1, padding: 16}}>
        <View className="flex-1">
          {/* Header */}
          <View className="items-center mb-8 mt-4">
            <View className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 items-center justify-center mb-4">
              <MaterialIcons name="person" size={48} color="#6b7280" />
            </View>
            <Text className="text-3xl font-bold text-gray-800 dark:text-white">
              {user?.name || 'User'}
            </Text>
            <Text className="text-gray-600 dark:text-gray-300">
              {user?.email || 'user@example.com'}
            </Text>
          </View>

          {/* Profile Info Card */}
          <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-6">
            <Text className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Profile Information
            </Text>
            
            <View className="mb-4">
              <View className="flex-row items-center mb-3">
                <View className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 items-center justify-center mr-3">
                  <MaterialIcons name="badge" size={16} color="#3b82f6" />
                </View>
                <Text className="text-gray-500 dark:text-gray-400 text-sm">User ID</Text>
              </View>
              <Text className="text-gray-800 dark:text-white text-lg font-medium pl-11">
                {user?.id || 'N/A'}
              </Text>
            </View>
            
            <View className="mb-4">
              <View className="flex-row items-center mb-3">
                <View className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 items-center justify-center mr-3">
                  <MaterialIcons name="email" size={16} color="#10b981" />
                </View>
                <Text className="text-gray-500 dark:text-gray-400 text-sm">Email</Text>
              </View>
              <Text className="text-gray-800 dark:text-white text-lg font-medium pl-11">
                {user?.email || 'N/A'}
              </Text>
            </View>
            
            <View>
              <View className="flex-row items-center mb-3">
                <View className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 items-center justify-center mr-3">
                  <MaterialIcons name="calendar-today" size={16} color="#8b5cf6" />
                </View>
                <Text className="text-gray-500 dark:text-gray-400 text-sm">Member Since</Text>
              </View>
              <Text className="text-gray-800 dark:text-white text-lg font-medium pl-11">
                January 2025
              </Text>
            </View>
          </View>

          {/* Account Actions */}
          <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <Text className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Account Actions
            </Text>
            
            <TouchableOpacity className="flex-row items-center py-4 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
              <View className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 items-center justify-center mr-3">
                <MaterialIcons name="edit" size={20} color="#3b82f6" />
              </View>
              <Text className="text-lg text-gray-800 dark:text-white flex-1">Edit Profile</Text>
              <MaterialIcons name="chevron-right" size={24} color="#9ca3af" />
            </TouchableOpacity>
            
            <TouchableOpacity className="flex-row items-center py-4 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
              <View className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900 items-center justify-center mr-3">
                <MaterialIcons name="lock" size={20} color="#f59e0b" />
              </View>
              <Text className="text-lg text-gray-800 dark:text-white flex-1">Change Password</Text>
              <MaterialIcons name="chevron-right" size={24} color="#9ca3af" />
            </TouchableOpacity>
            
            <TouchableOpacity 
              className="flex-row items-center py-4"
              onPress={logout}
            >
              <View className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900 items-center justify-center mr-3">
                <MaterialIcons name="logout" size={20} color="#ef4444" />
              </View>
              <Text className="text-lg text-red-500 font-medium flex-1">Logout</Text>
              <MaterialIcons name="chevron-right" size={24} color="#9ca3af" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}