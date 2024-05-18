import { Button, Heading } from "@medusajs/ui"
import Link from "next/link"
import Image from "next/image"

const Hero = ({ translations }: { translations: any }) => {
  const heroTranslations = translations.Hero

  return (
    <section className="font-playfair mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-col-reverse flex-wrap justify-between md:flex-row md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/2 lg:pb-24 lg:pt-48">
          <h4 className="h4 mb-2">{heroTranslations.subheader}</h4>
          <h1 className="h1 mb-4 text-black sm:text-5xl md:mb-8 md:text-6xl">
            {heroTranslations.title}
          </h1>
          <p className="h3 w-2/3">{heroTranslations.aboutUs}</p>
          <Link href="/">
            <Button className="mt-8 text-white bg-black w-fit">
              {heroTranslations.cta}
            </Button>
          </Link>
        </div>

        <div className="bg-rose-300 mb-12 flex w-full md:mb-16 lg:w-1/2">
          <div className="w-full h-full">
            <Image
              src="http://localhost:3000/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F9acyr12z%2Fproduction%2Fe69dadc8f8bfc8088d64034c74dc3a164f69d60e-1502x1600.png&w=640&q=75"
              alt="Hero image"
              width={600}
              height={600}
              priority
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
