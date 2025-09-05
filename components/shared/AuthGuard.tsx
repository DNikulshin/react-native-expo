import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { useAuth } from '../../features/auth/hooks/useAuth';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  // If we're still loading auth state, don't render anything
  if (isLoading) {
    return null;
  }

  // If the user is not authenticated, redirect to login
  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/auth/login');
    }
  }, [isAuthenticated, router]);

  // If authenticated, render the children
  return <>{children}</>;
}