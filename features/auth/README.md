# Authentication Feature

This feature provides user authentication functionality including login, registration, and session management.

## Structure

```
auth/
├── components/        # Reusable auth components
├── hooks/             # Custom hooks (useAuth)
├── screens/           # Screen components
├── services/          # Auth service (API calls, storage)
├── login.tsx          # Login screen route
├── register.tsx       # Register screen route
└── _layout.tsx        # Auth layout and routing
```

## Key Components

1. **AuthService**: Handles authentication logic, API calls, and data persistence
2. **useAuth Hook**: Provides authentication state and methods to components
3. **AuthGuard**: Protects routes that require authentication
4. **LoginScreen/RegisterScreen**: UI components for authentication forms

## Data Persistence

User authentication data is persisted using AsyncStorage:
- User data is stored as JSON
- Authentication token is stored as a string
- Data is automatically loaded on app start
- Session persists through app restarts

## Usage

1. Wrap your app with `AuthProvider` (already done in root layout)
2. Use `useAuth()` hook to access auth state and methods
3. Wrap protected routes with `AuthGuard`
4. Navigate to `/auth/login` or `/auth/register` for authentication

## Security Notes

- In a production app, tokens should be stored in SecureStore instead of AsyncStorage
- Passwords should never be stored locally
- All API calls should be over HTTPS
- Consider implementing token refresh logic