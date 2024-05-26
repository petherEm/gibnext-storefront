import Link from "next/link"

import { ReactTyped } from "react-typed"

export function EmptyScreen() {
  return (
    <div className="px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-[20px] sm:text-[24px] md:text-[32px] font-semibold">
          Bonjour,
        </h1>
        <h1 className="text-[20px] sm:text-[24px] md:text-[32px] font-semibold">
          <ReactTyped
            strings={["I am Bozena,", "Your personal shopping assitant"]}
            typeSpeed={100}
            loop
          />
        </h1>
        <p className="font-inter leading-normal text-muted-foreground">
          I am here to help you selecting your next luxury item from our store{" "}
          <Link href="https://www.gibbarosa.com" className="font-bold">
            Gibbarosa.com
          </Link>
        </p>
      </div>
    </div>
  )
}
