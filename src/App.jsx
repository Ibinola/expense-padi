import ForgotPassword from './pages/auth/forgot-password/ForgotPassword';
import Login from './pages/auth/login/Login';
import SignUp from './pages/auth/sign-up/SignUp';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Layout from './layout/Layout';
import Expense from './pages/expense/Expense';
import Configuration from './pages/configuration/Configuration';
import BankAccounts from './pages/bank-accounts/BankAccounts';
import Settings from './pages/settings/Settings';
import { ToastContainer } from 'react-toastify';
import LogOut from './pages/auth/logout/LogOut';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <SignUp />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />,
    },
    {
      element: <Layout />,
      children: [
        {
          path: 'dashboard',
          element: <Dashboard />,
        },
        {
          path: 'expense',
          element: <Expense />,
        },
        {
          path: 'bank-accounts',
          element: <BankAccounts />,
        },
        {
          path: 'configuration',
          element: <Configuration />,
        },
        {
          path: 'settings',
          element: <Settings />,
        },
        {
          path: 'logout',
          element: <LogOut />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
      <ToastContainer />
    </>
  );
}

export default App;
