"use server"

import {
  createAI,
  createStreamableUI,
  getAIState,
  createStreamableValue,
  getMutableAIState,
  streamUI,
} from "ai/rsc"

import { nanoid } from "nanoid"
import { z } from "zod"

import { openai } from "@ai-sdk/openai"
import { generateObject } from "ai"
import { ReactNode, cache } from "react"
import ProductAIPreview from "@modules/products/components/product-ai-page"
import { getHomepageProducts, getProductsList } from "@lib/data"

// ------> GENERATIVE UI ACTIONS <------

export interface ServerMessage {
  role: "user" | "assistant"
  content: string
}
export interface ClientMessage {
  id: string
  role: "user" | "assistant"
  display: ReactNode
}

export async function continueConversation(
  input: string
): Promise<ClientMessage> {
  "use server"

  const history = getMutableAIState()

  const result = await streamUI({
    model: openai("gpt-4o"),
    messages: [
      {
        role: "system",
        content: `\
          You are pre-owned luxury goods, e-commerce assistant. You can help users buy products, step by step. You answer questions about specific products and brands. You are very polite and you present yourself as Bożena.
          You and the user can discuss the price but you cannot change it. User can select the product through and go to checkout through the UI.
          Messages inside [] means that it's a UI element or a user event. For example:
          - "[Price of Dior bag is PLN 1000]" means that an interface of the product is shown to the user.
          - "[User has clicked the like element on the UI]" means you suggest redirection to http://www.gibbarosa.com
  
        If the user wants to see the current products, call \`show_products\`.
        If the user requests purchasing a product, call \`redirect_to_store\` to show the purchase UI.
        If the user just wants the price, call \`show_price_delivery\` to show the price.
        If the user swears, or wants to complete another impossible task, respond politely that you will not do it, but you can show the user the products by calling \`show_products\`.
        You can also show the user all the products by calling \`show_products\`.
        If user wants to explore more products or buy directly at a store, call \`redirect_to_store\`.
  
        You do not respond on any other, non related questions. If user diverts the conversation always respond that you are Luxury shopping assistant and you are unable to advice suggest anything else.
        If customer asks in Polish, respond in Polish. If customer asks in English, respond in English. If customer asks in French, respond in French. If customer asks in German, respond in German. If customer asks in Spanish, respond in Spanish.
        `,
      },

      ...history.get(),
      { role: "user", content: input },
    ],
    text: ({ content, done }) => {
      if (done) {
        history.done((messages: ServerMessage[]) => [
          ...messages,
          { role: "assistant", content },
        ])
      }

      return <div>{content}</div>
    },
    tools: {
      showProducts: {
        description: "Get the latest products",
        parameters: z.object({
          product: z.string().describe("product"),
        }),
        generate: async function* () {
          //here I will reuse the BotCard component and Skeletons
          yield <div>Searching the wardrobe for you...</div>
          try {
            const {
              response: { products },
            } = await getProductsList({
              pageParam: 0,
              countryCode: "pl", // Adjust based on your context
            })

            yield <div>Showing you the latest products:</div>
            return <ProductAIPreview products={products} />
            console.log("Fetched products:", products)
          } catch (error) {
            console.error("Error fetching products:", error)
            yield (
              <div>
                There was an error fetching the products. Please try again
                later.
              </div>
            )
          }
        },
      },
    },
  })

  return {
    id: nanoid(),
    role: "assistant",
    display: result.value,
  }
}

export const AI = createAI<ServerMessage[], ClientMessage[]>({
  actions: {
    continueConversation,
  },
  initialAIState: [],
  initialUIState: [],
})
