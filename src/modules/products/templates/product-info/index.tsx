import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type ProductInfoProps = {
  product: PricedProduct
  countryCode?: string
}

const ProductInfo = ({ product, countryCode }: ProductInfoProps) => {
  console.log("CountryCode is", countryCode)

  return (
    <div id="product-info">
      <div className="flex flex-col gap-y-4 lg:max-w-[500px] mx-auto">
        {product.collection && (
          <LocalizedClientLink
            href={`/collections/${product.collection.handle}`}
            className="text-medium text-ui-fg-muted hover:text-ui-fg-subtle"
          >
            {product.collection.title}
          </LocalizedClientLink>
        )}
        <Heading
          level="h2"
          className="text-3xl leading-10 text-ui-fg-base"
          data-testid="product-title"
        >
          {product.title}
        </Heading>

        <Text
          className="text-medium text-ui-fg-subtle"
          data-testid="product-description"
        >
          {countryCode === "fr"
            ? product?.metadata?.FRDesc
            : product.description}
        </Text>
      </div>
    </div>
  )
}

export default ProductInfo
