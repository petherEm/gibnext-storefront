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
              src="https://gibbarosa.fra1.cdn.digitaloceanspaces.com/Hero_1.png"
              alt="Hero image"
              width={300}
              height={300}
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
