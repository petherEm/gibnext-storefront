import { Button, Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { fetchTranslations } from "app/actions"

const SignInPrompt = async ({ countryCode }: { countryCode: string }) => {
  const translations = await fetchTranslations(countryCode)
  const singInPrompt = translations.signInPrompt
  return (
    <div className="bg-white flex items-center justify-between">
      <div>
        <Heading level="h2" className="txt-xlarge">
          {singInPrompt.haveAccount}
        </Heading>
        <Text className="txt-medium text-ui-fg-subtle mt-2">
          {singInPrompt.noAccount}
        </Text>
      </div>
      <div>
        <LocalizedClientLink href="/account">
          <Button
            variant="secondary"
            className="h-10"
            data-testid="sign-in-button"
          >
            {singInPrompt.cta}
          </Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default SignInPrompt
