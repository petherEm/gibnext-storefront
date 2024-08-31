import Image from "next/image"
import React from "react"

const MidPicture = () => {
  return (
    <section className="relative mt-8 w-full h-[80vh] bg-black/5">
      <Image
        src="https://gibbarosa.fra1.cdn.digitaloceanspaces.com/layinglady.jpg"
        alt="Laying Lady Image - Gibbarosa"
        layout="fill" // This makes the image fill the container
        objectFit="cover" // Ensures the image covers the container without distortion
        objectPosition="center" // Centers the image within the container
        quality={100} // Ensures the highest quality rendering
        priority // Ensures the image is loaded quickly
        className="absolute inset-0"
      />
    </section>
  )
}

export default MidPicture
