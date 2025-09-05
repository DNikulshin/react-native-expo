// Route constants for navigation

export const ROUTES = {
  HOME: '/home',
  SETTINGS: '/settings',
  PROFILE: '/profile',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
} as const;

export type Route = typeof ROUTES[keyof typeof ROUTES];