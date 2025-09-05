import { MaterialIcons } from '@expo/vector-icons';
import { Text, TextInput, View } from "react-native";
import { Button } from "../../../components/ui/Button";

interface RegisterFormProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setConfirmPassword: (confirmPassword: string) => void;
  onRegister: () => void;
  isLoading: boolean;
}

export function RegisterForm({ 
  name,
  email, 
  password, 
  confirmPassword,
  setName,
  setEmail, 
  setPassword, 
  setConfirmPassword,
  onRegister, 
  isLoading 
}: RegisterFormProps) {
  return (
    <View className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg dark:bg-gray-800">
      <Text className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        Create Account
      </Text>
      
      <View className="mb-4">
        <Text className="text-gray-700 mb-2 dark:text-gray-300 font-medium text-base">Full Name</Text>
        <View className="flex-row items-center bg-gray-100 dark:bg-gray-700 rounded-xl px-4">
          <MaterialIcons name="badge" size={24} color="#6b7280" />
          <TextInput
            className="flex-1 p-4 text-gray-800 dark:text-white text-base"
            placeholder="Enter your full name"
            placeholderTextColor="#9ca3af"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
            autoCorrect={false}
          />
        </View>
      </View>
      
      <View className="mb-4">
        <Text className="text-gray-700 mb-2 dark:text-gray-300 font-medium text-base">Email</Text>
        <View className="flex-row items-center bg-gray-100 dark:bg-gray-700 rounded-xl px-4">
          <MaterialIcons name="email" size={24} color="#6b7280" />
          <TextInput
            className="flex-1 p-4 text-gray-800 dark:text-white text-base"
            placeholder="Enter your email"
            placeholderTextColor="#9ca3af"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
      </View>
      
      <View className="mb-4">
        <Text className="text-gray-700 mb-2 dark:text-gray-300 font-medium text-base">Password</Text>
        <View className="flex-row items-center bg-gray-100 dark:bg-gray-700 rounded-xl px-4">
          <MaterialIcons name="lock" size={24} color="#6b7280" />
          <TextInput
            className="flex-1 p-4 text-gray-800 dark:text-white text-base"
            placeholder="Create a password"
            placeholderTextColor="#9ca3af"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
      </View>
      
      <View className="mb-6">
        <Text className="text-gray-700 mb-2 dark:text-gray-300 font-medium text-base">Confirm Password</Text>
        <View className="flex-row items-center bg-gray-100 dark:bg-gray-700 rounded-xl px-4">
          <MaterialIcons name="lock" size={24} color="#6b7280" />
          <TextInput
            className="flex-1 p-4 text-gray-800 dark:text-white text-base"
            placeholder="Confirm your password"
            placeholderTextColor="#9ca3af"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
      </View>
      
      <Button 
        title={isLoading ? "Creating Account..." : "Sign Up"}
        className="w-full py-4"
        icon={<MaterialIcons name="person-add" size={24} color="white" />}
        onPress={onRegister}
        disabled={isLoading}
      />
    </View>
  );
}