// Utility functions for navigation to avoid TypeScript issues

export const NAVIGATION_PATHS = {
  HOME: '/(tabs)/home',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  PROFILE: '/(tabs)/profile',
  SETTINGS: '/(tabs)/settings',
} as const;

export type NavigationPath = typeof NAVIGATION_PATHS[keyof typeof NAVIGATION_PATHS];