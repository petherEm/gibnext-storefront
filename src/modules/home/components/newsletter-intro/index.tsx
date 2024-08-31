import { Button } from "@medusajs/ui"
import { Check, LockKeyhole, ShoppingBag, Truck } from "lucide-react"
import React from "react"

const NewsLetterIntro = () => {
  return (
    <section className="mt-8 w-full bg-black/5">
      <div className="flex h-[238px] items-center justify-center mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <div className="flex flex-col items-center justify-center w-1/2">
          <h3 className="text-center">Subscribe for Newsletter</h3>
          <h4 className="text-center text-[14px] text-[#3E3E59]">
            Join us and get 100 PLN discount for your first shopping. You can
            unsubscribe at any time.
          </h4>

          <Button className="w-full">Join</Button>
        </div>
      </div>
    </section>
  )
}

export default NewsLetterIntro
