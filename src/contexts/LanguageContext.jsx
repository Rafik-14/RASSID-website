/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import fr from '../locales/fr.json'
import ar from '../locales/ar.json'

const translations = { fr, ar }
const LangContext = createContext()

const STORAGE_KEY = 'rassid-lang'

function getInitialLang() {
  if (typeof window === 'undefined') return 'fr'
  const saved = window.localStorage.getItem(STORAGE_KEY)
  return saved === 'ar' || saved === 'fr' ? saved : 'fr'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // storage unavailable (private mode) — non-fatal
    }
  }, [lang])

  const t = useCallback((key) => translations[lang][key] ?? key, [lang])
  const toggleLang = useCallback(() => setLang((l) => (l === 'fr' ? 'ar' : 'fr')), [])

  return (
    <LangContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
