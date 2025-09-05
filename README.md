# Project Structure

This document outlines the file structure for our React Native Expo application.

## Directory Structure

```
app/                    # Application screens and routing
├── (tabs)/            # Tab-based navigation structure
│   ├── _layout.tsx    # Tab navigator layout
│   ├── home/          # Home tab screens
│   ├── settings/      # Settings tab screens
│   └── profile/       # Profile tab screens
├── _layout.tsx        # Root layout
└── index.tsx          # Entry point

components/            # Reusable UI components
├── ui/               # Basic UI components (Button, Card, etc.)
├── layout/           # Layout components (Header, Footer, etc.)
└── shared/           # Shared components

lib/                   # Core application logic
├── hooks/            # Custom React hooks
├── utils/            # Utility functions
├── services/         # API services and business logic
└── types/            # TypeScript types

assets/                # Static assets
├── images/           # Image files
├── icons/            # Icon files
└── fonts/            # Custom fonts

stores/                # State management (if using Redux/Zustand)

styles/                # Styling related files
├── globals.css       # Global styles
└── themes/           # Theme configurations

constants/             # Application constants

features/              # Feature-based modules
├── auth/             # Authentication feature
│   ├── components/   # Auth-specific components
│   ├── hooks/        # Auth-specific hooks
│   ├── services/     # Auth-specific services
│   └── types/        # Auth-specific types
└── user/             # User feature
    ├── components/
    ├── hooks/
    ├── services/
    └── types/
```

## Key Principles

1. **Separation of Concerns**: Each directory has a specific purpose
2. **Feature-based Organization**: Related functionality is grouped together
3. **Scalability**: Structure supports growth without major refactoring
4. **Reusability**: Components and utilities are designed for reuse
5. **Maintainability**: Clear organization makes it easy to locate and modify code

## Naming Conventions

- Directories: lowercase with hyphens (e.g., `user-profile`)
- Files: PascalCase for components (e.g., `UserProfile.tsx`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Constants: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.ts`)

## Routing

We're using Expo Router with a tab-based navigation pattern:
- Tab routes are placed in `app/(tabs)/[tab-name]/`
- Each tab has its own directory with an `index.tsx` file
- The root `app/index.tsx` redirects to the default tab

## Styling

We're using NativeWind (Tailwind CSS for React Native) for styling:
- Global styles are defined in `styles/globals.css`
- Component-specific styles use Tailwind classes
- Theme-specific values can be defined in `styles/themes/`