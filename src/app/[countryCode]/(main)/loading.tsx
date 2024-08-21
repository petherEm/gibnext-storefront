import React from "react"

const Loading = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col gap-y-8 items-center justify-center h-full">
        {/* <h1 className="font-playfair text-[32px] md:text-[56px] font-bold">
          Ah pardon! J'arrive! 🚀
        </h1>
        <h1 className="font-playfair text-[24px] md:text-[36px] font-bold">
          Gibbarosa
        </h1> */}
        <div>
          <svg
            className="animate-spin h-10 w-10 text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="#e73936"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="#e73936"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0112 4V0H8v17.291zM20 12h4a8 8 0 01-8 8v-4c3.627 0 6.71-2.42 7.701-5.759L20 12z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Loading
