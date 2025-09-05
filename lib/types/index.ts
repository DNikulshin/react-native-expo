// Types for our application

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface AppState {
  user: User | null;
  theme: 'light' | 'dark';
  isLoading: boolean;
}