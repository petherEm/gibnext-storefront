"use client"

import { useState } from "react"
import { ClientMessage } from "../../../ai-actions"
import { useActions, useUIState } from "ai/rsc"
import { nanoid } from "nanoid"
import { EmptyScreen } from "@modules/ai-chat/components/EmptyScreen"
import Divider from "@modules/common/components/divider"
import Input from "@modules/common/components/input"
import { Button } from "@medusajs/ui"

export default function AIAssistant() {
  const [input, setInput] = useState<string>("")
  const [conversation, setConversation] = useUIState()
  const { continueConversation } = useActions()

  return (
    <section className="max-w-3xl mx-auto flex flex-col items-center justify-center py-6">
      <EmptyScreen />
      <div className="px-4 mt-4 ">
        {conversation.map((message: ClientMessage, index: number) => (
          <div key={message.id}>
            {message.role}: {message.display}
            {index !== conversation.length - 1 && <Divider className="my-4" />}
          </div>
        ))}
      </div>

      <form
        onSubmit={async (e) => {
          e.preventDefault()
          setInput("")
          setConversation((currentConversation: ClientMessage[]) => [
            ...currentConversation,
            { id: nanoid(), role: "user", display: input },
          ])

          const message = await continueConversation(input)

          setConversation((currentConversation: ClientMessage[]) => [
            ...currentConversation,
            message,
          ])
        }}
        className="flex max-h-60 w-full grow flex-col overflow-hidden bg-background px-8 sm:rounded-md = sm:px-12"
      >
        <div className="flex items-center justify-center space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:rounded-t-xl  md:py-4">
          <input
            type="text"
            value={input}
            placeholder="How can I help you?"
            className="font-inter min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
            onChange={(event) => {
              setInput(event.target.value)
            }}
          />
          <Button className="mt-8 text-white bg-black w-fit">Ask</Button>
        </div>
      </form>
    </section>
  )
}
