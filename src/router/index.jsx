import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import RedesignPage from '../redesign/RedesignPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/redesign',
    element: <RedesignPage />,
  },
])
