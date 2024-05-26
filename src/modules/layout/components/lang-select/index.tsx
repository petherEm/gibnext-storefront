"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

interface LanguageSelectProps {
  currentCountryCode: string
}

const LanguageSelect: React.FC<LanguageSelectProps> = ({
  currentCountryCode,
}) => {
  const router = useRouter()
  const [selectedLanguage, setSelectedLanguage] = useState(currentCountryCode)

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCountryCode = e.target.value
    setSelectedLanguage(newCountryCode)
    if (newCountryCode === "en") {
      router.push(`/`)
    } else {
      router.push(`/${newCountryCode}`)
    }
  }

  return (
    <select
      value={selectedLanguage}
      onChange={handleLanguageChange}
      className="hover:text-ui-fg-base"
      data-testid="nav-lang-select"
    >
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="es">Español</option>
      <option value="pl">Polski</option>
      {/* Add more options as needed */}
    </select>
  )
}

export default LanguageSelect
