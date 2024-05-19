import { Region } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"
import { fetchTranslations } from "app/actions"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"
import { ProductCollectionWithPreviews } from "types/global"

export default async function ProductRail({
  collection,
  region,
  countryCode,
}: {
  collection: ProductCollectionWithPreviews
  region: Region
  countryCode: string
}) {
  const { products } = collection

  if (!products) {
    return null
  }

  const translations = await fetchTranslations(countryCode)
  const viewAllButton = translations.Buttons

  return (
    <div className="content-container py-12 small:py-24">
      <div className="flex justify-between mb-8">
        {/* <Text className="txt-xlarge">{collection.title}</Text> */}
        <h1 className="font-playfair text-[32px] font-bold">
          {collection.title}
        </h1>
        <InteractiveLink href={`/collections/${collection.handle}`}>
          {viewAllButton.viewAll}
        </InteractiveLink>
      </div>
      <ul className="grid grid-cols-2 small:grid-cols-3 gap-x-6 gap-y-24 small:gap-y-36">
        {products &&
          products.map((product) => (
            <li key={product.id}>
              <ProductPreview
                productPreview={product}
                region={region}
                isFeatured
              />
            </li>
          ))}
      </ul>
    </div>
  )
}
