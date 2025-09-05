import { MaterialIcons } from '@expo/vector-icons';
import { useState } from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [location, setLocation] = useState(true);
  const [biometrics, setBiometrics] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-gray-900">
      <ScrollView className="flex-1" contentContainerStyle={{flex: 1, padding: 16}}>
        <View className="flex-1">
          {/* Header */}
          <View className="items-center mb-8 mt-4">
            <View className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 items-center justify-center mb-4">
              <MaterialIcons name="settings" size={48} color="#3b82f6" />
            </View>
            <Text className="text-3xl font-bold text-gray-800 dark:text-white">
              Settings
            </Text>
            <Text className="text-gray-600 dark:text-gray-300 mt-2">
              Manage your app preferences
            </Text>
          </View>

          {/* Preferences Section */}
          <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-6">
            <Text className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Preferences
            </Text>
            
            <View className="flex-row justify-between items-center mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              <View className="flex-row items-center">
                <View className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 items-center justify-center mr-3">
                  <MaterialIcons name="notifications" size={20} color="#3b82f6" />
                </View>
                <Text className="text-lg text-gray-800 dark:text-white">Enable Notifications</Text>
              </View>
              <Switch
                value={notifications}
                onValueChange={setNotifications}
                trackColor={{ false: "#d1d5db", true: "#3b82f6" }}
                thumbColor={notifications ? "#ffffff" : "#f9fafb"}
              />
            </View>
            
            <View className="flex-row justify-between items-center mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
              <View className="flex-row items-center">
                <View className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 items-center justify-center mr-3">
                  <MaterialIcons name="dark-mode" size={20} color="#8b5cf6" />
                </View>
                <Text className="text-lg text-gray-800 dark:text-white">Dark Mode</Text>
              </View>
              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
                trackColor={{ false: "#d1d5db", true: "#8b5cf6" }}
                thumbColor={darkMode ? "#ffffff" : "#f9fafb"}
              />
            </View>
            
            <View className="flex-row justify-between items-center">
              <View className="flex-row items-center">
                <View className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 items-center justify-center mr-3">
                  <MaterialIcons name="location-on" size={20} color="#10b981" />
                </View>
                <Text className="text-lg text-gray-800 dark:text-white">Location Services</Text>
              </View>
              <Switch
                value={location}
                onValueChange={setLocation}
                trackColor={{ false: "#d1d5db", true: "#10b981" }}
                thumbColor={location ? "#ffffff" : "#f9fafb"}
              />
            </View>
          </View>
          
          {/* Security Section */}
          <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-6">
            <Text className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Security
            </Text>
            
            <View className="flex-row justify-between items-center mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
              <View className="flex-row items-center">
                <View className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900 items-center justify-center mr-3">
                  <MaterialIcons name="fingerprint" size={20} color="#f59e0b" />
                </View>
                <Text className="text-lg text-gray-800 dark:text-white">Biometric Login</Text>
              </View>
              <Switch
                value={biometrics}
                onValueChange={setBiometrics}
                trackColor={{ false: "#d1d5db", true: "#f59e0b" }}
                thumbColor={biometrics ? "#ffffff" : "#f9fafb"}
              />
            </View>
            
            <TouchableOpacity className="flex-row items-center py-3">
              <View className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900 items-center justify-center mr-3">
                <MaterialIcons name="lock" size={20} color="#ef4444" />
              </View>
              <Text className="text-lg text-gray-800 dark:text-white flex-1">Change Password</Text>
              <MaterialIcons name="chevron-right" size={24} color="#9ca3af" />
            </TouchableOpacity>
          </View>
          
          {/* Account Section */}
          <View className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <Text className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Account
            </Text>
            
            <TouchableOpacity className="flex-row items-center py-3 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
              <View className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 items-center justify-center mr-3">
                <MaterialIcons name="account-circle" size={20} color="#3b82f6" />
              </View>
              <Text className="text-lg text-gray-800 dark:text-white flex-1">Edit Profile</Text>
              <MaterialIcons name="chevron-right" size={24} color="#9ca3af" />
            </TouchableOpacity>
            
            <TouchableOpacity className="flex-row items-center py-3 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
              <View className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 items-center justify-center mr-3">
                <MaterialIcons name="security" size={20} color="#10b981" />
              </View>
              <Text className="text-lg text-gray-800 dark:text-white flex-1">Privacy Policy</Text>
              <MaterialIcons name="chevron-right" size={24} color="#9ca3af" />
            </TouchableOpacity>
            
            <TouchableOpacity className="flex-row items-center py-3">
              <View className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 items-center justify-center mr-3">
                <MaterialIcons name="info" size={20} color="#6b7280" />
              </View>
              <Text className="text-lg text-gray-800 dark:text-white flex-1">Terms of Service</Text>
              <MaterialIcons name="chevron-right" size={24} color="#9ca3af" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}