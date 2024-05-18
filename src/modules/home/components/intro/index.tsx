import { Button, Heading } from "@medusajs/ui"
import Link from "next/link"
import Image from "next/image"

const Intro = ({ translations }: { translations: any }) => {
  const introTranslations = translations.Intro

  return (
    <section className="font-playfair mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-col-reverse flex-wrap justify-between md:flex-row md:mb-16">
        <div className="mb-6 flex w-full md:mb-16 lg:w-3/5">
          <div className="flex items-center justify-between space-x-4">
            <div className="w-1/2 p-2">
              <Image
                src="https://gibbarosa.fra1.cdn.digitaloceanspaces.com/Channel_Rainbow_1-1715686066460.webp"
                alt="Hero image"
                width={300}
                height={300}
                priority
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="w-1/2 p-2">
              <Image
                src="https://gibbarosa.fra1.cdn.digitaloceanspaces.com/KnotHobo_1-1715094705046.webp"
                alt="Hero image"
                width={300}
                height={300}
                priority
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:pb-24 lg:pt-24 lg:w-2/5">
          <h4 className="h4 mb-2">{introTranslations.subheader}</h4>
          <h1 className="h1 mb-4 text-black sm:text-5xl md:mb-8 md:text-6xl">
            {introTranslations.title}
          </h1>
          <p className="h3">{introTranslations.aboutUs}</p>
          <Link href="/">
            <Button className="mt-8 text-black bg-background w-fit">
              {introTranslations.cta}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Intro
