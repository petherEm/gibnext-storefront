"use client"

import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react"

interface TranslationContextProps {
  countryCode: string
  translations: any
}

const TranslationContext = createContext<TranslationContextProps | undefined>(
  undefined
)

export const useTranslationContext = () => {
  const context = useContext(TranslationContext)
  if (!context) {
    throw new Error(
      "useTranslationContext must be used within a TranslationProvider"
    )
  }
  return context
}

export const TranslationProvider = ({
  children,
  countryCode: initialCountryCode,
  translations: initialTranslations,
}: {
  children: ReactNode
  countryCode: string
  translations: any
}) => {
  const [countryCode, setCountryCode] = useState(initialCountryCode)
  const [translations, setTranslations] = useState(initialTranslations)

  // Ensure client-side updates do not cause hydration errors
  useEffect(() => {
    setCountryCode(initialCountryCode)
    setTranslations(initialTranslations)
  }, [initialCountryCode, initialTranslations])

  return (
    <TranslationContext.Provider value={{ countryCode, translations }}>
      {children}
    </TranslationContext.Provider>
  )
}
