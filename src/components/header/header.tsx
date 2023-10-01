import { ArrowCircleLeft } from "iconsax-react"
import React from "react"

const Header = () => {
  return (
    <header className="sticky top-0 bg-neutral-900 border-b border-zinc-800 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center text-lg space-x-6">
          <div className="flex items-center space-x-2">
              <svg
                width="42"
                height="42"
                viewBox="0 0 24 24"
                fill="none"
                //   strokeDasharray="300"
                //   strokeDashoffset="500"
                //   className="animate-dash opacity-5"
              >
                <path
                  d="M11.4 2.4 6.3 7.5c-.2.2-.2.5 0 .7L8 9.9c.2.2.5.2.7 0l5.1-5.1c.2-.2.2-.5 0-.7l-1.7-1.7c-.2-.2-.5-.2-.7 0ZM15.3 6.3l-9 9c-.2.2-.2.5 0 .7L8 17.7c.2.2.5.2.7 0l9-9c.2-.2.2-.5 0-.7L16 6.3c-.2-.2-.5-.2-.7 0ZM19.2 10.2l-9 9c-.2.2-.2.5 0 .7l1.7 1.7c.2.2.5.2.7 0l9-9c.2-.2.2-.5 0-.7l-1.7-1.7c-.2-.2-.5-.2-.7 0ZM4.1 13.8l-1.7-1.7c-.2-.2-.2-.5 0-.7l1.7-1.7c.2-.2.5-.2.7 0l1.7 1.7c.2.2.2.5 0 .7l-1.7 1.7c-.2.2-.5.2-.7 0Z"
                  stroke="#f97316"
                  strokeWidth="0.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <div className="font-bold text-md select-none mb-1">cpmb</div>
              <div className="w-px h-7 bg-zinc-700"/>
              <div className="text-xs text-zinc-400">Frontend Developer Freelancer</div>
            </div>
          </div>
          <div className="flex items-center justify-end space-x-4">
          <a href="/" className="group flex items-center space-x-2">
              <ArrowCircleLeft
                variant="Broken"
                size="22"
                color="#FF8A65"
                className=" group-hover:scale-125 transition-all ease-linear duration-75"
              />
              {/* <span className="text-sm">Back</span> */}
            </a>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
