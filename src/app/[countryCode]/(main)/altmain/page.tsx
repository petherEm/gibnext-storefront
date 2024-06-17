import { Product } from "@medusajs/medusa"
import { Metadata } from "next"
import {
  getCollectionsList,
  getNewProducts,
  getProductsList,
  getRegion,
} from "@lib/data"
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"
import { getDictionary } from "../../../dictionaries"
import AltHero from "@modules/home/components/althero"
import MidBanner from "@modules/home/components/midbanner/index"
import Intro from "@modules/home/components/intro"
import FeaturedProducts from "@modules/home/components/featured-products"
import FeaturedCollections from "@modules/home/components/featured-collections"
import NewestProducts from "@modules/home/components/newest-products"

export const metadata: Metadata = {
  title: "ALT - Gibbarosa Pre-owned Luxury",
  description:
    "Pre-owned luxury fashion brands. Discover the future of luxury with our collection of iconic brands. We offer a second life to timeless products that should be treated as true investments.",
}

const getCollectionsWithProducts = cache(
  async (
    countryCode: string
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList(0, 8)

    if (!collections) {
      return null
    }

    const collectionIds = collections.map((collection) => collection.id)

    await Promise.all(
      collectionIds.map((id) =>
        getProductsList({
          queryParams: { collection_id: [id] },
          countryCode,
        })
      )
    ).then((responses) =>
      responses.forEach(({ response, queryParams }) => {
        let collection

        if (collections) {
          collection = collections.find(
            (collection) => collection.id === queryParams?.collection_id?.[0]
          )
        }

        if (!collection) {
          return
        }

        collection.products = response.products as unknown as Product[]
      })
    )

    return collections as unknown as ProductCollectionWithPreviews[]
  }
)

export default async function AltMain({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)
  const translations = await getDictionary(countryCode)
  const {
    response: { products: newProducts },
  } = await getNewProducts({ countryCode })

  if (!collections || !region) {
    return null
  }
  return (
    <>
      <AltHero translations={translations} />
      <Intro translations={translations} />

      <NewestProducts
        region={region}
        countryCode={countryCode}
        newProducts={newProducts}
      />

      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts
            collections={collections}
            region={region}
            countryCode={countryCode}
          />
          <MidBanner />
        </ul>
      </div>
      <FeaturedCollections
        collections={collections}
        region={region}
        countryCode={countryCode}
      />
    </>
  )
}
