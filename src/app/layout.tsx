import "@styles/_theme_fonts.css"
import "@styles/_theme_custom.css"
import "@styles/_theme.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CPMB Freelancer",
  description: "Software engineer at cpmb.vercel.app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f97316" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="bg-black">
        {/* <div className="relative flex flex-col min-h-screen">
          <main
            className="relative grow"
            style={{
              minHeight: "-webkit-fill-available",
              WebkitOverflowScrolling: "touch",
            }}
          > */}
            {children}
          {/* </main>
        </div> */}
      </body>
    </html>
  )
}
