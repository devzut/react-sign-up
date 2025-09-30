import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (userData: User) => Promise<void>;
  logout: () => void;
}

interface AuthProps {
  children: ReactNode;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component that wraps the parts of your app that need access to the context
export function AuthProvider({ children }: AuthProps) {
  const [user, setUser] = useState<User | null>(() => {
    // Check local storage for a user upon initialization
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const isAuthenticated = !!user;

  const login = useCallback(async (userData: User) => {
    // Simulate an API call for login
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        resolve();
      }, 500);
    });
  }, []);

  const logout = useCallback(() => {
    // Clear user data and remove from local storage
    setUser(null);
    localStorage.removeItem('user');
  }, []);

  const value = {
    isAuthenticated,
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook to use the auth context
// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
