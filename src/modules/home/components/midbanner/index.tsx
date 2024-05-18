import { Check, LockKeyhole, ShoppingBag, Truck } from "lucide-react"
import React from "react"

const MidBanner = () => {
  return (
    <section className="mt-8 w-full bg-black/5">
      <div className="flex h-[238px] items-center justify-center mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <div className="grid grid-cols-2 gap-4 w-full md:grid-cols-4 md:justify-between">
          <div>
            <div className="flex flex-col justify-center items-center">
              <Truck size={38} className="mb-2" />
              <h3>Free Shipping</h3>
              <h4 className="text-[14px] text-[#3E3E59]">Orders above $200</h4>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center">
              <ShoppingBag size={38} className="mb-2" />
              <h3>Free Shipping</h3>
              <h4 className="text-[14px] text-[#3E3E59]">Orders above $200</h4>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center">
              <Check size={38} className="mb-2" />
              <h3>Free Shipping</h3>
              <h4 className="text-[14px] text-[#3E3E59]">Orders above $200</h4>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center">
              <LockKeyhole size={38} className="mb-2" />
              <h3>Free Shipping</h3>
              <h4 className="text-[14px] text-[#3E3E59]">Orders above $200</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MidBanner
