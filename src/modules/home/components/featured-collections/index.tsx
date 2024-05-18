import { Region } from "@medusajs/medusa"

import CollectionRail from "@modules/home/components/featured-collections/collection-rail"

import { ProductCollectionWithPreviews } from "types/global"

export default async function FeaturedCollections({
  collections,
  region,
}: {
  collections: ProductCollectionWithPreviews[]
  region: Region
}) {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {collections.map((collection) => (
        <div key={collection.id}>
          <CollectionRail collection={collection} region={region} />
        </div>
      ))}
    </section>
  )
}
