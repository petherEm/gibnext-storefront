import { Suspense } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import { listRegions } from "@lib/data"
import { Heart, Menu, Search, ShoppingBag, User } from "lucide-react"

type NavProps = {
  countryCode: string
  translations: {
    name: string
    href: string
  }[]
}

export default async function Nav({ translations, countryCode }: NavProps) {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="font-playfair text-[24px] font-bold hover:text-ui-fg-base"
              data-testid="nav-store-link"
            >
              Gibbarosa
            </LocalizedClientLink>
          </div>

          <div className="hidden small:flex items-center gap-x-6 h-full">
            {translations.map((item) => (
              <LocalizedClientLink
                key={item.name}
                href={item.href}
                className="font-inter text-[14px] hover:text-ui-fg-base"
                data-testid="nav-store-link"
              >
                {item.name}
              </LocalizedClientLink>
            ))}
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  Search
                </LocalizedClientLink>
              )}
            </div>
            <div className="flex small:hidden items-center gap-x-6 h-full">
              <SideMenu
                regions={regions}
                translations={translations}
                countryCode={countryCode}
              />
            </div>
            <LocalizedClientLink
              className="hover:text-ui-fg-base"
              href="/account"
              data-testid="nav-account-link"
            >
              <User size={18} />
            </LocalizedClientLink>

            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
