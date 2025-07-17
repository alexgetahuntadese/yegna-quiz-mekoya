
import React, { Suspense, lazy, useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";
import { logger } from "@/utils/errorLogger";

// Lazy load components with error handling
const Index = lazy(() => import("./pages/Index").catch(err => {
  logger.error('App', 'Failed to load Index page', err);
  throw err;
}));

const Login = lazy(() => import("./pages/Login").catch(err => {
  logger.error('App', 'Failed to load Login page', err);
  throw err;
}));

const SignUp = lazy(() => import("./pages/SignUp").catch(err => {
  logger.error('App', 'Failed to load SignUp page', err);
  throw err;
}));

const Grade9 = lazy(() => import("./pages/Grade9").catch(err => {
  logger.error('App', 'Failed to load Grade9 page', err);
  throw err;
}));

const Grade10 = lazy(() => import("./pages/Grade10").catch(err => {
  logger.error('App', 'Failed to load Grade10 page', err);
  throw err;
}));

const Grade11 = lazy(() => import("./pages/Grade11").catch(err => {
  logger.error('App', 'Failed to load Grade11 page', err);
  throw err;
}));

const Grade12 = lazy(() => import("./pages/Grade12").catch(err => {
  logger.error('App', 'Failed to load Grade12 page', err);
  throw err;
}));

const Subject = lazy(() => import("./pages/Subject").catch(err => {
  logger.error('App', 'Failed to load Subject page', err);
  throw err;
}));

const Quiz = lazy(() => import("./pages/Quiz").catch(err => {
  logger.error('App', 'Failed to load Quiz page', err);
  throw err;
}));

const Grade11Subject = lazy(() => import("./pages/Grade11Subject").catch(err => {
  logger.error('App', 'Failed to load Grade11Subject page', err);
  throw err;
}));

const Grade11Quiz = lazy(() => import("./pages/Grade11Quiz").catch(err => {
  logger.error('App', 'Failed to load Grade11Quiz page', err);
  throw err;
}));

const Grade12Subject = lazy(() => import("./pages/Grade12Subject").catch(err => {
  logger.error('App', 'Failed to load Grade12Subject page', err);
  throw err;
}));

const Grade12Quiz = lazy(() => import("./pages/Grade12Quiz").catch(err => {
  logger.error('App', 'Failed to load Grade12Quiz page', err);
  throw err;
}));

const NotFound = lazy(() => import("./pages/NotFound").catch(err => {
  logger.error('App', 'Failed to load NotFound page', err);
  throw err;
}));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        logger.error('ReactQuery', 'Query failed', { failureCount, error });
        return failureCount < 3;
      },
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Enhanced authentication context with better error handling
const AuthContext = React.createContext<{
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  register: (email: string, password: string) => boolean;
  logout: () => void;
}>({
  isAuthenticated: false,
  login: () => false,
  register: () => false,
  logout: () => {}
});

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    try {
      const savedAuth = localStorage.getItem('quiz-auth');
      if (savedAuth === 'true') {
        setIsAuthenticated(true);
        logger.info('Auth', 'User restored from localStorage');
      }
    } catch (error) {
      logger.error('Auth', 'Failed to restore authentication state', error);
    }
  }, []);

  const login = (email: string, password: string) => {
    try {
      // Simple validation - in real app, this would be API call
      if (email && password && password.length >= 6) {
        setIsAuthenticated(true);
        localStorage.setItem('quiz-auth', 'true');
        logger.info('Auth', 'User logged in successfully');
        return true;
      }
      logger.warn('Auth', 'Login failed - invalid credentials');
      return false;
    } catch (error) {
      logger.error('Auth', 'Login process failed', error);
      return false;
    }
  };

  const register = (email: string, password: string) => {
    try {
      // Simple validation - in real app, this would be API call
      if (email && password && password.length >= 8) {
        setIsAuthenticated(true);
        localStorage.setItem('quiz-auth', 'true');
        logger.info('Auth', 'User registered successfully');
        return true;
      }
      logger.warn('Auth', 'Registration failed - invalid data');
      return false;
    } catch (error) {
      logger.error('Auth', 'Registration process failed', error);
      return false;
    }
  };

  const logout = () => {
    try {
      setIsAuthenticated(false);
      localStorage.removeItem('quiz-auth');
      logger.info('Auth', 'User logged out successfully');
    } catch (error) {
      logger.error('Auth', 'Logout process failed', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = React.useContext(AuthContext);
  
  if (!isAuthenticated) {
    logger.info('Route', 'Redirecting unauthenticated user to login');
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

const App = () => {
  useEffect(() => {
    logger.info('App', 'Application initialized');
    
    // Global error handler for uncaught errors
    const handleError = (event: ErrorEvent) => {
      logger.error('Global', 'Uncaught error', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error
      });
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      logger.error('Global', 'Unhandled promise rejection', event.reason);
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return (
    <ErrorBoundary onError={(error, errorInfo) => {
      logger.error('App', 'React Error Boundary triggered', { error, errorInfo });
    }}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BrowserRouter>
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />
                  
                  {/* Protected routes */}
                  <Route path="/" element={
                    <ProtectedRoute>
                      <Index />
                    </ProtectedRoute>
                  } />
                  <Route path="/grade9" element={
                    <ProtectedRoute>
                      <Grade9 />
                    </ProtectedRoute>
                  } />
                  <Route path="/grade10" element={
                    <ProtectedRoute>
                      <Grade10 />
                    </ProtectedRoute>
                  } />
                  <Route path="/grade11" element={
                    <ProtectedRoute>
                      <Grade11 />
                    </ProtectedRoute>
                  } />
                  <Route path="/grade-12" element={
                    <ProtectedRoute>
                      <Grade12 />
                    </ProtectedRoute>
                  } />
                  <Route path="/:grade/:subject" element={
                    <ProtectedRoute>
                      <Subject />
                    </ProtectedRoute>
                  } />
                  <Route path="/:grade/:subject/:chapter/:difficulty" element={
                    <ProtectedRoute>
                      <Quiz />
                    </ProtectedRoute>
                  } />
                  <Route path="/grade11/:subject" element={
                    <ProtectedRoute>
                      <Grade11Subject />
                    </ProtectedRoute>
                  } />
                  <Route path="/grade11/:subject/:chapter/:difficulty" element={
                    <ProtectedRoute>
                      <Grade11Quiz />
                    </ProtectedRoute>
                  } />
                  <Route path="/grade-12/:subject" element={
                    <ProtectedRoute>
                      <Grade12Subject />
                    </ProtectedRoute>
                  } />
                  <Route path="/grade-12/:subject/:chapter/:difficulty" element={
                    <ProtectedRoute>
                      <Grade12Quiz />
                    </ProtectedRoute>
                  } />
                  
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export { AuthContext };
export default App;
