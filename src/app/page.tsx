import Logo from "@assets/icons/logo"
import TextIcon from "@assets/icons/textIcon"
import Particles from "@components/particles"

export default function Home() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-tl from-black via-zinc-600/20 to-black overflow-hidden">
      <Particles className="absolute inset-0 animate-fade-in -z-10" quantity={100} />
      {/* logo */}
      <div className="absolute inset-0 flex items-center justify-center w-full -z-10">
        <Logo
          width="632"
          height="632"
          strokeDasharray={500}
          strokeDashoffset={500}
          className="stroke-orange-500 opacity-25 animate-[dash_35s_linear_forwards]"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        {/* top text */}
        <div className="max-w-2xl px-4 md:mb-8 text-center animate-fade-in">
          <h2 className="text-sm italic text-zinc-500 select-none">
            #Frontend<span className="mx-2 text-orange-500">#Developer</span>#Freelancer
          </h2>
        </div>
        <div className="w-screen h-px animate-glow block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        {/* lettering */}
        <a href="/blog" className="group w-full max-w-lg max-h-32 ">
          <TextIcon
            text="cpmb"
            strokeDasharray={500}
            strokeDashoffset={500}
            animation="animate-[title_3s_ease-out_forwards,dash_5s_linear_forwards,_filling_5s_linear_forwards] z-10"
            className="font-bold text-8xl tracking-wider text-transparent text-edge-outline whitespace-nowrap bg-clip-text group-hover:fill-transparent"
          />
         
        </a>
        <div className="w-screen h-px animate-glow block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        {/* bottom text */}
        <div className="max-w-2xl px-4 -mt-2 md:mt-8 text-center animate-fade-in">
          <h2 className="text-sm text-zinc-500 select-none">
            Hi, my name is Pedro, i&apos;am an Frontend Developer in <span className="text-orange-500">React.js</span>,{" "}
            <span className="text-orange-500">Next.js</span> and <span className="text-orange-500">Tailwind CSS</span>, turned full-time
            freelance developer who you can trust to build you a great application that&apos;s intuitive and user friendly while also being
            delivered on time and on budget.
          </h2>
        </div>
      </div>
    </div>
  )
}
