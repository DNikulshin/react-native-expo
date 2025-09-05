// Service for API calls

const API_BASE_URL = 'https://api.example.com';

export interface ApiError {
  message: string;
  code: number;
}

export async function apiCall<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw {
      message: error instanceof Error ? error.message : 'Unknown error',
      code: 500,
    };
  }
}

// Example service functions
export const authService = {
  login: (email: string, password: string) => 
    apiCall<{ token: string }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),

  register: (userData: any) => 
    apiCall<{ user: any }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    }),
};