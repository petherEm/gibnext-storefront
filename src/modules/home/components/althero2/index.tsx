import Image from "next/image"
import React from "react"

const AltHero = ({ translations }: { translations: any }) => {
  const heroTranslations = translations.Hero

  return (
    <section className="relative w-full h-[80vh] bg-black/5 flex">
      <div className="relative w-1/2 h-full">
        <Image
          src="https://gibbarosa.fra1.cdn.digitaloceanspaces.com/Bottega_Hero.webp"
          alt="Bottega Hero"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          priority
          className="absolute inset-0"
        />
      </div>
      <div className="relative w-1/2 h-full">
        <Image
          src="https://gibbarosa.fra1.cdn.digitaloceanspaces.com/Sunglass_Hero.webp"
          alt="Sunglasses Hero"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          priority
          className="absolute inset-0"
        />
      </div>
      <div className="absolute inset-0 bottom-10 flex items-end justify-center">
        <div>
          <p className="font-playfair font-semibold text-black text-center text-lg md:text-2xl">
            Ikoniczna moda z drugiej ręki
          </p>
          <p className="font-inter text-black font-light text-center text-md md:text-lg">
            Odkryj naszą selekcję wyjątkowych torebek, butów i akcesoriów
            wartych inwestycji.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AltHero
