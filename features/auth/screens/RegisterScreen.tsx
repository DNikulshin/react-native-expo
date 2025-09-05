import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RegisterForm } from '../components/RegisterForm';
import { useAuth } from '../hooks/useAuth';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { register, isLoading } = useAuth();

  const handleRegister = async () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters');
      return;
    }

    try {
      await register({ name, email, password });
    } catch (error) {
      Alert.alert('Registration Failed', 'Failed to create account. Please try again.');
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
            <View className="items-center mb-8 mt-6">
              <View className="w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900 items-center justify-center mb-6">
                <MaterialIcons name="person-add" size={48} color="#3b82f6" />
              </View>
              <Text className="text-3xl font-bold text-center text-gray-800 dark:text-white">
                Create Account
              </Text>
              <Text className="text-lg text-gray-600 dark:text-gray-300 text-center mt-2">
                Sign up to get started
              </Text>
            </View>
            
            {/* Registration Form */}
            <View className="mb-6">
              <RegisterForm 
                name={name}
                email={email}
                password={password}
                confirmPassword={confirmPassword}
                setName={setName}
                setEmail={setEmail}
                setPassword={setPassword}
                setConfirmPassword={setConfirmPassword}
                onRegister={handleRegister}
                isLoading={isLoading}
              />
            </View>
            
            {/* Footer */}
            <View className="items-center">
              <View className="flex-row justify-center mb-6">
                <Text className="text-gray-600 dark:text-gray-400">Already have an account? </Text>
                <TouchableOpacity>
                  <Text className="text-blue-500 font-bold">Sign In</Text>
                </TouchableOpacity>
              </View>
              
              <Text className="text-gray-500 dark:text-gray-400 text-center text-sm">
                By signing up, you agree to our Terms and Privacy Policy
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}