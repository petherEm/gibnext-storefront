"use client"

import { createContext, useContext, ReactNode } from "react"

interface TranslationContextProps {
  countryCode: string
  translations: Record<string, any>
}

const TranslationContext = createContext<TranslationContextProps | null>(null)

export const TranslationProvider = ({
  countryCode,
  translations,
  children,
}: {
  countryCode: string
  translations: Record<string, any>
  children: ReactNode
}) => {
  return (
    <TranslationContext.Provider value={{ countryCode, translations }}>
      {children}
    </TranslationContext.Provider>
  )
}

export const useTranslation = () => {
  const context = useContext(TranslationContext)
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider")
  }
  return context.translations
}
