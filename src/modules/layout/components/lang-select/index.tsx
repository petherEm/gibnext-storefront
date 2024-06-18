"use client"

import { DropdownMenu, IconButton } from "@medusajs/ui"
import { useRouter } from "next/navigation"
import { useState } from "react"

const languages = [
  { value: "pl", label: "PL" },
  { value: "fr", label: "FR" },
  { value: "es", label: "ES" },
  { value: "en", label: "EN" },
]

interface LanguageSelectProps {
  currentCountryCode: string
}

const LanguageSelect: React.FC<LanguageSelectProps> = ({
  currentCountryCode,
}) => {
  const router = useRouter()
  const [selectedLanguage, setSelectedLanguage] = useState(currentCountryCode)

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value)
    router.push(value === "en" ? `/` : `/${value}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <IconButton className="border-none focus:outline-none !shadow-none">
          <span>{selectedLanguage.toUpperCase()}</span>
        </IconButton>
      </DropdownMenu.Trigger>
      <div className="max-w-6 bg-red-400">
        <DropdownMenu.Content className="border-none focus:outline-none !min-w-[20px]">
          {languages.map((language) => (
            <DropdownMenu.Item
              key={language.value}
              onSelect={() => handleLanguageChange(language.value)}
              className="!list-none !w-fit"
            >
              {language.label}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </div>
    </DropdownMenu>
  )
}

export default LanguageSelect
