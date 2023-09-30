import Particles from "@components/particles"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black overflow-hidden ">
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
      <h1 className="
        text-4xl sm:text-6xl md:text-9xl text-transparent text-edge-outline
        bg-white
        bg-clip-text
        cursor-default
        animate-title duration-1000 
        whitespace-nowrap
        z-10"
        >
        cpmb
      </h1>
    </div>
  )
}
