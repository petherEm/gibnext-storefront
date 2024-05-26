import { AI } from "../../../ai-actions"

export default function AiAssistantLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <AI>{children}</AI>
    </>
  )
}
