import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../../../lib/types';

const USER_STORAGE_KEY = 'user_data';
const AUTH_TOKEN_KEY = 'auth_token';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

class AuthService {
  // Simulate API call for login
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    // In a real app, this would be an actual API call
    // For demo purposes, we'll simulate authentication
    if (credentials.email && credentials.password) {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const user: User = {
        id: '1',
        name: 'Demo User',
        email: credentials.email,
      };
      
      const token = 'demo-jwt-token';
      
      // Save to storage
      await this.saveAuthData(user, token);
      
      return { user, token };
    } else {
      throw new Error('Invalid credentials');
    }
  }

  // Simulate API call for registration
  async register(data: RegisterData): Promise<AuthResponse> {
    // In a real app, this would be an actual API call
    // For demo purposes, we'll simulate registration
    if (data.name && data.email && data.password) {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const user: User = {
        id: Date.now().toString(),
        name: data.name,
        email: data.email,
      };
      
      const token = 'demo-jwt-token';
      
      // Save to storage
      await this.saveAuthData(user, token);
      
      return { user, token };
    } else {
      throw new Error('Invalid registration data');
    }
  }

  // Save authentication data to storage
  private async saveAuthData(user: User, token: string): Promise<void> {
    try {
      await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
      await AsyncStorage.setItem(AUTH_TOKEN_KEY, token);
    } catch (error) {
      console.error('Error saving auth data:', error);
      throw new Error('Failed to save authentication data');
    }
  }

  // Get stored user data
  async getStoredUser(): Promise<User | null> {
    try {
      const userData = await AsyncStorage.getItem(USER_STORAGE_KEY);
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      console.error('Error getting stored user:', error);
      return null;
    }
  }

  // Get stored auth token
  async getStoredToken(): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(AUTH_TOKEN_KEY);
    } catch (error) {
      console.error('Error getting stored token:', error);
      return null;
    }
  }

  // Check if user is authenticated
  async isAuthenticated(): Promise<boolean> {
    const token = await this.getStoredToken();
    return !!token;
  }

  // Logout user
  async logout(): Promise<void> {
    try {
      await AsyncStorage.removeItem(USER_STORAGE_KEY);
      await AsyncStorage.removeItem(AUTH_TOKEN_KEY);
    } catch (error) {
      console.error('Error during logout:', error);
      throw new Error('Failed to logout');
    }
  }
}

export default new AuthService();