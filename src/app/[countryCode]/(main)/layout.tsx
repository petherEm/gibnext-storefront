import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import { getDictionary } from "./dictionaries"
import { TranslationProvider } from "../../../lib/context/TranslationContext"

export async function generateStaticParams() {
  return ["en", "fr", "es", "pl"].map((lang) => ({ countryCode: lang }))
}

export default async function CountryLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { countryCode: string }
}) {
  const { countryCode } = params
  const translations = await getDictionary(countryCode)

  return (
    <TranslationProvider countryCode={countryCode} translations={translations}>
      <Nav translations={translations.Navbar} countryCode={countryCode} />
      {children}
      <Footer />
    </TranslationProvider>
  )
}
