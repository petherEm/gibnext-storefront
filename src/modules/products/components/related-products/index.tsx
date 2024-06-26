import { StoreGetProductsParams } from "@medusajs/medusa"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

import { getProductsList, getRegion } from "@lib/data"
import { fetchTranslations } from "app/actions"
import ProductPreview from "../product-preview"

type RelatedProductsProps = {
  product: PricedProduct
  countryCode: string
}

export default async function RelatedProducts({
  product,
  countryCode,
}: RelatedProductsProps) {
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  const translations = await fetchTranslations(countryCode)
  const relatedProductsTranslation = translations.RelatedProducts

  const setQueryParams = (useFallback = false): StoreGetProductsParams => {
    const params: StoreGetProductsParams = {}

    if (region?.id) {
      params.region_id = region.id
    }

    if (region?.currency_code) {
      params.currency_code = region.currency_code
    }

    if (!useFallback) {
      if (product.collection_id) {
        params.collection_id = [product.collection_id]
      }

      if (product.tags) {
        params.tags = product.tags.map((t) => t.value)
      }
    } else {
      // Fallback criteria if initial search yields no results
      params.collection_id = product.collection_id
        ? [product.collection_id]
        : undefined
    }

    params.is_giftcard = false

    return params
  }

  let queryParams = setQueryParams()
  let productPreviews = await getProductsList({
    queryParams,
    countryCode,
  }).then(({ response }) =>
    response.products.filter(
      (productPreview) => productPreview.id !== product.id
    )
  )

  // Fallback to broader criteria if no related products are found
  if (!productPreviews.length) {
    queryParams = setQueryParams(true)
    productPreviews = await getProductsList({
      queryParams,
      countryCode,
    }).then(({ response }) =>
      response.products.filter(
        (productPreview) => productPreview.id !== product.id
      )
    )
  }

  if (!productPreviews.length) {
    return null
  }

  return (
    <div className="product-page-constraint">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-base-regular text-gray-600 mb-6">
          {relatedProductsTranslation.title}
        </span>
        <p className="text-2xl-regular text-ui-fg-base max-w-lg">
          {relatedProductsTranslation.youLike}
        </p>
      </div>

      <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8">
        {productPreviews.map((productPreview) => (
          <li key={productPreview.id}>
            <ProductPreview region={region} productPreview={productPreview} />
          </li>
        ))}
      </ul>
    </div>
  )
}
