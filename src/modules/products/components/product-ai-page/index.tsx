"use client"

import React, { useEffect } from "react"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const ProductAIPreview = ({ products }) => {
  useEffect(() => {
    console.log("ProductAIPreview mounted with products:", products)
  }, [products])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id}>
          <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            <Image
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover rounded-md mb-4 group-hover:opacity-75 transition-opacity duration-300"
              width={400}
              height={400}
            />
            <div data-testid="product-wrapper">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-500">{product.price.calculated_price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductAIPreview
