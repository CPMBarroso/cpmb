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
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> */}
        {/* eslint-disable-next-line */}
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        /> */}
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
