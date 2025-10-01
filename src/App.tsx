import {
  createBrowserRouter,
  Navigate,
  // Outlet,
  RouterProvider,
} from 'react-router-dom';
import { AuthProvider } from '@/auth/auth-context'; //useAuth
import ProtectLayout from '@/components/layouts/protect-layout';
import PublicLayout from '@/components/layouts/public-layout';
import './App.css'

import { ThemeProvider } from "@/components/theme/theme-provider"

import { SignUp } from "@/components/pages/sign/sign-up";
import { SignIn } from "@/components/pages/sign/sign-in";
import { Forgot } from './components/pages/sign/forgot';


// Example Pages
const HomePage = () => <h2>Home Page</h2>;
// const LoginPage = () => {
//   // const { login } = useAuth();
//   return (
//     <div>
//       <h2>Login Page</h2>
//       {/* <button onClick={login}>Log In</button> */}
//     </div>
//   );
// };

const DashboardPage = () => <h2>Dashboard Page</h2>;

const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/create', element: <SignUp /> },
      { path: '/login', element: <SignIn /> },
      { path: '/forgot', element: <Forgot /> },
    ],
  },
  {
    element: <ProtectLayout />,
    children: [
      { path: '/dashboard', element: <DashboardPage /> },
    ],
  },
  { path: '*', element: <Navigate to="/" replace /> },
]);

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
}

