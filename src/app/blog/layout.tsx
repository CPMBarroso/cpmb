import Footer from "@components/footer/footer"
import Header from "@components/header/header"
import Particles from "@components/particles"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
      <Header />
      <main
        className="relative grow"
        style={{
          minHeight: "-webkit-fill-available",
          WebkitOverflowScrolling: "touch",
        }}
      >

        {children}
      </main>
      <Footer />
    </div>
  )
}
