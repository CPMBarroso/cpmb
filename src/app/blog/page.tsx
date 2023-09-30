import Particles from "@components/particles"
import React from "react"

const Page = () => {
  return (
    <>
    <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />

    <section>
      <div className="container mx-auto p-4 text-sm text-zinc-300">Page</div>
    </section>
    </>
  )
}

export default Page
