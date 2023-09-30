import Logo from "@assets/icons/logo"
import Particles from "@components/particles"


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black overflow-hidden ">
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
      <div className="absolute inset-0 flex items-center justify-center">
        <Logo className="animate-dash opacity-20" width="632" height="632" color="#f97316"/>
        {/* <svg
          width="632"
          height="632"
          viewBox="0 0 24 24"
          fill="none"
          strokeDasharray="300"
          strokeDashoffset="500"
          className="animate-dash opacity-5"
        >
          <path
            d="M11.4 2.4 6.3 7.5c-.2.2-.2.5 0 .7L8 9.9c.2.2.5.2.7 0l5.1-5.1c.2-.2.2-.5 0-.7l-1.7-1.7c-.2-.2-.5-.2-.7 0ZM15.3 6.3l-9 9c-.2.2-.2.5 0 .7L8 17.7c.2.2.5.2.7 0l9-9c.2-.2.2-.5 0-.7L16 6.3c-.2-.2-.5-.2-.7 0ZM19.2 10.2l-9 9c-.2.2-.2.5 0 .7l1.7 1.7c.2.2.5.2.7 0l9-9c.2-.2.2-.5 0-.7l-1.7-1.7c-.2-.2-.5-.2-.7 0ZM4.1 13.8l-1.7-1.7c-.2-.2-.2-.5 0-.7l1.7-1.7c.2-.2.5-.2.7 0l1.7 1.7c.2.2.2.5 0 .7l-1.7 1.7c-.2.2-.5.2-.7 0Z"
            stroke="#f97316"
            strokeWidth="0.1"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg> */}
      </div>
      {/* <nav className="my-6 animate-pulse">
        <ul className="flex items-center justify-center">
          <a href="#" className="text-sm duration-500 text-zinc-500 hover:scale-150">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path
                stroke="#FF8A65"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1"
                d="M4.87 4.99A9.936 9.936 0 002 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-.69 0-1.36.07-2.02.2"
              ></path>
              <path
                stroke="#FF8A65"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M10.74 15.53L14.26 12l-3.52-3.53"
              ></path>
            </svg>
          </a>
        </ul>
      </nav> */}
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <a href="/blog" className="group">
        <h1
          className="
          font-semibold text-4xl sm:text-6xl md:text-9xl text-transparent text-edge-outline
          bg-white/80
          group-hover:bg-transparent
          bg-clip-text
          cursor-pointer
          animate-title duration-1000 
          whitespace-nowrap
          select-none
          z-10"
          >
          cpmb
        </h1>
      </a>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 max-w-2xl text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500">
          Hi, my name is Pedro, i&apos;am an <span className="text-orange-500">Frontend Developer </span> in React.js, Next.js and Tailwind CSS, turned full-time <span className="text-orange-500">freelance </span>
          developer who you can trust to build you a great application that&apos;s intuitive and user friendly while also being delivered on
          time and on budget.
        </h2>
      </div>
    </div>
  )
}
