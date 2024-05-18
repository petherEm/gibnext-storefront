import { Region } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"

import Image from "next/image"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"
import { ProductCollectionWithPreviews } from "types/global"
import Thumbnail from "@modules/products/components/thumbnail"

export default function CollectionRail({
  collection,
  region,
}: {
  collection: ProductCollectionWithPreviews
  region: Region
}) {
  const { products } = collection
  if (!products) {
    return null
  }
  // count products in each collection
  const count = products.length

  console.log("collection", collection)
  return (
    <div className="content-container py-12 small:py-24">
      <div className="flex flex-col mb-8">
        {/* <Text className="txt-xlarge">{collection.title}</Text> */}

        <Image
          src={collection.metadata?.image as string}
          alt={collection.title}
          width={500}
          height={500}
          className="w-full"
        />
        <h1 className="font-playfair text-[32px] font-bold">
          {collection.title}
        </h1>
        <InteractiveLink href={`/collections/${collection.handle}`}>
          View all {count}
        </InteractiveLink>
      </div>
      {/* <ul className="grid grid-cols-2 small:grid-cols-3 gap-x-6 gap-y-24 small:gap-y-36">
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
      </ul> */}
    </div>
  )
}
