import { Region } from "@medusajs/medusa"

import CollectionRail from "@modules/home/components/featured-collections/collection-rail"

import { ProductCollectionWithPreviews } from "types/global"

export default async function FeaturedCollections({
  collections,
  region,
  countryCode,
}: {
  collections: ProductCollectionWithPreviews[]
  region: Region
  countryCode: string
}) {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {collections.map((collection) => (
        <div key={collection.id}>
          <CollectionRail
            collection={collection}
            region={region}
            countryCode={countryCode}
          />
        </div>
      ))}
    </section>
  )
}
