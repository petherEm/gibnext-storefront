import { Text } from "@medusajs/ui"
import Link from "next/link"
import Image from "next/image"

const VabankCTA = () => {
  return (
    <Text className="flex gap-x-2 txt-compact-small-plus items-center">
      Coded with <span className="text-red-600">❤️❤️</span> by
      <Link href="https://vabank.dev" target="_blank">
        <Image
          src="https://www.vabank.dev/logo2.svg"
          alt="VaBank"
          width={120}
          height={120}
          priority
        />
      </Link>
    </Text>
  )
}

export default VabankCTA
