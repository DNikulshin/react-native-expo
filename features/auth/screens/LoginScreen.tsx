import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginForm } from '../components/LoginForm';
import { useAuth } from '../hooks/useAuth';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading } = useAuth();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
      await login({ email, password });
    } catch (error) {
      Alert.alert('Login Failed', 'Invalid credentials. Please try again.');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-gray-900">
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView className="flex-1" contentContainerStyle={{flex: 1, padding: 16, justifyContent: 'center'}}>
          <View className="w-full max-w-md self-center w-full">
            {/* Header */}
            <View className="items-center mb-10 mt-8">
              <View className="w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900 items-center justify-center mb-6">
                <MaterialIcons name="login" size={48} color="#3b82f6" />
              </View>
              <Text className="text-3xl font-bold text-center text-gray-800 dark:text-white">
                Welcome Back
              </Text>
              <Text className="text-lg text-gray-600 dark:text-gray-300 text-center mt-2">
                Sign in to continue
              </Text>
            </View>
            
            {/* Login Form */}
            <View className="mb-8">
              <LoginForm 
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                onLogin={handleLogin}
                isLoading={isLoading}
              />
            </View>
            
            {/* Footer */}
            <View className="items-center">
              <View className="flex-row justify-center mb-6">
                <Text className="text-gray-600 dark:text-gray-400">Don't have an account? </Text>
                <TouchableOpacity>
                  <Text className="text-blue-500 font-bold">Sign Up</Text>
                </TouchableOpacity>
              </View>
              
              <TouchableOpacity>
                <Text className="text-gray-500 dark:text-gray-400 text-center">
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}