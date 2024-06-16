"use client"

import { Select } from "@medusajs/ui"
import { useRouter } from "next/navigation"
import { useState } from "react"

const languages = [
  {
    value: "pl",
    label: "PL",
  },
  {
    value: "fr",
    label: "FR",
  },
  {
    value: "es",
    label: "ES",
  },
  {
    value: "en",
    label: "EN",
  },
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
    if (value === "en") {
      router.push(`/`)
    } else {
      router.push(`/${value}`)
    }
  }

  return (
    <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
      <Select.Trigger className="hover:text-ui-fg-base w-[40px] focus:outline-none bg-transparent">
        <Select.Value placeholder={selectedLanguage} />
      </Select.Trigger>

      <Select.Content>
        {languages.map((language) => (
          <Select.Item
            key={language.value}
            value={language.value}
            className="hover:text-ui-fg-base !list-none"
          >
            {language.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select>
  )
}

export default LanguageSelect
