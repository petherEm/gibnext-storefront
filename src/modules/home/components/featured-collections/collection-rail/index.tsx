import { Region } from "@medusajs/medusa"
import Image from "next/image"
import { fetchTranslations } from "app/actions"
import InteractiveLink from "@modules/common/components/interactive-link"
import { ProductCollectionWithPreviews } from "types/global"

export default async function CollectionRail({
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
  // count products in each collection
  const count = products.length

  const translations = await fetchTranslations(countryCode)
  const viewAllButton = translations.Buttons

  console.log(countryCode)
  const getTitle = (): string => {
    if (countryCode === "pl") {
      return collection.title
    }
    if (countryCode === "fr") {
      return collection.metadata?.FRDesc || collection.title || ""
    }
    if (countryCode === "en") {
      return collection.metadata?.ENDesc || collection.title || ""
    }
    return collection.title || ""
  }

  return (
    <div className="content-container py-12 small:py-24">
      <div className="flex flex-col mb-8">
        <Image
          src={collection.metadata?.image as string}
          alt={collection.title}
          width={500}
          height={500}
          className="w-full"
        />
        <h1 className="font-playfair text-[32px] font-bold">{getTitle()}</h1>
        <InteractiveLink href={`/collections/${collection.handle}`}>
          {viewAllButton.viewAll} {count}
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
