"use client"

import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { useTranslation } from "@lib/context/TranslationContext"

import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"

import Accordion from "./accordion"

type ProductTabsProps = {
  product: PricedProduct
  countryCode?: string
}

const ProductTabs = ({ product, countryCode }: ProductTabsProps) => {
  const translation = useTranslation()
  const prodTabsTranslation = translation.ProductTabs

  const tabs = [
    {
      label: prodTabsTranslation.prodInfo,
      component: <ProductInfoTab product={product} />,
    },
    {
      label: prodTabsTranslation.shipReturn,
      component: <ShippingInfoTab />,
    },
  ]

  return (
    <div className="w-full">
      <Accordion type="multiple">
        {tabs.map((tab, i) => (
          <Accordion.Item
            key={i}
            title={tab.label}
            headingSize="medium"
            value={tab.label}
          >
            {tab.component}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

const ProductInfoTab = ({ product }: ProductTabsProps) => {
  const translation = useTranslation()
  const prodTabsTranslation = translation.ProductTabs
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">
              {prodTabsTranslation.material}
            </span>
            <p>{product.material ? product.material : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">
              {prodTabsTranslation.countryOrigin}
            </span>
            <p>{product.origin_country ? product.origin_country : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">{prodTabsTranslation.type}</span>
            <p>{product.type ? product.type.value : "-"}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">{prodTabsTranslation.weight}</span>
            <p>{product.weight ? `${product.weight} g` : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">
              {prodTabsTranslation.dimensions}
            </span>
            <p>
              {product.length && product.width && product.height
                ? `${product.length}L x ${product.width}W x ${product.height}H`
                : "-"}
            </p>
          </div>
        </div>
      </div>
      {product.tags?.length ? (
        <div>
          <span className="font-semibold">{prodTabsTranslation.tags}</span>
        </div>
      ) : null}
    </div>
  )
}

const ShippingInfoTab = () => {
  const translation = useTranslation()
  const prodTabsTranslation = translation.ProductTabs
  return (
    <div className="text-small-regular py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-2">
          <FastDelivery />
          <div>
            <span className="font-semibold">
              {prodTabsTranslation.fastDelivery}
            </span>
            <p className="max-w-sm">{prodTabsTranslation.delivDescription}</p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Refresh />
          <div>
            <span className="font-semibold">
              {prodTabsTranslation.simpleExchange}
            </span>
            <p className="max-w-sm">
              {prodTabsTranslation.exchangeDescription}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Back />
          <div>
            <span className="font-semibold">
              {prodTabsTranslation.easyReturn}
            </span>
            <p className="max-w-sm">{prodTabsTranslation.returnDescription}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductTabs
