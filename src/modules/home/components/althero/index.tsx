import { Button, Heading } from "@medusajs/ui"
import Link from "next/link"
import Image from "next/image"

const AltHero = ({ translations }: { translations: any }) => {
  const heroTranslations = translations.Hero

  return (
    <section className="font-playfair">
      <div className="mb-8 flex flex-col-reverse flex-wrap justify-between md:flex-row md:mb-16">
        <video width="1920" height="1080" autoPlay muted loop>
          <source
            src="https://www.pollini.com/img/homes/woman/formentera.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  )
}

export default AltHero
