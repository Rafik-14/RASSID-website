import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { useLenis } from './animations/useLenis'

export default function App() {
  useLenis()

  return <RouterProvider router={router} />
}
