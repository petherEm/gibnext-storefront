import { Metadata } from "next"
import { notFound } from "next/navigation"

import {
  getCollectionsList,
  getNewProducts,
  listRegions,
  getProductsList,
  getRegion,
} from "@lib/data"
import CollectionTemplate from "@modules/collections/templates"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import NewestProducts from "@modules/home/components/newest-products"

type Props = {
  params: { handle: string; countryCode: string }
  searchParams: {
    page?: string
    sortBy?: SortOptions
  }
}

export const PRODUCT_LIMIT = 12

export async function generateStaticParams() {
  const { collections } = await getCollectionsList()

  if (!collections) {
    return []
  }

  const countryCodes = await listRegions().then((regions: any[]) =>
    regions?.map((r) => r.countries.map((c) => c.iso_2)).flat()
  )

  const collectionHandles = collections.map(
    (collection: { handle: any }) => collection.handle
  )

  const staticParams = countryCodes
    ?.map((countryCode: string) =>
      collectionHandles.map((handle: any) => ({
        countryCode,
        handle,
      }))
    )
    .flat()

  return staticParams
}

export default async function NewPage({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const region = await getRegion(countryCode)

  if (!region) {
    notFound()
  }
  const {
    response: { products: newProducts },
  } = await getNewProducts({ countryCode })

  return (
    <>
      <NewestProducts
        region={region}
        countryCode={countryCode}
        newProducts={newProducts}
      />
    </>
  )
}
