import { Region } from "@medusajs/medusa"
import ProductRail from "@modules/home/components/featured-products/product-rail"
import { ProductCollectionWithPreviews } from "types/global"

export default async function FeaturedProducts({
  collections,
  region,
  countryCode,
}: {
  collections: ProductCollectionWithPreviews[]
  region: Region
  countryCode: string
}) {
  return collections.map((collection) => (
    <li key={collection.id}>
      <ProductRail
        collection={collection}
        region={region}
        countryCode={countryCode}
      />
    </li>
  ))
}
