import Image from "next/image"
import React from "react"

const Page = () => {
  return (
    <>
      <section>
        <div className="container mx-auto p-4 text-sm text-zinc-300">
          <div className="flex flex-col">
            <div className="flex items-baseline justify-between">
              <h2 className="mb-10 mt-8 font-bold text-2xl md:text-4xl tracking-tight md:tracking-tighter leading-tight">
                <a href="/">Blog.</a>
              </h2>
              <p className="tracking-wider">A statically generated blog example using Next.js and Markdown.</p>
            </div>
            {/* <div className="h-[600px] w-full rounded-md overflow-hidden">
              <Image src="/assets/images/covers/cover02.webp" alt="cover" width={2000} height={10000} priority />
            </div> */}
            <p className="text-2xs ...">The quick brown fox ...</p>
            <p className="text-xs ...">The quick brown fox ...</p>
            <p className="text-sm ...">The quick brown fox ...</p>
            <p className="text-base ...">The quick brown fox ...</p>
            <p className="text-lg ...">The quick brown fox ...</p>
            <p className="text-xl ...">The quick brown fox ...</p>
            <p className="text-2xl ...">The quick brown fox ...</p>
            <p className="text-3xl ...">The quick brown fox ...</p>
            <p className="text-4xl ...">The quick brown fox ...</p>
            <p className="text-5xl ...">The quick brown fox ...</p>
            <p className="text-6xl ...">The quick brown fox ...</p>
            <p className="text-7xl ...">The quick brown fox ...</p>
            <p className="text-8xl ...">The quick brown fox ...</p>
            <p className="text-9xl ...">The quick brown fox ...</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page
