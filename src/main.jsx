import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './Components/Root/Root.jsx';
import Add from './Components/Add/Add.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Transactions from './Components/Transactions/Transactions.jsx';
import Settings from './Components/Settings/Settings.jsx';
import Onboarding from './Components/Onboarding/Onboarding.jsx';

const router = createBrowserRouter([
  {
    path: '/', Component: Root,
    children: [
      { path: '/', Component: Dashboard},
      {path: '/add', Component: Add },
      {path: '/transactions', Component: Transactions },
      {path: '/settings', Component: Settings }
    ]
  }
  // Add more routes as needed
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
