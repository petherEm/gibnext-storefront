import { Region } from "@medusajs/medusa"
import { ProductCollectionWithPreviews, ProductPreviewType } from "types/global"
import NewestProductRail from "@modules/home/components/newest-products/newest-product-rail"

export default async function NewestProducts({
  newProducts,
  region,
  countryCode,
}: {
  newProducts: ProductPreviewType[]
  region: Region
  countryCode: string
}) {
  return (
    <ul>
      <NewestProductRail
        region={region}
        countryCode={countryCode}
        newProducts={newProducts}
      />
    </ul>
  )
}
