import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { useLenis } from './animations/useLenis'
import { LanguageProvider } from './contexts/LanguageContext'

export default function App() {
  useLenis()

  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  )
}
